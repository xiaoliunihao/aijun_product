import React,{Component} from "react";
import Scroller from '../../../component_dev/scroller/src';
export default class Sort_List extends Component{
	constructor(props){
		super(props)
		this.state={
			sortDataList:[]
		}
	}
	getDataSort(list){
		
		return list.map((value,index)=>{
			return(
				<li>
			        <div className="product_img">
			            <Scroller.LazyImage height="218" src={"http://www.fanjiangdz.com/image/"+value.filepath} />
			        </div>
			        <div className="product_intro">
			           <span>{value.name}</span>
			           <span>{value.categoryPLName}</span>
			        </div>
			        <div className="product_sign">{value.manufacturer}</div>
			        <div className="product_price">{value.price}.00</div>
			    </li>
			)
		})
	}
	render(){
		if(this.props.TypeIdData.length!=0){
			this.state.sortDataList=this.props.TypeIdData;
		}
		return(
			<div className="products_type">
				<ul id="product_box">
				    {this.getDataSort(this.state.sortDataList)}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		fetch("/sortdata/products/category/ajaxselect?id=1&currPage=1")
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				sortDataList:res.data
			})
			
		})
		.catch(function(e){
			alert(e)
		})
	}
}