import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import algorithm from "../../content/assets/algorithm.png"
import study from "../../content/assets/study.png"
import portfolio from "../../content/assets/portfolio.png"
import Boj from "../../content/assets/boj.png"
import Swea from "../../content/assets/swea.png"
import Programmers from '../../content/assets/programmers.png'
import All from '../../content/assets/folder.png'


function date_Desc(a,b) {
    var dateA = new Date(a.frontmatter.date).getTime()
    var dateB = new Date(b.frontmatter.date).getTime()
    return dateA < dateB ? 1 : -1;
}

const Categories = ({ pageContext, data, location }) => {
    const { category } = pageContext
    const site = data.site
    const nodes = data.cats.nodes
    const catGroup = [data.cats.group.map((cat)=> cat.fieldValue)][0]

    const Algorithm = algorithm, Study = study, Portfolio = portfolio
    const BOJ = Boj, SWEA = Swea, PROGRAMMERS = Programmers
    const logo = eval(category)

    const [cnt, setCnt] = useState(0)
    const [, setCheck] = useState(false)
    const [posts, setPosts] = useState({})
    const [select, setSelect] = useState(Object.values(posts).flat())
    

    useEffect(() => {
        let tmp
        if (Object.keys(posts).length === 0) {
            for (var i=0;i<catGroup.length;i++) {
                posts[catGroup[i]] = nodes.filter(node => node.frontmatter.cat === catGroup[i])
            }
            setPosts(posts)
        }
        tmp = Object.values(posts).flat()
        tmp = tmp.sort(date_Desc)
        setSelect(tmp)
    }, [cnt])


    const changePosts = (isChecked, cat) => {
        if (isChecked) {
            if (Object.keys(posts).length === catGroup.length) {
                for (var i=0;i<catGroup.length;i++) {
                    if (catGroup[i] !== cat) {
                        delete posts[catGroup[i]]
                    }
                }
                setPosts(posts)
            } else {
                posts[cat] = nodes.filter(node => node.frontmatter.cat === cat)
                setPosts(posts)
            }
        } else {
            delete posts[cat]
            setPosts(posts)
        }
    }

    
    const checkCat = (check, cat) => {
        setCnt(cnt+1)
        setCheck(!check)
        changePosts(check, cat)
    }    
    
    
    return (
        <Layout location={location} title={site.siteMetadata.title}>
            <SEO title={category} />
            <div>
                <div className="cate">
                    <h2 className="cateTitle">{category}</h2>
                    <img className="cateLogo" src={logo} width="70" height="70" alt="logo" />
                </div>
                <div className="cateBody">
                    <div className="catePost">
                        {select.map(post => {
                            return(
                                <a href={post.frontmatter.path} key={post.frontmatter.path}>
                                    <div className="catePostList">
                                        <div className="catePostListItem">
                                            <div className="catePostListItemImg">
                                                {post.frontmatter.ci}
                                            </div>
                                            <div className="catePostListItemTitle">
                                                <h4>{post.frontmatter.title}</h4>
                                                <small>{post.frontmatter.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                    <div className="cateButtonGroup">
                        {catGroup.map((cat)=> {
                            let catLogo
                            if (cat === 'CERTIFICATE' || cat==='CS' || cat==='ETC' || cat==='BLOG' || cat==='KAGGLE' || cat==='PJT' || cat==='ERROR' || cat==="REFERENCE") {
                                catLogo = All
                            } else {
                                catLogo = eval(cat)
                            }
                            return(
                                <div key={cat}>   
                                    <input id={cat} className="cate-box" type="checkbox" onClick={(e)=> checkCat(e.target.checked, cat)} />
                                    <label htmlFor={cat} className="cate-label">
                                        <img className="cate-logo" src={catLogo} width="20" height="20" alt="logo" />
                                        {cat}
                                    </label>
                                </div>
                            )
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
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { eq: $category } } }) {
        totalCount
        nodes {
            frontmatter {
                date(formatString: "yyyy/MM/DD")
                category
                title
                ci
                cat
                tags
                path
            }
        }
    }
    cats: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { eq: $category } } }) {
        totalCount
        nodes {
            frontmatter {
                date(formatString: "yyyy/MM/DD")
                category
                title
                ci
                cat
                tags
                path
            }
        }
        group(field: frontmatter___cat) {
            totalCount
            fieldValue
            nodes {
                frontmatter {
                  category
                  title
                  ci
                  cat
                  tags
                  path
                }
            }
        }
    }
  }
`