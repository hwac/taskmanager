import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
import Button from 'components/Button';
import './Header.scss';
import Modal from 'components/Modal';
import { inject } from 'mobx-react';
import { observable } from 'mobx';
dotenv.config();

const loginSuccess = (response) => {
	console.log(response);
}

const loginFailure = (response) => {
	console.log(response);
}

const clickMenuButton = () => {
	alert("메뉴클릭")
}

@inject(stores => ({
	login: stores.userStore.login()
}))

@observable
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
      isLoginModalOpen: false, 
    }
	}

	loginButtonCallback = (value) => {
		// console.log(value);
		this.props.login(value);
		value == 0 && this.closeLoginModal();
	}

	closeLoginModal = () => {
		this.setState({ isLoginModalOpen: false }); 
	}
	
	openLoginModal = () => {
		this.setState({ isLoginModalOpen: true });
	}

	render () {
		return (
			<div className="header">
				<div className="left">
					<Button
						className="btn-menu"
						clickEvent={clickMenuButton}
					/>
					{/* <h1>Hwac</h1>
					<span>작업관리</span> */}
				</div>
				<div className="right">
					<Button
						clickEvent={this.openLoginModal}
						className="btn-two cyan mini"
					>로그인</Button>
				</div>
				<Modal
					title="로그인"
					callbackFunction={this.loginButtonCallback}
					isOpen={this.state.isLoginModalOpen}
					close={this.closeLoginModal}
					buttonGroup={[
						// {
						// 	text:"확인",
						// 	value:1,
						// 	className:"green"
						// },
						{
							text:"닫기",
							value:0,
							className:"purple"
						}
					]}
				>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						buttonText="구글로그인"
						onSuccess={loginSuccess}
						onFailure={loginFailure}
						cookiePolicy={'single_host_origin'}
					/>
				</Modal>
			</div>
		)
	}
}
export default Header;