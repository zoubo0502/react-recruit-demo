import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
  isAuth: false,
  msg:'',
  name:'',
  password:'',
  type:''
}
export function user(state=initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state,msg:'',isAuth:true,...action.payload};
    case ERROR_MSG:
      return {...state,msg:action.msg,isAuth:false}
    default:
      return state;
  }
}

function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}

function errorMessage(msg) {
  return {msg,type:ERROR_MSG}
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