import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Comments from "../components/comments"

import Boj from "../../content/assets/boj.png"
import Swea from "../../content/assets/swea.png"
import Programmers from '../../content/assets/programmers.png'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const BlogPostTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const { previous, next } = data    
  const BOJ = Boj, SWEA = Swea, PROGRAMMERS = Programmers

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        itemScope
        itemType="http://schema.org/Article"
        className="blog-post"
      >
        <header className="postHeader">
          <div>
            <h2 itemProp="headline">{post.frontmatter.title}</h2>
            <small>{post.frontmatter.category}</small> - <small>{post.frontmatter.date}</small>
          </div>
          {/* <div className="">
            {post.frontmatter.ci}
          </div> */}
        </header>
        <section className="postBody"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <Comments />
      </article>

      {/* <nav className="blog-post-nav">
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
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
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
        ci
        cat
        date(formatString: "YYYY/MMM/DD")
        description
      }
    }
  }
`
