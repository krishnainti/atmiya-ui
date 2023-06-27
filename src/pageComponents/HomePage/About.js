const About = () => {
  return (
    <section className="about-one">
      <div className="about-one__shape-box-1">
        <div
          className="about-one__shape-1"
          style={{
            backgroundImage: "url(assets/images/shapes/about-one-shape-1.png)",
          }}
        ></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left">
              <div
                className="about-one__img-box wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img">
                  <img
                    src="assets/images/resources/about-one-img-1.jpg"
                    alt=""
                  />
                </div>

                <div className="about-one__img-border"></div>

                <div className="about-one__curved-circle-box">
                  <div className="curved-circle">
                    <span className="curved-circle--item">
                      Dozens of Millionnaires
                    </span>
                  </div>

                  <div className="about-one__curved-circle-icon">
                    <img
                      src="assets/images/icon/curved-circle-icon.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="about-one__shape-2 zoom-fade">
                  <img
                    src="assets/images/shapes/about-one-shape-2.png"
                    alt=""
                  />
                </div>

                <div className="about-one__shape-3 float-bob-y">
                  <img
                    src="assets/images/shapes/about-one-shape-3.png"
                    alt=""
                  />
                </div>

                <div className="about-one__shape-4 zoominout">
                  <img
                    src="assets/images/shapes/about-one-shape-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Welcome to ATMIYA USA
                </span>

                <h2 className="section-title__title">Let's Grow Together</h2>
              </div>

              <p className="about-one__text">
                We educate, enrich, empower and elevate the community members.{" "}
              </p>

              <div className="about-one__fund">
                <p className="about-one__fund-text">
                  Conducted<span>1,537</span> Webinars over
                  <span>7</span> years benefitting over <br />{" "}
                  <span>15000</span> attendees
                </p>
              </div>

              <ul className="list-unstyled about-one__points">
                <li>
                  <div className="icon">
                    <span className="icon-volunteer"></span>
                  </div>

                  <div className="text">
                    <h5>
                      <a href="join.html">Join ATMIYA</a>
                    </h5>

                    <p>Let's Grow Together</p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="icon-solidarity"></span>
                  </div>

                  <div className="text">
                    <h5>
                      <a href="index.html">Volunteer @ ATMIYA</a>
                    </h5>

                    <p>Share Your Knowledge</p>
                  </div>
                </li>
              </ul>

              <a href="index.html" className="thm-btn about-one__btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
