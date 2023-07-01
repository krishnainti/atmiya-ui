const TextInput = (props) => {
  return (
    <>
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
