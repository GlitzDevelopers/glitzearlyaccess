import React, { useState } from "react";
import Nav from "../../components/Nav";
import image4 from "../../assets/image4.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import "./Homepage.css";
import Sectionleft from "../../components/sections/Sectionleft";
import Sectionright from "../../components/sections/SectionRight";
import Footer from "../../components/Footer";

const Homepage = (props) => {
  const [successbtntext, setSuccessBtnText] = useState("Request Early Access");
  const [successbtntextcolor, setSuccessBtnTextColor] = useState("#2376d9");
  const [email, setEmail] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(
    "Enter your email..."
  );
  const [inputDisable, setInputDisable] = useState(false);
  const [btnCursor, setBtnCursor] = useState("pointer");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      fetch(`/api/memberAdd?email=${email}`)
        .then((res) => res.json())
        .then((json) => {
          if (json.status === "subscribed") {
            setSuccessBtnText("Registration Successful");
            setSuccessBtnTextColor("#23c550");
            setInputPlaceholder("");
            setEmail("");
            setInputDisable(true);
            setBtnCursor("none");
          } else if (json.title === "Member Exists") {
            setSuccessBtnText("You already subscribed for early access");
            setSuccessBtnTextColor("#23c550");
            setEmail("");
            setInputDisable(true);
            setBtnCursor("none");
          } else {
            setSuccessBtnText("Registration Failed");
            setSuccessBtnTextColor("#ff0000");
            setEmail("");
            setInputDisable(true);
            setBtnCursor("none");
            setInputPlaceholder("");
          }
        })
        .catch((err) => {
          console.log("Error: ", err);
        });

      // setSuccessBtnText("Registration Successful");
      // setSuccessBtnTextColor("#23C550");
      // setEmail("");
      // setInputDisable(true);
      // setBtnCursor("none");
      // setInputPlaceholder("");
    }
  };
  return (
    <>
      <Nav />
      <div className="homepage">
        <section className="sectionone__container">
          <div className="sectionone__content">
            <div className="sectionone__typography">
              <h1 className="sectionone__title">
                Fast, Simple, Convenient way of shopping Online.
              </h1>
              <p className="sectionone__paragraph">
                Glitz is revolutionizing ecommerce by making it decentralized,
                borderless, simple, fun and rewarding. Selling and buying from
                sellers can't be any safer and faster! whatever you want, you
                get!
              </p>
              <div className="ltes">
                <form className="sectionone__form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder={inputPlaceholder}
                    value={email}
                    onChange={handleEmail}
                    disabled={inputDisable}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,0}$"
                  />
                  <button
                    style={{
                      background: `${successbtntextcolor}`,
                      cursor: `${btnCursor}`,
                    }}
                    type="submit"
                    disabled={inputDisable}
                  >
                    {successbtntext}
                  </button>
                </form>
              </div>
            </div>
            <div className="sectionone__image">
              <img src={image4} alt="" className="sectionone_img" />
            </div>
          </div>
        </section>
        <section className="sectiontwo__container">
          <div className="sectiontwo__content">
            <h1>Our Features</h1>
            <p className="sectiontwo__cntpra">
              We're bringing new features to ecommerce and we can't wait to
              share it with you.
            </p>
            <p className="sectiontwo__cntpra2">
              Worldwide audience, Social media-like selling structure. Creating
              a customised store in minutes. Real time orders and payments,
              Crypto Payment, Discover pages, Shopping points and much more.
            </p>
          </div>
        </section>
        <Sectionleft
          image={image1}
          title="Smooth and Quick Checkout"
          paragraphone="Pay within minutes, and receive your orders without stress! you can pay with cash and crypto from anywhere in the world, without hassle"
        />
        <Sectionright
          image={image2}
          title="Friendly Shopping Interface"
          paragraphone="Glitz friendly and safe shopping interface makes buying online stress-free, safe and guarantees you value."
        />

        <Sectionleft
          image={image3}
          title="Community  for more interactions"
          paragraphone="You can join Consumer communities of your choice to get informations about products and services, connect with people and tell your seller that you think about their products."
        />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
