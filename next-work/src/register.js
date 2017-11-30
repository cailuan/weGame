//该组件是‘登录’页
import React, {Component} from 'react';
import './register.css'
import axios from 'axios'
import {createBrowserHistory} from 'history'
import { NavLink } from 'react-router-dom'

export default class Register extends Component {
    constructor() {
        super()
        this.register = this.register.bind(this)
    }
        register() {
        //注册——————————————————————————————————————————————————————————
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        
        axios.post('/users/regist', {
            username: document.querySelector('#username').value,
            psw: document.querySelector('#password').value
        })
            .then((res) => {
                console.log(res)
                // if (res.data.code !== 1) {
                //     alert(res.data);
                //     return;
                // }
                history.push('./login')//注册成功跳转到登录页
                alert('注册成功')
            })

    }

    render() {
        return (
            <div id='register'>
                <div className="goUp"><a href="/">关闭</a></div>
                <div className="register_header">
                      <img src={require("./images/pic (24).jpg")} />
                </div>
                <div className='register_content'>
                    <div className='register_inputDiv'>
                        <i className='register_user' ><img src={require("./images/pic (26).jpg")}/></i>
                        <input type="text" id='username' placeholder='手机号'/>
                    </div>
                    <div className='register_inputDiv'>
                        <i className='register_user' ><img src={require("./images/pic (28).jpg")}/></i>
                        <input type="text" id='password' placeholder='登录密码（6-15字符）'/>
                    </div>

                    <div className="register_footer">
                            <input type="checkbox" className="choose"/>
                            <p>已阅读并同意<a>《易物网用户协议》</a></p>
                    </div>
                    <button className="register_dianji" onClick={() => this.register()}>立即注册</button>
                </div>
            </div>
        )
    }
}



