import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import { fetchMembershipCategories } from "../../services/masterData";

const ProfileSuccess = (props) => {
  const navigate = useNavigate();

  const [membershipCategories, setMembershipCategories] = useState([]);

  const getMasterData = async () => {
    try {
      const membershipCategoriesData = await fetchMembershipCategories();
      setMembershipCategories(
        membershipCategoriesData.map((i) => ({
          label: i.name,
          value: i.id,
          original: i,
        }))
      );
    } catch (e) {
      console.log("Error while getMasterData", e);
    }
  };

  useEffect(() => {
    getMasterData();
  }, []);

  const getMembershipCategory = () => {
    const membershipCategory = localStorage.getItem("membership_category");

    const membershipOb =
      membershipCategories.find(
        (i) => i.value?.toString() === membershipCategory?.toString()
      ) || membershipCategories[0];

    return membershipOb?.label;
  };

  return (
    <div>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Membership", link: "/" },
        ]}
        title="Become a Member"
      />

      <section className="error-page">
        <div
          className="error-page-shape"
          style={{
            backgroundImage: "url(assets/images/shapes/error-page-shape.png)",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="text">
                {localStorage.getItem("payment_mode") === "paypal" ? (
                  <p>
                    We thank you for your interest to be a part of ATMIYA Core
                    Mission to educate, empower, enrich and elevate community
                    members through financial education and enterprenurial
                    networking opportunities.
                    <br />
                    We have received your application for Membership Category:{" "}
                    <strong>{getMembershipCategory()}</strong>.
                    <br />
                    Our membership team is reviewing your application and we
                    will inform you once the review process is complete.
                  </p>
                ) : (
                  <div>
                    We thank you for your interest to be a part of ATMIYA Core
                    Mission to educate, empower, enrich and elevate community
                    members through financial education and enterprenurial
                    networking opportunities.
                    <br />
                    We have received your application for Membership Category:{" "}
                    <strong>{getMembershipCategory()}</strong>.
                    <br />
                    Please use the email Email ID:{" "}
                    <strong>{process.env.REACT_APP_ZELLE_EMAIL}</strong> to pay
                    membership fee.
                    <br />
                    Our membership team will review your application as soon as
                    the receipt of membership fee payment and we will inform you
                    once the review process is complete.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-xl-12">
              <div className="contact-form__btn-box">
                <button
                  className="thm-btn contact-form__btn"
                  onClick={() => navigate("/")}
                >
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSuccess;
