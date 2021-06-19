import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, Jumbotron} from 'reactstrap';
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
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" alt="Logo" height="30" width="50"/>
                        </NavbarBrand> 
                        <Collapse isOpen= {this.state.isNavOpen} navbar>
                            <Nav navbar>
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
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Naren Photography</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
        );
    }   
}
export default Header;
