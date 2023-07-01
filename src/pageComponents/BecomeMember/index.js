import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import TextInput from "../../components/TextInput";
import MembershipDetails from "./MembershipDetails";
import { validateRegistrationFrom } from "./utils";
import {
  fetchChapterStates,
  fetchChapters,
  fetchMembershipCategories,
} from "../../services/masterData";
import PasswordDetails from "./PasswordDetails";
import FamilyDetails from "./FamilyDetails";
import PaymentOptions from "./PaymentOptions";

const defaultUserDetails = {
  reference_by: "",
  reference_phone: "",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  marital_status: "",
};

const defaultAddressDetails = {
  address_line_1: "",
  address_line_2: "",
  city: "",
  state: "",
  zip_code: "",
  country: "USA",
};

const defaultMembershipDetails = {
  membership_category: "",
};

const defaultPasswordDetails = {
  password: "",
  confirm_password: "",
};

const defaultFamilyDetails = {
  spouse_first_name: "",
  spouse_last_name: "",
  spouse_email: "",
  spouse_phone: "",
  family_members: [],
};

const BecomeMember = () => {
  const [userDetails, setUserDetails] = useState(defaultUserDetails);
  const [userDetailsErrors, setUserDetailsErrors] = useState({});

  const [addressDetails, setAddressDetails] = useState(defaultAddressDetails);
  const [addressDetailsErrors, setAddressDetailsErrors] = useState({});

  const [chapterRepresent, setChapterRepresent] = useState("");

  const [membershipDetails, setMembershipDetails] = useState(
    defaultMembershipDetails
  );
  const [membershipDetailsErrors, setMembershipDetailsErrors] = useState({});

  const [passwordDetails, setPasswordDetails] = useState(
    defaultPasswordDetails
  );
  const [passwordDetailsErrors, setPasswordDetailsErrors] = useState({});

  const [familyDetails, setFamilyDetails] = useState(defaultFamilyDetails);
  const [familyDetailsErrors, setFamilyDetailsErrors] = useState({});

  const [stateCodes, setStateCodes] = useState([]);
  const [membershipCategories, setMembershipCategories] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    if (addressDetails.state) {
      const chapterId = stateCodes.find(
        (i) => i.value.toString() === addressDetails.state.toString()
      )?.original?.chapter_id;

      if (chapterId) {
        const chapterOb = chapters.find((i) => i.id === chapterId);
        setChapterRepresent(chapterOb?.name || "");
      }
    }
  }, [addressDetails.state]);

  const getMasterData = async () => {
    try {
      const stateNames = await fetchChapterStates();
      setStateCodes(
        stateNames.map((i) => ({
          label: i.short_name,
          value: i.id,
          original: i,
        }))
      );

      const membershipCategoriesData = await fetchMembershipCategories();
      setMembershipCategories(
        membershipCategoriesData.map((i) => ({
          label: i.name,
          value: i.id,
          original: i,
        }))
      );

      const chaptersData = await fetchChapters();
      setChapters(chaptersData);
    } catch (e) {
      console.log("Error while getMasterData", e);
    }
  };

  useEffect(() => {
    getMasterData();
  }, []);

  const handleSave = () => {
    try {
      const { isValid, errors } = validateRegistrationFrom({
        userDetails,
        addressDetails,
        membershipDetails,
        passwordDetails,
        familyDetails,
      });

      if (!isValid) {
        setUserDetailsErrors(errors.userDetailsErrors);
        setAddressDetailsErrors(errors.addressDetailsErrors);
        setMembershipDetailsErrors(errors.membershipDetailsErrors);
        setPasswordDetailsErrors(errors.passwordDetailsErrors);
        setFamilyDetailsErrors(errors.familyDetailsErrors);

        return;
      }

      console.log("isValid, errors ", isValid, errors);
    } catch (e) {
      console.log("error while handleSave", e);
    }
  };

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Membership", link: "/" },
        ]}
        title="Become a Member"
      />

      <section className="contact-three">
        <div
          className="contact-three-shape"
          style={{
            backgroundImage:
              "url(assets/images/shapes/contact-three-shape.png)",
          }}
        />

        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              Please Share Your Details
            </span>

            <h2 className="section-title__title">Become a Member</h2>
          </div>

          <div className="contact-page__form-box">
            <UserDetails
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              userDetailsErrors={userDetailsErrors}
            />

            <div className="divider mb-4" />

            <AddressDetails
              addressDetails={addressDetails}
              setAddressDetails={setAddressDetails}
              addressDetailsErrors={addressDetailsErrors}
              stateCodes={stateCodes}
            />

            <div className="divider mb-4" />

            <div className="col-xl-6">
              <div className="contact-form__input-box">
                <TextInput
                  value={chapterRepresent}
                  placeholder="Chapter you represent"
                  disabled
                />
              </div>
            </div>

            <div className="divider mb-4" />

            <MembershipDetails
              membershipDetails={membershipDetails}
              setMembershipDetails={setMembershipDetails}
              membershipDetailsErrors={membershipDetailsErrors}
              membershipCategories={membershipCategories}
            />

            <div className="divider mb-4" />

            <PasswordDetails
              passwordDetails={passwordDetails}
              setPasswordDetails={setPasswordDetails}
              passwordDetailsErrors={passwordDetailsErrors}
            />

            <div className="divider mb-4" />

            {["2", "3", "4"].includes(membershipDetails.membership_category) &&
              userDetails.marital_status === "married" && (
                <>
                  <FamilyDetails
                    familyDetails={familyDetails}
                    setFamilyDetails={setFamilyDetails}
                    familyDetailsErrors={familyDetailsErrors}
                  />
                  <div className="divider mb-4" />
                </>
              )}

            <PaymentOptions />

            <div className="row pt-5">
              <div className="col-xl-12">
                <div className="contact-form__btn-box">
                  <button
                    className="thm-btn contact-form__btn"
                    onClick={handleSave}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="result"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeMember;
