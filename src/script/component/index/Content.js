import React,{Component} from "react";
import {Link} from "react-router";
export default class Content extends Component{
	render(){
		return(
			<div className="index_content">
			首页内容
			   <span><Link to="/StoreDetail/?id=1">进入商品详情页面1</Link></span>
			   <span><Link to="/StoreDetail/?id=2">进入商品详情页面2</Link></span>
			</div>
		)
	}
}