import React from 'react';

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
  DropdownItem
} from 'reactstrap';

export function NavList() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brian Hague</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/brian-hague-7441908/">
                Linked In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/alphaseinor">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Calculator</DropdownItem>
                <DropdownItem>NASA Photo of the Day</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
