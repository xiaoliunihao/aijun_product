import React,{Component} from "react";
import PubHeader from "../commen/PubHeader";
export default class StoreTwo extends Component{
	constructor(props){
		super(props)
		this.state={
			storeList:[]
		}
	}
	getImg_srcList(list){
		return list.map((value,index)=>{
			return(
				<li>
					<img src={value} alt="" />
				</li>
			)
		})
	}
	render(){
		return (
			<div className="product_tao">
				<PubHeader title={this.props.title} />
				<ul>
					{this.getImg_srcList(this.state.storeList)}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		console.log(this.props.uri)
		fetch("http://localhost:7001/"+this.props.uri)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				storeList:res.src
			})
		})
	}
}
