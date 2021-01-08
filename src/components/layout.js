import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import logo from "../../content/assets/folder.png";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = <Link to="/"><img src={logo} width="20" height="20" alt="logo" /></Link>
  
  if (isRootPath) {
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        {/* <header style={{ marginTop:"60px", marginBottom:5, textAlign:"center" }}>{header}</header> */}
        <main style={{ marginTop:"80px", marginBottom:5, textAlign:"center" }}>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
