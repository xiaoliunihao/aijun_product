import React,{Component} from "react";
export default class Sort_List extends Component{
	constructor(props){
		super(props)
		this.state={
			sortDataList:[]
		}
	}
	getDataSort(list){
		console.log(this)
		return list.map((value,index)=>{
			return(
				<li>
			        <div className="product_img">
			            <img src={"http://www.fanjiangdz.com/image/"+value.filepath} />
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
		return(
			<div className="products_type">
				<ul id="product_box">
				    {this.getDataSort(this.state.sortDataList)}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		var urlLink=''; 
		if(this.props.TypeId="undefined"){
			urlLink="/sortdata/products/category/ajaxselect?id=1&currPage=1";
		}else{
			urlLink="/sortdata/products/category/ajaxselect?id="+this.props.TypeId+"&currPage=1";
		}
		console.log(urlLink)
		fetch(urlLink)
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