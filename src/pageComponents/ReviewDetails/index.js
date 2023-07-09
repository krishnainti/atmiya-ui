import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

import { fetchSingleReviewProfiles } from "../../services/auth";

import ReviewDetailsView from "./ReviewDetailsView";
import UserFooter from "./UserFooter";
import AdminFooter from "./AdminFooter";

const ReviewDetails = (props) => {
  const { userId } = useParams();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

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
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Pending Profiles", link: "/pending-profiles" },
        ]}
        title="Review Profile"
      />

      <ReviewDetailsView
        showEditButton={!props.admin}
        profile={profile}
        user={user}
        Footer={
          props.admin ? (
            <AdminFooter user={userData} />
          ) : (
            <UserFooter user={userData} />
          )
        }
      />
    </>
  );
};

export default ReviewDetails;
