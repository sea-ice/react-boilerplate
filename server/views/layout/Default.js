import React, {Component} from 'react'

export default class Default extends Component {
  render () {
    let {docTitle, scripts, styles, children} = this.props
    let pageScripts = scripts.map((src, id) => <script src={src} key={`script-id-${id}`}></script>)
    let pageStyles = styles.map((style, id) => <link rel="stylesheet" href={style} key={`style-id-${id}`} />)
    return <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{docTitle}</title>
        {pageStyles}
    </head>
    <body>
        {children}
        {pageScripts}
    </body>
    </html>
  }
}
