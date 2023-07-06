import { useEffect, useState } from "react";
import { fetchReviewProfiles } from "../../services/auth";

const PendingProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchReviewProfiles()
      .then((res) => {
        setProfiles(res.users);
      })
      .catch((e) => console.log("Error while fetchReviewProfiles", e));
  }, []);

  return (
    <div className="px-4 py-4" style={{ minHeight: "calc(100vh - 114px)" }}>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
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
                <td>{index + 1}</td>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile?.profile?.phone}</td>
                <td>{"chapter name"}</td>
                <td>{profile?.profile?.status}</td>
                <td>
                  <button className="primary-button">Review</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PendingProfiles;
