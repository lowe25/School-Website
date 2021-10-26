import { NavLink } from "react-router-dom";
function Academics() {
  return (
    <div className="academics-container">
      <div className="academics-intro">
        <div className="explore">
          <h1>Explore Programs Available at Ridgeview</h1>
        </div>
      </div>
      <div className="programs">
        <div className="undergrad">
          <div className="jeje">
            <div className="btn-con">
              <h2>Undergraduate Programs</h2>
              <NavLink to="/undergraduate" className="nav-links1">
                <input type="submit" value="View Courses" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="graduate">
          <div className="jeje">
            <div className="btn-con">
              <h2>Graduate Programs</h2>
              <NavLink to="/graduate" className="nav-links1">
                <input type="submit" value="View Courses" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;
