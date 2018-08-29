import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Player from './player';

import { startCompany } from '../company/actions';
import { addPlayer, acquirePrivateCompany } from './actions';
import { getGame, getPlayers, getGameStatus } from '../game/selectors';
import PlayerCreator from './playerCreator';

export class Players extends React.PureComponent {
	render() {
		console.log('Player', this.props.players);

		return (
			<Paper>
				<AppBar position="static" color="default">
					<Toolbar variant="dense">
						<Typography variant="title" className="title">
							Players
						</Typography>
						<PlayerCreator
							players={this.props.players}
							game={this.props.game}
							gameStatus={this.props.gameStatus}
							addPlayer={this.props.addPlayer}
						/>
					</Toolbar>
				</AppBar>

				<div id="players">
					{this.props.players.map(player => {
						return <Player key={player.name} player={player} />;
					})}
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({
	players: getPlayers(state),
	game: getGame(state),
	gameStatus: getGameStatus(state)
});

export default connect(
	mapStateToProps,
	{ addPlayer, startCompany, acquirePrivateCompany }
)(Players);
