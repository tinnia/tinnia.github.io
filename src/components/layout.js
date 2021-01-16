import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Adsense from "../components/adsense"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  if (isRootPath) {
    return (
      <div>
        <Header />
        <main>
          {children}
          <Adsense />
        </main>
      </div>
    )
  } else {
    return (
      <div className="inPage">
        <Header />
        <main>
          {children}
          <Adsense />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
