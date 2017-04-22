import React,{Component} from "react";

import BrandList from "./BrandList";



export default class Brand extends Component{
	render(){
		return(
			<div className="m-brand">
				<div className="brandFabric">
					<img src="http://www.fanjiangdz.com/weixin/newpublic/images/wxmater01.jpg"/>
				</div>
				<BrandList />
			</div>
		)
	}
}