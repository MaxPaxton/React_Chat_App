import React, { Component } from 'react'

export default class WriteMsgArea extends Component {

  render() {
    const messageStyle ={
      width: '577px',
      background:"lightgrey",
      borderStyle: "solid",
      padding: "4px"
    };
    return (
      <div>
        <form id="messageForm">
            <div className="formGroup">
                <label>You write here:</label>
                <input style={messageStyle} placeholder="chat with friends" id="message" />
                <br/>
                <input type="submit" id="send" className="btn btn-primary" value="Send" />
            </div>
        </form>
      </div>
    )
  }
}
