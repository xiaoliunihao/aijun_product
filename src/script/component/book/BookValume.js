import React,{Component} from "react";
import Header from "../commen/Header";
import BookContent from "./book_content";
let titleName=""
export default class BookValume extends Component{
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
		}
		return titleName;
	}
	render(){
		return(
			<div className="book_contain">
				<div className="book_header">
					<Header title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				</div>
				<div className="book_content">
					<BookContent />
				</div>
				<div className="book_footer">
					预约美女量体上门
				</div>
			</div>
		)
	}
}