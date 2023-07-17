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
  const [disclaimer, setDisclaimer] = useState(false);

  const { user, setLoading } = props;

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        user_id: user.id,
      };

      await submitProfile(payload);

      localStorage.setItem(
        "membership_category",
        user.profile.membership_category
      );

      localStorage.setItem("payment_mode", user.profile.payment_mode);

      dispatch(clearUser());

      navigate("/profile-success");
    } catch (e) {
      console.log("Error while handle submit", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="divider my-4" />
      <div className="contact-form__block-heading">Disclaimer</div>
      <div
        className="form-check d-flex align-items-center"
        style={{ gap: "10px" }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id="disclaimer"
          checked={disclaimer}
          onChange={(e) => setDisclaimer(e.target.checked)}
        />
        <label
          className="form-check-label"
          htmlFor="disclaimer"
          style={{ paddingTop: "4px" }}
        >
          I agree to the terms and conditions of ATMIYAUSA.ORG
        </label>
      </div>

      <div className="row pt-5">
        <SweetAlert
          show={Boolean(alertMsg)}
          confirmButtonText="Go to Home"
          title="Profile Submitted"
          text={alertMsg}
          onConfirm={() => {
            setAlertMsg("");
            setTimeout(() => {}, 500);
          }}
          confirmButtonColor="#007bff"
        />

        <div className="col-xl-12">
          <div
            className="contact-form__btn-box"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button
              className="thm-btn contact-form__btn m-0"
              onClick={() => navigate("/join")}
            >
              Edit Details
            </button>

            <button
              className={`thm-btn contact-form__btn m-0 ${
                !disclaimer ? "thm-btn-disabled" : ""
              }`}
              onClick={handleSubmit}
              disabled={!disclaimer}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
