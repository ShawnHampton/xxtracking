import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class PlayerCreator extends React.PureComponent {
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

	render() {
		return (
			<Fragment>
				<Button
					onClick={this.handleClickOpen}
					disabled={
						this.props.players.length >= this.props.game.maxPlayers ||
						this.props.gameStatus !== 'ready'
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
}
