import React , {Component} from 'react';
import axios from 'axios';

class Register extends Component{
	constructor() {
		super();
		this.state={
			username : [],
			password : []
		}
		console.log('222')
		this.getRegister = this.getRegister.bind(this);
	}
	getRegister(date1,date2){
		this.state.username = date1;
		this.state.password = date2;
		axios.post('/users/register', {
		    username: this.state.username ,
		    password: this.state.password
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		return (
				<div className = 'register'>
					<input	type='text' ref='username'/>
					<input	type='text' ref='password'/>
					<button onClick={()=>{this.getRegister(this.refs.username.value,this.refs.password.value)}}>注册</button>
				</div>
			);
	}
}

export default Register;