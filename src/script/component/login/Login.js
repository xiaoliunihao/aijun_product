import React,{Component} from "react";
export default class Login extends Component{
	render(){
		return(
			<div className="login_container">
				<div className="Login_img">
					<img src="http://www.fanjiangdz.com/weixin/newpublic/images/logobgImg.png"/>
				</div>
				<div className="PeronMess">
					<input type="text" placeholder="手机号"  className="PhoneNum"/>
					<input type="text" placeholder="验证码" className="Password"/>
				</div>
				<div className="Login_Mess">
					<button className="login">登录</button>
				</div>
			</div>
		)
	}
}