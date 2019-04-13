import React, { Component } from 'react'

export default class Room extends Component {
  render() {
    const {user,room} = this.props;
    return (
      <div className="chat-header">
			<div className="user-info">
				<div className="user-name">{user}</div>
				<div className="status">
					<div className="indicator"></div>
					<span>{room}</span>
				</div>
			</div>
			<div className="options">
      Change Room  
      <select name="rooms" id="rooms" onChange={this.handleChangeRoom}>
                                    <option value="Work Chat">Work Chat</option>
                                    <option value="School Chat">School Chat</option>
                                    <option value="Friend Chat">Friend Chat</option>
      </select>
			</div>
		</div>
    )
  }
}
