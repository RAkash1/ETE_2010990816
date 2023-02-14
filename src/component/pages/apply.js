import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import "./singup.css"

const Apply = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    about: "" 
  });

  const { name, email, about} = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  
  };

  const onSubmit = async e => {

    navigate('/')
  };

  return (
    <div className="container">
        <h2>APPLY</h2>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <input
              type="text"
              className="in"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
            <input
              type="text"
              className="in"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)
              }
            />
            <input
              type="password"
              className="in"
              placeholder="Enter something about yourself"
              name="about"
              value={about}
              onChange={e => onInputChange(e)}
            />  
          <button className="subtn">Submit</button>
        </form>
        
      </div>
  );
};

export default Apply;
