import { connect } from 'react-redux';
import React from 'react';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getCurrentOperatingRound } from '../game/selectors';
import { getPlayers } from '../game/selectors';
import ORChart from './orChart';

export class Scores extends React.PureComponent {
	renderScoreCard() {
		console.log('or', this.props.operatingRound);

		if (this.props.operatingRound) {
			return (
				<Card className="operatingRoundCard">
					<Table>
						<TableHead>
							<TableRow>
								<TableCell component="th" scope="row">
									Player
								</TableCell>
								{Object.keys(this.props.operatingRound).map(company => {
									return <TableCell key={company}>{company}</TableCell>;
								})}
								<TableCell component="th" scope="row">
									Total
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.players.map((player, i) => {
								return (
									<TableRow key={i} className="tableRow">
										<TableCell component="th" scope="row">
											{player.name}
										</TableCell>
										{Object.keys(this.props.operatingRound).map(company => {
											return (
												<TableCell key={company}>
													{
														this.props.operatingRound[company].players[
															player.name
														]
													}
												</TableCell>
											);
										})}
										<TableCell>
											{Object.keys(this.props.operatingRound)
												.map(company => {
													return this.props.operatingRound[company].players[
														player.name
													];
												})
												.reduce((acc, curr) => {
													return acc + curr;
												})}
										</TableCell>
									</TableRow>
								);
							})}
							<TableRow className="tableRow">
								<TableCell component="th" scope="row">
									Company
								</TableCell>
								{Object.keys(this.props.operatingRound).map(company => {
									return (
										<TableCell key={company}>
											{this.props.operatingRound[company].players['company']}
										</TableCell>
									);
								})}
								<TableCell>
									{Object.keys(this.props.operatingRound)
										.map(company => {
											return this.props.operatingRound[company].players[
												'company'
											];
										})
										.reduce((acc, curr) => {
											return acc + curr;
										})}
								</TableCell>
							</TableRow>
							<TableRow className="tableRow">
								<TableCell component="th" scope="row">
									OR Totals
								</TableCell>
								{Object.keys(this.props.operatingRound).map(company => {
									return (
										<TableCell key={company}>
											{Object.keys(this.props.operatingRound[company].players)
												.map(player => {
													return this.props.operatingRound[company].players[
														player
													];
												})
												.reduce((acc, curr) => {
													return acc + curr;
												})}
										</TableCell>
									);
								})}
								<TableCell>{this.getTotal()}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Card>
			);
		}

		return null;
	}

	getTotal() {
		let total = 0;

		Object.keys(this.props.operatingRound).forEach(company => {
			let playerTotal = Object.keys(this.props.operatingRound[company].players)
				.map(player => {
					return this.props.operatingRound[company].players[player];
				})
				.reduce((acc, curr) => {
					return acc + curr;
				});

			total = total + playerTotal;
		});

		return total;
	}

	render() {
		return (
			<Paper id="scores">
				<AppBar position="static" color="default">
					<Toolbar variant="dense">
						<Typography variant="title" className="title">
							Scores
						</Typography>
					</Toolbar>
				</AppBar>

				{this.renderScoreCard()}

				<ORChart />
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({
	operatingRound: getCurrentOperatingRound(state),
	players: getPlayers(state)
});

export default connect(
	mapStateToProps,
	{}
)(Scores);
