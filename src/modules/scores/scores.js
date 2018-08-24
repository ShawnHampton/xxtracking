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

import {
	getCurrentOperatingRound,
	getOperatingRounds
} from '../game/selectors';
import { getPlayers } from '../player/selectors';

export class Scores extends React.PureComponent {
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
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.players.map((player, i) => {
								return (
									<TableRow key={i}>
										<TableCell component="th" scope="row">
											{player.name}
										</TableCell>
										{Object.keys(this.props.operatingRound).map(company => {
											return (
												<TableCell key={company}>
													{this.props.operatingRound[company][player.name]}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Card>
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
