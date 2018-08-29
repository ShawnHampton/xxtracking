import { takeLatest, put, call } from 'redux-saga/effects';
import { STARTUP } from './actions';
import { listPlays } from '../serverApi/utils';
import { playList } from '../main/actions';

/**
 * Processes startup requests (should only be one)
 *
 * @param {object} action The triggering action
 * @returns {IterableIterator<*>} nothing
 */
function* handleStartupInit(action) {
	const savedPlays = yield call(listPlays);
	yield put(playList(savedPlays));
	console.log('Saved Plays', savedPlays);
}

export default function* startup() {
	yield takeLatest(STARTUP.INIT, handleStartupInit);
}
