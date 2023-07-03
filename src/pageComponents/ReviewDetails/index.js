import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import {
  fetchChapterStates,
  fetchChapters,
  fetchMembershipCategories,
} from "../../services/masterData";
import Item from "./Item";
import MembershipDetails from "./MembershipDetails";
import { paymentOptions } from "../BecomeMember/consts";
import { submitProfile } from "../../services/auth";
import { clearUser } from "../../store";
import FamilyDetails from "./FamilyDetails";

const ReviewDetails = () => {
  const dispatch = useDispatch();
  const { user, profile } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) navigate("/");

    if (profile && !["pending", "payment_done"].includes(profile.status)) {
      navigate("/");
    }
  }, [profile]);

  const [stateCodes, setStateCodes] = useState([]);
  const [membershipCategories, setMembershipCategories] = useState([]);
  const [chapters, setChapters] = useState([]);

  const { selectedMetroArea, selectedState, chapterRepresent } = useMemo(() => {
    const selectedState = stateCodes.find(
      (i) => i.value.toString() === profile.state.toString()
    );

    const metroAreasOptions =
      selectedState?.original?.metro_areas?.map((i) => ({
        value: i.id,
        label: i.name,
      })) || [];

    const selectedMetroArea = metroAreasOptions.find(
      (i) => i.value.toString() === profile.metro_area.toString()
    );

    const chapterId = stateCodes.find(
      (i) => i.value.toString() === profile.state.toString()
    )?.original?.chapter_id;

    let chapterRepresent = "";
    if (chapterId) {
      const chapterOb = chapters.find(
        (i) => i.id.toString() === chapterId.toString()
      );
      chapterRepresent = chapterOb?.name || "";
    }

    return { selectedState, selectedMetroArea, chapterRepresent };
  }, [profile, stateCodes, chapters]);

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

  const handleSubmit = async () => {
    try {
      const payload = {
        user_id: user.id,
      };

      await submitProfile(payload);

      dispatch(clearUser());

      alert(
        "Profile submitted. Please wait sometime admin will approve the profile."
      );

      navigate("/");
    } catch (e) {
      console.log("Error while handle submit", e);
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
              Please Review Your Details
            </span>

            <h2 className="section-title__title">Review Details</h2>
          </div>

          <div className="contact-page__form-box">
            <div className="contact-form__block-heading">Personal Details</div>

            <UserDetails profile={profile} user={user} />

            <div className="divider mb-2" />

            <div className="contact-form__block-heading">Address</div>

            <AddressDetails
              profile={profile}
              selectedMetroArea={selectedMetroArea}
              selectedState={selectedState}
            />

            <div className="divider mb-2" />

            <div className="contact-form__block-heading">
              Chapter Association
            </div>

            <div className="col-xl-12">
              <Item label="Chapter you represent" value={chapterRepresent} />
            </div>

            <div className="divider mb-2" />

            <div className="contact-form__block-heading">
              Membership Category
            </div>

            <MembershipDetails
              profile={profile}
              membershipCategories={membershipCategories}
            />

            <div className="divider mb-2" />

            {profile.spouse_first_name && (
              <>
                <div className="contact-form__block-heading">
                  Family Details
                </div>
                <FamilyDetails profile={profile} />

                <div className="divider mb-2" />
              </>
            )}

            <div className="contact-form__block-heading">Payment Options</div>
            <div className="row">
              <div className="col-xl-12">
                <Item
                  label="Payment Option"
                  value={
                    paymentOptions.find((i) => i.value === profile.payment_mode)
                      ?.label
                  }
                />
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-xl-12">
                <div className="contact-form__btn-box">
                  <button
                    className="thm-btn contact-form__btn"
                    onClick={handleSubmit}
                  >
                    Submit
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

export default ReviewDetails;