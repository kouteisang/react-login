

import {LOGIN_FORM_PART, REGISTER_FORM_PART, RESET_PASSWORD_PART} from './constant'
import initState from './initState';


export default function stateReducer(preState = initState, action){
    const {type} = action
    switch(type){
        case LOGIN_FORM_PART:
            return {...preState, isLoginFormShow:true, isRegisterFormShow:false, isResetPasswordShow:false}
        case REGISTER_FORM_PART:
            return {...preState, isLoginFormShow:false, isRegisterFormShow:true, isResetPasswordShow:false}
        case RESET_PASSWORD_PART:
            return {...preState, isLoginFormShow:false, isRegisterFormShow:false, isResetPasswordShow:true}
        default:
            return preState
    }
}