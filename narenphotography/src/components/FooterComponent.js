import React, {Component} from 'react';

import {Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <img src="assets/images/logo.png" alt="Logo" className="logo"/>
                </div>
                <div>
                     {/* <p>Copyrights Naren Photgraphy 2018</p> */}
                </div>
                <Nav navbar className="footer-links">
                    <NavItem>
                        <NavLink to="/home" className="nav-link">
                            <span className="fa ha-home fa-lg">Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about-us" className="nav-link">
                            <span className="fa ha-info fa-lg">About Us</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/gallery" className="nav-link">
                            <span className="fa ha-list fa-lg">Gallery</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contactus" className="nav-link">
                            <span className="fa ha-address-card fa-lg">Contact Us</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Footer;