import { useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert-react";

import { updateProfilesStatus } from "../../services/auth";
import { useState } from "react";

const AdminFooter = (props) => {
  const navigate = useNavigate();

  const { user } = props;

  const [status, setStatus] = useState("");

  const handleSubmit = async (status = "admin_approved") => {
    try {
      await updateProfilesStatus(user.id, status);

      setStatus(status);
    } catch (e) {
      console.log("Error while handle submit", e);
    }
  };

  const getAlternativeMessage = () => {
    if (user?.profile?.status === "pending") {
      return "Payment not done for profile.";
    }

    if (user?.profile?.status === "payment_done") {
      return "Profile not submitted.";
    }

    if (user?.profile?.status === "admin_approved") {
      return "Profile Already Approved.";
    }

    if (user?.profile?.status === "admin_rejected") {
      return "Profile Already Rejected.";
    }

    return "Unable to approve at this time.";
  };

  return (
    <div className="row pt-5">
      <SweetAlert
        show={Boolean(status)}
        title={status === "admin_approved" ? "Approved" : "Rejected"}
        text={
          status === "admin_approved" ? "Profile Approved" : "Profile Rejected"
        }
        onConfirm={() => {
          setStatus("");
          setTimeout(() => {
            navigate("/pending-profiles");
          }, 500);
        }}
      />

      {user?.profile?.status === "under_review" ? (
        <div className="col-xl-12">
          <div
            className="contact-form__btn-box"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button
              className="thm-btn contact-form__btn m-0"
              onClick={() => handleSubmit("admin_rejected")}
            >
              Reject Profile
            </button>
            <button
              className="thm-btn contact-form__btn m-0"
              onClick={() => handleSubmit("admin_approved")}
            >
              Approve Profile
            </button>
          </div>
        </div>
      ) : (
        <div
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          {getAlternativeMessage()}
        </div>
      )}
    </div>
  );
};

export default AdminFooter;
