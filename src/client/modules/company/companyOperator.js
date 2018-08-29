import Button from '@material-ui/core/Button';
import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class CompanyOperator extends React.PureComponent {
	state = {
		open: false,
		value: ''
	};

	handleClickOpen = () => {
		this.setState({ open: true, value: '' });
	};

	handlePayout = () => {
		this.props.payout(this.props.company.name, this.state.value);
		this.setState({ open: false });
	};

	handleWithhold = () => {
		this.props.withhold(this.props.company.name, this.state.value);
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
					variant="outlined"
					onClick={this.handleClickOpen}
					disabled={this.props.disabled}
				>
					Operate
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Operate</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Enter the TOTAL amount the company operates for (not per share
							value)
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Value"
							type="number"
							value={this.state.value}
							onChange={this.handleChange}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="secondary">
							Cancel
						</Button>
						<Button onClick={this.handleWithhold} color="primary">
							Withhold
						</Button>
						<Button onClick={this.handlePayout} color="primary">
							Payout
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
