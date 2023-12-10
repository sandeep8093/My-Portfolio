import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Git from "../../img/git.png";
import LinkedIn from "../../img/linkedIn.png";
import Resume from "../../img/resume.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jyp6fij",
        "template_u7qfisj",
        formRef.current,
        "user_Qdi7ZkNt89BSKlfoh20Tc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              nayaksandeep676@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              K9a Kalinga Nagar, Bhubaneswar, India
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Git} alt="" />
              <a href="https://github.com/sandeep8093">
                https://github.com/sandeep8093
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={LinkedIn} alt="" />
              <a href="https://www.linkedin.com/in/sandeep-kumar-nayak-7440541a7/">
                linkedIn/sandeep-kumar-nayak
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Resume} alt="" />
              <a href="https://drive.google.com/file/d/1Ei_hHUxu2gc9f-6yxcg2SHWPewq7Yx_Q/view?usp=sharing">
                Check out my Resume
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you, Your Response has been submitted..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
