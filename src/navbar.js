import './App.css';
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './logo.png'; 
import dis from './images/discord.png'
import mid from './images/medium.png'
import twitter from './images/twitter.png'
import {
    Link
  } from "react-router-dom";
  
function NavbarComp (){
    return (
        <Navbar expand="lg" fixed="top" variant="dark">
        <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#home"> 
            <img
              src={logo}
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link>
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://metafox.medium.com/">
                  <img className="round"
                    alt=""
                    src={mid}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://twitter.com/metafoxdao">
                  <img className="round"
                    alt=""
                    src={twitter}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://discord.gg/8B9QYp89s">
                  <img className="round"
                    alt=""
                    src={dis}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default NavbarComp;