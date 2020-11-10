import React from 'react'
import { Link } from "gatsby"

const Header = () => ( 
  <div>
    <Link style={{ margin:5, textDecoration:"none", fontWeight:"bold", color:"#F4B8C6" }} to="/algorithm">Algorithm</Link>
    <Link style={{ margin:5, textDecoration:"none", fontWeight:"bold", color:"#F4B8C6" }} to="/blog">Blog</Link>
    <Link style={{ margin:5, textDecoration:"none", fontWeight:"bold", color:"#F4B8C6" }} to="/study">Study</Link>
    <Link style={{ margin:5, textDecoration:"none", fontWeight:"bold", color:"#F4B8C6" }} to="/todo">Todo</Link>
    <Link style={{ margin:5, textDecoration:"none", fontWeight:"bold", color:"#F4B8C6" }} to="/about">About</Link>
  </div>
) 

export default Header;