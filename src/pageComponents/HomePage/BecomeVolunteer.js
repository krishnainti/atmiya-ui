const BecomeVolunteer = () => {
  return (
    <section className="become-volunteer-one">
      <div className="become-volunteer-one__bg-box">
        <div
          className="become-volunteer-one__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgposition="50% 0%"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/become-volunteer-one-bg.jpg)",
          }}
        ></div>
      </div>

      <div
        className="become-volunteer-one__shape-1"
        style={{
          backgroundImage:
            "url(assets/images/shapes/become-volunteer-shape-1.png)",
        }}
      ></div>

      <div className="container">
        <div className="become-volunteer-one__inner">
          <p className="become-volunteer-one__sub-title">Become a Volunteer</p>

          <h3 className="become-volunteer-one__title">Let's Grow Together</h3>

          <div className="become-volunteer-one__btn-box">
            <a href="/" className="thm-btn become-volunteer-one__btn">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVolunteer;
