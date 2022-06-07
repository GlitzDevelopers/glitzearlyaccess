import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
            setSuccessBtnText("Registration Failed!");
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
    <footer className="footer">
      <div className="footer__body">
        <div className="footer__top">
          <div className="footer__typography">
            <h1 className="footer__title">Get notified when we Launch</h1>
            <p className="footer__paragraph">
              We are building something special and we want you to be among the
              first people to use this amazing product! It is a big break for
              online sellers and buyers and buying safely online is going to get
              much more better, safer, fun and rewarding for you!
            </p>
            <p className="footer__paragraph">
              Join our Waitlist and be the first to get notfied when we launch!
            </p>
            <p className="footer__paragraph">
              Can't wait to have you onboard Friend!
            </p>
          </div>
          <form className="footer__form" onSubmit={handleSubmit}>
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
            >
              {successbtntext}
            </button>
          </form>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>Glitz. 2022 - All rights reserved.</p>
          </div>
          <div className="footer__bottom-right">
            <Link to="/">Twitter</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
