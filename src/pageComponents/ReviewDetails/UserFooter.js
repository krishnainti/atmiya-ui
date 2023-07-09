import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearUser } from "../../store";
import { submitProfile } from "../../services/auth";

const UserFooter = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = props;

  const handleSubmit = async () => {
    try {
      const payload = {
        user_id: user.id,
      };

      await submitProfile(payload);

      dispatch(clearUser());

      alert(
        "Profile submitted. Please wait sometime admin will approve the profile."
      );

      navigate("/");
    } catch (e) {
      console.log("Error while handle submit", e);
    }
  };
  return (
    <div className="row pt-5">
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
