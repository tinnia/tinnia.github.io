import React from "react"
import PropTypes from "prop-types"

// export default function HTML(props) {
export default class HTML extends React.Component {
  render() {
    // const ads = process.env.NODE_ENV === 'production' &&
    //   <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />;
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* {ads && ads} */}
          {this.props.headComponents}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
          />
          <script data-ad-client="ca-pub-5373443176805821" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          {/* <script dangerouslySetInnerHTML={{__html: '(adsbygoogle = window.adsbygoogle || []).push({});'}}></script> */}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
