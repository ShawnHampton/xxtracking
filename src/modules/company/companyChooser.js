import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default class CompanyChooser extends React.PureComponent {
	state = {
		anchorEl: null
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleChooseMenu = company => {
		this.props.choose(this.props.player.name, company, 0);
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<Fragment>
				<Button
					variant="outlined"
					aria-owns={anchorEl ? 'menu-choosecompany' : null}
					aria-haspopup="true"
					onClick={this.handleMenu}
					color="inherit"
					disabled={this.props.companies.length === 0}
				>
					{this.props.title}
				</Button>

				<Menu
					id={'menu-choosecompany'}
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleChooseMenu}
				>
					{this.props.companies.map(company => {
						return (
							<MenuItem
								key={company.name}
								onClick={() => this.handleChooseMenu(company.name)}
							>
								{company.name}
							</MenuItem>
						);
					})}
				</Menu>
			</Fragment>
		);
	}
}
