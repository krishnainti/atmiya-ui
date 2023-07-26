const Footer = () => {
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/site-footer-bg.jpg)",
        }}
      ></div>

      <div className="site-footer__top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__about-logo">
                  <a href="/">
                    <img src="assets/images/resources/footer-logo.png" alt="" />
                  </a>
                </div>

                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">
                    Educate, Enrich, Empower & Elevate
                  </p>
                </div>

                <div className="footer-widget__btn">
                  <a href="https://www.paypal.com/donate/?hosted_button_id=NLTHZX6RZ3QG4">
                    {" "}
                    <span className="fa fa-heart"></span>Donate now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__links clearfix">
                <h3 className="footer-widget__title">Links</h3>

                <ul className="footer-widget__links-list list-unstyled clearfix">
                  <li>
                    <a href="/about">About us</a>
                  </li>

                  <li>
                    <a href="/contact">Contact</a>
                  </li>

                  <li>
                    <a href="/">Latest News</a>
                  </li>

                  <li>
                    <a href="/">Recent Events</a>
                  </li>

                  <li>
                    <a href="/">Volunteers</a>
                  </li>

                  <li>
                    <a href="/">Members</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget__column footer-widget__non-profit clearfix">
                <h3 className="footer-widget__title">F.A.B.R.I.C.</h3>

                <ul className="footer-widget__non-profit-list list-unstyled clearfix">
                  <li>
                    <a href="/fire">F.I.R.E. (Investments)</a>
                  </li>

                  <li>
                    <a href="/asara">A.S.A.R.A. (Students)</a>
                  </li>

                  <li>
                    <a href="/best">B.E.S.T. (Business)</a>
                  </li>

                  <li>
                    <a href="/women">Real Women</a>
                  </li>

                  <li>
                    <a href="/immi">Immigration (USA)</a>
                  </li>

                  <li>
                    <a href="/community">Community Affairs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>

                <p className="footer-widget__contact-text">
                  2021 Lakeside Pkwy
                  <br /> Flower Mound TX 75028
                  <br />
                  United States of America{" "}
                </p>

                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope"></i>
                    </div>

                    <div className="text">
                      <p>
                        <a href="mailto:info at atmiyausa dot org">
                          info at atmiyausa at org
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>

                    <div className="text">
                      <p>
                        <a href="mailto:info at atmiyausa.org">
                          info at atmiyausa at org
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="site-footer__social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>

                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>

                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © All Copyright 2023 by <a href="/">ATMIYA USA</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
