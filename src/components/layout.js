import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Adsense from "../components/adsense"

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
          <div>
            <Adsense />
          </div>
        </div>
    )
  } else {
    return (      
        <div className="drag inPage">
          <Header />
          <main>
            {children}
          </main>
          <div>
            <Adsense />
          </div>
          <Footer />
        </div>
    )
  }
}

export default Layout
