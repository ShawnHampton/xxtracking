import { takeLatest, takeEvery, put, select } from 'redux-saga/effects';
import { MAIN } from '../main/actions';
import { getPlayers } from '../player/selectors';
import { setPersonalMoney } from '../player/actions';
import { getGame } from '../game/selectors';
import {
	changeCurrentOR,
	changeCurrentRound,
	changePhase,
	GAME
} from './actions';
import { getPlay } from './selectors';

function* handleStartGame(action) {
	const players = yield select(getPlayers);
	const game = yield select(getGame);

	for (let i = 0; i < players.length; i++) {
		yield put(
			setPersonalMoney(players[i].name, game.initialPlayerMoney[players.length])
		);
	}
}

function* handleNextRound(action) {
	const play = yield select(getPlay);

	if (play.currentPhase === 'OR') {
		if (action.payload === 'OR') {
			yield put(changeCurrentOR(play.currentOR + 1));
		} else if (action.payload === 'SR') {
			yield put(changePhase(action.payload));
			yield put(changeCurrentOR(1));
			yield put(changeCurrentRound(play.currentRound + 1));
		}
	} else if (play.currentPhase === 'SR') {
		if (action.payload === 'OR') {
			yield put(changePhase(action.payload));
		}
	}
}

export default function* game() {
	yield takeLatest(MAIN.START_GAME, handleStartGame);
	yield takeEvery(GAME.NEXT_ROUND, handleNextRound);
}
