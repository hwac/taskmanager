import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

const loginSuccess = (response) => {
	console.log(response);
}

const loginFailure = (response) => {
	console.log(response);
}

class Login extends Component {
	constructor(props) {
    super(props);

		console.log(props);
    this.state = {
      
    };
  }
	render () {
		return (
			<div className="Header">
				<div className="left">
					<span>Hwac</span>
					<span>작업관리</span>
				</div>
				<div className="right">
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						buttonText="구글로그인"
						onSuccess={loginSuccess}
						onFailure={loginFailure}
						cookiePolicy={'single_host_origin'}
					/>
				</div>
			</div>
		)
	}
}
export default Login;