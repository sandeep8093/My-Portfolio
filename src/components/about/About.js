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
        Dedicated and Efficient coder specializing in software development, with a passion for managing and extracting valuable
insights from large datasets. Committed to continuous self-development and eager to apply learned skills in a corporate
environment to deliver exceptional service.
        </p>
        
        
      </div>
    </div>
  );
};

export default About;
