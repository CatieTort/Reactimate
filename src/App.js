import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Views/Home'
import Bounce from './Views/Bounce'
import Spin from './Views/Spin'
import Scroll from './Views/Scroll'
import Slide from './Views/Slide'
import Nope from './Views/Nope'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Router>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/bouncy" component={Bounce}/>
				<Route path="/spinny" component={Spin}/>
				<Route path="/scrolly" component={Scroll}/>
				<Route path="/slidey" component={Slide}/>
				<Route component={Nope} />
			</Switch>
		</Router>
      </div>
    );
  }
}

export default App;