import React,{Component} from "react";
export default class Login extends Component{
	constructor(props) {
		super(props)
	}
	
	submit() {
		let username = this.refs.username.value;
		let password = this.refs.password.value;

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
			'Content-Type': 'application/x-www-form-urlencoded'
		})

		fetch("/mylogin/users/login", {
			method: 'POST',
			headers: headers,
			body: `username=${username}&password=${password}`
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
				<div className="Login_img">
					<img src="http://www.fanjiangdz.com/weixin/newpublic/images/logobgImg.png"/>
				</div>
				<div className="PeronMess">
					<input type="text" placeholder="用户名"  className="PhoneNum" ref="username"/>
					<input type="password" placeholder="密码" className="Password" ref="password"/>
				</div>
				<div className="Registor_Mess">
					<button className="login" onClick={this.submit.bind(this)}>注册</button>
				</div>
				<div className="Login_Mess">
					<button className="login" onClick={this.loginForm.bind(this)}>登录</button>
				</div>
			</div>
		)
	}
}