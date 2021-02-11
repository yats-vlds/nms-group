import React from 'react'
import logo from '../assets/logo.svg'
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                    <img src={logo} className="header__logo"/>
                    <div className="header__nav">
                        <div className="header__navLeft">
                            <Link to='/' className="header__link" style={{marginLeft: "16px"}}>
                                Expertise
                            </Link>
                            <Link to='/' className="header__link">
                                Why are we
                            </Link>
                            <Link to='/' className="header__link">
                                Works
                            </Link>
                        </div>
                        <Link to='/' className="header__linkContacts">
                            Contact us
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Header
