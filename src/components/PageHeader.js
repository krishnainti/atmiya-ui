import { Fragment } from "react";

const PageHeader = (props) => {
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
            {props.breadcrumb.map((item, index) => {
              const isLast = index === props.breadcrumb.length - 1;
              return (
                <Fragment key={index}>
                  <li className={isLast ? "active" : ""}>
                    <a href={item.link}>{item.label}</a>
                    {/* {isLast ? item.label : <a href={item.link}>{item.label}</a>} */}
                  </li>

                  {!isLast && (
                    <li>
                      <span>/</span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ul>

          <h2>{props.title}</h2>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
