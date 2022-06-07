import "./Sectionleft.css";

const Sectionright = ({ title, paragraphone, paragraphtwo, image }) => {
  return (
    <section className="section__container">
      <div className="section__content section__content-right">
        <div className="section__typography">
          <h1 className="section__title">{title}</h1>
          <p className="section__paragraph">{paragraphone}</p>
          <p className="section__paragraph">{paragraphtwo}</p>
        </div>
        <div className="section__image">
          <img src={image} alt="" className="section_img" />
        </div>
      </div>
    </section>
  );
};

export default Sectionright;
