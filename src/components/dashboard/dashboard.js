import React from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import { Switch, Route } from "react-router-dom";
import NavLinkBar from "../navlink/navlink";

function Msg() {
  return <h2>msg</h2>;
}

function Boss() {
  return <h2>boss</h2>;
}

function Genius() {
  return <h2>genius</h2>;
}

function User() {
  return <h2>user</h2>;
}

@connect(state => state)
class Dashboard extends React.Component {
  render() {
    const { pathname } = this.props.location;
    const user = this.props.user;
    const navList = [
      {
        path: "/boss",
        text: "牛人",
        icon: "boss",
        title: "牛人列表",
        component: Boss,
        hide: user.type == "genius"
      },
      {
        path: "/genius",
        text: "boss",
        icon: "job",
        title: "BOSS列表",
        component: Genius,
        hide: user.type == "boss"
      },
      {
        path: "/msg",
        text: "消息",
        icon: "msg",
        title: "消息列表",
        component: Msg
      },
      {
        path: "/me",
        text: "我",
        icon: "user",
        title: "个人中心",
        component: User
      }
    ];

    return (
      <div>
        <NavBar className="fixd-header" mode="dard">
          {navList.find(v => v.path == pathname).title}
        </NavBar>
        <div style={{ marginTop: 45 }}>
          <Switch>
            {navList.map(v => (
              <Route key={v.path} path={v.path} component={v.component} />
            ))}
          </Switch>
        </div>

        <NavLinkBar data={navList} />
      </div>
    );
  }
}

export default Dashboard;
