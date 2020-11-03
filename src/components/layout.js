import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h3 style={{ color:"#8C749F" }} className="main-heading">
        <Link to="/">{title}</Link>
      </h3>
    )
    
    return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header style={{ marginBottom:5 }} className="global-header">{header}</header>
      <Header isRootPath={isRootPath} />
      <main>{children}</main>
      <footer>
        ©{new Date().getFullYear()}, Built with
        {` `}
        <a style={{ color:"#D2ACD1", textDecoration:"None" }} href="https://tinnia.github.io">TINNIA</a>
      </footer>
    </div>
    )
  } else {
    header = (
      <Link style={{ color:"#C587AE" }} className="header-link-home" to="/">
        {title}
      </Link>
    )

    return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header style={{ marginBottom:5 }} className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        ©{new Date().getFullYear()}, Built with
        {` `}
        <a style={{ color:"#D2ACD1", textDecoration:"None" }} href="https://tinnia.github.io">TINNIA</a>
      </footer>
    </div>
    )
  }
}

export default Layout
