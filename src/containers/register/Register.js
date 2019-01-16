import React from "react";
import Logo from "../../components/logo/Logo";
import { List, InputItem, Button, WhiteSpace, WingBlank, Radio } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

class Register extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type:'genuis'
    }
  }
  
  login() {
    this.props.history.push('/login')
  }
  render() {
    const RadioItem = Radio.RadioItem;
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
            <InputItem placeholder="confirm your password" type="password">
              Password
            </InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type==='genuis'}>
              Genuis
            </RadioItem >
            <RadioItem checked={this.state.type==='boss'}>
              Boss
            </RadioItem >
          </List>
          <WhiteSpace />
          <Button type="primary">Register</Button>
          <WhiteSpace />
          <Button type="primary" onClick={()=>this.login()}>Back to Login</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default Register;
