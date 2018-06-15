import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Button extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { href, btnText, handleClick } = this.props
		return(
				<Link to={href ? href : "/"} className="button" onClick={handleClick}>
					<span className="button__text">{btnText}</span>
				</Link>
		)
	}
}

export default Button
