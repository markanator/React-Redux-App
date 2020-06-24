import React,{useState} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default function Header() {
    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className='header-nav'>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><b>Async-Redux:</b> Rick and Morty</NavbarBrand>
                <NavbarToggler onClick={toggle}/>

                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <b>Types:</b>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Characters
                                </DropdownItem>
                                <DropdownItem>
                                    Locations
                                </DropdownItem>
                                <DropdownItem>
                                    Episodes
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>&copy; 2020 Mark Ambrocio</NavbarText>
                </Collapse>
            </Navbar>
        </header>
    );
}