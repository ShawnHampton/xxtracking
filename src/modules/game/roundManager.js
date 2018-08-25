import { connect } from 'react-redux';
import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { getGame, getPlay, getRoundLabel } from './selectors';
import { nextRound } from './actions';
import Chooser from '../utils/chooser';

export class RoundManager extends React.PureComponent {
	render() {
		return (
			<Toolbar variant="dense" id="roundManager">
				<Typography variant="title" className="title">
					{this.props.roundLabel}
				</Typography>
				<Chooser
					title="Next Round"
					values={['OR', 'SR']}
					choose={this.props.nextRound}
				/>
			</Toolbar>
		);
	}
}

const mapStateToProps = (state, props) => ({
	game: getGame(state),
	play: getPlay(state),
	roundLabel: getRoundLabel(state)
});

export default connect(
	mapStateToProps,
	{ nextRound }
)(RoundManager);
