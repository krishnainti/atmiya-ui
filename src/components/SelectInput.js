const SelectInput = (props) => {
  return (
    <>
      <div>
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
    </>
  );
};

export default SelectInput;
