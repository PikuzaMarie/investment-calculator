export function InputGroup({ inputData, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        {inputData.map((input, index) => (
          <p key={index}>
            <label>
              {input.label}
              <input
                type={input.type}
                value={input.value === 0 ? '' : input.value}
                min={
                  input.label !== 'duration' && input.type === 'number'
                    ? 0
                    : undefined
                }
                onChange={event => onInputChange(event, input.label)}
              />
            </label>
          </p>
        ))}
      </div>
    </section>
  );
}
