const MainSlider = () => {
  return (
    <section className="main-slider clearfix">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": true,

          "effect": "fade",

          "pagination": {

          "el": "#main-slider-pagination",

          "type": "bullets",

          "clickable": true

          },

          "navigation": {

          "nextEl": "#main-slider__swiper-button-next",

          "prevEl": "#main-slider__swiper-button-prev"

          },

          "autoplay": {

          "delay": 5000

          }}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-1-1.png)",
              }}
            ></div>

            <div
              className="main-slider-shape-1"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/main-slider-shape-1.jpg)",
              }}
            ></div>

            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Educate, Enrich, Empower & Elevate
                    </p>

                    <h2 className="main-slider__title">Encourage</h2>

                    <h2 className="main-slider__title">Entrepreneurship</h2>

                    <div className="main-slider__btn-box">
                      <a href="/" className="thm-btn main-slider__btn">
                        {" "}
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-1-2.png)",
              }}
            ></div>

            <div
              className="main-slider-shape-1"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/main-slider-shape-1.jpg)",
              }}
            ></div>

            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Educate, Enrich, Empower & Elevate
                    </p>

                    <h2 className="main-slider__title">Create</h2>

                    <h2 className="main-slider__title">Wealth</h2>

                    <div className="main-slider__btn-box">
                      <a href="/" className="thm-btn main-slider__btn">
                        {" "}
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-1-3.png)",
              }}
            ></div>

            <div
              className="main-slider-shape-1"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/main-slider-shape-1.jpg)",
              }}
            ></div>

            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Educate, Enrich, Empower & Elevate
                    </p>

                    <h2 className="main-slider__title">Mentor</h2>

                    <h2 className="main-slider__title">Students</h2>

                    <div className="main-slider__btn-box">
                      <a href="/" className="thm-btn main-slider__btn">
                        {" "}
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="icon-left-arrow"></i>
          </div>

          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="icon-right-arrow"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
