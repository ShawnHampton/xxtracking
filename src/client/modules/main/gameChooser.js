import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { createNewGame } from './actions';

export class GameChooser extends React.PureComponent {
	state = {
		anchorEl: null
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleChooseGameMenu = game => {
		this.props.chooseGame(game);
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<Fragment>
				<Button
					aria-owns={anchorEl ? 'menu-choosegame' : null}
					aria-haspopup="true"
					onClick={this.handleMenu}
					color="inherit"
				>
					Create New Game
				</Button>
				<Menu
					id={'menu-choosegame'}
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleChooseGameMenu}
				>
					<MenuItem onClick={() => this.handleChooseGameMenu('1846')}>
						1846
					</MenuItem>
				</Menu>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, props) => ({});

export default connect(
	mapStateToProps,
	{ chooseGame: createNewGame }
)(GameChooser);
