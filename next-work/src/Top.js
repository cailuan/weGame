import React , {Component} from 'react';
import './Top.css'
import 'antd/dist/antd.css'; 
import { Icon } from 'antd';

class Top extends Component {
	render(){
		return (
				<div className='top'>
					<div className="top_only">
						<div className='writeIn'><Icon className="icn" type="search" style={{ fontSize: 16, color: '#08c' }} /><input type='text' placeholder='搜索'/></div>
						<div><Icon className="icn" type="bars" style={{ fontSize: 16, color: '#08c' }} /></div>
					</div>
					<div className="bar_li">
						<ul className='bar'>
							<li>清新推荐</li>
							<li>3c数码</li>
							<li>潮流服饰</li>
							<li>心动全球</li>
							<li>极具生活</li>
							<li>鞋靴箱包</li>
							<li>易物超市</li>
							<li>母婴</li>
							<li>品质家居</li>
						</ul>
					</div>
					
				</div>
			);
	}
}

export default Top;