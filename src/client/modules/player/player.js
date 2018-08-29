import { connect } from 'react-redux';
import React, { Fragment } from 'react';

import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CompanyChooser from '../company/companyChooser';

import { startCompany, buyStock, sellStock } from '../company/actions';
import {
	getGame,
	getStocks,
	getStartedMajors,
	getUnstartedMajors
} from '../game/selectors';
import { getGameStatus } from '../main/selectors';

export class Player extends React.PureComponent {
	renderBody() {
		return (
			<Fragment>
				<Toolbar variant="dense" className="companyToolbar">
					<CompanyChooser
						title="Start Company"
						player={this.props.player}
						companies={this.props.unstarted}
						choose={this.props.startCompany}
					/>
					<CompanyChooser
						title="Buy Share"
						player={this.props.player}
						companies={this.props.started}
						choose={this.props.buyStock}
					/>
					<CompanyChooser
						title="Sell Share"
						player={this.props.player}
						companies={Object.keys(this.props.stocks)}
						choose={this.props.sellStock}
					/>
				</Toolbar>

				<div className="playerStocks">
					{Object.keys(this.props.stocks).map(stockName => {
						return (
							<Chip
								key={stockName}
								className="stockChip"
								avatar={<Avatar>{stockName}</Avatar>}
								label={this.props.stocks[stockName]}
							/>
						);
					})}
				</div>
			</Fragment>
		);
	}

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

				{this.props.gameStatus.state !== 'ready' ? this.renderBody() : null}
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({
	game: getGame(state),
	gameStatus: getGameStatus(state),
	unstarted: getUnstartedMajors(state),
	started: getStartedMajors(state),
	stocks: getStocks(state, props.player.name)
});

export default connect(
	mapStateToProps,
	{ startCompany, buyStock, sellStock }
)(Player);
