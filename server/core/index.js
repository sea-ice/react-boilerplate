let Koa = require('koa')
let Router = require('koa-router')
let path = require('path')
let fs = require('fs')

class KoaPlus extends Koa {
  constructor () {
    super()
    if (!this.controllers) {
      KoaPlus.prototype.controllers = this.loadControllers()
    }
  }
  loader (dirname) {
    let dir = path.resolve(__dirname, '..', dirname)
    let files = fs.readdirSync(dir)
    let target = {}
    files.forEach(file => {
      let loaded = require(path.resolve(dir, file))
      let key = file.split('.')[0]
      target[key] = loaded
    })
    return target
  }
  loadServices () {
    return this.loader('services')
  }
  loadControllers () {
    return this.loader('controllers')
  }
  setRoutes () {
    let routes = require('../routes')(this)
    let router = new Router()

    let services = this.loadServices()
    Object.keys(routes).forEach(key => {
      let [method, url] = key.split(' ')
      router[method](url, async ctx => {
        let handler = routes[key]
        handler(ctx, services)
      })
    })
    this.use(router.routes())
  }
}

module.exports = KoaPlus
