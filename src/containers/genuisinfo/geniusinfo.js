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
class GeniusInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: ""
    };
  }
  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect && redirect !== path ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <NavBar mode="dark">GeniusInfo</NavBar>
        <AvatarSelector
          selectAvatar={imgname => {
            this.setState({
              avatar: imgname
            });
          }}
        />
        <InputItem onChange={v => this.onChange("title", v)}>
          Job wanted:
        </InputItem>
        <TextareaItem
          onChange={v => this.onChange("desc", v)}
          rows={3}
          autoHeight
          title="My Thought:"
        />
        <Button
          onClick={() => {
            this.props.update(this.state);
          }}
          type="primary"
        >
          Save
        </Button>
      </div>
    );
  }
}

export default GeniusInfo;
