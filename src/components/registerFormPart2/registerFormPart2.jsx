import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ArrowLeftOutlined} from  '@ant-design/icons';
import {createLoginAction} from '../../redux/action'
import './registerFormPart2.css'
class registerFormPart2 extends Component {


    backToLogin = ()=>{
        this.props.createLoginAction()
    }

    render() {
        const {data} = this.props.states
        return (
            <div>
                <div className='tel'>
                    TEL: {data}
                </div>
                <div className="nav">
                    <div onClick={this.backToLogin} className='back-login'>
                        <ArrowLeftOutlined />
                        <span>返回登陆</span>
                    </div>
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