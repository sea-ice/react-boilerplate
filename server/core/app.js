let KoaPlus = require('./index')
require('css-modules-require-hook')({
  extensions: ['.css'],
  generateScopedName: '[path]___[name]__[local]___[hash:base64:5]'
})

let app = new KoaPlus({
  usePlugins: true // 加载plugins目录下的插件
})

app.setRoutes()
app.listen(8000, '127.0.0.1', () => {
  console.log('The server has listened on port 8000')
})
