
import {LOGIN_FORM_PART, REGISTER_FORM_PART, RESET_PASSWORD_PART} from './constant'

export const createLoginAction = ()=>{
    return {type: LOGIN_FORM_PART}
}

export const createRegisterAction = ()=>{
    return {type:REGISTER_FORM_PART}
}

export const createResetAction = ()=>{
    return {type:RESET_PASSWORD_PART}
}