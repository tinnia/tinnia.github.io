import React from "react"
import useSiteMeta from '../hooks/useSiteMeta'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ location }) => {
  const site = useSiteMeta()

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage