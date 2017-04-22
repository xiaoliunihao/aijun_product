import React,{Component} from "react";
import PubHeader from "../commen/PubHeader";
export default class TwoColumn extends Component{
	constructor(props){
		super(props)
		this.state={
			storeDataList:[]
		}
	}
	getDataLine(list){
		return list.map((value,index)=>{
			
		})
	}

	render(){
		return (
			<div className="product_tao">
				<PubHeader title={this.props.title} />
				<div className="product_list">
					<div className="product_a">
						<div className="top_product">
							<img src="" />
						</div>
						<div className="news_product">
							<h1>jghjfgjh</h1>
							<p className="sign_p">hh</p>
							<p className="sign_price">ghgh</p>
						</div>
					</div>
					<div className="product_a">
						<div className="top_product">
							<img src="" />
						</div>
						<div className="news_product">
							<h1>jghjfgjh</h1>
							<p className="sign_p">hh</p>
							<p className="sign_price">ghgh</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		fetch("/indexList/products/findWxPro?callback")
		.then((response)=>response.json())
		.then((res)=>{
			console.log(res)
			
		})
		.catch(function(e){
			alert(e)
		})
	}
	
}
