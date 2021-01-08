import React from "react"
import { Link, graphql } from "gatsby"

// Components
import kebabCase from "lodash/kebabCase"
import { ButtonGroup, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Categories = ({ pageContext, data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { category } = pageContext
    const { nodes } = data.allMarkdownRemark
    let tags

    if (category === 'Algorithm') {
        tags = ['ALL','BOJ','PROGRAMMERS','SWEA']
    } else if (category === 'Study') {
        tags = ['ALL','ADsP','CERTIFICATE','CS']
    } else {
        tags =['ALL','PJT', 'KAGGLE', 'BLOG']
        // tags =['ALL','WEB','KOTLIN','KAGGLE', 'BLOG']
    }

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" />
            <div>
                <h2 style={{ textAlign: "center", color:"#C587AE", margin:20 }}>{category}</h2>
                <div style={{ backgroundColor:"var(--bg)", borderRadius:10, boxShadow:"var(--boxshadow)", marginBottom:30, padding:20  }}>
                    <ButtonGroup style={{ boxShadow:"var(--boxshadow)", width:"100%" }}>
                        {tags.map(tag=> {
                            const tmp = tag === 'ALL' ? "" : kebabCase(tag)
                            const url = '/' + category + '/' + tmp
                            return(
                                <Button key={tag} variant="light" style={tag==='ALL' ? {fontWeight:"bold", color:"var(--text)", border:0, backgroundColor:"#C587AE"} : {color:"var(--text)", backgroundColor:"var(--bg)", border:0, fontWeight:"bold"}} href={url}>{tag}</Button>
                                )
                        })}
                    </ButtonGroup>
                    <ol style={{ listStyle: `none`, textAlign:"left", marginTop:50 }}>
                        {nodes.map(post => {
                            const title = post.frontmatter.title
                            return(
                                <li key={post.fields.slug}>
                                    <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                                    <header>
                                        <h2 style={{ marginBottom: 0 }}>
                                        <Link style={{ color: "#8C749F" }} to={post.frontmatter.path} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                        </h2>
                                        <small>{post.frontmatter.date}</small>
                                    </header>
                                    <section>
                                        <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} itemProp="description" />
                                    </section>
                                    </article>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </Layout>
    )
}


export default Categories
export const pageQuery = graphql`
  query($category: String) {     
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        fields{
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