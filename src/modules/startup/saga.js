import { takeLatest, put } from 'redux-saga/effects';
import { STARTUP } from './actions';

/**
 * Processes startup requests (should only be one)
 *
 * @param {object} action The triggering action
 * @returns {IterableIterator<*>} nothing
 */
function* handleStartupInit(action) {}

export default function* startup() {
	yield takeLatest(STARTUP.INIT, handleStartupInit);
}
