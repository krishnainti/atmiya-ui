import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

import { fetchSingleReviewProfiles } from "../../services/auth";

import ReviewDetailsView from "./ReviewDetailsView";
import UserFooter from "./UserFooter";
import AdminFooter from "./AdminFooter";
import CustomLoader from "../../layout/CustomLoader";

const ReviewDetails = (props) => {
  const { userId } = useParams();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(user);

  const profile = userData?.profile;

  useEffect(() => {
    if (!props.admin) {
      if (!profile) navigate("/");

      if (profile && !["pending", "payment_done"].includes(profile?.status)) {
        navigate("/");
      }
    } else {
      fetchSingleReviewProfiles(userId).then((res) => {
        setUserData(res.user);
      });
    }
  }, []);

  return (
    <>
      {loading && <CustomLoader />}
      {/* {props.admin ? (
        <PageHeader
          breadcrumb={[
            { label: "Home", link: "/" },
            { label: "Pending Profiles", link: "/pending-profiles" },
          ]}
          title="Review Profile"
        />
      ) : (
        <PageHeader
          breadcrumb={[
            { label: "Home", link: "/" },
            { label: "Membership", link: "/" },
          ]}
          title="Become a Member"
        />
      )} */}

      <ReviewDetailsView
        showEditButton={!props.admin}
        profile={profile}
        user={user}
        Footer={
          props.admin ? (
            <AdminFooter user={userData} setLoading={setLoading} />
          ) : (
            <UserFooter user={userData} setLoading={setLoading} />
          )
        }
      />
    </>
  );
};

export default ReviewDetails;
