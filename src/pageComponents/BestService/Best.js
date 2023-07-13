import React from "react";

const best = () => {
  return (
    <div>
      <section className="error-page">
        <div
          className="error-page-shape"
          style={{
            backgroundImage: "url(assets/images/shapes/error-page-shape.png)",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <h3 className="error-page__tagline">
                  Coming Soon
                  <br />
                  <br />
                </h3>

                <a href="index.html" className="thm-btn error-page__btn">
                  back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default best;
