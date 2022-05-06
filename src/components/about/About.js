import "./about.css";
import Pic from "../../img/pic.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Pic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am currently in my 3rd year pursuing Btech in the field of Electronics and Telecommunications at IIIT-Bhubaneswar
        </p>
        
        
      </div>
    </div>
  );
};

export default About;
