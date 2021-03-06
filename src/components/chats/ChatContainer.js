import React, { Component } from 'react'
import Room from "./Room"
import Messages from "./Messages"
import WriteMsgArea from "./WriteMsgArea"

export default class ChatContainer extends Component {
  constructor(props){
    super(props);
    this.setState({
      chats:[],
      room:null,
      activeChat:null
    }); 

  }

  render() {
    const { socket, user, room, logout } = this.props
    return (
      <div className="container">
        <Room  user={user} room={room}/>
        <Messages socket={socket} room={room}  />
        <WriteMsgArea />
        <button className="btn btn-warning" onClick={logout}>Log Out</button>
      </div>
    )
  }

  setActiveChat = (activeChat)=>{
		this.setState({activeChat})
	}

  
}
