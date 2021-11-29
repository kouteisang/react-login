import React, { Component } from 'react'
import {WechatFilled, QqCircleFilled} from '@ant-design/icons'; //引入antd
import Icon from '@ant-design/icons';

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
                <div className='register'>
                    <span>立即注册</span>
                    <span>忘记密码</span>
                </div>
                <div className='icons'>
                    <WechatFilled className='iconWechat' />
                    <QqCircleFilled className='iconQQ'/>
                </div>
            </div>
        )
    }
}
