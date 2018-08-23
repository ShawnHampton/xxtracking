import { createSelector } from 'reselect';

const getGameStatusImmutable = state => state.getIn(['main', 'status'], {});
export const getGameStatus = createSelector([getGameStatusImmutable], status =>
	status.toJS()
);
