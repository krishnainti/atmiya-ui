const PageHeader = () => {
  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
        }}
      ></div>

      <div className="container">
        <div className="page-header__inner">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>

            <li>
              <span>/</span>
            </li>

            <li className="active">Pages</li>
          </ul>

          <h2>404 error</h2>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
