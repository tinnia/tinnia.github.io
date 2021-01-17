import React from "react"
import useSiteMeta from '../hooks/useSiteMeta'

import algo from "../../content/assets/algorithm.png"
import study from "../../content/assets/study.png"
import portfolio from "../../content/assets/portfolio.png"
import about from "../../content/assets/about.png"
import { AiOutlineTags } from "react-icons/ai"
import { Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ location }) => {
  const site = useSiteMeta()

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title={site.siteMetadata.title} />
      <div>
        <div style={{height:"100%", lineHeight:"100%"}}>
          <Row>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/Algorithm">
                <img src={algo} width="60" height="60" alt="logo" />
                <div className="mainName">ALGORITHM</div>
              </a>
            </Col>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/Study">
                <img src={study} width="60" height="60" alt="logo" />
                <div className="mainName">STUDY</div>
              </a>
            </Col>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/Portfolio">
                <img src={portfolio} width="60" height="60" alt="logo" />
                <div className="mainName">PORTFOLIO</div>
              </a>
            </Col>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/about">
                <img src={about} width="60" height="60" alt="logo" />
                <div className="mainName">ABOUT</div>
              </a>
            </Col>
          </Row>
        </div>
        <div className="mainTag">
          <a href="/tags"><AiOutlineTags />TAG</a>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
