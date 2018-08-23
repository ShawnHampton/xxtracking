import { createSelector } from 'reselect';

const getPlayersImmutable = state => state.getIn(['players', 'players'], []);

export const getPlayers = createSelector([getPlayersImmutable], players =>
	Object.values(players.toJS())
);
