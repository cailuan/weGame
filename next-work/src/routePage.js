import React ,{Component} from 'react'
import './routePage.css';
import 'antd/dist/antd.css'; 
import { Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Routepage extends Component{
	componentDidCount(){

	}
	render(){
		return (
		<div className="routepage">
			<ul className="route_page">
		        <li>
		        	<Link to="/">
		        		<Icon type="home" style={{ fontSize: 22, color: '#08c' }} />
		        		<p>首页</p>
		        	</Link>
		        </li>
		        <li>
		        	<Link to="/about">
		        		<Icon type="coffee" style={{ fontSize: 22, color: '#08c' }} />
		        		<p>生活</p>
		        	</Link>
		        </li>
		        <li>
		        	<Link to="/topics">
		        		<Icon type="shopping-cart" style={{ fontSize: 22, color: '#08c' }} />
		        		<p>购物车</p>
		        	</Link>
		        </li>
		        <li>
		        	<Link to="/useregister">
		        		<Icon type="user" style={{ fontSize: 22, color: '#08c' }} />
		        		<p>用户</p>
		        	</Link>
		        </li>
		    </ul>
	    </div>
	    );
	}
}
export default Routepage;