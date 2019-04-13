import React, { Component } from 'react'

export default class WriteMsgArea extends Component {
  render() {
    return (
      <div>
        <form id="messageForm">
            <div class="formGroup">
                <label>Enter Message</label>
                <input placeholder="type your message" id="message" />
                <br/>
                <input type="submit" id="send" className="btn btn-primary" value="Send" />
            </div>
        </form>
      </div>
    )
  }
}
