import React,{Component} from "react";
import Sort_List from "./Sort_List";
import TopLine from "./topLine";
import Scroller from '../../../component_dev/scroller/src';
export default class Sort extends Component{
	constructor(props){
		super(props)
		this.state={
			TypeIdData:[]
		}
	}
	getTyidValue(data){
		fetch("/sortdata/products/category/ajaxselect?id="+data.TypeId+"&currPage=1")
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				TypeIdData:res.data
			})
		})
		.catch(function(e){
			alert(e)
		})
		
	}
	render(){
		return(
			<div className="m-sort">
				<Scroller 
				extraClass="yo-scroller-c"
				scrollX={false} 
				scrollY={true}
				>
					<TopLine onFatherLi={this.getTyidValue.bind(this)}/>
					<Sort_List TypeIdData={this.state.TypeIdData}/>
				</Scroller>
			</div>
		)
	}
	
}