import { INPUTS_CONFIG } from '../../common/constants/inputsConfig';

export function InputGroup() {
  return (
    <section id="user-input">
      <div className="input-group">
        {INPUTS_CONFIG.map((input, index) => (
          <p key={index}>
            <label>
              {input.label}
              <input type={input.type} value={input.value} />
            </label>
          </p>
        ))}
      </div>
    </section>
  );
}
