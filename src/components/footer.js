import React from 'react'
import useSiteMeta from '../hooks/useSiteMeta'

import { SiNotion } from "react-icons/si";
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => { 
  const site = useSiteMeta()
  
  return(
    <div className="footer">
      <a href={site.siteMetadata.navLinks[3].link} className="footerButton"><RiInstagramLine /></a>
      <a href={site.siteMetadata.navLinks[2].link} className="footerButton"><RiGithubFill /></a>
      <a href={site.siteMetadata.navLinks[5].link} className="footerButton"><RiLinkedinBoxFill /></a>
      <a href={site.siteMetadata.navLinks[4].link} className="footerButton"><SiNotion /></a>
    </div>
  )
}

export default Footer;