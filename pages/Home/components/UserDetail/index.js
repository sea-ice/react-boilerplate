import React from 'react'

export default class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    let {match, showUser} = props
    let userId = match && match.params && match.params.id
    if (
      userId && (!showUser ||
      (userId != showUser.id))
    ) {
      showUser = this.getUserDetail(userId)
    }
    this.state = {
      showUser
    }
    // console.log('userDetail construct')
  }
  getUserDetail (id) {
    let root = document.getElementById('root')
    let users = JSON.parse(root.dataset.cookData).users
    return users.filter(user => user.id == id)[0]
  }
  render () {
    let {showUser} = this.state
    if (showUser) {
      let {name, age, gender} = showUser
      return (
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Gender: {gender}</li>
        </ul>
      )
    } else {
      return <div></div>
    }
  }
}
