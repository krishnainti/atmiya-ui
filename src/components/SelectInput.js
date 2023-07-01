const SelectInput = (props) => {
  return (
    <div>
      <label className="form-field-label">
        {props.label || props.placeholder}
      </label>
      <select onChange={props.onChange} value={props.value}>
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
