import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GameChooser from './gameChooser';
import Players from '../player/players';
import Companies from '../company/companies';

import { startGame, stopGame } from './actions';
import { getGameStatus } from './selectors';
import { getPlayers } from '../player/selectors';
import { getGame, getPlay } from '../game/selectors';

export class Main extends React.PureComponent {
	render() {
		if (this.props.gameStatus.state === 'new') {
			return (
				<div id="main">
					<AppBar position="static" className="mainAppBar">
						<Toolbar>
							<Typography variant="title" className="title">
								xxScoreKeeper
							</Typography>
							<GameChooser />
						</Toolbar>
					</AppBar>
				</div>
			);
		} else if (this.props.gameStatus.state === 'ready') {
			return (
				<div id="main">
					<AppBar position="static" className="mainAppBar">
						<Toolbar>
							<Typography variant="title" className="title">
								{this.props.game.name}
							</Typography>
							<Button
								onClick={this.props.startGame}
								disabled={
									this.props.players.length < this.props.game.minPlayers
								}
							>
								Start Game
							</Button>
						</Toolbar>
					</AppBar>
					<Players />
				</div>
			);
		} else if (this.props.gameStatus.state === 'started') {
			return (
				<div id="main">
					<AppBar position="static" className="mainAppBar">
						<Toolbar>
							<Typography variant="title" className="title">
								{this.props.game.name}
							</Typography>
							<Typography variant="headline" className="title">
								{this.props.play.currentPhase}
							</Typography>
							<Button onClick={this.props.stopGame}>Finish Game</Button>
						</Toolbar>
					</AppBar>
					<Players />
					<Companies />
				</div>
			);
		} else {
			return (
				<div id="main">
					<AppBar position="static" className="mainAppBar">
						<Toolbar>
							<Typography variant="title" className="title">
								{this.props.game.name}
							</Typography>
							<Button onClick={this.props.startGame}>Restart Game</Button>
						</Toolbar>
					</AppBar>
					<Players />
				</div>
			);
		}
	}
}

const mapStateToProps = (state, props) => ({
	players: getPlayers(state),
	gameStatus: getGameStatus(state),
	game: getGame(state),
	play: getPlay(state)
});

export default connect(
	mapStateToProps,
	{ startGame, stopGame }
)(Main);
