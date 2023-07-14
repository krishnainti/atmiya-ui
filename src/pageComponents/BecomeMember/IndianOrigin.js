import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { indiaStatesOptions } from "./consts";

const IndianOrigin = (props) => {
  const {
    indianOriginDetails,
    setIndianOriginDetails,
    indianOriginDetailsErrors,
  } = props;

  const updateMembershipDetails = (val, key) => {
    setIndianOriginDetails({
      ...indianOriginDetails,
      [key]: val,
    });
  };

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <SelectInput
            placeholder="State"
            value={indianOriginDetails.india_state}
            error={indianOriginDetailsErrors.india_state}
            onChange={(e) =>
              updateMembershipDetails(e.target.value, "india_state")
            }
            options={indiaStatesOptions}
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="City"
            value={indianOriginDetails.india_city}
            error={indianOriginDetailsErrors.india_city}
            onChange={(e) =>
              updateMembershipDetails(e.target.value, "india_city")
            }
            required
          />
        </div>
      </div>
    </div>
  );
};

export default IndianOrigin;
