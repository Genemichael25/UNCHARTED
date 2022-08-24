import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        <Navbar className="navbar-back" color="light" light expand="md">
          <NavbarBrand className="navbar-title" href="/">UNCHARTED</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {/* ____________________logged out user________________________ */}
              {!logged_in && (
                <NavItem>
                  <a href={sign_in_route} className="nav-link">
                    Sign In
                  </a>
                </NavItem>
              )}
              {!logged_in && (
                <NavItem>
                  <a href={new_user_route} className="nav-link">
                    Sign Up
                  </a>
                </NavItem>
              )}
              {/* ___________________logged in user___________________ */}
              {logged_in && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Trips
                  </DropdownToggle>
                  <DropdownMenu className="collapse-navbar-collapse" right>
                    <DropdownItem className="topnav-right">
                      <a href="/tripnew"> Log Trip</a>
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/tripindex"> View Trip</a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
              {logged_in && (
                <NavItem>
                  <a href={sign_out_route} className="nav-link">
                    Sign Out
                  </a>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
export default Header
