import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

ReactDom.render(
    <App/>,
    document.getElementById('root'))