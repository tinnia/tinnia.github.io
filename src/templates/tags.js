import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import tagicon from "../../content/assets/tag.png"
import Undo from "../../content/assets/undo.png"

const TagsPage = ({ data, location }) =>{
  const posts = data.allMarkdownRemark.nodes
  let tmp = location.pathname.split("/")
  
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="Tags" />
      <div>
        <div className="cate">
          <h2 className="cateTitle"><img className="tagicons" src={tagicon} width="40" height="45" alt="logo" /> {tmp[2]}</h2>
          <a className="cateLogo" href="/tags">
            <img src={Undo} width="40" height="40" alt="logo" />
          </a>
        </div>
        <div className="tagPosts">
          {posts.map((post) => {
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
            return (
              <a href={post.frontmatter.path} key={post.frontmatter.path}>
                <div className="catePostList">
                  <div className="catePostListItem">
                    <div className="catePostListItemImg" style={ciColor}>
                      {post.frontmatter.ci}
                    </div>
                    <div className="catePostListItemTitle">
                      <h4>{post.frontmatter.title}</h4>
                      <small>{post.frontmatter.date.substring(0,10)}</small>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}  
        </div>
      </div>
    </Layout>
)}

export default TagsPage

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      nodes {
        frontmatter {
          path
          title
          date
          ci
        }
      }
    }
  }
`