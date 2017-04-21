import React,{Component} from "react";
import Header from "./board/Header";
import Board from "./boardList/board";
import Footer from "./board/Footer";
export default class Index extends Component{
	render(){
		console.log(this)
		return(
			<div className="index_container">
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}

