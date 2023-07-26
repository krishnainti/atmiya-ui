import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchReviewProfiles } from "../../services/auth";
import {
  fetchChapterStates,
  fetchChapters,
  fetchMembershipCategories,
} from "../../services/masterData";

const PendingProfiles = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [stateCodes, setStateCodes] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [membershipCategories, setMembershipCategories] = useState([]);

  const getMembershipCategories = async () => {
    const membershipCategoriesData = await fetchMembershipCategories();
    setMembershipCategories(
      membershipCategoriesData.map((i) => ({
        label: i.name,
        value: i.id,
        original: i,
      }))
    );
  };

  useEffect(() => {
    getMembershipCategories();
    fetchReviewProfiles()
      .then((res) => {
        setUsers(res.users);
      })
      .catch((e) => console.log("Error while fetchReviewProfiles", e));
  }, []);

  const getChapterRepresent = (profile) => {
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

    return chapterRepresent;
  };

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

      const chaptersData = await fetchChapters();
      setChapters(chaptersData);
    } catch (e) {
      console.log("Error while getMasterData", e);
    }
  };

  const getMembershipCategory = (user) => {
    return (
      membershipCategories.find(
        (i) =>
          i.value.toString() === user.profile?.membership_category.toString()
      )?.label || ""
    );
  };

  useEffect(() => {
    getMasterData();
  }, []);

  return (
    <div
      className="px-4 py-4"
      style={{ minHeight: "calc(100vh - 114px)", overflowX: "auto" }}
    >
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th style={{ paddingLeft: "12px" }}>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Chapter Name</th>
              <th>Type of Membership</th>
              <th>Payment Method</th>
              <th>Application Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td style={{ paddingLeft: "12px" }}>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.profile?.phone}</td>
                  <td>{getChapterRepresent(user.profile)}</td>
                  <td>{getMembershipCategory(user)}</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {user.profile?.payment_mode}
                  </td>
                  <td style={{ textTransform: "capitalize" }}>
                    {user.profile?.status?.split("_").join(" ")}
                  </td>
                  <td>
                    <button
                      className="primary-button"
                      onClick={() => navigate(`/pending-profiles/${user.id}`)}
                    >
                      Review
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="d-flex justify-content-center">
          No Pending Profiles To Review
        </div>
      )}
    </div>
  );
};

export default PendingProfiles;
