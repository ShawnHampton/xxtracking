import {fromJS} from "immutable";
import {MAIN} from "./actions";

export default function (state = fromJS({
	plays: []
}), action) {
	let s = state;
	switch (action.type) {
		case MAIN.PLAY_LIST:
			s = state.set('plays', fromJS(action.payload.plays));
			return s;
		default:
	}

	return state;
}

