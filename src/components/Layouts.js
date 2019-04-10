import React, { Component } from 'react'
import io from 'socket.io-client'

const socketURL = "http://192.168.0.16:4000"
export default class Layouts extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: null
        }
    }
    render() {
        const { title, extras } = this.props
        return (
        <div className="container">
            { title } <br/>
            { extras }
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
    


}
