const Causes = () => {
  return (
    <section className="causes-one">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">
            What's Important To You
          </span>

          <h2 className="section-title__title">
            Find the service that benefits YOU
          </h2>
        </div>

        <div className="row">
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src="assets/images/resources/causes-1-1.jpg" alt="" />

                <div className="causes-one__cat">
                  <p>Entrepreneurship</p>
                </div>
              </div>

              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href="/">
                    Follow Your Passion. Convert into Profession.
                  </a>
                </h3>

                <p className="causes-one__text">
                  Start a business. Convert your passion into profession.
                  Entrepreneurship is a journey, not a destination. Prepare
                  yourself.{" "}
                </p>

                <div className="causes-one__progress">
                  <div
                    className="causes-one__progress-shape"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                    }}
                  ></div>

                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="20%">
                      <div className="count-text">50</div>
                    </div>
                  </div>

                  <div className="causes-one__goals">
                    <p>
                      <span>Webinars</span>
                    </p>

                    <p>
                      <span>250</span> Goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src="assets/images/resources/causes-1-2.jpg" alt="" />

                <div className="causes-one__cat">
                  <p>Investments</p>
                </div>
              </div>

              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href="/">
                    Financial Education is all about risk management
                  </a>
                </h3>

                <p className="causes-one__text">
                  Be it stock markets or real estate or alternative investments,
                  understaing and managing the risk is the key.{" "}
                </p>

                <div className="causes-one__progress">
                  <div
                    className="causes-one__progress-shape"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                    }}
                  ></div>

                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="12%">
                      <div className="count-text">12</div>
                    </div>
                  </div>

                  <div className="causes-one__goals">
                    <p>
                      <span>Webinars</span>
                    </p>

                    <p>
                      <span>100</span> Goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src="assets/images/resources/causes-1-3.jpg" alt="" />

                <div className="causes-one__cat">
                  <p>Food</p>
                </div>
              </div>

              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href="/">
                    Creating the Nextgen millionnaires & billionaires
                  </a>
                </h3>

                <p className="causes-one__text">
                  Right from admissions to career guidance to job search, ATMIYA
                  helps MS students in various ways
                </p>

                <div className="causes-one__progress">
                  <div
                    className="causes-one__progress-shape"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/causes-one-progress-shape-1.png)",
                    }}
                  ></div>

                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="25%">
                      <div className="count-text">25</div>
                    </div>
                  </div>

                  <div className="causes-one__goals">
                    <p>
                      <span>Webinars</span>
                    </p>

                    <p>
                      <span>100</span> Goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;
