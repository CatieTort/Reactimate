import React, { Component } from 'react'
import Button from '../Components/Button'
import { CSSTransition } from 'react-transition-group'

class Slide extends Component {
	render(){
		return(
			<CSSTransition
			>
			<div className="slide container">
				<div className="heading">Slide</div>
				<Button newClass={"nxtBtn"} href={'/end'} btnText={'Next Page'} />
			</div>
			</CSSTransition>
		)
	}
}

export default Slide
