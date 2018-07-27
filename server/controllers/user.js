let users = require('../model/users.json')

module.exports = {
  async getUserDetail (ctx, services) {
    // let {data} = await services.users.getUserInfo()
    let userId = ctx.params.id, showUser
    if (userId) {
      showUser = users.filter(user => user.id == userId)[0]
    }
    ctx.body = ctx.render('Home', {
      metaData: {
        docTitle: 'Users',
        scripts: [
          '/home.bundle.js'
        ],
        styles: [
          '/style.css'
        ]
      },
      data: {
        userName: 'Jack',
        users,
        showUser,
        location: ctx.req.url
      }
    }, {
      internals: false
    })
  }
}
