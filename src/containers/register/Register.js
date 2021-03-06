import React from "react";
import Logo from "../../components/logo/Logo";
import {
  List,
  InputItem,
  Button,
  WhiteSpace,
  WingBlank,
  Radio
} from "antd-mobile";
import { register } from "../../reducers/user.redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
@connect(
  state => state.user,
  { register }
)
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      repeatPassword: "",
      type: "genius"
    };
  }

  backToLogin() {
    this.props.history.push("/login");
  }

  registerUser() {
    this.props.register(this.state);
    console.log(this.state);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            {this.props.msg ? <p>{this.props.msg}</p> : null}
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
            <InputItem
              placeholder="confirm your password"
              type="password"
              onChange={value => this.handleChange("repeatPassword", value)}
            >
              Password
            </InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === "genius"}
              onClick={() => this.handleChange("type", "genius")}
            >
              Genuis
            </RadioItem>
            <RadioItem
              checked={this.state.type === "boss"}
              onClick={() => this.handleChange("type", "boss")}
            >
              Boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={() => this.registerUser()}>
            Register
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={() => this.backToLogin()}>
            Back to Login
          </Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default Register;
