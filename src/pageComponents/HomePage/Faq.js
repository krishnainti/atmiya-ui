const Faq = () => {
  return (
    <section className="faq-one">
      <div
        className="faq-one-shape-1"
        style={{
          backgroundImage: "url(assets/images/shapes/faq-one-shape-1.png)",
        }}
      ></div>

      <div
        className="faq-one-bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/faq-one-bg.png)",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Recently asked questions
                </span>

                <h2 className="section-title__title">
                  How ATMIYA is different from other NPO's
                </h2>
              </div>

              <p className="faq-one__text-1">
                Individual development is essential for a community's
                development. A whole generation can be uplifted through
                financial & business education.
              </p>

              <a href="index.html" className="thm-btn faq-one__btn">
                Learn how to benefit from ATMIYA
              </a>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__right">
              <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>F.I.R.E.</h4>
                  </div>

                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Financial Investments & Real estate Education</p>
                    </div>
                  </div>
                </div>

                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>A.S.A.R.A.</h4>
                  </div>

                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        ATMIYA Student Advise & Resource Assistance to students
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>B.E.S.T.</h4>
                  </div>

                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Businesses in Engineering, Sciences & Technology</p>
                    </div>
                  </div>
                </div>

                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>Real Women</h4>
                  </div>

                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Women Empowerment</p>
                    </div>
                  </div>
                </div>

                <div className="accrodion last-chiled">
                  <div className="accrodion-title">
                    <h4>Immigration</h4>
                  </div>

                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Immigration Inforamtion for USA & Canada</p>
                    </div>
                  </div>
                </div>

                <div className="accrodion last-chiled">
                  <div className="accrodion-title">
                    <h4>Community Affairs</h4>
                  </div>

                  <div className="accrodion-content">
                    <div className="inner">
                      <p>ATMIYA Community Affairs</p>
                    </div>
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

export default Faq;
