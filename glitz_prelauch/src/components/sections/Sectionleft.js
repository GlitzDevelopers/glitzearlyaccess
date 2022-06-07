import React from "react";
import "./Sectionleft.css";

const Sectionleft = ({ title, paragraphone, paragraphtwo, image }) => {
  return (
    <section className="section__container">
      <div className="section__content">
        <div className="section__image">
          <img src={image} alt="" className="section_img" />
        </div>
        <div className="section__typography">
          <h1 className="section__title">{title}</h1>
          <p className="section__paragraph">{paragraphone}</p>
          <p className="section__paragraph">{paragraphtwo}</p>
        </div>
      </div>
    </section>
  );
};

export default Sectionleft;
