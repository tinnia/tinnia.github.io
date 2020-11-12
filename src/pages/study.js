import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StudyCategory = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes.filter(post => post.frontmatter.category === "정보처리기사" || post.frontmatter.category === "ADsP")

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
              >
                <header>
                  <h2 style={{ marginBottom:0 }}>
                      <Link style={{ color:"#8C749F" }} to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                      </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                      dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default StudyCategory

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
          category
          description
        }
      }
    }
  }
`
