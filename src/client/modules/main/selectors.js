import { createSelector } from 'reselect';

const getPlaysImmutable = state => state.getIn(['main', 'plays'], []);
export const getPlays = createSelector([getPlaysImmutable], status =>
	status.toJS()
);
