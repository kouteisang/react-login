import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginFormPart from '../../components/loginFromPart/loginFormPart.jsx'
import RegisterFormPart from '../../components/registerFormPart/registerFormPart.jsx'
import {createLoginAction, createRegisterAction, createResetAction} from '../../redux/action'
import './LoginHome.css'
import bubble1 from '../../asset/images/login-bg-bubble-01.png'
import bubble2 from '../../asset/images/login-bg-bubble-02.png'
import bubble3 from '../../asset/images/login-bg-bubble-03.png'
import bubble4 from '../../asset/images/login-bg-bubble-04.png'

class LoginHome extends Component {

    changePanel = ()=>{
        const {isLoginFormShow,isRegisterFormShow,isResetPasswordShow} = this.props.states
        console.log(isRegisterFormShow + '?')
        if(isLoginFormShow){
            return (<LoginFormPart/>)
        }else if(isRegisterFormShow){
            return (<RegisterFormPart/>)
        }
    }


    render() {
        return (
            <div className='login-page'>
                <div className="bg-bubble">
                    <img  src={bubble1} alt="bubble-1" />
                    <img src={bubble2} alt="bubble-2" />
                    <img src={bubble3} alt="bubble-3" />
                    <img src={bubble4} alt="bubble-4" />
                </div>

                <div className='logo-title'>
                    <span>Welcome｜基于React开发的Login组件</span>
                </div>

                <div className="login-content">
                    {/* {
                         this.changePanel()
                    } */}
                    <RegisterFormPart/>
                </div>
            </div>
        )
    }
}


export default connect(
    (state)=>{return {states:state.stateChange}},
    {
        createLoginAction,
        createRegisterAction,
        createResetAction
    }
)(LoginHome)