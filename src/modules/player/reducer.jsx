import {fromJS} from "immutable";
import {PLAYER} from "./actions";

export default function (state = fromJS({
	players: {}
}), action) {
	let s = state;
	switch (action.type) {
		case PLAYER.ADD_PLAYER:
			s = state.setIn(['players', action.payload.name], fromJS(action.payload));
			s = s.setIn(['players', action.payload.name, "personalMoney"], 0);
			return s;
		case PLAYER.REMOVE_PLAYER:
			s = state.deleteIn('players', action.payload);
			return s;
		case PLAYER.SET_PERSONAL_MONEY:
			s = state.setIn(['players', action.payload.playerName, "personalMoney"], action.payload.personalMoney);
			return s;
		default:
	}

	return state;
}

