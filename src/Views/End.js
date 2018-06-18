import React, { Component } from 'react';
import Button from '../Components/Button'


class End extends Component {
	render(){
		return(
			<div className="end container">
				<div className="heading">It's Over!</div>
				<Button newClass={"nxtBtn"} href={'/'} btnText={'Go Home'} />
			</div>
		)
	}
}

export default End
