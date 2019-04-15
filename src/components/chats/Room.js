import React, { Component } from 'react'

export default class Room extends Component {
  render() {
    const {user,room} = this.props;
    return (
      <div>
        <h3>NickName: {user}</h3>
        <h4>{room} || Wanna Change?
        <select name="rooms" id="rooms" onChange={this.handleChangeRoom}>
        <option value="Work Chat"></option>
        <option value="Work Chat">Work Chat</option>
        <option value="School Chat">School Chat</option>
        <option value="Friend Chat">Friend Chat</option>
        </select>
        </h4>
		  </div>
    )
  }
}
