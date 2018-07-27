let ReactDOMServer = require('react-dom/server')
let React = require('react')
let pluginConfig = require('./config')
let path = require('path')
require('babel-register')

module.exports = {
  plugin (app) {
    let options = Object.assign({
      serverRoot: 'http://localhost:8080',
      viewPath: path.resolve(__dirname, '../..', 'views'),
      docType: '<!DOCTYPE html>',
      extName: '.js'
    }, pluginConfig)

    // 增加render方法
    app.context.render = (view, locals, opts, children) => {
      opts = Object.assign(options, opts)
      let render = opts.internals ? ReactDOMServer.renderToString : ReactDOMServer.renderToStaticMarkup
      let viewPath = path.resolve(opts.viewPath, `${view}${opts.extName}`)
      let markup = opts.docType

      let Container = require(viewPath)
      Container = Container.default || Container

      locals.metaData = Object.assign({
        docTitle: 'Document',
        scripts: [],
        styles: []
      }, locals.metaData)
      let metaData = locals.metaData
      metaData.scripts = metaData.scripts.map(src => src.match(/^https?:\/\//) ? src : `${opts.serverRoot}${src}`)
      metaData.styles = metaData.styles.map(style => style.match(/^https?:\/\//) ? style : `${opts.serverRoot}${style}`)

      markup += render(React.createElement(Container, locals, children))
      // console.log(markup)
      return markup
    }
  }
}
