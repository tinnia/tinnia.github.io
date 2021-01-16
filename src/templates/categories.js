import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import algorithm from "../../content/assets/algorithm.png"
import study from "../../content/assets/study.png"
import portfolio from "../../content/assets/portfolio.png"
import Boj from "../../public/img/boj.png"
import Swea from "../../public/img/swea.png"
import Programmers from '../../public/img/programmers.png'
import All from '../../public/img/list.png'

const Categories = ({ pageContext, data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const { category } = pageContext
    const { nodes } = data.allMarkdownRemark
    const cats = [data.cats.group.map((cat)=> cat.fieldValue)][0]

    const Algorithm = algorithm, Study = study, Portfolio = portfolio
    const BOJ = Boj, SWEA = Swea, PROGRAMMERS = Programmers
    const logo = eval(category)

    const [cnt, setCnt] = useState(0)
    const [, setCheck] = useState(false)
    const [posts, setPosts] = useState({})
    const [select, setSelect] = useState(Object.values(posts).flat())
    

    useEffect(() => {
        if (Object.keys(posts).length === 0) {
            for (var i=0;i<cats.length;i++) {
                posts[cats[i]] = nodes.filter(node => node.frontmatter.cat === cats[i])
            }
            setPosts(posts)
        }
        const tmp = Object.values(posts).flat()
        setSelect(tmp)
    }, [cnt])


    const changePosts = (isChecked, cat) => {
        if (isChecked) {
            if (Object.keys(posts).length === cats.length) {
                for (var i=0;i<cats.length;i++) {
                    if (cats[i] !== cat) {
                        delete posts[cats[i]]
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
        <Layout location={location} title={siteTitle}>
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
                        {/* {tmp.map(post => (
                            console.log(tmp)

                            <div key={post}>
                                {post}
                            </div>
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
                        ))} */}
                    </div>
                    <div className="cateButtonGroup">
                        {cats.map((cat)=> {
                            let catLogo
                            if (cat === 'CERTIFICATE' || cat==='CS' || cat==='ETC' || cat==='BLOG' || cat==='KAGGLE' || cat==='PJT') {
                                catLogo = All
                            } else {
                                catLogo = eval(cat)
                            }
                            console.log(catLogo)
                            return(
                                <div>   
                                    <input id={cat} className="cate-box" type="checkbox" onClick={(e)=> checkCat(e.target.checked, cat)} key={cat} />
                                    <label for={cat} className="cate-label">
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
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          date(formatString: "MMMM d, yyyy")
          category
          title
          ci
          cat
          tags
          path
        }
      }
    }
    cats: allMarkdownRemark(filter: { frontmatter: { category: { eq: $category } } }) {
        group(field: frontmatter___cat) {
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