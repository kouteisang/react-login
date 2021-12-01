

import {LOGIN_FORM_PART, 
        REGISTER_FORM_PART,
        RESET_PASSWORD_PART,
        REGISTER_2_FORM_PART} from './constant'
import initState from './initState';


export default function stateReducer(preState = initState, action){
    const {type} = action
    switch(type){
        case LOGIN_FORM_PART:
            return {...preState, isLoginFormShow:true, isRegisterFormShow:false, isResetPasswordShow:false, isRegisterForm2show:false}
        case REGISTER_FORM_PART:
            return {...preState, isLoginFormShow:false, isRegisterFormShow:true, isResetPasswordShow:false, isRegisterForm2show:false}
        case RESET_PASSWORD_PART:
            return {...preState, isLoginFormShow:false, isRegisterFormShow:false, isResetPasswordShow:true, isRegisterForm2show:false}
        case REGISTER_2_FORM_PART:
            const {data} = action
            return {...preState, isLoginFormShow:false, isRegisterFormShow:false, isResetPasswordShow:false, isRegisterForm2show:true,data:data}
        default:
            return preState
    }
}