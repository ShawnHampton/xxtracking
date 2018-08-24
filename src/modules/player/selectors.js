import { createSelector } from 'reselect';

const getPlayersImmutable = state => state.getIn(['players', 'players'], []);
const getPlayerImmutable = (state, name) =>
	state.getIn(['players', 'players', name], {});
const getStocksImmutable = (state, name) =>
	state.getIn(['players', 'players', name, 'stocks'], []);

export const getPlayers = createSelector([getPlayersImmutable], players =>
	Object.values(players.toJS())
);
export const getPlayer = createSelector(
	[getPlayerImmutable],
	value => (value ? value.toJS() : null)
);
export const getStocks = createSelector([getStocksImmutable], stocks =>
	stocks.toJS()
);
