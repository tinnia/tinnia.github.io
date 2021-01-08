import React from "react"
// import PropTypes from "prop-types"

// Utilities
// import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { AiOutlineTags } from "react-icons/ai"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  }, location
}) =>{
  return (
    <Layout location={location} title={title}>
      <SEO title="Tags" />
      <div>
        <h2 style={{ textAlign: "center", color:"#C587AE", margin:20 }}>TAGs</h2>
        <ul style={{ textAlign:"center", padding:0 }}>
          {group.map(tag => {
            if (tag.fieldValue === 'a-ds-p'||tag.fieldValue === 'certificate' ||tag.fieldValue === 'cs'){
              return (
                <li style={{ listStyle:"none", padding:10 }} key={tag.fieldValue}>
                  <h6>
                    <AiOutlineTags />
                    <Link style={{ marginLeft:5, color:"var(--text)", textDecoration:"none "}} to={`/Study/${tag.fieldValue}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </h6>
                </li>
            )} else if (tag.fieldValue === 'boj'||tag.fieldValue === 'programmers'||tag.fieldValue ==='swea'){
              return (
                <li style={{ listStyle:"none", padding:10 }} key={tag.fieldValue}>
                  <h6>
                    <AiOutlineTags />
                    <Link style={{ marginLeft:5, color:"var(--text)", textDecoration:"none "}} to={`/Algorithm/${tag.fieldValue}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </h6>
                </li>
            )} else {
              return (
                <li style={{ listStyle:"none", padding:10 }} key={tag.fieldValue}>
                  <h6>
                    <AiOutlineTags />
                    <Link style={{ marginLeft:5, color:"var(--text)", textDecoration:"none "}} to={`/Portfolio/${tag.fieldValue}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </h6>
                </li>
            )}
          })}
        </ul>
      </div>
    </Layout>
)}

// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`