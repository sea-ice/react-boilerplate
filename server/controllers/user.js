module.exports = {
  async getUser (ctx, services) {
    let {data} = await services.users.getUserInfo()
    console.log(data)
    ctx.body = JSON.stringify(data)
  }
}
