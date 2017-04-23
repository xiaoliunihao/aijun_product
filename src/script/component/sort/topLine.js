import React,{Component} from "react";
export default class TopLine extends Component{
	selectTypeId(){
		console.log(this)
		let liState=this.refs.content_tao.innerHTML;
		var typeId
		switch(liState){
			case "套西":typeId=1;break;
			case "单西":typeId=2;break;
			case "裤装":typeId=3;break;
			case "大衣":typeId=4;break;
			case "马甲":typeId=5;break;
			case "衬衫":typeId=6;break;
			case "箱包":typeId=7;break;
			case "个户":typeId=8;break;
			case "羊绒衫":typeId=9;break;
			case "家纺":typeId=11;break;
		}
		console.log(typeId)
		this.props.onFatherLi({typeId:typeId})
	}
	
	render(){
		console.log(this)
		return(
           <div className="topLine line_scroll">
           		<ul>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_tao" className="border_active">套西</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_dan">单西</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_ku">裤装</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_da">大衣</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_ma">马甲</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_chen">衬衫</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_xiang">箱包</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_ge">个户</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_yang">羊绒衫</i></span>
					</li>
					<li onClick={this.selectTypeId.bind(this)}>
						<span><i ref="content_jia">家纺</i></span>
					</li>
				</ul>
           </div>
		)
	}
}
