import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default class Chooser extends React.PureComponent {
	state = {
		anchorEl: null
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleChooseMenu = value => {
		this.props.choose(value);
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<Fragment>
				<Button
					variant="outlined"
					aria-owns={anchorEl ? 'menu-chooser' : null}
					aria-haspopup="true"
					onClick={this.handleMenu}
					color="inherit"
					disabled={this.props.values.length === 0}
				>
					{this.props.title}
				</Button>

				<Menu
					id={'menu-chooser'}
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleChooseMenu}
				>
					{this.props.values.map(value => {
						return (
							<MenuItem
								key={value}
								onClick={() => this.handleChooseMenu(value)}
							>
								{value}
							</MenuItem>
						);
					})}
				</Menu>
			</Fragment>
		);
	}
}
