import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CompanyChooser from '../company/companyChooser';

import { startCompany } from '../stock/actions';
import { acquirePrivateCompany } from './actions';
import { getGame, getUnstartedMajors } from '../game/selectors';
import { getGameStatus } from '../main/selectors';

export class Player extends React.PureComponent {
	render() {
		return (
			<Paper className="player">
				<AppBar position="static" className="playerAppBar">
					<Toolbar variant="dense">
						<Typography variant="title" color="inherit" className="title">
							{this.props.player.name}
						</Typography>
						<Typography variant="title" color="inherit" className="title">
							${this.props.player.personalMoney}
						</Typography>
					</Toolbar>
				</AppBar>

				{this.props.gameStatus.state !== 'ready' ? (
					<Toolbar variant="dense" className="companyToolbar">
						<CompanyChooser
							title="Start Company"
							player={this.props.player}
							companies={this.props.unstarted}
							choose={this.props.startCompany}
						/>
					</Toolbar>
				) : null}
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({
	game: getGame(state),
	gameStatus: getGameStatus(state),
	unstarted: getUnstartedMajors(state)
});

export default connect(
	mapStateToProps,
	{ startCompany, acquirePrivateCompany }
)(Player);
