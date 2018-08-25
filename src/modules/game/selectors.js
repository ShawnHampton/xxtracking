import { createSelector } from 'reselect';

const getPlayImmutable = state => state.getIn(['game', 'play'], []);
const getGameImmutable = state => state.getIn(['game', 'game'], {});
const getMajorsImmutable = state => state.getIn(['game', 'game', 'majors'], {});
const getStartedMajorsImmutable = state =>
	state.getIn(['game', 'play', 'startedMajors'], {});
const getOperatingRoundsImmutable = state =>
	state.getIn(['game', 'play', 'operatingRounds'], []);

export const getPlay = createSelector([getPlayImmutable], value =>
	value.toJS()
);
export const getGame = createSelector([getGameImmutable], value =>
	value.toJS()
);
export const getMajors = createSelector([getMajorsImmutable], value =>
	value.toJS()
);

export const getOperatingRounds = createSelector(
	[getOperatingRoundsImmutable],
	value => value.toJS()
);

export const getCurrentOperatingRound = createSelector(
	[getOperatingRoundsImmutable, getPlayImmutable],
	(ors, play) => {
		const current = ors.get(play.get('currentOR'));
		return current ? current.toJS() : null;
	}
);

export const getStartedMajors = createSelector(
	[getMajorsImmutable, getStartedMajorsImmutable],
	(majors, started) => {
		const u = started.toJS();
		return majors.toJS().filter(major => {
			return u.indexOf(major.name) >= 0;
		});
	}
);

export const getUnstartedMajors = createSelector(
	[getMajorsImmutable, getStartedMajorsImmutable],
	(majors, started) => {
		const u = started.toJS();
		return majors.toJS().filter(major => {
			return u.indexOf(major.name) < 0;
		});
	}
);

export const getRoundLabel = createSelector([getPlayImmutable], play => {
	play = play.toJS();
	if (play.currentPhase === 'OR') {
		return `${play.currentPhase} ${play.currentRound}.${play.currentOR}`;
	} else if (play.currentPhase === 'SR') {
		return `${play.currentPhase} ${play.currentRound}`;
	}

	return `${play.currentPhase}`;
});
