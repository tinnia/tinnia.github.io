import React, { createRef, useContext, useEffect } from 'react';
import ThemeContext from '../store/themeContext';

const Comments = () => {
  const theme = useContext(ThemeContext);
  // console.log(theme)
  const commentRef = createRef();
  // const currentTheme = theme === 'dark' ? 'photon-dark' : 'github-light';
  const currentTheme = 'photon-dark'

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'tinnia/blog-comment',
      theme: currentTheme,
      label: '💬 comment',
      'issue-term': 'pathname',
      async: true,
      crossorigin: 'anonymous',
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current.appendChild(utterances);
  }, [currentTheme, commentRef]);

  return (
    <section>
      <div className="container comments">
        <div className="title">Comments</div>
        <div className="utterances" ref={commentRef}></div>
      </div>
    </section>
  );
};

export default Comments;