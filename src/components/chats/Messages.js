import React, { Component } from 'react'
import OnlineUSers from './OnlineUsers';

export default class Messages extends Component {
  render() {
    const {socket ,room} = this.props
    return (
      <div>
      <div className="col-md-8">
        <div id="discussion">heelo</div>
        <div id="feedback"></div>			
			</div>
      <OnlineUSers socket={socket} room={room}  />      
      </div>
    )
  }
}
