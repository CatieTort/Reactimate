import React, { Component } from 'react'
import BouncyBall from '../Components/BouncyBall'
import Button from '../Components/Button'

const ball = <BouncyBall />

class Bounce extends Component {
	constructor(props){
		super(props)

		this.state = {
			clicked: false
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState({clicked: !this.state.clicked})
	}

	render(){
		const { clicked } = this.state
		return(
			<div className="bounce container">
			{clicked ? <BouncyBall /> :
				<div className="heading" onClick={this.handleClick}>Bounce Me</div>}
				<Button newClass={"nxtBtn"} href={'/spinny'} btnText={'Next Page'} />
			</div>
		)
	}
}

export default Bounce
