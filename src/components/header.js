import React from 'react'
// import { Link } from "gatsby"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Navbar } from 'react-bootstrap'
import { FaInstagram } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/" style={{ color:"#897eff" }}>TINNIA</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div className="switchToggle">
                <input id="switch"
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                  />
                <label style={{ margin:0 }} htmlFor="switch" />
              </div>
            )}
          </ThemeToggler>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;