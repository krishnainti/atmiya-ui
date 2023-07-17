import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { token, isAdmin } = useSelector((state) => state.user);

  const location = useLocation();

  return (
    <header className="main-header">
      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
              <div className="main-menu__logo">
                <a href="index.html">
                  <img src="assets/images/resources/logo-1.png" alt="" />
                </a>
              </div>

              <div className="main-menu__shape-1 float-bob-x">
                <img src="assets/images/shapes/main-menu-shape-1.png" alt="" />
              </div>
            </div>

            <div className="main-menu__right">
              <div className="main-menu__right-top">
                <div className="main-menu__right-top-left">
                  <div className="main-menu__volunteers">
                    <div className="main-menu__volunteers-icon">
                      <img
                        src="assets/images/icon/main-menu-heart-icon.png"
                        alt=""
                      />
                    </div>

                    <div className="main-menu__volunteers-text-box">
                      <p className="main-menu__volunteers-text">
                        <a href="join.html">
                          Let's Grow
                          <span>Together</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="main-menu__right-top-right">
                  <div className="main-menu__right-top-address">
                    <ul className="list-unstyled main-menu__right-top-address-list">
                      <li>
                        <div className="icon">
                          <span className="icon-phone-call"></span>
                        </div>

                        <div className="content">
                          <p>Helpline</p>

                          <h5>
                            <a href="mailto:info at atmiyausa dot org">
                              info at atmiyausa dot org
                            </a>
                          </h5>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-message"></span>
                        </div>

                        <div className="content">
                          <p>Send email</p>

                          <h5>
                            <a href="mailto:info at atmiyausa dot org">
                              info at atmiyausa dot org
                            </a>
                          </h5>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-location"></span>
                        </div>

                        <div className="content">
                          <p>2021 Lakeside Pkwy</p>

                          <h5>Flower Mound TX 75028 USA</h5>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="main-menu__right-top-social">
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

              <div className="main-menu__right-bottom">
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>

                  <ul className="main-menu__list">
                    <li
                      className={`dropdown megamenu ${
                        location.pathname === "/" ? "current" : ""
                      }`}
                    >
                      <a href="/">Home </a>

                      <ul></ul>
                    </li>

                    <li
                      className={`dropdown ${
                        ["/about", "/reg501c3", "/corporate", "/pvsa"].includes(
                          location.pathname
                        )
                          ? "current"
                          : ""
                      } `}
                    >
                      <a href="#">About Us</a>

                      <ul>
                        <li>
                          <a href="/about">About Us</a>
                        </li>

                        <li>
                          <a href="bylaws.html">Bylaws</a>
                        </li>

                        <li>
                          <a href="/reg501c3">501(c)3</a>
                        </li>

                        <li>
                          <a href="/corporate">Corporate Matching</a>
                        </li>

                        <li>
                          <a href="/pvsa">PVSA</a>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`dropdown ${
                        [
                          "/fire",
                          "/asara",
                          "/best",
                          "/women",
                          "/immi",
                          "/community",
                        ].includes(location.pathname)
                          ? "current"
                          : ""
                      } `}
                    >
                      <a href="#">Services</a>

                      <ul>
                        <li>
                          <a href="/fire">F.I.R.E.</a>
                        </li>

                        <li>
                          <a href="/asara">A.S.A.R.A.</a>
                        </li>

                        <li>
                          <a href="/best">B.E.S.T.</a>
                        </li>

                        <li>
                          <a href="/women">Real Women</a>
                        </li>

                        <li>
                          <a href="/immi">Immigration</a>
                        </li>

                        <li>
                          <a href="/community">Community Affairs</a>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`dropdown ${
                        [
                          "/board",
                          "/exec",
                          "/service",
                          "/state",
                          "/city",
                        ].includes(location.pathname)
                          ? "current"
                          : ""
                      } `}
                    >
                      <a href="#">Leadership</a>

                      <ul>
                        <li>
                          <a href="/board">Board Directors</a>
                        </li>

                        <li>
                          <a href="/exec">Executive Committees</a>
                        </li>

                        <li>
                          <a href="/service">Service Coordinators</a>
                        </li>

                        <li>
                          <a href="/state">State Coordinators</a>
                        </li>

                        <li>
                          <a href="/city">City Coordinators</a>
                        </li>
                      </ul>
                    </li>

                    {token && !isAdmin && (
                      <li
                        className={`dropdown ${
                          ["/my-profile"].includes(location.pathname)
                            ? "current"
                            : ""
                        } `}
                      >
                        <a href="#">Membership</a>

                        <ul>
                          <li>
                            <a href="/my-profile">My Profile</a>
                          </li>
                        </ul>
                      </li>
                    )}

                    {!token && (
                      <li
                        className={`dropdown ${
                          ["/join", "/login"].includes(location.pathname)
                            ? "current"
                            : ""
                        } `}
                      >
                        <a href="#">Membership</a>

                        <ul>
                          <li>
                            <a href="/join">Become a Member</a>
                          </li>

                          <li>
                            <a href="/login">Login - Current Member</a>
                          </li>
                        </ul>
                      </li>
                    )}

                    {token && isAdmin && (
                      <li
                        className={`dropdown ${
                          ["/pending-profiles"].includes(location.pathname)
                            ? "current"
                            : ""
                        } `}
                      >
                        <a href="/pending-profiles">Pending Profiles</a>
                      </li>
                    )}

                    <li>
                      <a href="/contact">Contact</a>
                    </li>

                    {token && (
                      <li>
                        <button className="yellow-button">
                          <a href="/logout">Logout</a>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="main-menu__main-menu-content-box">
                  <div className="main-menu__search-cat-btn-box">
                    <div className="main-menu__search-box">
                      <a
                        href="#"
                        className="main-menu__search search-toggler icon-magnifying-glass"
                      />
                    </div>

                    <div className="main-menu__btn-box">
                      <a
                        href="https://www.paypal.com/donate/?hosted_button_id=NLTHZX6RZ3QG4"
                        className="main-menu__btn"
                      >
                        {" "}
                        <span className="fa fa-heart"></span>Donate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
