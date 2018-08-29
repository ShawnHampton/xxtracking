import { takeEvery, put, select } from 'redux-saga/effects';
import { COMPANY, operatePay, operateWithhold } from './actions';
import { getPlay, getPlayers } from '../game/selectors';

function* handlePayout(action) {
	const { companyName, value } = action.payload;
	const shareValue = value / 10;

	const play = yield select(getPlay);
	const players = yield select(getPlayers);

	let payoutChart = {};

	for (let i = 0; i < players.length; i++) {
		// get stock count for the company
		const stockCount = players[i].stocks[companyName] || 0;
		payoutChart[players[i].name] = stockCount * shareValue;
	}

	yield put(operatePay(companyName, play.currentOR, payoutChart));
}

function* handleWithhold(action) {
	const { companyName, value } = action.payload;

	const play = yield select(getPlay);
	yield put(operateWithhold(companyName, play.currentOR, value));
}

export default function* company() {
	yield takeEvery(COMPANY.PAYOUT, handlePayout);
	yield takeEvery(COMPANY.WITHHOLD, handleWithhold);
}
