import React, { Component } from "react";
import io from "socket.io-client";
import { List, InputItem } from "antd-mobile";

const socket = io("ws://localhost:9030");
socket.on("recvmsg", function(data) {
  console.log(data);
});
export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  handleSubmit() {
    socket.emit("sendmsg", { text: this.state.text });
    this.setState({ text: "" });
  }
  render() {
    console.log(this.props);
    return (
      <div className="socket-footer">
        <List>
          <InputItem
            placeholder="请输入"
            value={this.state.text}
            onChange={v => {
              this.setState({ text: v });
            }}
            extra={<span onClick={() => this.handleSubmit()}>发送</span>}
          />
        </List>
      </div>
    );
  }
}

export default Chat;
