import React , {Component}from 'react';
import { Carousel } from 'antd';
import './Slider.css';
import 'antd/dist/antd.css'; 
import axios from 'axios';

class Sliders extends Component {
	componentWillMount(){
		axios.get('/yiwu/showcase/template/7')
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
  	render() {
    	return(  
    		<Carousel class="slid">
		    	<div><h3>
		    		{1}
		    	</h3></div>
		    
		  	</Carousel>
		);
  	}
}

export default Sliders;