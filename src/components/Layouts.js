import React, { Component } from 'react'
import io from 'socket.io-client'
import LoginForm from './LoginForm';
import ChatContainer from './chats/ChatContainer';

const socketURL = "http://192.168.0.16:4000"
export default class Layouts extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: null,
            user: null,
            room: null
        };
    }
    render() {
        const { socket, user ,room} = this.state
        return (
        <div className="container">
            {!user ?
            <LoginForm socket={socket} setUserAndRoom={this.setUserAndRoom.bind(this)} />
            : <ChatContainer socket={socket} user={user} room={room} logout={this.logout} />
            }
        </div>
        )
    }
    initSocket = () =>{
        const socket = io(socketURL)
        socket.on("connect",()=>{
            console.log("Connected")
        })
        this.setState({socket})
    }
    componentWillMount() {
      this.initSocket()
    }

    setUserAndRoom = (user,room)=>{
        const {socket} = this.state
        socket.emit("User Connected", user);
        this.setState({user:user ,room:room});
    }

    logout = ()=>{
        const {socket} = this.state
        socket.emit("Log Out")
        this.setState({ user: null})
    }
    


}
