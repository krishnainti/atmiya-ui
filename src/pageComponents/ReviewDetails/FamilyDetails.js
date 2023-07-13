import { Fragment } from "react";
import Item from "./Item";

const FamilyDetails = (props) => {
  const { profile } = props;

  return (
    <div className="row">
      <div className="col-xl-6">
        <Item label="Reference By" value={profile.reference_by} />
      </div>

      <div className="row">
        <div className="col-xl-6">
          <Item label="Spouse First Name" value={profile.spouse_first_name} />
        </div>

        <div className="col-xl-6">
          <Item label="Spouse Last Name" value={profile.spouse_last_name} />
        </div>

        <div className="col-xl-6">
          <Item label="Spouse Email" value={profile.spouse_email} />
        </div>

        <div className="col-xl-6">
          <Item label="Spouse Phone" value={profile.spouse_phone} />
        </div>

        {profile.family_members.length > 0 && (
          <div className="col-xl-12">
            <div className="contact-form__add-family-member pt-4">
              Family Members:
            </div>
          </div>
        )}

        {profile.family_members.map((familyMember, index) => {
          return (
            <div className="row" key={index} style={{ paddingTop: "10px" }}>
              <div className="col-xl-6">
                <Item label="First Name" value={familyMember.first_name} />
              </div>

              <div className="col-xl-6">
                <Item label="Last Name" value={familyMember.last_name} />
              </div>

              <div className="col-xl-6">
                <Item label="Age" value={familyMember.age} />
              </div>

              <div className="col-xl-6">
                <Item label="Email" value={familyMember.email} />
              </div>

              <div className="col-xl-6">
                <Item
                  label="Phone"
                  value={`${familyMember.phone_code} ${familyMember.phone}`}
                />
              </div>

              <div className="col-xl-6">
                <Item label="Relationship" value={familyMember.relationship} />
              </div>

              <div className="col-xl-6">
                <Item label="Gender" value={familyMember.gender} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FamilyDetails;
