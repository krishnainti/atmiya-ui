const Feature = () => {
  return (
    <section className="feature-one">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6  wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <div className="feature-one__single">
              <div
                className="feature-one__single-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/feature-one-shape-1.png)",
                }}
              ></div>

              <div className="feature-one__top">
                <div className="feature-one__top-inner">
                  <div className="feature-one__top-icon">
                    <span className="icon-help"></span>
                  </div>

                  <div className="feature-one__top-title-box">
                    <h3 className="feature-one__top-title">
                      <a href="/">
                        Creating Wealth through <br />
                        Entrepreneurship
                      </a>
                    </h3>
                  </div>
                </div>
              </div>

              <p className="feature-one__text">
                Do you have what it takes to be an entrepreneur?
              </p>

              <ul className="list-unstyled feature-one__point">
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>

                  <div className="text">
                    <p>
                      Crossing the initial hurdles & surviving the first year
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>

                  <div className="text">
                    <p>Scaling a business to the next level</p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>

                  <div className="text">
                    <p>Tips for executing Moonshot Ideas</p>
                  </div>
                </li>
              </ul>

              <a
                href="become-volunteer.html"
                className="thm-btn feature-one__btn"
              >
                View details
              </a>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6  wow slideInRight"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <div className="feature-one__single feature-one__single--two">
              <div
                className="feature-one__single-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/feature-one-shape-1.png)",
                }}
              ></div>

              <div className="feature-one__top">
                <div className="feature-one__top-inner">
                  <div className="feature-one__top-icon feature-one__top-icon--two">
                    <span className="icon-gift-box"></span>
                  </div>

                  <div className="feature-one__top-title-box">
                    <h3 className="feature-one__top-title">
                      <a href="/">
                        Growing Wealth through
                        <br />
                        Investments
                      </a>
                    </h3>
                  </div>
                </div>
              </div>

              <p className="feature-one__text">
                Risk in financial investments & stock markets
              </p>

              <ul className="list-unstyled feature-one__point">
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>

                  <div className="text">
                    <p>Understanding volatility to manage portfolio</p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>

                  <div className="text">
                    <p>Build retirement nest egg safely</p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>

                  <div className="text">
                    <p>Role of Real Estate Investments</p>
                  </div>
                </li>
              </ul>

              <a href="/" className="thm-btn feature-one__btn">
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
