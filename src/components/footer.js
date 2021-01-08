import React from 'react'
// import { Link } from "gatsby"

const Footer = () => ( 
  <div>
    ©{new Date().getFullYear()}, Built with
    {` `}
    <a style={{ color:"#D2ACD1", textDecoration:"None" }} href="https://tinnia.github.io">TINNIA</a>
  </div>
) 

export default Footer;