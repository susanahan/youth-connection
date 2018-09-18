import React, { Component } from "react";

import "./header.css"

export default class Header extends Component{
render(){
    return(
        <div className="header">
            <div className="logo">YC</div>
            <nav className="nav">
            <div className="nav-item"><a>Home</a></div>
            <div className="nav-item"><a>Jobs</a></div>
            <div className="nav-item"><a>Activities</a></div>
            <div className="nav-item"><a>Location</a></div>
            </nav>
        </div>
    )
}
}