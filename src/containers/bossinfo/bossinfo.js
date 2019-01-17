import React from "react";
import {
  NavBar,
  InputItem,
  TextareaItem,
  List,
  Button,
  WhiteSpace
} from "antd-mobile";
import AvatarSelector from "../../components/avator-selector/avatar-selector";
import { connect } from "react-redux";
import { update } from "../../reducers/user.redux";
import { Redirect } from "react-router-dom";
@connect(
  state => state.user,
  { update }
)
class Bossinfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleInput(key, value) {
    this.setState({
      [key]: value
    });
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <NavBar mode="dark">Boss Info</NavBar>
        <AvatarSelector
          selectAvatar={imgName => {
            this.setState({ avatar: imgName });
          }}
        />
        <List>
          <InputItem onChange={value => this.handleInput("title", value)}>
            Job Title:
          </InputItem>
          <WhiteSpace />
          <InputItem onChange={value => this.handleInput("company", value)}>
            Company:
          </InputItem>
          <WhiteSpace />
          <InputItem onChange={value => this.handleInput("money", value)}>
            Payment:
          </InputItem>
          <WhiteSpace />
          <TextareaItem
            autoHeight
            onChange={value => this.handleInput("desc", value)}
            title="Description:"
            rows={3}
          />
          <Button type="primary" onClick={() => this.props.update(this.state)}>
            Save
          </Button>
        </List>
      </div>
    );
  }
}

export default Bossinfo;
