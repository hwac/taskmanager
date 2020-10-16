import React, { Component } from 'react';
import "./Modal.scss";
import Button from 'components/Button';

//높이 넓이,버튼들

class Modal extends Component {
	static defaultProps  = {
		isOpen:false,
    buttonGroup:[
			{
				text:"닫기",
				value:0,
				className:"blue"
			}
		]
  }
	constructor(props) {
		super(props);
		if(props.confirm){
			
		}
		console.log(props);
    this.state = {
      
    };
  }
	render () {
		const {title, children, buttonGroup, callbackFunction, isOpen} = this.props;
		return (
			<>
			{
				isOpen ? 
				<>
				<div className="modal-overlay" onClick={() => callbackFunction(0)}/>
				<div className="modal">
					{title && 
						<>
						<div className="title">{title}</div>
						<div className="bar"/>
						</>
					}
					<div className="content">
						{children}
					</div>
					<div className="bar"/>
					<div className="button-wrap">
						{/* {buttonGroup.map((item, i) => {
							return (<div><Button className={item.className} key={i} onClick={() => callbackFunction(item.value)}>{item.text}</Button></div>);
						})} */}
						{buttonGroup.map((item, i) => {
							return (<label><Button className={item.className || "purple"} key={i} clickEvent={() => callbackFunction(item.value)}>{item.text}</Button></label>);
						})}
					</div>
				</div>
				</>
				: null
			}
			</>
		)
	}
}
export default Modal;