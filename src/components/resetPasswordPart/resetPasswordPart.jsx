import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createLoginAction, createRegisterAction, createResetAction} from '../../redux/action'
import {ArrowLeftOutlined} from  '@ant-design/icons';

import './resetPasswordPart.css'
class resetPasswordPart extends Component {

    state = {
        phonePlaceholder:'请输入手机号',
        verifyPlaceholder:'请输入验证码',
        passwordPlaceholder:'输入6～16位登陆密码',
        verifyInfo:'获取验证码',
        phone:'',
        verifycode:'',
        password:'',
        phoneNull:false,
        verifyNull:false,
        passwordNull:false,
        phoneWrongMessage:'请输入手机号',
        verifyWrongMessage:'请输入验证码',
        passwordWrongMessage:'请输入密码',
        phoneErrorMessage:false,
        verigyErrorMessage:false,
        passwordErrorMessage:false
    }

    backToLogin = ()=>{
        this.props.createLoginAction()
    }

    changePlaceholder = (node, value)=>{
        if(node === 'phonePlaceholder'){
            this.setState({phonePlaceholder:value})
        }else if(node === 'verifyPlaceholder'){
            this.setState({verifyPlaceholder:value})
        }else if(node === 'passwordPlaceholder'){
            this.setState({passwordPlaceholder: value})
        }
    }

    getVerigyCode = ()=>{
        this.setState({verifyInfo:'获取中...'})
    }

    inputPhone = (e)=>{
        this.setState({phone:e.target.value})
    }

    inputVerify = (e)=>{
        this.setState({verifycode:e.target.value})
    }

    inputPassword = (e)=>{
        this.setState({password:e.target.value})    
    }

    nextStep = ()=>{
        const {phone, verifycode, password} = this.state
        if(phone === ''){
            this.setState({phoneNull:true})
            this.setState({phoneErrorMessage:true})
            this.setState({phoneWrongMessage:'请输入密码'})
            setTimeout(()=>{
                this.setState({phoneNull:false})
            }, 1000)
        }else if(phone.length>0){
            var myreg=/^1[3-9]\d{9}$/;
            if (!myreg.test(phone)) {
                this.setState({phoneNull:true})
                this.setState({phoneErrorMessage:true})
                this.setState({phoneWrongMessage:'手机号格式错误'})
                setTimeout(()=>{
                    this.setState({phoneNull:false})
                }, 1000)
            }else{
                this.setState({phoneErrorMessage:false})
            }
        }

        if(verifycode === ''){
            this.setState({verifyErrorMessage:true})
            this.setState({verifyNull:true})
            this.setState({verifyWrongMessage:'请输入验证码'})
            setTimeout(()=>{
                this.setState({verifyNull:false})
            }, 1000)
        }else if(verifycode.length != 4){
            this.setState({verifyErrorMessage:true})
            this.setState({verifyNull:true})
            this.setState({verifyWrongMessage:'验证码长度为4'})
            setTimeout(()=>{
                this.setState({verifyNull:false})
            }, 1000)
        }else{
            this.setState({verifyErrorMessage:false})
        }

        if(password === ''){
            this.setState({passwordErrorMessage:true})
            this.setState({passwordNull:true})
            setTimeout(()=>{
                this.setState({passwordNull:false})
            }, 1000)
        }else if(password.length < 6 || password.length>16){
            this.setState({passwordErrorMessage:true})
            this.setState({passwordNull:true})
            this.setState({passwordWrongMessage:'密码长度6～16'})
            setTimeout(()=>{
                this.setState({passwordNull:false})
            }, 1000)
        }else{
            this.setState({passwordErrorMessage:false})
        }
    }

    render() {
        const {phonePlaceholder, 
               verifyPlaceholder,
               passwordPlaceholder,
               verifyInfo,
               phoneNull,
               verifyNull,
               passwordNull,
               phoneWrongMessage,
               verifyWrongMessage,
               passwordWrongMessage,
               phoneErrorMessage,
               verifyErrorMessage,
               passwordErrorMessage} = this.state
        return (
            <div>
                <div className='register-title'>忘记密码</div>
                <div className={`phone ${phoneNull ? " loginfailed":''}`}>
                    <input  
                        onFocus = {()=>{this.changePlaceholder('phonePlaceholder','')}}
                        onBlur = {()=>{this.changePlaceholder('phonePlaceholder','请输入手机号')}}
                        placeholder={phonePlaceholder}
                        onKeyUp = {(e)=>{this.inputPhone(e)}}
                        type="text" />
                        <span className={`infoPhone ${phoneErrorMessage ? "":' hidden'} `}>{phoneWrongMessage}</span>
                </div>
                <div className={`verify ${verifyNull ? " loginfailed":''}`}>
                    <input 
                        onFocus = {()=>{this.changePlaceholder('verifyPlaceholder','')}}
                        onBlur = {()=>{this.changePlaceholder('verifyPlaceholder','请输入验证码')}}
                        type="text" 
                        onKeyUp = {(e)=>{this.inputVerify(e)}}
                        placeholder={verifyPlaceholder}/>
                        <span className={`infoVerify ${verifyErrorMessage ? "":' hidden'}`}>{verifyWrongMessage}</span>
                    <div onClick={this.getVerigyCode} className='getVerify'>
                        <span>| </span>
                        <span>{verifyInfo}</span>
                    </div>
                </div>
                <div className={`password ${passwordNull ? " loginfailed":''}`}>
                    <input
                        placeholder={passwordPlaceholder}
                        onFocus = {()=>{this.changePlaceholder('passwordPlaceholder','')}}
                        onBlur = {()=>{this.changePlaceholder('passwordPlaceholder','输入6～16位登陆密码')}}
                        onKeyUp = {(e)=>{this.inputPassword(e)}}
                        type="password" />
                        <span className={`infoPhone ${passwordErrorMessage ? "":' hidden'}`}>{passwordWrongMessage}</span>
                </div>
                <div className='nav'>
                    <div onClick={this.backToLogin} className='back-login'>
                        <ArrowLeftOutlined />
                        <span>返回登陆</span>
                    </div>
                    <button onClick={this.nextStep} className='next-step'>
                            <span>确定</span>
                    </button>
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
)(resetPasswordPart)
