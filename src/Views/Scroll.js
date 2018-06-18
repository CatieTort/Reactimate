import React, { Component } from 'react'
import Button from '../Components/Button'
import { CSSTransition } from 'react-transition-group'

class Scroll extends Component {
	render(){
		return(
			<div className="scroll container">
				<div className="heading">Scroll</div>
				<Button newClass={"nxtBtn"} href={'/slidey'} btnText={'Next Page'} />
			</div>
		)
	}
}

export default Scroll
