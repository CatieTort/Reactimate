import React, { Component } from 'react'
import Button from '../Components/Button'

class Bounce extends Component {

	render(){
		return(
			<div className="bounce container">
				<div className="heading">Bounce</div>
				<Button newClass={"nxtBtn"} href={'/spinny'} btnText={'Next Page'} />
			</div>
		)
	}
}

export default Bounce
