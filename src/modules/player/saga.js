import { select, takeEvery, put } from 'redux-saga/effects';

import { COMPANY } from '../company/actions';
import { getPlayer } from './selectors';
import { setStock } from './actions';

function* handleBuyStock(action) {
	const player = yield select(getPlayer, action.payload.player);
	let currentCount = player.stocks[action.payload.company] || 0;
	currentCount = currentCount + 1;

	yield put(
		setStock(action.payload.player, action.payload.company, currentCount)
	);
}

export default function* player() {
	yield takeEvery(COMPANY.BUY_STOCK, handleBuyStock);
}
