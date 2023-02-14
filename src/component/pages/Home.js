import React from "react";
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
    return(
        <div className="main">
            <div className="background"></div>
            <div className="p">EXPLORE<br/> YOUR <br/> POTENTIAL!!!<br/>
            <Link to="/jobs" className="linkh">FIND YOUR NEXT JOB HERE</Link>
            </div>
        </div>
    );
}
export default Home;