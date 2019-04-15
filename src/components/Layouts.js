import React, { Component } from 'react'
import SocketContext from '../socket-context'
import LoginForm from './LoginForm';
import ChatContainer from './chats/ChatContainer';

class Layouts extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            room: null
        };
    }
    render() {
        const { user ,room} = this.state
        return (
        <div className="container">
            <h1>My Awesome Chat:</h1>
            <h6>By Maxim Paxton 101064370 and Patrick Murphy 101103097</h6>
            {!user ?
            <LoginForm  setUserAndRoom={this.setUserAndRoom.bind(this)} />
            : <ChatContainer user={user} room={room} logout={this.logout} />
            }
        </div>
        )
    }


    setUserAndRoom = (user,room)=>{
        this.setState({user:user ,room:room});
    }

    logout = ()=>{
        this.setState({ user: null})
    }
    


}

const LayoutSocket = props => (
    <SocketContext.Consumer>
    {socket => <Layouts {...props} socket={socket} />}
    </SocketContext.Consumer>
  )
  
  export default LayoutSocket;