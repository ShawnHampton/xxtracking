import { connect } from 'react-redux';
import React from 'react';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { getPlay, getStartedMajors } from '../game/selectors';
import Company from './company';

export class Companies extends React.PureComponent {
	render() {
		return (
			<Paper>
				<AppBar position="static" color="default">
					<Toolbar variant="dense">
						<Typography variant="title" className="title">
							Companies
						</Typography>
					</Toolbar>
				</AppBar>

				<div id="companies">
					{this.props.startedMajors.map(company => {
						return (
							<Company
								key={company.name}
								company={company}
								play={this.props.play}
							/>
						);
					})}
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({
	startedMajors: getStartedMajors(state),
	play: getPlay(state)
});

export default connect(
	mapStateToProps,
	{}
)(Companies);
