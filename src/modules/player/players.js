import { connect } from 'react-redux';
import React, { Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Player from './player';

import { startCompany } from '../company/actions';
import { addPlayer, acquirePrivateCompany } from './actions';
import { getPlayers } from './selectors';
import { getGameStatus } from '../main/selectors';
import { getGame } from '../game/selectors';

export class Players extends React.PureComponent {
	state = {
		open: false,
		value: ''
	};

	handleClickOpen = () => {
		this.setState({ open: true, value: '' });
	};

	handleAdd = () => {
		this.props.addPlayer({ name: this.state.value });
		this.setState({ open: false });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	renderPlayerCreator() {
		return (
			<Fragment>
				<Button
					onClick={this.handleClickOpen}
					disabled={
						this.props.players.length >= this.props.game.maxPlayers ||
						this.props.gameStatus.state !== 'ready'
					}
				>
					Add Player
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Add Player</DialogTitle>
					<DialogContent>
						<DialogContentText>Enter the player name</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Player Name"
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleAdd} color="primary">
							Add
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}

	render() {
		return (
			<Paper>
				<AppBar position="static" color="default">
					<Toolbar variant="dense">
						<Typography variant="title" className="title">
							Players
						</Typography>
						{this.renderPlayerCreator()}
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
