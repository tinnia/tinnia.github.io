import React, { useState, useEffect } from 'react'
import useSiteMeta from '../hooks/useSiteMeta'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'


const Header = () => {
    const site = useSiteMeta()
    const [scrolled, setScrolled] = useState(false)
    let isChecked
    if (typeof window !== `undefined`) {
        isChecked = localStorage.getItem('theme') === 'dark' ? true : false;
    }
    useEffect(() => {
        const handleScroll = () => {
            if (!scrolled && window.scrollY > 30) {
                setScrolled(true);
            } else if (scrolled && window.scrollY <= 30) {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled])
    
    return (
        <header className={scrolled ? 'header scrolled' : 'header'}>
            <div className="headerInline">
                <div className="title">
                    <a href="/" style={{ textDecoration:"none" }}><h1>{site.siteMetadata.title}</h1></a>
                </div>
                <div className="toggle">
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                            <div className="switchToggle">
                                <input id="switch"
                                    className="invisible"
                                    type="checkbox"
                                    onChange={e => {toggleTheme(e.target.checked ? 'dark' : 'light');isChecked=e.target.checked;}}
                                    checked={theme === 'dark'}
                                />
                                <label className={`switchLabel`} htmlFor="switch">
                                    { isChecked ? <RiMoonClearFill /> : <RiSunFill /> }
                                </label>
                            </div>
                        )}
                    </ThemeToggler>                   
                </div>
            </div>
        </header>
    )
}

export default Header;