import React from 'react'
import Register from './register'
import Login from './login'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/login">登录</Link></li>
        <li><Link to="/register">注册</Link></li>
      </ul>

      <hr/>


      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
)
export default BasicExample