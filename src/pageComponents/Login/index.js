import { useEffect, useState, useMemo } from "react";
import PageHeader from "../../components/PageHeader";
import LoginDetails from "./LoginDetails";
import { validateLoginDetails } from "./utils";
import { login } from "../../services/auth";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [loginDetailsErrors, setLoginDetailsErrors] = useState({});

  const handleLogin = async () => {
    try {
      setLoginDetailsErrors({});

      const { isValid, errors } = validateLoginDetails(loginDetails);
      if (!isValid) {
        setLoginDetailsErrors(errors);
        return;
      }

      const data = await login(loginDetails);

      console.log("data -->", data);
      // set tokens and user data in redux
    } catch (e) {
      console.log("Error while handleLogin", e);
      if (e.response.status === 422) {
        // set validation errors properly
      }
    }
  };

  return (
    <>
      <PageHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Membership", link: "/" },
        ]}
        title="Login"
      />

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
            <span className="section-title__tagline">Please Login</span>

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
