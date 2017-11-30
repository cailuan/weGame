import React,{Component} from 'react';
import Top from './Top';
import './Home.css';
import { Carousel,Icon } from 'antd';
import './Slider.css';
import 'antd/dist/antd.css'; 
import axios from 'axios';
import RoutePage from './routePage';


class Home extends Component{
	constructor(){
		super();
		this.state = {
			slid : [],
			classify : [],
			flashSale : [],
			flashSale_name : [],
			health : {},
			paging :[],
			list : []
		}
	}
	componentWillMount(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/750*100+"px";
		var that = this;
		axios.get('/yiwu/showcase/template/7')
		  .then(function (response) {
		    that.setState({
		    	slid : response.data.result.components[0].items,
		    	classify :  response.data.result.components[1].items,
		    	flashSale : response.data.result.components[2],
		    	flashSale_name : response.data.result.components[2].items,
		    	health : response.data.result.components[3].items[0],
		    })
		    console.log(that.state.flashSale_name)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  axios.get("/yiwu/product/listByProductIds.do?productIds=256248&productIds=101792&productIds=563663&productIds=559539&productIds=563995&productIds=167504&productIds=610059&productIds=503406&productIds=561467")
		  	.then(function(response){
		  		that.setState({
		  			paging : response.data.result
		  		})
		  	})
		  axios.get("/yiwu/product/listByProductIds.do?productIds=143745&productIds=149144&productIds=142237&productIds=143820&productIds=612092&productIds=564074&productIds=506301&productIds=557838&productIds=500263&productIds=505107&productIds=505137&productIds=501255&productIds=214681")
		  	.then(function(response){
		  		console.log(response);
		  		that.setState({
		  			list : response.data.result
		  		})
		  	})
	}
	componentDidMount(){

	}
	render(){

		return (
				<div className='home'>
					<Top/>				
		    		<Carousel className="carousel">
					    {		
			    			this.state.slid.map(function(item,index){
			    				return (<div key={index} className="lun"><img src={item.url}/></div>)
			    			})
			    		}
					</Carousel>
					<div className="classify">
						{
							this.state.classify.map((item,index)=>{
								return (
										<div className="classify_one" key={index}>
											<img src={item.url}/>
											<div>{item.title}</div>
										</div>
									)
							})
						}
					</div>
					<div className="flashSale">
						<div>
							<img src={this.state.flashSale.icon} className="flashSale_fir"/>
							<span>{this.state.flashSale.title}</span>
						</div>
						<div className="productList">
							{
								this.state.flashSale_name.map((item,index)=>{
									return (<div key={item.id}><img src={item.url}/></div>);
								})
							}
						</div>
					</div>
					<div>
						<img src={this.state.health.url} style={{width: 100+'vw'}}/>
					</div>
					<div className="sliders">
						<Carousel>
							<div className="commodities">
								{
									this.state.paging.map((item , index)=>{

										if( parseInt(index/3) == 0){
											return (<div className="onlyList"  key={item.id} ><img src={item.picture}className="commodity"/>
														<div className="onlyListName"><div>{item.name}</div><div>{item.price}</div></div>
													</div>
												);
										}

									})
								}
							</div>
							<div className="commodities">
								{
									this.state.paging.map((item , index)=>{

										if( parseInt(index/3) == 1){
											return (<div className="onlyList"  key={item.id} ><img src={item.picture}className="commodity"/>
														<div className="onlyListName"><div>{item.name}</div><div>{item.price}</div></div>
													</div>
												);
										}

									})
								}
							</div>
							<div className="commodities">
								{
									this.state.paging.map((item , index)=>{

										if( parseInt(index/3) == 2){
											return (<div className="onlyList"  key={item.id} ><img src={item.picture}className="commodity"/>
														<div className="onlyListName"><div>{item.name}</div><div>{item.price}</div></div>
													</div>
												);
										}

									})
								}
							</div>
						</Carousel>
					</div>
					<div className="eachlist">
						{
							this.state.list.map((item,index)=>{
								return (
									<div key ={item.id} className="listDetails">								
										<img src={item.picture} style={{maxHeight:20 + 'vh'}}/>
										<div className="listAll">
											<div className = "listName" >{item.name}</div>
											<div className="listCarts">
												<div >
													<p>￥{item.price}</p>
													<p>{item.sellCount}人已订购</p>
												</div>
												<div><Icon type="like-o" style={{ fontSize: 16, color: '#08c' }} /></div>
											</div>
										</div>
									</div>);
							})
						}
					</div>
					<RoutePage/>
				</div>
			);
	}
}


export default Home ;