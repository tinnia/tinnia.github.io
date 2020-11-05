import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FaRegSquare, FaCheckSquare } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TodoPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const todolist = [
    { id:0, text: "UI/UX", checked: false },
    { id:1, text: "카테고리별 게시글 분류", checked: true },
    { id:2, text: "댓글 기능", checked: false },
    { id:3, text: "Google 검색 등록", checked: false },
    { id:4, text: "비밀글 기능", checked: false },
    { id:5, text: "방문자수 체크", checked: false },
    { id:6, text: "ABOUT ME 꾸미기", checked: false },
  ]
  const addBoard = [
    { id:0, text: "이력서 / 포트폴리오", checked: false },
    { id:1, text: "자격증(ADsP)", checked: false },
    { id:2, text: "컴퓨터공학적 지식", checked: false },
    { id:3, text: "KAGGLE 개인 프로젝트", checked: false },
    { id:4, text: "영어 공부", checked: false },
    { id:5, text: "취미 생활", checked: false },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Todo" />
      <h2 style={{ color:"#8C749F" }} >To Do List</h2>
      <Container>
        <Row>
          <Col>
            <h4 style={{ color:"#D2ACD1" }} >To Do</h4>
            {todolist.map((todo, index) => {
              return(
                <div key={index}>
                  {
                    (function() {
                      if (todo.checked) return (<FaCheckSquare />);
                      else return (<FaRegSquare />);
                    })()
                  }
                  <p style={{ display:"inline-block", marginLeft:10 }}>{todo.text}</p>
                </div>
              )
            })}
          </Col>
          <Col>
            <h4 style={{ color:"#D2ACD1" }}>Add Category</h4>
            {addBoard.map((board, index) => {
              return(
                <div key={index}>
                  {
                    (function() {
                      if (board.checked) return (<FaCheckSquare />);
                      else return (<FaRegSquare />);
                    })()
                  }
                  <p style={{ display:"inline-block", marginLeft:10 }}>{board.text}</p>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  );

}

export default TodoPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
