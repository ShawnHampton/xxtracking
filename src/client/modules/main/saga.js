import { takeLatest, put, call } from 'redux-saga/effects';
import { gameLoaded, MAIN } from './actions';
import { createNewPlay, loadSavedPlay, savePlay } from '../serverApi/utils';

function* handleCreatePlay(action) {
	const play = yield call(createNewPlay, { game: action.payload });
	yield put(gameLoaded(play));
}

function* handleLoadSavedGame(action) {
	const play = yield call(loadSavedPlay, action.payload);
	yield put(gameLoaded(play));
}

function* handleSaveGame(action) {
	yield call(savePlay, action.payload);
}

export default function* main() {
	yield takeLatest(MAIN.CREATE_NEW_GAME, handleCreatePlay);
	yield takeLatest(MAIN.LOAD_SAVED_GAME, handleLoadSavedGame);
	yield takeLatest(MAIN.SAVE_GAME, handleSaveGame);
}
