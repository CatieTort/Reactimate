import React, { Component } from 'react'
import Button from '../Components/Button'
import { CSSTransition } from 'react-transition-group'

class Spin extends Component {
	render(){
		return(
			<div className="spin container">
				<div className="heading">Spin</div>
				<Button newClass={"nxtBtn"} href={'/scrolly'} btnText={'Next Page'} />
			</div>
		)
	}
}

export default Spin
