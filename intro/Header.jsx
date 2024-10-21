import React from 'react';
import './Header.css';

import bulblogo from './bulblogo.png'
import { TbMenuOrder } from "react-icons/tb";

const Header = () => {
    return (
        <div className="container-fluid p-3">
            <div className="row align-items-center">
            {/* Logo Section */}
                <div className="col-lg-3 col-md-3 col-sm-12 logo">
                <img src={bulblogo} alt="logo"/>
                <h1>Lear</h1><h1>Novara</h1>
            </div>

          {/* Navigation Section */}
            <div className="col-lg-6 col-md-8 col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <TbMenuOrder/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tutors">Tutors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Authentication Buttons */}
            <div className="col-lg-3 col-md-1 col-sm-12 text-lg-right text-center">
                <button className="btn btn-outline-primary mx-1">Login</button>
                <button className="btn btn-primary mx-1">Register</button>
            </div>
            </div>
        </div>
    );
}

export default Header;
