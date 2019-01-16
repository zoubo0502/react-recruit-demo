import axios from 'axios'
import { getRedirectPath } from './util';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  redirectTo:'',
  isAuth: false,
  msg:'',
  name:'',
  password:'',
  type:''
}
export function user(state=initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload};
    case LOGIN_SUCCESS:
    return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload};
    
    case ERROR_MSG:
      return {...state,msg:action.msg,isAuth:false}
    default:
      return state;
  }
}

function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data) {
  return {type: LOGIN_SUCCESS, payload: data}
}

function errorMessage(msg) {
  return {msg,type:ERROR_MSG}
}

export function login({name,password}) {
  if (!name || !password) {
    return errorMessage('please input your name and password')
  }

  return dispatch => {
    axios.post('/user/login',{name,password}).then(res => {
      if (res.status===200&&res.data.code===0) {
        dispatch(loginSuccess(res.data.data))
      } else {
        dispatch(errorMessage(res.data.msg))
      }
    })
  }
}

export function register({name,password,repeatPassword,type}) {
  if (!name || !password || !repeatPassword) {
    return errorMessage('please input your name and password')
  }

  if (password!==repeatPassword) {
    return errorMessage('password is not same')
  }

  return dispatch => {
    axios.post('/user/register',{name,password,type}).then(res => {
      if (res.status===200&&res.data.code===0) {
        dispatch(registerSuccess({name,password,type}))
      } else {
        dispatch(errorMessage(res.data.msg))
      }
    })
  }
}