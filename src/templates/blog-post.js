import React from "react"
import { Link, graphql } from "gatsby"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Comments from "../components/comments"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        style={{ textAlign:"left", marginTop:20, marginBottom:20 }}
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header style={{ marginBottom:30 }}>
          <h2 style={{ marginBottom:3 }} itemProp="headline">{post.frontmatter.title}</h2>
          <small>{post.frontmatter.category}</small> - <small>{post.frontmatter.date}</small>
        </header>
        <section
          style={{ textAlign:"left", margin:0 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <Comments />
      </article>



      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <a className="navButton" href={previous.frontmatter.path} rel="prev">
                <small style={{ fontWeight:"bold" }}><FaChevronLeft size="10" /> Before</small> {previous.frontmatter.title}
              </a>
            )}
          </li>
          <li>
            {next && (
              <a className="navButton" href={next.frontmatter.path} rel="prev">
                {next.frontmatter.title} <strong><small style={{ fontWeight:"bold" }}>After <FaChevronRight size="10" /></small></strong>
              </a>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        category
        date(formatString: "YYYY/MMM/DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        path
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        path
      }
    }
  }
`
