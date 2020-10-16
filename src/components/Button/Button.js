import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  static defaultProps  = {
    children:""
  }
	constructor(props) {
    super(props);
    this.state = {
    };
  }
	render () {
    const {children, clickEvent, className} = this.props;
		return (
      <button
        onClick={clickEvent}
        className={className}
      >
        {children}
      </button>
    )
	}
}
export default Button;