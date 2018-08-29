import {fromJS} from "immutable";
import {MAIN} from "./actions";

export default function (state = fromJS({
	status: {
		state: "new",
	},
	plays: []
}), action) {
	let s = state;
	switch (action.type) {
		case MAIN.PLAY_LIST:
			s = state.set('plays', fromJS(action.payload.plays));
			return s;
		case MAIN.GAME_LOADED:
			s = state.setIn(['status', 'state'], "ready");
			return s;
		case MAIN.START_GAME:
			s = state.setIn(['status', 'state'], "started");
			return s;
		case MAIN.STOP_GAME:
			s = state.setIn(['status', 'state'], "finished");
			return s;
		default:
	}

	return state;
}

