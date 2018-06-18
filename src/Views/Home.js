import React, { Component } from 'react';
import Button from '../Components/Button'

class Home extends Component {
	render(){
		return(
			<div className="home container">
				<div className="heading">Home</div>
				<Button newClass={"homeBtn"} href={'/bouncy'} btnText={"Let's Go"} />
			</div>
		)
	}
}

export default Home
