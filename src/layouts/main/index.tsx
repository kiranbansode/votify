import { Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import Registration from 'pages/Registration';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/" render={() => <LoginPage />} />
			<Route exact path="/dashboard" render={() => <Dashboard />} />
			<Route exact path="/register" render={() => <Registration />} />
		</Switch>
	</div>
);

export default Main;
