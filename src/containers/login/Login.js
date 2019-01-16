import React from "react";
import Logo from '../../components/logo/Logo';
import { List, InputItem, Button, WhiteSpace, WingBlank } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import { connect } from 'react-redux'
import {login} from '../../reducers/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
  state => state.user,
  {login}
)

class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       password:''
    }
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleLogin(){
    this.props.login(this.state)
  }

  toRegisterPage() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        {this.props.redirectTo? <Redirect to={this.props.redirectTo}></Redirect>:null}
        <Logo />
        <WingBlank>
          <List>
          {this.props.msg? <p>{this.props.msg}</p>:null}
          <InputItem
              placeholder="input your name"
              clear
              onChange={value => this.handleChange("name", value)}
            >
              Name
            </InputItem>
            <WhiteSpace />
            <InputItem
              placeholder="input your password"
              type="password"
              onChange={value => this.handleChange("password", value)}
            >
              Password
            </InputItem>
            <WhiteSpace />
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={() => this.handleLogin()}>Login</Button>
          <WhiteSpace />
          <Button type="primary" onClick={()=>this.toRegisterPage()}>Register</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default Login;
