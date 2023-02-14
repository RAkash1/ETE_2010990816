import { NavLink } from 'react-router-dom';
import './navbar.css'
export default function Navbar(){
    return(
        <nav className="nav">
            <div>
                <NavLink to="/">
                    JOB PORTAL
                </NavLink>
            </div>
            <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/jobs">Job</NavLink></li>
                <li className="login"><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}