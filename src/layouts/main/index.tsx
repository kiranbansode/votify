import { Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/" render={() => <LoginPage />} />
			<Route exact path="/dashboard" render={() => <Dashboard />} />
		</Switch>
	</div>
);

export default Main;
