import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
dotenv.config();

const responseGoogle = (response) => {
  console.log(response);
}

class Header extends Component {
	render () {
		return (
			<GoogleLogin
				clientId="process.env.GOOGLE_CLIENT_ID"
				buttonText="구글로그인"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		)
	}
}