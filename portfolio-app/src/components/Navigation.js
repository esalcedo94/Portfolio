import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div class="navbar-fixed">
        <Navbar
          className="blue-grey lighten-1"
          alignLinks="left"
          brand={
            <a className="brand-logo right" href="/">
              Eduardo Salcedo
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavItem>
            <Link to="/">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link to="/contactme">Contact Me</Link>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
