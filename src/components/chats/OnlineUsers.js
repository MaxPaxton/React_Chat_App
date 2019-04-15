import React, { Component } from 'react'

export default class OnlineUsers extends Component {
    
  render() {
      const {socket,room} = this.props;
    //   socket.on("get users", function(data){
    //     console.log(data);
    // })

    console.log(room);
    return (
        <div id="onlineUsers" className="col-md-4">
        Online Users: {room}
		</div>
    )
  }

  onlineUsers = (room, socket)=>{
    console.log(socket,socket);
  }

  componentDidMount(){

  }
}

