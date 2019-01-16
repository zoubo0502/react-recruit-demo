import React from "react";
import Logo from '../../components/Logo';
import { List, InputItem, Button, WhiteSpace, WingBlank } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
class Login extends React.Component {
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem placeholder="input your name" clear>
              Name
            </InputItem>
            <WhiteSpace />
            <InputItem placeholder="input your password" type="password">
              Password
            </InputItem>
            <WhiteSpace />
          </List>
          <WhiteSpace />
          <Button type="primary">Login</Button>
          <WhiteSpace />
          <Button type="primary" onClick={()=>this.register()}>Register</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default Login;
