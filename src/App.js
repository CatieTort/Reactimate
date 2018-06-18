import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'
import Home from './Views/Home'
import Bounce from './Views/Bounce'
import Spin from './Views/Spin'
import Scroll from './Views/Scroll'
import Slide from './Views/Slide'
import End from './Views/End'
import Nope from './Views/Nope'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Router>
		<Route render={({location}) => (
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					classNames="fade"
					timeout={300}
				 >
					<Switch location={location}>
						<Route exact path="/" component={Home}/>
						<Route path="/bouncy" component={Bounce}/>
						<Route path="/spinny" component={Spin}/>
						<Route path="/scrolly" component={Scroll}/>
						<Route path="/slidey" component={Slide}/>
						<Route path="/end" component={End}/>
						<Route component={Nope} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		)} />
		</Router>
      </div>
    );
  }
}

export default App;
