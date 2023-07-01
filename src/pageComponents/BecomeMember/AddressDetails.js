import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";

const AddressDetails = (props) => {
  const {
    addressDetails,
    setAddressDetails,
    addressDetailsErrors,
    stateCodes,
  } = props;

  const updateAddressDetails = (val, key) => {
    setAddressDetails({
      ...addressDetails,
      [key]: val,
    });
  };

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Address Line 1"
            value={addressDetails.address_line_1}
            error={addressDetailsErrors.address_line_1}
            onChange={(e) =>
              updateAddressDetails(e.target.value, "address_line_1")
            }
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Address Line 2"
            value={addressDetails.address_line_2}
            error={addressDetailsErrors.address_line_2}
            onChange={(e) =>
              updateAddressDetails(e.target.value, "address_line_2")
            }
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="City"
            value={addressDetails.city}
            error={addressDetailsErrors.city}
            onChange={(e) => updateAddressDetails(e.target.value, "city")}
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <SelectInput
            placeholder="State"
            value={addressDetails.state}
            error={addressDetailsErrors.state}
            onChange={(e) => updateAddressDetails(e.target.value, "state")}
            options={stateCodes}
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Zip Code"
            value={addressDetails.zip_code}
            error={addressDetailsErrors.zip_code}
            onChange={(e) => updateAddressDetails(e.target.value, "zip_code")}
            type="number"
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Country"
            value={addressDetails.country}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
