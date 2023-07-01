import TextInput from "../../components/TextInput";

const PasswordDetails = (props) => {
  const { passwordDetails, setPasswordDetails, passwordDetailsErrors } = props;

  const updatePasswordDetails = (val, key) => {
    setPasswordDetails({
      ...passwordDetails,
      [key]: val,
    });
  };

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="password"
            placeholder="Password"
            value={passwordDetails.password}
            error={passwordDetailsErrors.password}
            onChange={(e) => updatePasswordDetails(e.target.value, "password")}
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="password"
            placeholder="Confine Password"
            value={passwordDetails.confirm_password}
            error={passwordDetailsErrors.confirm_password}
            onChange={(e) =>
              updatePasswordDetails(e.target.value, "confirm_password")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordDetails;
