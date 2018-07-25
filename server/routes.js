module.exports = app => ({
  'get /': app.controllers.user.getUser
})
