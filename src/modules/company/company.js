import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CompanyOperator from './companyOperator';
import { payout, withhold } from './actions';

export class Company extends React.PureComponent {
	render() {
		return (
			<Paper className="company">
				<AppBar position="static" className="companyAppBar">
					<Toolbar variant="dense">
						<Typography variant="title" color="inherit" className="title">
							{this.props.company.name}
						</Typography>
					</Toolbar>
				</AppBar>
				<Toolbar>
					<CompanyOperator
						payout={this.props.payout}
						withhold={this.props.withhold}
						company={this.props.company}
						disabled={this.props.play.currentPhase !== 'OR'}
					/>
				</Toolbar>
			</Paper>
		);
	}
}

const mapStateToProps = (state, props) => ({});

export default connect(
	mapStateToProps,
	{ payout, withhold }
)(Company);
