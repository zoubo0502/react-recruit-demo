import axios from "axios";
import { getRedirectPath } from "./util";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const LOGOUT = "LOGOUT";
const ERROR_MSG = "ERROR_MSG";
const LOAD_DATA = "LOAD_DATA";
const initState = {
  redirectTo: "",
  msg: "",
  name: "",
  type: ""
};
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        msg: "",
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      };
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    case LOGOUT:
      return { ...initState, redirectTo: "/login" };
    default:
      return state;
  }
}

function authSuccess(obj) {
  const { pwd, ...data } = obj;
  return { type: AUTH_SUCCESS, payload: data };
}

function errorMessage(msg) {
  return { msg, type: ERROR_MSG };
}

export function loadData(userInfo) {
  return { type: LOAD_DATA, payload: userInfo };
}

export function login({ name, password }) {
  if (!name || !password) {
    return errorMessage("please input your name and password");
  }

  return dispatch => {
    axios.post("/user/login", { name, password }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMessage(res.data.msg));
      }
    });
  };
}

export function register({ name, password, repeatPassword, type }) {
  if (!name || !password || !repeatPassword) {
    return errorMessage("please input your name and password");
  }

  if (password !== repeatPassword) {
    return errorMessage("password is not same");
  }

  return dispatch => {
    axios.post("/user/register", { name, password, type }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess({ name, password, type }));
      } else {
        dispatch(errorMessage(res.data.msg));
      }
    });
  };
}

export function update(data) {
  return dispatch => {
    axios.post("/user/update", data).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMessage(res.data.msg));
      }
    });
  };
}

export function logoutSubmit() {
  return { type: LOGOUT };
}
