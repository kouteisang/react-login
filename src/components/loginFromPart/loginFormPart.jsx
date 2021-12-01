import React, { Component } from 'react'
import {WechatFilled, QqCircleFilled, ArrowRightOutlined} from '@ant-design/icons'; //引入antd
import {createRegisterAction, createResetAction} from '../../redux/action'
import { message } from 'antd';
import './loginFormPart.css'
import { connect } from 'react-redux';

class LoginFormPart extends Component {


    state = {usernamePlaceholder:'手机号/邮箱', 
            passwordPlaceHolder:'密码',
            username:"",
            password:"",
            loginSuccess:true,
            errorInfoVis:false}


    changePlaceHolder = (target, value)=>{
        if(target === 'usernamePlaceholder'){
            this.setState({usernamePlaceholder:value})
        }else if(target === 'passwordPlaceHolder'){
            this.setState({passwordPlaceHolder:value})
        }
    }

    inputUsername = (e) => {
        this.setState({username:e.target.value})
    }

    inputPassword = (e) => {
        if(e.keyCode === 13){
            this.login()
        }else {
            this.setState({password:e.target.value})
        }
    }

    login = () => {
        const {username, password} = this.state
        if(username === '123' && password === '123'){
            console.log("Login Success")
            message.success('Login Success')
            this.setState({loginSuccess:true})
        }else{
            this.setState({loginSuccess:false})
            this.setState({errorInfoVis:true})
            setTimeout(() => {
                this.setState({
                    loginSuccess: true
                });
            }, 1000)
        }
    }

    register = ()=>{
        this.props.createRegisterAction()
        console.log(this.props.states)
    }

    forgetPassword = ()=>{
        this.props.createResetAction()
    }

    render() {
        const {usernamePlaceholder, passwordPlaceHolder, loginSuccess, errorInfoVis} = this.state
        return (
            <div className='loginForm'>
                <div className="avator"></div>
                <div className={`username-box ${loginSuccess ? '': " loginfailed" }`}>
                    <input type="text"  
                        placeholder={usernamePlaceholder} 
                        onFocus={()=>{this.changePlaceHolder('usernamePlaceholder','')}}
                        onBlur={()=>{this.changePlaceHolder('usernamePlaceholder','手机号/邮箱')}}
                        onKeyUp={(e)=>{this.inputUsername(e)}}/>
                </div>
                <div className={`password-box ${loginSuccess ? '': " loginfailed" }`}>
                    <input 
                        type="password"
                        placeholder={passwordPlaceHolder} 
                        onFocus={()=>{this.changePlaceHolder('passwordPlaceHolder','')}}
                        onBlur={()=>{this.changePlaceHolder('passwordPlaceHolder','密码')}}
                        onKeyUp={(e)=>{this.inputPassword(e)}}/>
                    <span className={`error-message ${errorInfoVis ? " loginfailed" : " hidden"}`}>用户名或密码错误</span>
                    <ArrowRightOutlined className='arrayRight' onClick={this.login}/>
                </div>
                <div className='register'>
                    <span className='re-for' onClick={this.register}>立即注册</span>
                    <span className='re-for' onClick={this.forgetPassword}>忘记密码</span>
                </div>
                <div className='icons'>
                    <WechatFilled className='iconWechat' />
                    <QqCircleFilled className='iconQQ'/>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{return {states:state.stateChange}},
    {
        createRegisterAction,
        createResetAction
    }
)(LoginFormPart)