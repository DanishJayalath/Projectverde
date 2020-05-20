import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { render } from 'react-dom';

class AppNavbar extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">All canals</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink color="dark" href="https://www.youtube.com/watch?v=GbUadD1yM_g&t=10s">dank</NavLink>
                                    <NavLink color="grey" href="https://www.youtube.com/watch?v=3Q7VX-5WvOQ">grand tour</NavLink>
                                    <NavLink color="grey" href="https://www.nea.gov.sg/">NEA</NavLink>
                                </NavItem>
                            </nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );

    }
}

export default AppNavbar;