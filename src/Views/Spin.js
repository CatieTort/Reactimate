import React, { Component } from 'react'
import Button from '../Components/Button'

class Spin extends Component {
	render(){
		return(
			<div className="spin container">
				<div className="heading">Spin Me</div>
				<Button newClass={"nxtBtn"} href={'/scrolly'} btnText={'Next Page'} />
			</div>
		)
	}
}

export default Spin
