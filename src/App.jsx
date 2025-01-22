import { useState } from 'react';
import { Header } from './components/Header';
import { InputGroup } from './components/InputGroup';
import { INPUTS_CONFIG } from './common/constants/inputsConfig';
import { ResultTable } from './components/ResultTable/ResultTable';

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

  return (
    <>
      <Header />
      <InputGroup
        inputData={userInputData}
        onInputChange={handleUserInputChange}
      />
      <ResultTable inputValues={inputValues} />
    </>
  );
}

export default App;
