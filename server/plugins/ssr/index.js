let ReactDOMServer = require('react-dom/server')
let React = require('react')
let pug = require('pug')

let pluginConfig = require('./config')
let path = require('path')
require('babel-register')

module.exports = {
  plugin (app) {
    let options = Object.assign({
      serverRoot: 'http://localhost:8080',
      viewPath: path.resolve(__dirname, '../..', 'views'),
      templatePath: path.resolve(__dirname, '../../views/layout/template.pug'),
      extName: '.js',
      docTitle: 'Document'
    }, pluginConfig)

    // 增加render方法
    // app.context.render = (view, locals, opts, children) => {
    //   opts = Object.assign(options, opts)
    //   let render = opts.internals ? ReactDOMServer.renderToString : ReactDOMServer.renderToStaticMarkup
    //   let viewPath = path.resolve(opts.viewPath, `${view}${opts.extName}`)
    //   let markup = opts.docType

    //   let Container = require(viewPath)
    //   Container = Container.default || Container

    //   locals.metaData = Object.assign({
    //     docTitle: 'Document',
    //     scripts: [],
    //     styles: []
    //   }, locals.metaData)
    //   let metaData = locals.metaData
    //   metaData.scripts = metaData.scripts.map(src => src.match(/^https?:\/\//) ? src : `${opts.serverRoot}${src}`)
    //   metaData.styles = metaData.styles.map(style => style.match(/^https?:\/\//) ? style : `${opts.serverRoot}${style}`)

    //   markup += render(React.createElement(Container, locals, children))
    //   // console.log(markup)
    //   return markup
    // }

    // locals: {
    //   initialState: {},
    //   metaData: {
    //     styles: [],
    //     scripts: [],
    //     docTitle: ''
    //   },
    //   appProps: {
    //     isServer,
    //     location
    //   }
    // }
    let compiled = {}
    app.context.render = (view, locals, opts, children) => {
      opts = Object.assign(options, opts)

      let {
        initialState = {},
        metaData = {},
        appProps = {}
      } = locals
      locals.appProps.isServer = true
      locals.appProps.initialState = initialState
      metaData.styles = metaData.styles ? metaData.styles.map(style => opts.serverRoot + style) : []
      metaData.scripts = metaData.script ? metaData.scripts.map(script => opts.serverRoot + script) : []
      metaData.docTitle = metaData.docTitle || opts.docTitle

      let Container = require(path.resolve(opts.viewPath, ~view.indexOf('.') ? view : `${view}${opts.extName}`))
      Container = Container.default || Container
      let render = opts.internals ? ReactDOMServer.renderToString : ReactDOMServer.renderToStaticMarkup
      let appMain = render(React.createElement(Container, appProps, children))

      let fn = compiled[opts.templatePath] || (compiled[opts.templatePath] = pug.compileFile(opts.templatePath))
      return fn({
        metaData,
        appMain,
        initialState: JSON.stringify(initialState)
      })
    }
  }
}
