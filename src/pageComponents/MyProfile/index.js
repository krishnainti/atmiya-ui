import { useSelector } from "react-redux";

import PageHeader from "../../components/PageHeader";
import ReviewDetailsView from "../ReviewDetails/ReviewDetailsView";

const MyProfile = (props) => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Membership", link: "/" },
        ]}
        title="My profile"
      />

      <ReviewDetailsView profile={user.profile} user={user} />
    </>
  );
};

export default MyProfile;
