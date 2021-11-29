import React, { Component } from 'react'
import './loginFormPart.css'
import avator from '../../asset/images/avator.png'

export default class LoginFormPart extends Component {
    render() {
        return (
            <div className='loginForm'>
                <div className="avator"></div>
                <div className='username-box'>
                    <input type="text" placeholder='手机号/邮箱'/>
                </div>
                <div className='password-box'>
                    <input type="password" placeholder='密码'/>
                </div>

            </div>
        )
    }
}
