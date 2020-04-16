import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (

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
          <NavItem>
            <Link to="/files/resume2020_.pdf" target="_blank" download>
              Résumé
            </Link>
          </NavItem>

          <NavItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/esalcedo01"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </NavItem>
          <NavItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/eduardo-salcedo94/"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </NavItem>
          <NavItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/esalcedo94"
            >
              <i class="fa fa-github"></i>
            </a>
          </NavItem>
        </Navbar>

    );
  }
}

export default Navigation;
