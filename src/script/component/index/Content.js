import React,{Component} from "react";
import Banner from "./Banner";
import Store_line from "./store_line";
import TwoBox from "./TwoBox";
import StoreTwo from "./storeTwo";
import TwoColumn from "./TwoColumn";
import {Link} from "react-router";
export default class Content extends Component{
	render(){
		return(
			<div className="index_content">
				<Banner />
				<Store_line />
				<TwoBox />
				<StoreTwo uri="tao_img_src" title="推荐·套西" />
				<StoreTwo uri="dayi_img_src" title="推荐·大衣" />
				<TwoColumn />
			</div>
		)
	}
}