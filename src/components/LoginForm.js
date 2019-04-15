import React, { Component } from 'react';
import axios from "axios";
import SocketContext from '../socket-context'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            nickname:"Anonymous",
            room:"Work Chat",
            error:""
        };

    }
    render() {
        const { nickname,error} = this.state
        return (
            <div className="row">
            <div className="col-xs-2 col-center-block">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="nickname">
                    <h2>Got Nickname?</h2>
                </label>
                <input ref={this.textInput} type="text" id="nickname"
                value={nickname}
                onChange={this.handleChangeUser}
                placeholder={"Choose A Nickname"}  />
                <label htmlFor="nickname">
                    <h2>Char Room?</h2>
                </label>
                <select name="rooms" id="rooms" onChange={this.handleChangeRoom}>
                                    <option value="Work Chat">Work Chat</option>
                                    <option value="School Chat">School Chat</option>
                                    <option value="Friend Chat">Friend Chat</option>
                </select>
                <div className="error">{error ? error:null}</div>
            </form>
            </div>
            </div>
        )
    }
    handleChangeUser = (e) =>{
        this.setState({nickname:e.target.value})
    }

    handleChangeRoom = (e) =>{
        this.setState({room:e.target.value})
    }

    setUser = ({user}) =>{
        console.log("I got here"+user);
        this.props.setUser(user);
        this.setError("");
    }

    setError = (error)=>{
        this.setState({error})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log();
        const {socket} = this.props
        const {nickname,room} = this.state;
        this.props.setUserAndRoom(nickname,room)
        socket.emit("joinRoom",{ socket_id :socket.id,username: nickname , room: room},(data)=>{
            if(data){
                //send event to DB
                axios.post('http://localhost:4000/api/eventLog', {
                    socket_id: socket.id,
                    username: nickname,
                    room: room,
                    action: `${socket.id} chose ${nickname} as name and Logged in room ${room}`
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }
        });
    }
}

const LayoutSocket = props => (
    <SocketContext.Consumer>
    {socket => <LoginForm {...props} socket={socket} />}
    </SocketContext.Consumer>
  )
  
export default LayoutSocket;
