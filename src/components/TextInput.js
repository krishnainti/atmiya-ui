const TextInput = (props) => {
  return (
    <>
      <label className="form-field-label">
        {props.label || props.placeholder}
      </label>
      <input
        {...props}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && (
        <div className="validation-error-message">{props.error}</div>
      )}
    </>
  );
};

export default TextInput;
