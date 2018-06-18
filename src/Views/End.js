import React, { Component } from 'react';
import Button from '../Components/Button'
import { CSSTransition } from 'react-transition-group'

class End extends Component {
	render(){
		return(
			<div className="end container">
				<div className="heading">It's Over!</div>
				<Button newClass={"nxtBtn"} href={'/'} btnText={'Again'} />
			</div>
		)
	}
}

export default End
