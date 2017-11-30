//该组件是‘登录’页
import React, {Component} from 'react';
import './login.css'
import axios from 'axios'
import {createBrowserHistory} from 'history'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {
    constructor() {
        super()
        this.login = this.login.bind(this)
    }
    login(){
      var history = createBrowserHistory({
        basename: '',//基链接
        forceRefresh: true,//是否强制刷新整个页面
        keyLength:6,//location.key的长度
        getUserConfirmation: (message,callback) =>callback(window.confirm(message)) //跳转拦截函数
      })
      //登录----------------------------------------------------------------------------
      console.log(document.querySelector('#username').value)
      console.log(document.querySelector('#password').value)
      axios.post('/users/login', {
        username:document.querySelector('#username').value,
        psw:document.querySelector('#password').value
      })
      .then((res) => {
        if(res.data.code !== 1){
          alert(res.data.message);
          return;
        }
        document.cookie = 'user=' + document.querySelector('#username').value + ';path=/';
        history.push('/') //登录成功刷新页面
        alert('登录成功')
      })
    }

    render() {
        return (
            <div id='login'>
                <div className="goUp"><a href="/">关闭</a></div>
                <div className="header">
                      <img src={require("./images/pic (24).jpg")} />
                </div>
                <div className='content'>
                    <div className='inputDiv'>
                        <i className='user' ><img src={require("./images/pic (6).jpg")}/></i>
                        <input type="text" id='username' placeholder='手机号'/>
                    </div>
                    <div className='inputDiv'>
                        <i className='user' ><img src={require("./images/pic (4).jpg")}/></i>
                        <input type="password" id='password' placeholder='登录密码'/>
                    </div>
                    <div className="footer">
                      <ul>
                        <li className="left"><a href="./register">忘记密码</a></li>
                        <li className="right"><a href="./register">立即注册</a></li>
                      </ul>
                    </div>
                    <button className="dianji" onClick={() => this.login()}>登录</button>
                </div>
                <div className="picDiv">
                  <img src={require("./images/pic (1).jpg")}/>
                </div>
            </div>
        )
    }
}



