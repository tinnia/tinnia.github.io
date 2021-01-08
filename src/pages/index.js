import React from "react"
import { Link, graphql } from "gatsby"

import algo from "../../content/assets/algorithm.png"
import study from "../../content/assets/study.png"
import portfolio from "../../content/assets/portfolio.png"
import about from "../../content/assets/about.png"
import { AiOutlineTags } from "react-icons/ai"
import { Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  }, location
}) => {
  return (
    <Layout location={location} title={title}>
      <SEO title="Tags" />
      <div style={{ textAlign:"center" }} className="global-wrapper" >
        <div style={{height:"100%", lineHeight:"100%"}}>
          <Row style={{paddingTop:100, paddingLeft:100, paddingRight:100, margin:0}}>
            <Col xs={12} md={6} style={{padding:0}}>
              <div style={{margin:30, paddingTop:40, paddingBottom:40 , backgroundColor:"var(--bg)", borderRadius:10, boxShadow:"var(--boxshadow)"}}>
                <Link style={{ textDecoration: 'none', fontWeight:"bold" }} to="/Algorithm">
                  <h6 style={{ marginBottom:20 }}><img src={algo} width="60" height="60" alt="logo" /></h6>
                  <h6 style={{ color:"var(--text)" }}>ALGORITHM</h6>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} style={{padding:0}}>
              <div style={{margin:30, paddingTop:40, paddingBottom:40 , backgroundColor:"var(--bg)", borderRadius:10, boxShadow:"var(--boxshadow)"}}>
                <Link style={{ textDecoration: 'none', fontWeight:"bold" }} to="/Study">
                  <h6 style={{ marginBottom:20 }}><img src={study} width="60" height="60" alt="logo" /></h6>
                  <h6 style={{ color:"var(--text)" }}>STUDY</h6>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} style={{padding:0}}>
              <div style={{margin:30, paddingTop:40, paddingBottom:40 , backgroundColor:"var(--bg)", borderRadius:10, boxShadow:"var(--boxshadow)"}}>
                <Link style={{ textDecoration: 'none', fontWeight:"bold" }} to="/Portfolio">
                  <h6 style={{ marginBottom:20 }}><img src={portfolio} width="60" height="60" alt="logo" /></h6>
                  <h6 style={{ color:"var(--text)" }}>PORTFOLIO</h6>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} style={{padding:0}}>
              <div style={{margin:30, paddingTop:40, paddingBottom:40 , backgroundColor:"var(--bg)", borderRadius:10, boxShadow:"var(--boxshadow)"}}>
                <Link style={{ textDecoration: 'none', fontWeight:"bold", color:"var(--color)" }} to="/about">
                  <h6 style={{ marginBottom:20 }}><img src={about} width="60" height="60" alt="logo" /></h6>
                  <h6 style={{ color:"var(--text)" }}>ABOUT</h6>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <h6><AiOutlineTags /><Link style={{ textDecoration:"none", color:"var(--color)" }} to="/tags">TAG</Link></h6>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MMM/DD")
          title
          description
        }
      }
    }
  }
`
