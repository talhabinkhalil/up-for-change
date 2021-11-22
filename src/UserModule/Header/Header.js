import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import Images from '../../Common/Ui/Image'
import { navbarItems } from '../../ViewData/NavBarItems'

const Header = (props) => {
  return (
    <Navbar  variant="dark" expand="lg" fixed={props.fixed && props.fixed} className="navbar-main" >
      <Container >
        <Navbar.Brand href="#home">
          <span><Images src="icon.png" extraClass="app-feature-mobile" /></ span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-navbar">
            {
              props.navbarItems.map(data => (
                data.dropdown ? (
                  <NavDropdown title={data.value} id="navbar-dropdown">
                    {data.dropdownValues &&
                      data.dropdownValues.map(dropdownV => (
                        <NavDropdown.Item href={`${dropdownV.linkTo}`}>{dropdownV.dropdownValue}</NavDropdown.Item>                      
                      ))
                    }
                  </NavDropdown>
                ) : (
                  <Nav.Link href={`${data.linkTo}`} className="navbar-items">{data.value}</Nav.Link>
                )
              ))
            }
          </Nav>
          </Navbar.Collapse>
          {props.button &&
            <button className="signup-button">SIGN UP</button>          
          }

      </Container>
  </Navbar>
  )
}

export default Header
