import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md" className="header-section">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" alt="Logo" className="logo"/>
                        </NavbarBrand> 
                        <Collapse isOpen= {this.state.isNavOpen} navbar className="header-menu">
                            <Nav navbar className="links">
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
                                    <NavLink to="/contact-us" className="nav-link">
                                        <span className="fa ha-address-card fa-lg">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
      
      
    </React.Fragment>
        );
    }   
}
export default Header;
