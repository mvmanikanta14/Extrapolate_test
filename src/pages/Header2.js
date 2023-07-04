import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { BsUiChecksGrid, BsArrowsFullscreen, BsBell } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import GlobalSearch from 'react-global-search'
//import Appp from "../Appp";


const Header2 = () => {
  return (
    <div className="header2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-lg-2 col-sm-12 logo">
          <Link className="navbar-brand" to="/dashboard">
            {" "}
            <img src="logo-light.png" alt="logo" />{" "} 
          </Link>
        </div>

        <div className="col-md-5 col-lg-5 col-sm-12 search col">
        
          <input 
            id="quick_search"
            className="xs-hide form-control"
            name="quick_search"
            placeholder="Search ..."
            type="text"
           />

         
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>

        <div className="col-md-2 col-lg-2 col-sm-12  header-icons">
          
          <span>
            {" "}
          
            <BsBell />{" "}
          </span>
          <span>
            {" "}
            <BsArrowsFullscreen />{" "}
          </span>
          <span>
            {" "}
            <BsUiChecksGrid />{" "}
          </span>
        </div>

        <div className="col-md-3 col-lg-2 col-sm-12 profile">
          <div>
            <Dropdown className="d-inline-flex profile-bg">
              <img src="favicon.png" className="profile-img"  alt="login-bg"/> 
              <Dropdown.Toggle>
                <div className="text-left float-left">
                  <span className="d-block"> seshasai@anyaudit </span>
                  <span> Partner </span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#"> Profile Page </Dropdown.Item>
                <Dropdown.Item href="#"> Settings </Dropdown.Item>
                <Dropdown.Item href="#">  <NavLink className=""  to="/">
                      Logout
                    </NavLink> </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header2;
