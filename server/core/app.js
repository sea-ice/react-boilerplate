let KoaPlus = require('./index')

let app = new KoaPlus()

app.setRoutes()
app.listen(8000, '127.0.0.1', () => {
  console.log(__dirname)
  console.log('The server has listened on port 8000')
})
