import TextInput from "../../components/TextInput";

const LoginDetails = (props) => {
  const { loginDetails, setLoginDetails, loginDetailsErrors } = props;

  const updateLoginDetails = (val, key) => {
    setLoginDetails({
      ...loginDetails,
      [key]: val,
    });
  };

  return (
    <div className="row col-xl-6 m-auto">
      <div className="col-xl-12">
        <div className="contact-form__input-box">
          <TextInput
            type="email"
            placeholder="Email"
            value={loginDetails.email}
            error={loginDetailsErrors.email}
            onChange={(e) => updateLoginDetails(e.target.value, "email")}
          />
        </div>
      </div>

      <div className="col-xl-12">
        <div className="contact-form__input-box">
          <TextInput
            type="password"
            placeholder="Password"
            value={loginDetails.password}
            error={loginDetailsErrors.password}
            onChange={(e) => updateLoginDetails(e.target.value, "password")}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
