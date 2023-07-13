import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  fetchChapterStates,
  fetchChapters,
  fetchMembershipCategories,
} from "../../services/masterData";

import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Item from "./Item";
import MembershipDetails from "./MembershipDetails";
import { paymentOptions } from "../BecomeMember/consts";
import FamilyDetails from "./FamilyDetails";

const ReviewDetailsView = (props) => {
  const navigate = useNavigate();

  const { profile, user } = props;

  const [stateCodes, setStateCodes] = useState([]);
  const [membershipCategories, setMembershipCategories] = useState([]);
  const [chapters, setChapters] = useState([]);

  const { selectedMetroArea, selectedState, chapterRepresent } = useMemo(() => {
    const selectedState = stateCodes.find(
      (i) => i.value.toString() === profile?.state.toString()
    );

    const metroAreasOptions =
      selectedState?.original?.metro_areas?.map((i) => ({
        value: i.id,
        label: i.name,
      })) || [];

    const selectedMetroArea = metroAreasOptions.find(
      (i) => i.value.toString() === profile?.metro_area.toString()
    );

    const chapterId = stateCodes.find(
      (i) => i.value.toString() === profile?.state.toString()
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

  return (
    <section className="contact-three">
      <div
        className="contact-three-shape"
        style={{
          backgroundImage: "url(assets/images/shapes/contact-three-shape.png)",
        }}
      />

      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">
            Please Review Profile Details
          </span>

          <h2 className="section-title__title">Review Details</h2>
        </div>

        <div className="contact-page__form-box">
          <div
            className="contact-form__block-heading"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Personal Details{" "}
            {props.showEditButton && (
              <button
                className="thm-btn primary-button m-0"
                onClick={() => navigate("/become-a-member")}
              >
                Edit Details
              </button>
            )}
          </div>

          <UserDetails profile={profile} user={user} />

          <div className="divider my-4" />

          <div className="contact-form__block-heading">Address</div>

          <AddressDetails
            profile={profile}
            selectedMetroArea={selectedMetroArea}
            selectedState={selectedState}
          />

          <div className="divider my-4" />

          <div className="contact-form__block-heading">Chapter Association</div>

          <div className="col-xl-12">
            <Item label="Chapter you represent" value={chapterRepresent} />
          </div>

          <div className="divider my-4" />

          <div className="contact-form__block-heading">Membership Category</div>

          <MembershipDetails
            profile={profile}
            membershipCategories={membershipCategories}
          />

          <div className="divider my-4" />

          {profile?.spouse_first_name && (
            <>
              <div className="contact-form__block-heading">Family Details</div>
              <FamilyDetails profile={profile} />

              <div className="divider my-4" />
            </>
          )}

          <div className="contact-form__block-heading">Payment Options</div>

          <div className="row">
            <div className="col-xl-6">
              <Item
                label="Payment Option"
                value={
                  paymentOptions.find((i) => i.value === profile?.payment_mode)
                    ?.label
                }
              />
            </div>

            {profile?.payments?.length > 0 && (
              <div className="col-xl-6">
                <Item
                  label="Payment Status"
                  value={profile.payments[0].status}
                />
              </div>
            )}
          </div>

          {props.Footer}
        </div>
      </div>
    </section>
  );
};

export default ReviewDetailsView;
