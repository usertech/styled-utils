import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';

import ButtonExampleScreen from 'screens/ButtonExampleScreen';
import PostExampleScreen from 'screens/PostExampleScreen';
import SandboxExampleScreen from 'screens/SandboxExampleScreen';
import DemoScreen from 'screens/DemoScreen';

const App = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Switch>
					<Route path="/demo" component={DemoScreen} />
					<Route path="/buttons" component={ButtonExampleScreen} />
					<Route path="/post" component={PostExampleScreen} />
					<Route path="/sandbox" component={SandboxExampleScreen} />
					<Redirect to="/demo" />
				</Switch>
			</Fragment>
		</BrowserRouter>
	);
};

export default App;
