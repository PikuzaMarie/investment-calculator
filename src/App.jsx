import { useState } from 'react';
import { Header } from './components/Header';
import { InputGroup } from './components/InputGroup';
import { INPUTS_CONFIG } from './common/constants/inputsConfig';
import { ResultTable } from './components/ResultTable/ResultTable';
import { InfoMessage } from './components/InfoMessage/InfoMessage';

function App() {
  const [userInputData, setUserInputData] = useState(INPUTS_CONFIG);

  const handleUserInputChange = (event, label) => {
    setUserInputData(prevData =>
      prevData.map(input =>
        input.label === label
          ? { ...input, value: +event.target.value }
          : input,
      ),
    );
  };

  const inputValues = userInputData.map(input => input.value);

  const durationData = userInputData.filter(
    input => input.label === 'duration',
  );
  const isDurationValid = durationData[0].value > 0;

  return (
    <>
      <Header />
      <InputGroup
        inputData={userInputData}
        onInputChange={handleUserInputChange}
      />
      {!isDurationValid ? (
        <InfoMessage>
          Please, enter duration value greater than zero
        </InfoMessage>
      ) : (
        <ResultTable inputValues={inputValues} />
      )}
    </>
  );
}

export default App;
