import { useEffect, useState } from "react";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";

const MembershipDetails = (props) => {
  const {
    membershipDetails,
    setMembershipDetails,
    membershipDetailsErrors,
    membershipCategories,
  } = props;

  const [fee, setFee] = useState("");

  useEffect(() => {
    if (membershipDetails.membership_category) {
      const selectedMembershipCategory = membershipCategories.find(
        (i) =>
          i.value.toString() ===
          membershipDetails.membership_category.toString()
      );

      if (selectedMembershipCategory)
        setFee(`$ ${parseFloat(selectedMembershipCategory.original.fee)}`);
    }
  }, [membershipDetails, membershipCategories]);

  const updateMembershipDetails = (val, key) => {
    setMembershipDetails({
      ...membershipDetails,
      [key]: val,
    });
  };

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <SelectInput
            placeholder="Membership Category"
            value={membershipDetails.membership_category}
            error={membershipDetailsErrors.membership_category}
            onChange={(e) =>
              updateMembershipDetails(e.target.value, "membership_category")
            }
            options={membershipCategories}
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput placeholder="Membership Fee" value={fee} disabled />
        </div>
      </div>
    </div>
  );
};

export default MembershipDetails;
