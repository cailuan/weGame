//“我的”子路由页
import React from 'react';
import './compent/public.css';
import Login from './login'
import Register from './register'
import {
	BrowserRouter as Router,
	Router,
	Switch,
	Redirect
} from 'react-router-dom'

const MyUI = () => {
	return (
		<div>
			<Router>
				<div>
					<Switch>
						<Redirect exact from={`./} to={`./home`}/>{/*重定向到myhome页*/}
	                    <Route path={`/my/register`} component={Register}/>
                        <Route path={`/my/login`} component={Login}/>
					</Switch>
				</div>
			</Router>
		</div>
		)
}

export default MyUI;