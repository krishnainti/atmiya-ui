import { useMemo } from "react";
import Item from "./Item";

const MembershipDetails = (props) => {
  const { profile, membershipCategories } = props;

  const { selectedMembershipCategory, fee } = useMemo(() => {
    const selectedMembershipCategory = membershipCategories.find(
      (i) => i.value.toString() === profile.membership_category.toString()
    );

    return {
      selectedMembershipCategory,
      fee: `$ ${parseFloat(selectedMembershipCategory?.original?.fee)}`,
    };
  }, [membershipCategories, profile]);

  return (
    <div className="row">
      <div className="col-xl-6">
        <Item
          label="Membership Category"
          value={selectedMembershipCategory?.label}
        />
      </div>

      <div className="col-xl-6">
        <Item label="Membership Fee" value={fee} />
      </div>
    </div>
  );
};

export default MembershipDetails;
