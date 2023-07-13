import { Fragment } from "react";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { genderOptions, relationshipOptions } from "./consts";

const defaultFamilyMember = {
  first_name: "",
  last_name: "",
  age: "",
  email: "",
  phone: "",
  relationship: "",
  gender: "",
};

const ageOptions = Array(18)
  .fill(0)
  .map((_, i) => ({ label: i + 1, value: i + 1 }));

const FamilyDetails = (props) => {
  const { familyDetails, setFamilyDetails, familyDetailsErrors } = props;

  const updateFamilyDetails = (val, key) => {
    setFamilyDetails({
      ...familyDetails,
      [key]: val,
    });
  };

  const addFamilyMember = () => {
    if (familyDetails.family_members.length < 3)
      setFamilyDetails({
        ...familyDetails,
        family_members: [
          ...familyDetails.family_members,
          { ...defaultFamilyMember },
        ],
      });
  };

  const updateFamilyMember = (index, val, key) => {
    const familyMembers = familyDetails.family_members;
    familyMembers[index][key] = val;
    updateFamilyDetails(familyMembers, "family_members");
  };

  const removeFamilyMember = (index) => {
    const familyMembers = familyDetails.family_members;

    familyMembers.splice(index, 1);

    updateFamilyDetails(familyMembers, "family_members");
  };

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Spouse First Name"
            value={familyDetails.spouse_first_name}
            error={familyDetailsErrors.spouse_first_name}
            onChange={(e) =>
              updateFamilyDetails(e.target.value, "spouse_first_name")
            }
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            placeholder="Spouse Last Name"
            value={familyDetails.spouse_last_name}
            error={familyDetailsErrors.spouse_last_name}
            onChange={(e) =>
              updateFamilyDetails(e.target.value, "spouse_last_name")
            }
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="email"
            placeholder="Spouse Email"
            value={familyDetails.spouse_email}
            error={familyDetailsErrors.spouse_email}
            onChange={(e) =>
              updateFamilyDetails(e.target.value, "spouse_email")
            }
            required
          />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="contact-form__input-box">
          <TextInput
            type="number"
            placeholder="Spouse Phone"
            value={familyDetails.spouse_phone}
            error={familyDetailsErrors.spouse_phone}
            onChange={(e) =>
              updateFamilyDetails(e.target.value, "spouse_phone")
            }
            required
          />
        </div>
      </div>

      <div className="col-xl-12">
        <div
          className="contact-form__add-family-member pb-4"
          onClick={addFamilyMember}
        >
          + Add Family Member (age less than 18 years)
        </div>
      </div>

      {familyDetails.family_members.map((familyMember, index) => {
        return (
          <Fragment key={index}>
            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <TextInput
                  placeholder="First Name"
                  value={familyMember.first_name}
                  error={
                    familyDetailsErrors.family_members?.[index]?.first_name
                  }
                  onChange={(e) =>
                    updateFamilyMember(index, e.target.value, "first_name")
                  }
                  required
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <TextInput
                  placeholder="Last Name"
                  value={familyMember.last_name}
                  error={familyDetailsErrors.family_members?.[index]?.last_name}
                  onChange={(e) =>
                    updateFamilyMember(index, e.target.value, "last_name")
                  }
                  required
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <SelectInput
                  placeholder="Age"
                  value={familyMember.age}
                  error={familyDetailsErrors.family_members?.[index]?.age}
                  onChange={(e) =>
                    updateFamilyMember(index, e.target.value, "age")
                  }
                  options={ageOptions}
                  required
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <TextInput
                  type="email"
                  placeholder="Email"
                  value={familyMember.email}
                  error={familyDetailsErrors.family_members?.[index]?.email}
                  onChange={(e) =>
                    updateFamilyMember(index, e.target.value, "email")
                  }
                  required
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <TextInput
                  type="number"
                  placeholder="Phone"
                  value={familyMember.phone}
                  error={familyDetailsErrors.family_members?.[index]?.phone}
                  onChange={(e) =>
                    updateFamilyMember(index, e.target.value, "phone")
                  }
                  required
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <SelectInput
                  placeholder="Relationship"
                  value={familyMember.relationship}
                  error={
                    familyDetailsErrors.family_members?.[index]?.relationship
                  }
                  onChange={(e) => {
                    const familyMembers = familyDetails.family_members;
                    familyMembers[index].relationship = e.target.value;
                    familyMembers[index].gender =
                      e.target.value === "son" ? "male" : "female";
                    updateFamilyDetails(familyMembers, "family_members");
                  }}
                  options={relationshipOptions}
                  required
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <SelectInput
                  placeholder="Gender"
                  value={familyMember.gender}
                  error={familyDetailsErrors.family_members?.[index]?.gender}
                  onChange={(e) => {
                    const familyMembers = familyDetails.family_members;
                    familyMembers[index].gender = e.target.value;
                    familyMembers[index].relationship =
                      e.target.value === "male" ? "son" : "daughter";
                    updateFamilyDetails(familyMembers, "family_members");
                  }}
                  options={genderOptions}
                  required
                />
              </div>
            </div>

            <div className="col-xl-2">
              <div
                className="contact-form__remove-family-member"
                onClick={() => removeFamilyMember(index)}
              >
                Remove
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default FamilyDetails;
