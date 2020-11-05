import React from "react"
import { Link, graphql } from "gatsby"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Bio from "../components/bio"
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
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2 style={{ color:"#8C749F", marginBottom:3 }} itemProp="headline">{post.frontmatter.title}</h2>
          <small style={{ color:"#D2ACD1" }}>{post.frontmatter.category}</small> - <small>{post.frontmatter.date}</small>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        {/* <footer>
          <Bio />
        </footer> */}
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
              <Link to={previous.fields.slug} rel="prev" style={{ textDecoration:"None", color: "#D2ACD1" }}>
                <strong><small style={{ color: "#8C749F" }}><FaChevronLeft size="10" /> Before</small></strong> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" style={{ textDecoration:"None", color: "#D2ACD1" }}>
                {next.frontmatter.title} <strong><small style={{ color: "#8C749F" }}>After <FaChevronRight size="10" /></small></strong>
              </Link>
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
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
