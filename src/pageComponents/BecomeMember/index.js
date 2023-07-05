import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import MembershipDetails from "./MembershipDetails";
import {
  prefillTheData,
  prepareRegisterPayload,
  prepareServerErrors,
  validateRegistrationFrom,
} from "./utils";
import {
  fetchChapterStates,
  fetchChapters,
  fetchMembershipCategories,
} from "../../services/masterData";
import PasswordDetails from "./PasswordDetails";
import FamilyDetails from "./FamilyDetails";
import PaymentOptions from "./PaymentOptions";
import {
  defaultAddressDetails,
  defaultFamilyDetails,
  defaultMembershipDetails,
  defaultPasswordDetails,
  defaultUserDetails,
} from "./consts";
import { findProfileByEmail, register } from "../../services/auth";
import { setUser } from "../../store";

const BecomeMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const profile = user?.profile;

  const [userDetails, setUserDetails] = useState({ ...defaultUserDetails });
  const [userDetailsErrors, setUserDetailsErrors] = useState({});

  const [addressDetails, setAddressDetails] = useState({
    ...defaultAddressDetails,
  });
  const [addressDetailsErrors, setAddressDetailsErrors] = useState({});

  const [chapterRepresent, setChapterRepresent] = useState("");

  const [membershipDetails, setMembershipDetails] = useState({
    ...defaultMembershipDetails,
  });
  const [membershipDetailsErrors, setMembershipDetailsErrors] = useState({});

  const [passwordDetails, setPasswordDetails] = useState({
    ...defaultPasswordDetails,
  });
  const [passwordDetailsErrors, setPasswordDetailsErrors] = useState({});

  const [familyDetails, setFamilyDetails] = useState({
    ...defaultFamilyDetails,
  });
  const [familyDetailsErrors, setFamilyDetailsErrors] = useState({});

  const [paymentMode, setPaymentMode] = useState("paypal");

  const [stateCodes, setStateCodes] = useState([]);
  const [membershipCategories, setMembershipCategories] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [foundProfileByEmail, setFoundProfileByEmail] = useState(false);

  useEffect(() => {
    if (user && profile) {
      const formData = prefillTheData({ user, profile });

      setUserDetails(formData.userDetails);
      setAddressDetails(formData.addressDetails);
      setMembershipDetails(formData.membershipDetails);
      setPasswordDetails(formData.passwordDetails);
      setFamilyDetails(formData.familyDetails);
      setPaymentMode(formData.paymentMode);
    }
  }, [user, profile]);

  const { metroAreasOptions } = useMemo(() => {
    const selectedState = stateCodes.find(
      (i) => i.value.toString() === addressDetails.state.toString()
    );
    const metroAreasOptions =
      selectedState?.original?.metro_areas?.map((i) => ({
        value: i.id,
        label: i.name,
      })) || [];

    return { selectedState, metroAreasOptions };
  }, [addressDetails.state, stateCodes]);

  useEffect(() => {
    if (addressDetails.state) {
      const chapterId = stateCodes.find(
        (i) => i.value.toString() === addressDetails.state.toString()
      )?.original?.chapter_id;

      if (chapterId) {
        const chapterOb = chapters.find(
          (i) => i.id.toString() === chapterId.toString()
        );
        setChapterRepresent(chapterOb?.name || "");
      }
    }
  }, [addressDetails, stateCodes, chapters]);

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

  const handleSave = async () => {
    try {
      setUserDetailsErrors({});
      setAddressDetailsErrors({});
      setMembershipDetailsErrors({});
      setPasswordDetailsErrors({});
      setFamilyDetailsErrors({});

      const { isValid, errors } = validateRegistrationFrom({
        userDetails,
        addressDetails,
        membershipDetails,
        passwordDetails,
        familyDetails,
        stateCodes,
      });

      if (!isValid) {
        setUserDetailsErrors(errors.userDetailsErrors);
        setAddressDetailsErrors(errors.addressDetailsErrors);
        setMembershipDetailsErrors(errors.membershipDetailsErrors);
        setPasswordDetailsErrors(errors.passwordDetailsErrors);
        setFamilyDetailsErrors(errors.familyDetailsErrors);
        return;
      }

      const payload = prepareRegisterPayload({
        userDetails,
        addressDetails,
        membershipDetails,
        passwordDetails,
        familyDetails,
        paymentMode,
      });

      if (user) {
        payload.id = user.id;
      }

      const response = await register(payload);

      dispatch(setUser(response.user));

      // TODO:: Handle payments for paypal and cards

      navigate("/review-details");

      console.log("response -->", response);
    } catch (e) {
      console.log("error while handleSave", e);
      if (e.response.status === 422) {
        const errors = prepareServerErrors(e.response.data.errors);
        setUserDetailsErrors(errors.userDetailsErrors);
        setAddressDetailsErrors(errors.addressDetailsErrors);
        setMembershipDetailsErrors(errors.membershipDetailsErrors);
        setPasswordDetailsErrors(errors.passwordDetailsErrors);
        setFamilyDetailsErrors(errors.familyDetailsErrors);
      }
    }
  };

  const findUserWithEmail = async (e) => {
    try {
      setFoundProfileByEmail(false);
      const response = await findProfileByEmail({ email: e.target.value });
      console.log("response -->", response);
      if (response) {
        setFoundProfileByEmail(true);
        dispatch(setUser(response.user));
      }
    } catch (e) {
      console.log("Error While findUserWithEmail", e);
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

          {userDetails.email && foundProfileByEmail && (
            <div>
              Details Present in our database with Email: {userDetails.email}
            </div>
          )}

          <div className="contact-page__form-box">
            <div className="contact-form__block-heading">Personal Details</div>
            <UserDetails
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              userDetailsErrors={userDetailsErrors}
              findUserWithEmail={findUserWithEmail}
            />

            <div className="divider mb-2" />

            <div className="contact-form__block-heading">Address</div>

            <AddressDetails
              addressDetails={addressDetails}
              setAddressDetails={setAddressDetails}
              addressDetailsErrors={addressDetailsErrors}
              stateCodes={stateCodes}
              metroAreasOptions={metroAreasOptions}
            />

            <div className="divider mb-2" />

            <div className="contact-form__block-heading">
              Chapter Association
            </div>

            <div className="col-xl-12">
              <div className="contact-form__input-box">
                <div className="contact-form__disable-text">
                  {chapterRepresent ? (
                    <>
                      You will be associated with
                      <b>
                        <span>&nbsp;</span>
                        {chapterRepresent}
                        <span>&nbsp;</span>
                      </b>
                      chapter
                    </>
                  ) : (
                    "Chapter you represent"
                  )}
                </div>
              </div>
            </div>

            <div className="divider mb-2" />
            <div className="contact-form__block-heading">
              Membership Category
            </div>

            <MembershipDetails
              membershipDetails={membershipDetails}
              setMembershipDetails={setMembershipDetails}
              membershipDetailsErrors={membershipDetailsErrors}
              membershipCategories={membershipCategories}
            />

            <div className="divider mb-2" />
            <div className="contact-form__block-heading">Password</div>

            <PasswordDetails
              passwordDetails={passwordDetails}
              setPasswordDetails={setPasswordDetails}
              passwordDetailsErrors={passwordDetailsErrors}
            />

            <div className="divider mb-2" />

            {["2", "3", "4"].includes(
              membershipDetails.membership_category.toString()
            ) &&
              userDetails.marital_status === "married" && (
                <>
                  <div className="contact-form__block-heading">
                    Family Details
                  </div>
                  <FamilyDetails
                    familyDetails={familyDetails}
                    setFamilyDetails={setFamilyDetails}
                    familyDetailsErrors={familyDetailsErrors}
                  />
                  <div className="divider mb-2" />
                </>
              )}

            <div className="contact-form__block-heading">Payment Options</div>

            <PaymentOptions
              paymentMode={paymentMode}
              setPaymentMode={setPaymentMode}
            />

            <div className="row pt-5">
              <div className="col-xl-12">
                <div className="contact-form__btn-box">
                  <button
                    className="thm-btn contact-form__btn"
                    onClick={handleSave}
                  >
                    Next
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
