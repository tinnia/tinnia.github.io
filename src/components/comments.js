import React, { createRef, useEffect } from 'react';

const Comments = () => {
  const commentRef = createRef();
  const currentTheme = 'photon-dark'

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'tinnia/blog-comment',
      async: true,
      theme: currentTheme,
      label: '💬 comment',
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current.appendChild(utterances);
  }, [currentTheme, commentRef]);

  return (
    <div className="comment">
      <h5>Comments</h5>
      <div className="utterances" ref={commentRef}></div>
    </div>
  );
};

export default Comments;