import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Nav = () =>  (
        <div className="navigation">
        <div className="nav-item-container">
        <Link to="/">
        Home |
        </Link>
        <Link to="/projects">
        Projects |
        </Link>
        <Link to="/resume">
        Resume |
        </Link>
        <Link to="/about">
        About |
        </Link>
        <Link to="/contact">
        Contact
        </Link>
        </div>
        </div>
    )

export default Nav
