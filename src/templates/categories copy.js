import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

// Components
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Algorithm from "../../content/assets/algorithm.png"
import Study from "../../content/assets/study.png"
import Portfolio from "../../content/assets/portfolio.png"
import BOJ from "../../public/img/boj.png"
import SWEA from "../../public/img/swea.png"
import PROGRAMMERS from '../../public/img/programmers.png'
import ALL from '../../public/img/list.png'

const Categories = ({ pageContext, data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { category } = pageContext
    const { nodes } = data.allMarkdownRemark
    const tags = [data.tags.group.map((tag)=> tag.fieldValue)]
    console.log(tags)
    // let tags
    let logo
    let tagLogo
    // let isChecked
    // let isTag
    // const [isTag, setTag] = useState(null)
    // console.log(isTag)
    // const setState = (e) => {
    //     console.log(e.target.tag)
    //     setTag(e.target.tag)
    // }
    const [check, setCheck] = useState(new Set())

    const checkedHandler = (tag, isChecked) => {
        if (isChecked) {
            check.add(tag);
            console.log(check)
            setCheck(check)
        } else if (!isChecked && check.has(tag)) {
            check.delete(tag);
            console.log(check)
            setCheck(check)
        }
    }

    const [isChecked, setChecked] = useState(false);

    const checkHandler = (checked, tag) => {
        setChecked(!isChecked);
        checkedHandler(tag, checked)
    }

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={category} />
            <div>
                <div className="cate">
                    <h2 className="cateTitle">{category}</h2>
                    <img className="cateLogo" src={logo} width="70" height="70" alt="logo" />
                </div>
                <div className="cateBody">
                    <div className="catePost">
                        {nodes.map(post => {
                            const title = post.frontmatter.title
                            return(
                                <a href={post.frontmatter.path} key={post.fields.slug}>
                                    <div className="catePostList">
                                        <div className="catePostListItem">
                                            <div className="catePostListItemImg">
                                                <p>D3</p>
                                            </div>
                                            {/* <img className="cateLogo" src={logo} width="70" height="70" alt="logo" />    */}
                                            <div className="catePostListItemTitle">
                                                <h4>{title}</h4>
                                                <small>{post.frontmatter.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                    <div className="cateButtonGroup">
                        {tags.map((tag)=> {
                            // if (tag === 'BOJ') {
                            //     tagLogo = BOJ
                            // } else if (tag === 'SWEA') {
                            //     tagLogo = SWEA
                            // } else if (tag === 'PROGRAMMERS') {
                            //     tagLogo = PROGRAMMERS
                            // } else {
                            //     tagLogo = ALL
                            // }
                            // const tmp = tag === "ALL" ? "" : kebabCase(tag)
                            // const url = '/' + category + '/' + tmp
                            <div className="cateButton">
                                <img className="cateButtonLogo" src={tagLogo} width="20" height="20" alt="logo" />
                                <div className="cateButtonTag">
                                    {tag}
                                </div>
                            </div>
                        })}
                    </div>
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
          date(formatString: "MMMM d, yyyy")
          title
          category
          tags
          description
          path
        }
      }
    }
    tags : allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { eq: $category } } }
    ) {
        group(field: frontmatter___tags) {
            fieldValue
        }
    }
  }
`