import React from "react"
import useSiteMeta from '../hooks/useSiteMeta'
import { graphql } from "gatsby"

import { Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

import algo from "../../content/assets/algorithm.png"
import study from "../../content/assets/study.png"
import portfolio from "../../content/assets/portfolio.png"
import about from "../../content/assets/about.png"

const BlogIndex = ({ location, data }) => {
  const site = useSiteMeta()
  const { nodes } = data.allMarkdownRemark
  const total_cats = [...new Set([data.tags.group.map((tag)=> tag.nodes[0].frontmatter.cat)][0])]
  let tmp = [data.tags.group.map((tag)=> [tag.fieldValue, tag.totalCount])][0]
  tmp.sort(function(a, b) {
      return b[1] - a[1]
  })
  const ten_tags = []
  tmp.map((i) => {
    if (ten_tags.length < 11) {
      if (!total_cats.includes(i[0])) {
        ten_tags.push(i)
      }
    } 
  })

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title={site.siteMetadata.title} />
      <div>
        <div style={{height:"100%", lineHeight:"100%"}}>
          <Row>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/Algorithm">
                <img src={algo} width="60" height="60" alt="logo" />
                <div className="mainName">ALGORITHM</div>
              </a>
            </Col>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/Study">
                <img src={study} width="60" height="60" alt="logo" />
                <div className="mainName">STUDY</div>
              </a>
            </Col>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/Project">
                <img src={portfolio} width="60" height="60" alt="logo" />
                <div className="mainName">PROJECT</div>
              </a>
            </Col>
            <Col className="mainCat" xs={12} md={2}>
              <a href="/about">
                <img src={about} width="60" height="60" alt="logo" />
                <div className="mainName">ABOUT</div>
              </a>
            </Col>
          </Row>
          
          <div className="main">
            <h3 className="recentTitle">🔖 TAGs</h3>
            <a className="maintoTags" href="/tags">
              <div >
                전체 Tag
              </div>
            </a>
          </div>
          <div className="mainTags">
            {ten_tags.map(tag => {
              let tagUrl
              if (tag[0] === "ADsP") {
                tagUrl = "/tags/A-Ds-P"
              } else {
                tagUrl = "/tags/" + tag[0]
              }
              return (
                <a href={tagUrl} key={tag}>
                  <button className="tagButton">
                    <span>{tag[0]} </span>
                    <div className="tagBadge">{tag[1]}</div>
                  </button>
                </a>
              )
            })}
          </div>
          
          <h3 className="recentTitle">📍 Recent Posts</h3>
          <div className="recentPosts">
            {nodes.map(post => {
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
              return(
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
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5) {
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
    tags : allMarkdownRemark {
      group(field: frontmatter___tags) {
          fieldValue
          totalCount
          nodes {
              frontmatter {
                  cat
              }
          }
      }
  }
  }
`
