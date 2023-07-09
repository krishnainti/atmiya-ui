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
  const [allStateCodes, setAllStateCodes] = useState([]);
  const [allMetroAreas, setAllMetroAreas] = useState([]);
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
    const selectedStates = allStateCodes?.filter(
      (i) => i.short_name === addressDetails.state
    );

    const metroAreasOptions =
      selectedStates?.map((state) => {
        return state.metro_areas?.map((i) => ({
          value: i.id,
          label: i.name,
        }));
      }) || [];

    return { selectedStates, metroAreasOptions: metroAreasOptions.flat() };
  }, [addressDetails, allStateCodes]);

  const { chapterRepresent, selectedChapterState } = useMemo(() => {
    let chapterRepresent = "";
    let selectedChapterState = null;

    if (addressDetails.metro_area) {
      const selectedMetroArea = allMetroAreas.find(
        (i) => i.id.toString() === addressDetails.metro_area.toString()
      );

      selectedChapterState = allStateCodes.find(
        (i) =>
          i.id.toString() === selectedMetroArea?.chapter_state_id.toString()
      );
    }

    if (addressDetails.state && !metroAreasOptions.length) {
      selectedChapterState = allStateCodes.find(
        (i) => i.short_name === addressDetails.state
      );
    }

    const chapterOb = chapters.find(
      (i) => i.id.toString() === selectedChapterState?.chapter_id.toString()
    );

    chapterRepresent = chapterOb?.name || "";

    return { chapterRepresent, selectedChapterState };
  }, [
    addressDetails,
    chapters,
    allMetroAreas,
    allStateCodes,
    metroAreasOptions,
  ]);

  const getMasterData = async () => {
    try {
      // Duplicate State codes [ "CA", "IA", "MO", "TX" ]
      const stateNames = await fetchChapterStates();
      setAllStateCodes(stateNames);

      if (user && profile) {
        const selectedState = stateNames.find(
          (i) => i.id.toString() === profile.state.toString()
        );
        setAddressDetails((prev) => ({
          ...prev,
          state: selectedState?.short_name,
        }));
      }

      const metroAreasList = [];

      setStateCodes(
        [
          ...new Set(
            stateNames.map((i) => {
              metroAreasList.push(...(i.metro_areas || []));
              return i.short_name;
            })
          ),
        ].map((i) => ({
          label: i,
          value: i,
        }))
      );

      setAllMetroAreas(metroAreasList);

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
        selectedChapterState,
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
