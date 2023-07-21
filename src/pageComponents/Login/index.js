import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import LoginDetails from "./LoginDetails";
import { validateLoginDetails } from "./utils";
import { login } from "../../services/auth";
import { setToken, setUser } from "../../store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [loginDetailsErrors, setLoginDetailsErrors] = useState({});

  const handleLogin = async () => {
    try {
      setLoginDetailsErrors({});

      const { isValid, errors } = validateLoginDetails(loginDetails);

      if (!isValid) {
        return setLoginDetailsErrors(errors);
      }

      const data = await login(loginDetails);

      dispatch(setUser(data.user));
      dispatch(setToken(data.token));

      const isAdmin =
        data.user.roles?.map((i) => i.name)?.includes("admin") || false;

      if (isAdmin) {
        navigate("/pending-profiles");
      } else {
        navigate("/my-profile");
      }
      window.location.reload();
    } catch (e) {
      console.log("Error while handleLogin", e);
      if (e.response.status === 422) {
        // set validation errors properly
      } else if (e.response?.status === 500) {
        if (e.response?.data?.message?.mode === "user_not_found") {
          setLoginDetailsErrors({ password: "Email or Password is incorrect" });
        }

        if (e.response?.data?.message?.mode === "profile_rejected") {
          setLoginDetailsErrors({
            password: "Your Profile rejected by Admin. Please contact admin.",
          });
        }

        if (e.response?.data?.message?.mode === "profile_under_review") {
          setLoginDetailsErrors({
            password:
              "Your profile under review. Please wait some time admin will approve your profile.",
          });
        }
      }
    }
  };

  return (
    <>
      <section className="contact-three">
        <div
          className="contact-three-shape"
          style={{
            backgroundImage:
              "url(assets/images/shapes/contact-three-shape.png)",
          }}
        />

        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Login</h2>
          </div>

          <div className="contact-page__form-box">
            <div className="contact-form__block-heading"></div>
            <LoginDetails
              loginDetails={loginDetails}
              setLoginDetails={setLoginDetails}
              loginDetailsErrors={loginDetailsErrors}
            />

            <div className="row pt-5">
              <div className="col-xl-12">
                <div className="contact-form__btn-box">
                  <button
                    className="thm-btn contact-form__btn"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
