import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ArrowLeftOutlined, ArrowRightOutlined} from  '@ant-design/icons';
import {createLoginAction, createRegister2Action} from '../../redux/action'
import './registerFormPart.css'
class registerFormPart extends Component {

    state = {
        placeholder:'手机号/邮箱',
        phone:'',
        errorMsg:false,
        errorInfo:false
    }
    
    changePlaceholder = (target)=>{
        this.setState({placeholder:target})
    }

    backToLogin = ()=>{
        this.props.createLoginAction()
    }

    changeKey = (e)=>{
        this.setState({phone:e.target.value})
    }

    nextStep = ()=>{
        const {phone} = this.state        
        var myreg=/^1[3-9]\d{9}$/;
        if (!myreg.test(phone)) {
            this.setState({errorMsg:true})
            this.setState({errorInfo:true})
            setTimeout(()=>{
                this.setState({errorMsg:false})
            }, 1000)
        } else {
            this.props.createRegister2Action(phone)
        }
    }

    render() {
        return (
            <div>
                <h2 className='register-title'>欢迎注册</h2>
                <div>
                    <div className = {`input-div ${this.state.errorMsg ? ' loginfailed': ''}`}>
                        <input 
                            onKeyUp = {(e)=>{this.changeKey(e)}}
                            type="text"
                            placeholder = {this.state.placeholder} 
                            onClick={()=>{this.changePlaceholder('')}}
                            onBlur={()=>{this.changePlaceholder('手机号/邮箱')}}/>
                            <span className={`${this.state.errorInfo ? "":"hidden"}`}>手机号或邮箱格式错误</span>
                    </div>
                 
                    <div className='nav'>
                        <div onClick={this.backToLogin} className='back-login'>
                            <ArrowLeftOutlined />
                            <span>返回登陆</span>
                        </div>
                        <button onClick={this.nextStep} className='next-step'>
                            <span>下一步</span>
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{return {states:state.stateChange}},
    {
        createLoginAction,
        createRegister2Action
    }
)(registerFormPart)