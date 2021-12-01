
import {LOGIN_FORM_PART,
         REGISTER_FORM_PART, 
         RESET_PASSWORD_PART,
         REGISTER_2_FORM_PART} from './constant'

export const createLoginAction = ()=>{
    return {type: LOGIN_FORM_PART}
}

export const createRegisterAction = ()=>{
    return {type:REGISTER_FORM_PART}
}

export const createResetAction = ()=>{
    return {type:RESET_PASSWORD_PART}
}

export const createRegister2Action = (data)=>{
    return {type:REGISTER_2_FORM_PART,data:data}
}