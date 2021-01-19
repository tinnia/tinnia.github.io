import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Adsense from "../components/adsense"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  if (isRootPath) {
    return (
        <div className="blur rootPage">
          <Header />
          <main>
            {children}
            <Adsense client='ca-pub-5373443176805821' slot='4000980067' />
          </main>
        </div>
    )
  } else {
    return (      
        <div className="blur inPage">
          <Header />
          <main>
            {children}
            <Adsense client='ca-pub-5373443176805821' slot='4000980067' />
          </main>
          <Footer />
        </div>
    )
  }
}

export default Layout
