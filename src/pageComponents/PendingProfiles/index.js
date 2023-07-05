import { useEffect, useState } from "react";
import { fetchReviewProfiles } from "../../services/auth";

const PendingProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchReviewProfiles()
      .then((res) => {
        console.log("setProfiles", res);
      })
      .catch((e) => console.log("Error while fetchReviewProfiles", e));
  }, []);
  return <div>PendingProfiles</div>;
};

export default PendingProfiles;
