import { createSelector } from 'reselect';

const getGameStatusImmutable = state => state.getIn(['main', 'status'], {});
const getPlaysImmutable = state => state.getIn(['main', 'plays'], []);

export const getGameStatus = createSelector([getGameStatusImmutable], status =>
	status.toJS()
);

export const getPlays = createSelector([getPlaysImmutable], status =>
	status.toJS()
);
