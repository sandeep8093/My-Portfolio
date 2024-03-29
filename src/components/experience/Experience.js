import "./experience.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { experience } from "../../data";

const Experience = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <article className="job-info">
        {experience.map((item, index) => {
          return (
            <>
            <a href={item.website}>
                {" "}
                <h4>{item.company}</h4>
              </a>
              <h3>{item.title}</h3>
              <p className="job-date">{item.dates}</p>

              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                {item.duties}
              </div>
            </>
          );
        })}
      </article>
    </section>
  );
};

export default Experience;
