import React, { Component } from 'react';

class User extends Component {
  static defaultProps  = {
    children:""
  }
	constructor(props) {
    super(props);
    this.state = {
      imgPath:""
    };
  }
	render () {
    const {children, clickEvent, className} = this.props;
		return (
      <div className={className}>
        
      </div>
    )
	}
}
export default User;