import { connect } from 'react-redux';
import React from 'react';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GameChooser from './gameChooser';
import Players from '../player/players';
import Companies from '../company/companies';
import Scores from '../scores/scores';
import RoundManager from '../game/roundManager';

import { loadSavedGame, saveGame, startGame, stopGame } from './actions';
import { getPlays } from './selectors';
import { getGame, getGameStatus, getPlay, getPlayers } from '../game/selectors';

export class Main extends React.PureComponent {
	render() {
		if (this.props.gameStatus === 'new') {
			return (
				<div id="main">
					<AppBar position="static" className="mainAppBar">
						<Toolbar>
							<Typography variant="title" className="title">
								xxScoreKeeper
							</Typography>
						</Toolbar>
					</AppBar>

					<Paper>
						<AppBar position="static" className="mainAppBar">
							<Toolbar>
								<Typography variant="title" className="title">
									Saved Plays
								</Typography>
								<GameChooser />
							</Toolbar>
						</AppBar>

						<List>
							{this.props.plays.map(play => {
								return (
									<ListItem
										key={play.id}
										button
										onClick={() => this.props.loadSavedGame(play.id)}
									>
										<Avatar>
											<ImageIcon />
										</Avatar>
										<ListItemText primary={play.game} secondary="Jan 9, 2014" />
									</ListItem>
								);
							})}
						</List>
					</Paper>
				</div>
			);
		} else if (this.props.gameStatus === 'ready') {
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
		} else if (this.props.gameStatus === 'started') {
			return (
				<div id="main">
					<AppBar position="static" className="mainAppBar">
						<Toolbar>
							<Typography variant="title" className="title">
								{this.props.game.name}
							</Typography>
							<RoundManager />
							<Button onClick={() => this.props.saveGame(this.props.play)}>
								Save Game
							</Button>
							<Button onClick={this.props.stopGame}>Finish Game</Button>
						</Toolbar>
					</AppBar>
					<Players />
					<Companies />
					<Scores />
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
	play: getPlay(state),
	plays: getPlays(state)
});

export default connect(
	mapStateToProps,
	{ startGame, stopGame, loadSavedGame, saveGame }
)(Main);
