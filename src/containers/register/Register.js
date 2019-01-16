import React from "react";
import Logo from "../../components/logo/Logo";
import { List, InputItem, Button, WhiteSpace, WingBlank, Radio } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

class Register extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name:'',
      password:'',
      repeatPassword:'',
      type:'genuis'
    }
  }
  
  backToLogin() {
    this.props.history.push('/login')
  }

  registerUser() {
    console.log(this.state)
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem placeholder="input your name" clear onChange={(value)=>this.handleChange('name',value)}>
              Name
            </InputItem>
            <WhiteSpace />
            <InputItem placeholder="input your password" type="password" onChange={(value)=>this.handleChange('password',value)}>
              Password
            </InputItem>
            <WhiteSpace />
            <InputItem placeholder="confirm your password" type="password" onChange={(value)=>this.handleChange('repeatPassword',value)}>
              Password
            </InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type==='genuis'} onClick={()=>this.handleChange('type', 'genuis')}>
              Genuis
            </RadioItem >
            <RadioItem checked={this.state.type==='boss'} onClick={()=>this.handleChange('type', 'boss')}>
              Boss
            </RadioItem >
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={()=>this.registerUser()}>Register</Button>
          <WhiteSpace />
          <Button type="primary" onClick={()=>this.backToLogin()}>Back to Login</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default Register;
