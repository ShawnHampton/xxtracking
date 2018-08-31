import { takeEvery, put, select } from 'redux-saga/effects';
import {
	COMPANY,
	operatePay,
	operateWithhold,
	setCompanyStock
} from './actions';
import { getMajor, getPlay, getPlayers } from '../game/selectors';

function* handlePayout(action) {
	const { companyName, value } = action.payload;
	const shareValue = value / 10;

	const play = yield select(getPlay);
	const players = yield select(getPlayers);
	const company = yield select(getMajor, companyName);

	let payoutChart = {
		total: Number(value),
		perShare: shareValue,
		players: {
			company: company.ipo * shareValue
		}
	};

	for (let i = 0; i < players.length; i++) {
		// get stock count for the company
		const stockCount = players[i].stocks[companyName] || 0;
		payoutChart.players[players[i].name] = stockCount * shareValue;
	}

	yield put(operatePay(companyName, play.currentOR, payoutChart));
}

function* handleWithhold(action) {
	const { companyName, value } = action.payload;
	const shareValue = value / 10;

	const play = yield select(getPlay);
	const players = yield select(getPlayers);
	const company = yield select(getMajor, companyName);

	let payoutChart = {
		total: Number(value),
		perShare: shareValue,
		players: {
			company: value
		}
	};

	for (let i = 0; i < players.length; i++) {
		payoutChart.players[players[i].name] = 0;
	}

	yield put(operatePay(companyName, play.currentOR, payoutChart));
}

function* handleIssue(action) {
	const { companyName, value } = action.payload;
	const company = yield select(getMajor, companyName);
	yield put(setCompanyStock(companyName, 'ipo', company.ipo - 1));
	yield put(setCompanyStock(companyName, 'bank', company.bank + 1));
}

function* handleRedeem(action) {
	const { companyName, value } = action.payload;
	const company = yield select(getMajor, companyName);
	yield put(setCompanyStock(companyName, 'ipo', company.ipo + 1));
	yield put(setCompanyStock(companyName, 'bank', company.bank - 1));
}

export default function* company() {
	yield takeEvery(COMPANY.PAYOUT, handlePayout);
	yield takeEvery(COMPANY.WITHHOLD, handleWithhold);
	yield takeEvery(COMPANY.ISSUE_STOCK, handleIssue);
	yield takeEvery(COMPANY.REDEEM_STOCK, handleRedeem);
}
