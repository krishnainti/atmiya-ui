import { useMemo } from "react";
import Item from "./Item";
import { genderOptions, maritalStatusOptions } from "../BecomeMember/consts";

const UserDetails = (props) => {
  const { profile, user } = props;

  const { selectedGender, selectedMaritalStatus } = useMemo(() => {
    const selectedGender = genderOptions.find(
      (i) => i.value === profile?.gender
    );
    const selectedMaritalStatus = maritalStatusOptions.find(
      (i) => i.value === profile?.marital_status
    );

    return { selectedGender, selectedMaritalStatus };
  }, [profile]);

  if (!profile || !user) return null;

  return (
    <div className="row">
      <div className="col-xl-6">
        <Item label="Reference By" value={profile.reference_by} />
      </div>

      <div className="col-xl-6">
        <Item label="Referrer Phone" value={profile.reference_phone} />
      </div>

      <div className="col-xl-6">
        <Item label="First Name" value={profile.first_name} />
      </div>

      <div className="col-xl-6">
        <Item label="Last Name" value={profile.last_name} />
      </div>

      <div className="col-xl-6">
        <Item label="Email" value={user.email} />
      </div>

      <div className="col-xl-6">
        <Item label="Phone" value={profile.phone} />
      </div>

      <div className="col-xl-6">
        <Item label="Marital Status" value={selectedMaritalStatus?.label} />
      </div>

      <div className="col-xl-6">
        <Item label="Gender" value={selectedGender?.label} />
      </div>
    </div>
  );
};

export default UserDetails;
