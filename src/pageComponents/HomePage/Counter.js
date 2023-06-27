const Counter = () => {
  return (
    <section className="counter-one">
      <div className="container">
        <div className="counter-one__inner">
          <div
            className="counter-one-bg"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/counter-one-bg.jpg)",
            }}
          ></div>

          <ul className="list-unstyled counter-one__list">
            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="1000">
                  00
                </h3>

                <span className="counter-one__letter">+</span>
              </div>

              <p className="counter-one__text">webinars</p>
            </li>

            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="200">
                  00
                </h3>

                <span className="counter-one__letter">+</span>
              </div>

              <p className="counter-one__text">Articles</p>
            </li>

            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="50">
                  00
                </h3>

                <span className="counter-one__letter">+</span>
              </div>

              <p className="counter-one__text">Groups</p>
            </li>

            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="45">
                  00
                </h3>

                <span className="counter-one__letter">+</span>
              </div>

              <p className="counter-one__text">Volunteers</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Counter;
