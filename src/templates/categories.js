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
import Certificate from '../../content/assets/certificate.png'
import Cs from '../../content/assets/cs.png'
import Etc from '../../content/assets/more.png'
import Ml from '../../content/assets/ml.png'
import Error from '../../content/assets/error.png'
import Pjt from '../../content/assets/project.png'
import Web from '../../content/assets/web.png'
import Reference from '../../content/assets/reference.png'
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

    const Algorithm = algorithm, Study = study, Project = portfolio
    const BOJ = Boj, SWEA = Swea, PROGRAMMERS = Programmers, REFERENCE = Reference
    const CERTIFICATE = Certificate, CS = Cs, ETC = Etc, ML = Ml
    const ERROR = Error, PJT = Pjt, WEB = Web
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
        tmp = Object.values(posts).flat().sort(date_Desc)
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
                            let ciColor
                            if (post.frontmatter.ci === "Lv1" || /^[B][0-9]/.test(post.frontmatter.ci) || post.frontmatter.ci === 'D1') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #703a2a, #80523a, #8f6a4a, #9e835b)'}
                            } else if (post.frontmatter.ci === "Lv2" || /^[S][0-9]/.test(post.frontmatter.ci) || post.frontmatter.ci === 'D2') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #434658, #6c717d, #979fa4, #c5cfcd)'}
                            } else if (post.frontmatter.ci === 'Lv3' || /^[G][0-9]/.test(post.frontmatter.ci) || post.frontmatter.ci === 'D3') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #c19037, #d5b432, #e8d927, #fbff0b)'}
                            } else if (post.frontmatter.ci === 'Lv4' || /^[P][0-9]/.test(post.frontmatter.ci) || post.frontmatter.ci === 'D4') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #07768f, #4ca0b0, #7bcdd2, #a9fbf5)'}
                            } else if (post.frontmatter.ci === 'ETC') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #77b9d4, #b1caa8, #d8dc79, #f7ef37)'}
                            } else if (post.frontmatter.ci === 'ML') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #5637d7, #9c63c2, #cb90ab, #f1bf90)'}
                            } else if (post.frontmatter.ci === 'CS') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #981b41, #bd6859, #dfaa71, #ffed8a)'}
                            } else if (post.frontmatter.ci === 'Err') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #ff1403, #f6643d, #e6906b, #ccb59b)'}
                            } else if (post.frontmatter.ci === 'Blog') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #47245e, #7a3f7b, #ae5c99, #e57bb8)'}
                            } else if (post.frontmatter.ci === 'EWS') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #5b50de, #6587d3, #5abbc6, #10eeb6)'}
                            } else if (post.frontmatter.ci === 'WEB') {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #747385, #818b7b, #8ba36f, #93bc61)'}
                            } else {
                                ciColor = {color:'white', backgroundImage: 'linear-gradient(310deg, #d34e62, #dd7e7c, #e4aa98, #e6d4b5)'}
                            }
                            let postTitle
                            if (post.frontmatter.title.length >= 50) {
                                postTitle = post.frontmatter.title.substring(0,47) + '...'
                            } else {
                                postTitle = post.frontmatter.title
                            }
                            return(
                                <a href={post.frontmatter.path} key={post.frontmatter.path}>
                                    <div className="catePostList">
                                        <div className="catePostListItem">
                                            <div className="catePostListItemImg" style={ciColor}>
                                                {post.frontmatter.ci}
                                            </div>
                                            <div className="catePostListItemTitle">
                                                <h4>{postTitle}</h4>
                                                <small>{post.frontmatter.date.substring(0,10)}</small>
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
                            if (cat==="Kaggle") {
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
                date
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
                date
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