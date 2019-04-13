import React, { Component } from 'react'
import Room from "./Room"
import Messages from "./Messages"
import WriteMsgArea from "./WriteMsgArea"

export default class ChatContainer extends Component {
  constructor(props){
    super(props);
    this.setState({
      chats:["",""],
      room:null,
      activeChat:""
    }); 

  }

  render() {
    const { user, room, logout } = this.props
    return (
      <div className="container">
        <Room  user={user} room={room}/>
        <Messages />
        <WriteMsgArea />
        <button onClick={logout}>Log Out</button>
      </div>
    )
  }

  setActiveChat = (activeChat)=>{
		this.setState({activeChat})
	}

  
}
