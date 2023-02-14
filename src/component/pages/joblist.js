import "./joblist.css"
import { NavLink } from "react-router-dom";
const Joblist = ({ jobData }) => {
    //   console.log(menuData);
  
    return (
      <>
        <section >
          {jobData.map((curElem) => {
            const { id, name, category, description } = curElem;
  
            return (
              <>
                <div  className="job" key={id}>
                  <div className="joblist">
                      <span> JOB POSITION - {category}</span>
                      <span> COMPANY - {name} </span>
                      <span>{description}</span>
                  </div>
                  <span><NavLink exact to="/apply" className="apply">apply now</NavLink></span>
                </div>
              </>
            );
          })}
        </section>
      </>
    );
  };
  
  export default Joblist;