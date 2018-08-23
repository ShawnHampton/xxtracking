import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Main from 'modules/main/index';

import { startupInit } from '../startup/actions';

import '../../index.scss';

/**
 * Application landing space
 */
export class App extends React.Component {
	componentDidMount() {
		this.props.startupInit();
	}

	render() {
		return (
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/main" component={Main} />
						<Redirect to="/main" />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

const mapStateToProps = (state, props) => ({});

export default connect(
	mapStateToProps,
	{
		startupInit
	}
)(App);
