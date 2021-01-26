import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  if (isRootPath) {
    return (
        <div className="drag rootPage">
          <Header />
          <main>
            {children}
          </main>
        </div>
    )
  } else {
    return (      
        <div className="drag inPage">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
    )
  }
}

export default Layout
