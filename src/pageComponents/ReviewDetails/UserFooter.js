import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert-react";

import { clearUser } from "../../store";
import { submitProfile } from "../../services/auth";

const UserFooter = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alertMsg, setAlertMsg] = useState("");

  const { user, setLoading } = props;

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        user_id: user.id,
      };

      await submitProfile(payload);

      dispatch(clearUser());

      setAlertMsg(
        "Profile submitted. Please wait sometime admin will approve the profile."
      );
    } catch (e) {
      console.log("Error while handle submit", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="row pt-5">
      <SweetAlert
        show={Boolean(alertMsg)}
        confirmButtonText="Go to Home"
        title="Profile Submitted"
        text={alertMsg}
        onConfirm={() => {
          setAlertMsg("");
          setTimeout(() => {
            navigate("/");
          }, 500);
        }}
      />

      <div className="col-xl-12">
        <div
          className="contact-form__btn-box"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            className="thm-btn contact-form__btn m-0"
            onClick={() => navigate("/become-a-member")}
          >
            Edit Details
          </button>
          <button
            className="thm-btn contact-form__btn m-0"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
