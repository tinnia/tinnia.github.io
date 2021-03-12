import React from "react"
import useSiteMeta from '../hooks/useSiteMeta'
import { graphql } from "gatsby"

import hashtag from "../../content/assets/hashtag.png"
import tagicon from "../../content/assets/tag.png"
import pin from "../../content/assets/pin.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

const BlogIndex = ({ location, data }) => {
    const site = useSiteMeta()
    const total_cats = [...new Set([data.allMarkdownRemark.group.map((tag)=> tag.nodes[0].frontmatter.cat)][0])]
    let tmp = [data.allMarkdownRemark.group.map((tag)=> [tag.fieldValue, tag.totalCount])][0]
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
    const total_tags = {}
    data.allMarkdownRemark.group.map((tag)=> {
      if (tag.nodes[0].frontmatter.cat in total_tags) {
          total_tags[tag.nodes[0].frontmatter.cat].push([tag.fieldValue, tag.totalCount])
      } else {
          total_tags[tag.nodes[0].frontmatter.cat] = []
          total_tags[tag.nodes[0].frontmatter.cat].push([tag.fieldValue, tag.totalCount])
      }
    })

    return (
      <Layout location={location} title={site.siteMetadata.title}>
        <SEO title={site.siteMetadata.title} />
        <div>
          <div className="cate">
            <h2 className="cateTitle">Tags</h2>
            <img
              className="cateLogo"
              src={hashtag}
              width="70"
              height="70"
              alt="logo"
            />
          </div>
          <div className="tags">
            <div className="recommendTags">
              <h5>
                <img src={pin} width="25" height="28" alt="logo" /> 추천 태그
              </h5>
              {ten_tags.map(tag => {
                let tagUrl
                if (tag[0] === "ADsP") {
                  tagUrl = "/tags/A-Ds-P"
                } else {
                  let tmp = replaceAll(tag[0], ' ','_')
                  tmp = replaceAll(tmp, "’", '_')
                  tagUrl = "/tags/" + tmp
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
            <hr className="taghr" />
            {total_cats.map(cat => {
              if (total_tags[cat].length !== 1) {
                return (
                  <div className="tagGroup" key={cat}>
                    <h5>
                      <img src={tagicon} width="25" height="28" alt="logo" />{" "}
                      {cat}
                    </h5>
                    {total_tags[cat].map(tag => {
                      if (tag[0] !== cat) {
                        let tagUrl
                        if (tag[0] === "ADsP") {
                          tagUrl = "/tags/A-Ds-P"
                        } else {
                          let tmp = replaceAll(tag[0], ' ','_')
                          tmp = replaceAll(tmp, "’", '_')
                          tagUrl = "/tags/" + tmp
                        }
                        return (
                          <a href={tagUrl} key={tag}>
                            <button className="tagButton">
                              <span>{tag[0]} </span>
                              <div className="tagBadge">{tag[1]}</div>
                            </button>
                          </a>
                        )
                      }
                    })}
                  </div>
                )
              }
            })}
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
    allMarkdownRemark {
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
