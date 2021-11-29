import React, { Component } from 'react'
import LoginFormPart from '../../components/loginFromPart/loginFormPart.jsx'
import './LoginHome.css'
import bubble1 from '../../asset/images/login-bg-bubble-01.png'
import bubble2 from '../../asset/images/login-bg-bubble-02.png'
import bubble3 from '../../asset/images/login-bg-bubble-03.png'
import bubble4 from '../../asset/images/login-bg-bubble-04.png'

export default class LoginHome extends Component {
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
                    <LoginFormPart/>
                </div>
            </div>
        )
    }
}
