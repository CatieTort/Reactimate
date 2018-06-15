import React, { Component } from 'react'
import Button from '../Components/Button'


class Nope extends Component {
	render(){
		return(
			<div className="wrong">
				<div className="wrong__title heading">Whoop there it is!</div>
				<div className='wrong__txt text'>Sorry the page you are looking for does not exist</div>
				<Button btnText={"Get Me Out Of Here!"} />
			</div>
		)
	}
}

export default Nope
