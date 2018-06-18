import React, { Component } from 'react'
import Button from '../Components/Button'

class Slide extends Component {
	render(){
		return(
			<div className="slide container">
				<div className="heading">Slide Me</div>
				<Button newClass={"nxtBtn"} href={'/end'} btnText={'Next Page'} />
			</div>
		)
	}
}

export default Slide
