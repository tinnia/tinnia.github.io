import React from "react"
import useSiteMeta from '../hooks/useSiteMeta'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => {
  const site = useSiteMeta()

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title="About" />
      <div style={{ marginTop:20 }}>
        <h2>About Me</h2>
        <p style={{ marginTop:50 }}>Hi.</p>
      </div>
    </Layout>
  )
}

export default AboutPage
