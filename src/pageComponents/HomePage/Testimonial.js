const Testimonial = () => {
  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one-bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/testimonial-one-bg.jpg)",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="testimonial-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Testimonials</span>

                <h2 className="section-title__title">
                  What they are talking about ATMIYA
                </h2>
              </div>

              <p className="testimonial-one__text-1">
                I learnt a lot about investing in the stock markets by attending
                the weekly webinars on every Sunday.
              </p>

              <a href="#" className="thm-btn testimonial-one__btn">
                all testimonials
              </a>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="testimonial-one__right">
              <div className="testimonial-one__img-1 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-1.jpg"
                  alt=""
                />
              </div>

              <div className="testimonial-one__img-1 testimonial-one__img-2 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-2.jpg"
                  alt=""
                />
              </div>

              <div className="testimonial-one__img-1 testimonial-one__img-3 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-3.jpg"
                  alt=""
                />
              </div>

              <div className="testimonial-one__img-1 testimonial-one__img-4 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-4.jpg"
                  alt=""
                />
              </div>

              <div
                className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
                data-owl-options='{

                        "loop": true,

                        "autoplay": true,

                        "margin": 50,

                        "nav": true,

                        "dots": false,

                        "smartSpeed": 500,

                        "autoplayTimeout": 10000,

                        "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"],

                        "responsive": {

                            "0": {

                                "items": 1

                            },

                            "768": {

                                "items": 1

                            },

                            "992": {

                                "items": 1

                            },

                            "1200": {

                                "items": 1

                            }

                        }

                    }'
              >
                <div className="item">
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/testimonial-one-shape-1.png)",
                      }}
                    ></div>

                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-1.jpg"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Houston ATMIYA
                      </h3>

                      <p className="testimonial-one__client-sub-title">
                        Member
                      </p>
                    </div>

                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>

                    <p className="testimonial-one__text-2">
                      ATMIYA taught me many things including financial risk
                      management. Learnt about how to evaluate a stock using
                      fundamental and technical analysis.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/testimonial-one-shape-1.png)",
                      }}
                    ></div>

                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-2.jpg"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Austin ATMIYA
                      </h3>

                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>

                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>

                    <p className="testimonial-one__text-2">
                      My highschooler volunteered for ATMIYA to mentor other
                      kids. She was pleasantly surprised when she also received
                      a Presidential Volunteer Service Award for all those
                      volunteer hours at ATMIYA.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/testimonial-one-shape-1.png)",
                      }}
                    ></div>

                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-3.jpg"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Atlanta ATMIYA
                      </h3>

                      <p className="testimonial-one__client-sub-title">
                        Member
                      </p>
                    </div>

                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>

                    <p className="testimonial-one__text-2">
                      My whole perspective about starting a business changed
                      after joining ATMIYA and listening to some of the
                      established entrepreneurs.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/testimonial-one-shape-1.png)",
                      }}
                    ></div>

                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-1.jpg"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Delaware ATMIYA
                      </h3>

                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>

                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>

                    <p className="testimonial-one__text-2">
                      I learnt a lot by being a volunteer in speaking to the
                      great entrepreneurs that shared their knowledge in ATMIYA
                      Sunday Sessions.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/testimonial-one-shape-1.png)",
                      }}
                    ></div>

                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-2.jpg"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        California ATMIYA
                      </h3>

                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>

                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>

                    <p className="testimonial-one__text-2">
                      Thank you ATMIYA for teaching me how to lower my taxes
                      through real estate investments
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/testimonial-one-shape-1.png)",
                      }}
                    ></div>

                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-3.jpg"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Dallas ATMIYA
                      </h3>

                      <p className="testimonial-one__client-sub-title">
                        Member
                      </p>
                    </div>

                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>

                    <p className="testimonial-one__text-2">
                      When I landed in this country as an MS student, the help I
                      got from ATMIYA was unbelievable. I am forever indebted to
                      all those Atmiyulu who helped me.
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

export default Testimonial;
