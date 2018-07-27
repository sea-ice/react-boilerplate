module.exports = app => ({
  'get /': app.controllers.user.getUserDetail,
  'get /user/:id': app.controllers.user.getUserDetail
})
