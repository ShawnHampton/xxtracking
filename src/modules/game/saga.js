import { takeLatest, put, select } from 'redux-saga/effects';
import { MAIN } from '../main/actions';
import { getPlayers } from '../player/selectors';
import { setPersonalMoney } from '../player/actions';
import { getGame } from '../game/selectors';

function* handleStartGame(action) {
	const players = yield select(getPlayers);
	const game = yield select(getGame);

	for (let i = 0; i < players.length; i++) {
		yield put(
			setPersonalMoney(players[i].name, game.initialPlayerMoney[players.length])
		);
	}
}

export default function* game() {
	yield takeLatest(MAIN.START_GAME, handleStartGame);
}
