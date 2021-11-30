

import {LOGIN_FORM_PART, REGISTER_FORM_PART, RESET_PASSWORD_PART} from './constant'
import initState from './initState';


export default function stateReducer(preState = initState, action){
    const {type} = action
    switch(type){
        case LOGIN_FORM_PART:
            preState.isLoginFormShow = true
            preState.isRegisterFormShow = false
            preState.isResetPasswordShow = false
            return preState
        case REGISTER_FORM_PART:
            preState.isLoginFormShow = false
            preState.isRegisterFormShow = true
            preState.isResetPasswordShow = false
            return preState
        case RESET_PASSWORD_PART:
            preState.isLoginFormShow = false
            preState.isRegisterFormShow = false
            preState.isResetPasswordShow = true
            return preState
        default:
            return preState
    }
}