import { useSelector } from "react-redux";

const MobileNav = () => {
  const { token } = useSelector((state) => state.user);

  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>

      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <a href="index.html" aria-label="logo image">
            <img src="assets/images/resources/logo-2.png" width="143" alt="" />
          </a>
        </div>

        <div className="mobile-nav__container"></div>

        {token && (
          <button className="yellow-button mt-4">
            <a href="/logout">Logout</a>
          </button>
        )}

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>

            <a href="mailto:info at atmiyausa dot org">
              info at atmiyausa dot org
            </a>
          </li>

          <li>
            <i className="fa fa-phone-alt"></i>

            <a href="mailto:info at atmiyausa dot org">
              info at atmiyausa dot org
            </a>
          </li>
        </ul>

        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter"></a>

            <a href="#" className="fab fa-facebook-square"></a>

            <a href="#" className="fab fa-pinterest-p"></a>

            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
