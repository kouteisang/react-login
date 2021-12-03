import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ArrowLeftOutlined} from  '@ant-design/icons';
import {createLoginAction} from '../../redux/action'
import { message } from 'antd';
import './registerFormPart2.css'
class registerFormPart2 extends Component {

    state = {
        verifyPlaceholder:'请输入验证码',
        passwordPlaceholder:'输入6～16位登录密码',
        passwordAgain:'再次确认登录密码',
        verifyInfo:'获取验证码',
        isTermChoose:true,
        inputVerify:'',
        inputPassword:'',
        inputPasswordAgain:'',
        lengthWrong:false,
        lengthWrongLabel:false,
        passwordWrong:false,
        passwordWrongLabel:false,
        verifyWrong:false,
        verifyWrongLabel:false,
    }

    backToLogin = ()=>{
        this.props.createLoginAction()
    }

    getVerify = ()=>{
        this.setState({verifyInfo:'获取中...'})
    }

    nextStep = () =>{
        const { 
                isTermChoose,
                inputVerify,
                inputPassword,
                inputPasswordAgain} = this.state
        if(inputVerify.length === 0){
            this.setState({verifyWrong:true})
            this.setState({verifyWrongLabel:true})
            setTimeout(()=>{
                this.setState({verifyWrong:false})
            }, 1000)
            return ;
        }else{
            this.setState({verifyWrongLabel:false})
        }
        if(inputPassword.length < 6 || inputPassword.length > 16){
            this.setState({lengthWrong:true})
            this.setState({lengthWrongLabel:true})
            setTimeout(()=>{
                this.setState({lengthWrong:false})
            }, 1000)
            return ;
        }else{
            this.setState({lengthWrong:false})
            this.setState({lengthWrongLabel:false})
        }
        if(inputPassword !== inputPasswordAgain){
            this.setState({passwordWrong:true})
            this.setState({passwordWrongLabel:true})
            setTimeout(()=>{
                this.setState({passwordWrong:false})
            }, 1000)
            return ;
        }else if(inputPassword === inputPasswordAgain){
            this.setState({passwordWrongLabel:false})
        }
        if(!isTermChoose){
            return ;
        }
        message.success("Register Success")
    }

    changePlaceholder = (target, value)=>{
        switch(target){
            case "verifyPlaceholder":
                this.setState({verifyPlaceholder:value})
                break;
            case "passwordPlaceholder":
                this.setState({passwordPlaceholder:value})
                break
            case "passwordAgain":
                this.setState({passwordAgain:value})
                break
        }
    }

    changeReadTerm = ()=>{
        const {isTermChoose} = this.state
        this.setState({isTermChoose:!isTermChoose})
    }

    inputPassword = (e)=>{
        this.setState({inputPassword:e.target.value})
    }

    inputPasswordAgain = (e)=>{
        this.setState({inputPasswordAgain:e.target.value})
    }

    inputVerify = (e)=>{
        this.setState({inputVerify:e.target.value})
    }

    render() {
        const {data} = this.props.states
        const {verifyPlaceholder,
               passwordPlaceholder,
               passwordAgain,
               verifyInfo,
               isTermChoose,
               lengthWrong,
               lengthWrongLabel,
               passwordWrong,
               passwordWrongLabel,
               verifyWrong,
               verifyWrongLabel} = this.state
        return (
            <div>
                <div className='register-title2'>欢迎注册</div>
                <div className='tel'>
                    TEL: {data}
                </div>
                <div className={`input-box verify ${verifyWrong ? " loginfailed":""}`}>
                    <input
                        onFocus = {()=>{this.changePlaceholder("verifyPlaceholder","")}}
                        onBlur = {()=>{this.changePlaceholder("verifyPlaceholder","请输入验证码")}}
                        placeholder = {verifyPlaceholder} 
                        onKeyUp = {(e)=>{this.inputVerify(e)}}
                        type="test" />
                        <div className='getVerify' onClick = {this.getVerify}>
                            <span>｜</span>
                            <span>{verifyInfo}</span>
                        </div>
                        <span className={`wrong-label ${verifyWrongLabel ? "":" hidden"}`}>请输入验证码</span>
                </div>
                <div className={`input-box ${lengthWrong ? " loginfailed":""}`}>
                    <input 
                        onKeyUp = {(e)=>{this.inputPassword(e)}}
                        onFocus = {()=>{this.changePlaceholder("passwordPlaceholder","")}}
                        onBlur = {()=>{this.changePlaceholder("passwordPlaceholder","输入6～16位登陆密码")}}
                        placeholder = {passwordPlaceholder}
                        type="password"/>
                        <span className={`wrong-label ${lengthWrongLabel ? "":" hidden"}`}>密码长度应为6～16位数字</span>
                </div>
                <div className={`input-box ${passwordWrong ? " loginfailed":""}`}>
                    <input type="password"
                        onKeyUp = {(e)=>{this.inputPasswordAgain(e)}}
                        onFocus = {()=>{this.changePlaceholder("passwordAgain","")}}
                        onBlur = {()=>{this.changePlaceholder("passwordAgain","再次确认登陆密码")}}
                           placeholder={passwordAgain} />
                        <span className={`wrong-label ${passwordWrongLabel ? "":" hidden"}`}>两次密码不一致</span>
                </div>

                <div className='terms'>
                    <span className='circle-area' onClick = {this.changeReadTerm}>
                        <span className={`circle ${isTermChoose ? "":"hidden"}`}></span>
                    </span>
                    
                    <span className='agreement'>我已认真阅读并同意</span>
                    <span>
                        <a className='agreement' href="#">《注册协议》</a>
                    </span>
                    <span className={`terms-hide ${isTermChoose ? " hidden":" loginfailed"}`}>请同意《注册协议》</span>
                </div>

                <div className="nav">
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
        createLoginAction
    }
)(registerFormPart2)