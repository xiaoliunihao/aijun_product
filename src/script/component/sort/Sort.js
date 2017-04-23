import React,{Component} from "react";
import TopLine from "./topLine";
import Sort_List from "./Sort_List";
export default class Sort extends Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      liValue: {}
	    }
	}
	getLiHtml(data){
		this.setState({
	      liValue: data
	    })
	}
	render(){
		return(
			<div className="m-sort">
				<TopLine onFatherLi={this.getLiHtml.bind(this)}/>
				<Sort_List TypeId={this.state.liValue.typeId} />
			</div>
		)
	}
	
}