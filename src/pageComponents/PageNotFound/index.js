import PageHeader from "../../components/PageHeader";

const PageNotFound = () => {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", link: "/" }]}
        title="404 Error"
      />

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
                <div className="error-page__title-box">
                  <h2 className="error-page__title">404</h2>

                  <h2 className="error-page__title-2">404</h2>
                </div>

                <h3 className="error-page__tagline">
                  Sorry we can't find that page <br />
                  you’re looking for.
                </h3>

                <form className="error-page__form">
                  <div className="error-page__form-input">
                    <input type="search" placeholder="Search here" />

                    <button type="submit">
                      <i className="icon-magnifying-glass"></i>
                    </button>
                  </div>
                </form>

                <a href="/" className="thm-btn error-page__btn">
                  back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
