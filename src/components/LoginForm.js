import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            nickname:"",
            error:""
        };
    }
    render() {
        const { nickname,error} = this.state
        return (
            <div className="login">
            <form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <label htmlFor="nickname">
                    <h2>Got Nickname?</h2>
                </label>
                <input ref={(input)=>{ this.textInput = input}} type="text" id="nickname"
                value={nickname}
                onChange={this.handleChange}
                placeholder={"Choose A Nickname"}  />
                <div className="error">{error ? error:null}</div>
            </form>
            </div>
        )
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {socket} = this.props
        const {nickname} = this.state
        this.props.setUser(nickname)
        //socket.emit("joinRoom",{ socket_id :socket.id,username: nickname /*, room: room.value*/},this.setUser)
    }
    handleChange = (e) =>{
        this.setState({nickname:e.target.value})
    }

    setUser = ({user}) =>{
        console.log("I got here"+user);
        this.props.setUser(user);
        this.setError("");
    }

    setError = (error)=>{
        this.setState({error})
    }
}
