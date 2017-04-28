import React,{Component} from "react";

import Modal  from '../../../component_dev/modal/src'

export default class Login extends Component{
	constructor(props) {
		super(props)
		this.state={
			Modal :false
		}
	}
	
	submit() {
		let username = this.refs.username1.value;
		let password = this.refs.password1.value;
		console.log(this)
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		})

		fetch("/mylogin/users/registor", {
			method: 'POST',
			headers: headers,
			body: `username=${username}&password=${password}`
		})

		.then((response) => response.json())
			.then(res => {
				if (res.username) {
					console.log(res.username)
					/*this.setState({Modal:false});*/
				} else {
					console.log('fail')
				}
			})
			.catch(e => {
				console.log(e)
			})
	}

	loginForm(){
		let username = this.refs.username.value;
		let password = this.refs.password.value;

		let headers = new Headers({
			/*'Content-Type': 'application/json;charset=utf-8'*/
			'Content-Type': 'application/x-www-form-urlencoded'
		})

		fetch("/mylogin/users/login", {
			method: 'POST',
			headers: headers,
			body: `username=${username}&password=${password}`
			/*body:{
				username:username,
				password:password
			}*/
		})

		.then((response) => response.json())
			.then(res => {
				if (res.username) {
					console.log(res.username);

				} else {
					console.log('fail')
				}
			})
			.catch(e => {
				console.log(e)
			})
	}

	render(){
		return(
			<div className="login_container">
				<Modal show={this.state.Modal} align="center" width={'90%'} height={'30%'} extraClass="m-registor" >
					<input type="text" placeholder="用户名"  className="mo-user" ref="username1"/>
					<input type="password" placeholder="密码" className="mo-pass" ref="password1"/>
					<button className="mo-registor" onClick={this.submit.bind(this)}>注册</button>
				</Modal>
				<div className="Login_img">
					<img src="http://www.fanjiangdz.com/weixin/newpublic/images/logobgImg.png"/>
				</div>
				<div className="PeronMess">
					<input type="text" placeholder="用户名"  className="PhoneNum" ref="username"/>
					<input type="password" placeholder="密码" className="Password" ref="password"/>
				</div>
				<div className="Registor_Mess">
					<b className="registor" onClick={()=>{this.setState({Modal:true})}}>点此快速注册</b>
				</div>
				<div className="Login_Mess">
					<button className="login" onClick={this.loginForm.bind(this)}>登录</button>
				</div>
			</div>
		)
	}
}