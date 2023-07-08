import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchReviewProfiles } from "../../services/auth";

const PendingProfiles = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchReviewProfiles()
      .then((res) => {
        setUsers(res.users);
      })
      .catch((e) => console.log("Error while fetchReviewProfiles", e));
  }, []);

  return (
    <div className="px-4 py-4" style={{ minHeight: "calc(100vh - 114px)" }}>
      {profiles.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th style={{ paddingLeft: "12px" }}>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Chapter Name</th>
              <th>Application Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {profiles.map((profile, index) => {
              return (
                <tr key={index}>
                  <td style={{ paddingLeft: "12px" }}>{index + 1}</td>
                  <td>{profile.name}</td>
                  <td>{profile.email}</td>
                  <td>{profile?.profile?.phone}</td>
                  <td>{"chapter name"}</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {profile?.profile?.status?.split("_").join(" ")}
                  </td>
                  <td>
                    <button
                      className="primary-button"
                      onClick={() =>
                        navigate(`/pending-profiles/${profile.id}`)
                      }
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
