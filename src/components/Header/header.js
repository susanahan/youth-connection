import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css"

export default class Header extends Component{
render(){
    return(
        <div className="header">
            <div className="logo">YC</div>
            <nav className="nav">
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/jobs">Jobs</Link></div>
            <div className="nav-item"><Link to="/activities">Activities</Link></div>
            <div className="nav-item"><Link to="/location">Location</Link></div>
            </nav>
        </div>
    )
}
}