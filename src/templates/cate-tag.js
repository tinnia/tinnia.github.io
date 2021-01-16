import React from "react"

// Components
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { ButtonGroup, Button } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const CateTag = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { category,tag } = pageContext
  const { nodes } = data.allMarkdownRemark
  let cate = category
  let currentTag = tag
  let tags

  if (category === 'Algorithm') {
    tags = ['ALL','BOJ','PROGRAMMERS','SWEA']
  } else if (category === 'Study') {
    tags = ['ALL','CERTIFICATE', 'CS', 'ETC']
  } else {
    if (currentTag ==='cs' || currentTag === 'certificate' || currentTag === 'etc') {
      cate = 'Study'
      tags = ['ALL','CERTIFICATE', 'CS', 'ETC']
    } else if (currentTag ==='boj' || currentTag === 'programmers' || currentTag === 'swea') {
      cate = 'Algorithm'
      tags = ['ALL','BOJ','PROGRAMMERS','SWEA']
    } else {
      cate = 'Portfolio'
      tags = ['ALL', 'PJT', 'KAGGLE', 'BLOG']
      // tags =['ALL','WEB','IOS','KAGGLE', 'BLOG']
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <div>
          <h2 style={{ margin:20 }}>{category}</h2>
          <div style={{ marginBottom:30, padding:20  }}>
            <ButtonGroup style={{ boxShadow:"var(--boxshadow)", width:"100%" }}>
              {tags.map(tag=> {
                const tmp = tag === 'ALL' ? "" : kebabCase(tag)
                const url = '/' + cate + '/' + tmp
                return(
                  <Button key={tag} style={kebabCase(tag)===currentTag ? {fontWeight:"bold", color:"var(--text)", border:0, backgroundColor:"#C587AE"} : {fontWeight:"bold", border:0, color:"var(--text)", backgroundColor:"var(--bg)"}} href={url}>{tag}</Button>
                )
              })}
            </ButtonGroup>
            <ol style={{ marginTop:50 }}>
              {nodes.map(post => {
                const title = post.frontmatter.title
                return(
                  <li style={{ marginTop:20, marginBottom:20 }} key={post.fields.slug}>
                    <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                    <header>
                      <h3 style={{ marginBottom: 0 }}>
                      <Link to={post.frontmatter.path} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                      </h3>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} itemProp="description" />
                    </section>
                    </article>
                    <hr />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
    </Layout>
  )
}

export default CateTag
export const pageQuery = graphql`
  query(
    $tag: String
  ) {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MMM/DD")
          title
          category
          tags
          description
          path
        }
      }
    }
  }
`