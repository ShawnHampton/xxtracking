import { put, select, takeEvery } from 'redux-saga/effects';

import { COMPANY, setCompanyStock } from '../company/actions';
import { getMajor, getPlayer } from '../game/selectors';
import { setPlayerStock } from './actions';

function* handleBuyStock(action) {
	const player = yield select(getPlayer, action.payload.player);
	const company = yield select(getMajor, action.payload.company);

	let currentCount = player.stocks[action.payload.company] || 0;
	currentCount = currentCount + 1;

	yield put(
		setPlayerStock(action.payload.player, action.payload.company, currentCount)
	);
	yield put(setCompanyStock(action.payload.company, 'ipo', company.ipo - 1));
}

function* handleSellStock(action) {
	const player = yield select(getPlayer, action.payload.player);
	const company = yield select(getMajor, action.payload.company);

	let currentCount = player.stocks[action.payload.company] || 0;
	currentCount = Math.max(currentCount - 1, 0);

	yield put(
		setPlayerStock(action.payload.player, action.payload.company, currentCount)
	);
	yield put(setCompanyStock(action.payload.company, 'bank', company.bank + 1));
}

export default function* player() {
	yield takeEvery(COMPANY.BUY_STOCK, handleBuyStock);
	yield takeEvery(COMPANY.SELL_STOCK, handleSellStock);
}
