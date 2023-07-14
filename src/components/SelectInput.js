const SelectInput = (props) => {
  return (
    <div>
      <label className="form-field-label">
        {props.label || props.placeholder}
        {props.required && <span style={{ color: "red" }}> *</span>}
      </label>
      <select
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {props.error && (
        <div className="validation-error-message">{props.error}</div>
      )}
    </div>
  );
};

export default SelectInput;
