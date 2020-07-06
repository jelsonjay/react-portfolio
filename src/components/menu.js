import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './aboutme';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import Error from './error';

const Menu = () => (
	<Switch>
		<Route exact path='/' component={LandingPage} />
		<Route exact path='/aboutme' component={About} />
		<Route exact path='/resume' component={Resume} />
		<Route exact path='/portfolio' component={Portfolio} />
		<Route exact path='/contact' component={Contact} />
		<Route component={Error} />
	</Switch>
);

export default Menu;
