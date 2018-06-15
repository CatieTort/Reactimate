import React, { Component } from 'react'
import BouncyBall from '../Components/BouncyBall'

const ball = <BouncyBall />

class Bounce extends Component {
	constructor(props){
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){

		return ball
	}

	render(){
		return(
			<div className="bounce container">
				<div className="bounce_title" onClick={this.handleClick}>Click to Bounce Me</div>
				<div className="bounce__ball-container">{ball}</div>
			</div>
		)
	}
}

export default Bounce
