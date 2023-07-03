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

        <div className="col-xl-12">
          <div className="contact-form__add-family-member pt-4">
            Family Members:
          </div>
        </div>

        {profile.family_members.map((familyMember, index) => {
          return (
            <Fragment key={index}>
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
                <Item label="Phone" value={familyMember.phone} />
              </div>

              <div className="col-xl-6">
                <Item label="Relationship" value={familyMember.relationship} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FamilyDetails;
