import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CompanyOperator from './companyOperator';
import { payout, withhold, issueStock, redeemStock } from './actions';

export class Company extends React.PureComponent {
	render() {
		return (
			<Paper className="company">
				<AppBar position="static" className="companyAppBar">
					<Toolbar variant="dense">
						<Typography variant="title" color="inherit" className="title">
							{this.props.company.name}
						</Typography>
						<Chip
							className="stockChip"
							avatar={<Avatar>IPO</Avatar>}
							label={this.props.company.ipo}
						/>
						<Chip
							className="stockChip"
							avatar={<Avatar>Bank</Avatar>}
							label={this.props.company.bank}
						/>
					</Toolbar>
				</AppBar>
				<Toolbar>
					<CompanyOperator
						payout={this.props.payout}
						withhold={this.props.withhold}
						company={this.props.company}
						disabled={this.props.play.currentPhase !== 'OR'}
					/>
					<Button
						onClick={() => this.props.issueStock(this.props.company.name)}
					>
						Issue Share
					</Button>
					<Button
						onClick={() => this.props.redeemStock(this.props.company.name)}
					>
						Redeem Share
					</Button>
				</Toolbar>
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({});

export default connect(
	mapStateToProps,
	{ payout, withhold, issueStock, redeemStock }
)(Company);
