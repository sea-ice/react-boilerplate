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
      initialState: {
        user: {
          name: 'Jack'
        },
        users,
        showUser
      },
      appProps: {
        location: ctx.req.url
      }
    }, {
      internals: true
    })
  }
}
