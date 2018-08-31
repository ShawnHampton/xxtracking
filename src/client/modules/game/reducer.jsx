import {fromJS} from "immutable";
import {COMPANY} from "../company/actions";
import {GAME} from "./actions";
import {MAIN} from "../main/actions";
import {PLAYER} from "../player/actions";

export default function (state = fromJS({
	game: {
		name: "1846",
		minPlayers: 2,
		maxPlayers: 6,
		bankSize: [7700, 7700, 7700, 7700, 7700],
		initialPlayerMoney: [500, 500, 500, 500, 500],

		majors: [{
			name: "B&O"
		}, {
			name: "GWT"
		}, {
			name: "IC"
		}]
	},
	play: null
}), action) {
	let s = state;
	switch (action.type) {
		case MAIN.GAME_LOADED:
			s = state.set('play', fromJS(action.payload));
			return s;
		case MAIN.START_GAME:
			s = state.setIn(['play', 'status'], "started");
			return s;
		case MAIN.STOP_GAME:
			s = state.setIn(['play', 'status'], "finished");
			return s;
		case PLAYER.ADD_PLAYER:
			s = state.setIn(['play', 'players', action.payload.name], fromJS(action.payload));
			s = s.setIn(['play', 'players', action.payload.name, "personalMoney"], 0);
			s = s.setIn(['play', 'players', action.payload.name, "stocks"], fromJS({}));
			return s;
		case PLAYER.REMOVE_PLAYER:
			s = state.deleteIn('players', action.payload);
			return s;
		case PLAYER.SET_PERSONAL_MONEY:
			s = state.setIn(['play', 'players', action.payload.playerName, "personalMoney"], action.payload.personalMoney);
			return s;
		case PLAYER.SET_STOCK:
			s = state.setIn(['play', 'players', action.payload.playerName, "stocks", action.payload.companyName], action.payload.count);
			return s;
		case COMPANY.START_COMPANY:
			s = state.setIn(['play', 'majors', action.payload.company, "state"], "started");
			return s;
		case COMPANY.SET_COMPANY_STOCK:
			s = state.setIn(['play', 'majors', action.payload.companyName, action.payload.type], action.payload.count);
			return s;
		case COMPANY.OPERATE_PAY:
			s = state.setIn(['play', 'operatingRounds', String(action.payload.operatingRound), action.payload.companyName],
				fromJS(action.payload.payoutChart));
			return s;
		case GAME.CHANGE_PHASE:
			s = state.setIn(['play', 'currentPhase'], action.payload);
			return s;
		case GAME.CHANGE_CURRENT_OR:
			s = state.setIn(['play', 'currentOR'], String(action.payload));
			return s;
		case GAME.CHANGE_CURRENT_ROUND:
			s = state.setIn(['play', 'currentRound'], String(action.payload));
			return s;
		default:
	}

	return state;
}

