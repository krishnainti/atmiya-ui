import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { genderOptions, maritalStatusOptions } from "./consts";

const UserDetails = (props) => {
  const { userDetails, setUserDetails, userDetailsErrors } = props;

  const updateUserDetails = (val, key) => {
    setUserDetails({
      ...userDetails,
      [key]: val,
    });
  };

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Reference By"
            value={userDetails.reference_by}
            error={userDetailsErrors.reference_by}
            onChange={(e) => updateUserDetails(e.target.value, "reference_by")}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="number"
            placeholder="Referrer Phone"
            value={userDetails.reference_phone}
            error={userDetailsErrors.reference_phone}
            onChange={(e) =>
              updateUserDetails(e.target.value, "reference_phone")
            }
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="First Name"
            value={userDetails.first_name}
            error={userDetailsErrors.first_name}
            onChange={(e) => updateUserDetails(e.target.value, "first_name")}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Last Name"
            value={userDetails.last_name}
            error={userDetailsErrors.last_name}
            onChange={(e) => updateUserDetails(e.target.value, "last_name")}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="email"
            placeholder="Email"
            value={userDetails.email}
            error={userDetailsErrors.email}
            onChange={(e) => updateUserDetails(e.target.value, "email")}
            onBlur={props.findUserWithEmail}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="number"
            placeholder="Phone"
            value={userDetails.phone}
            error={userDetailsErrors.phone}
            onChange={(e) => updateUserDetails(e.target.value, "phone")}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <SelectInput
            placeholder="Marital Status"
            value={userDetails.marital_status}
            error={userDetailsErrors.marital_status}
            onChange={(e) =>
              updateUserDetails(e.target.value, "marital_status")
            }
            options={maritalStatusOptions}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <SelectInput
            placeholder="Gender"
            value={userDetails.gender}
            error={userDetailsErrors.gender}
            onChange={(e) => updateUserDetails(e.target.value, "gender")}
            options={genderOptions}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
