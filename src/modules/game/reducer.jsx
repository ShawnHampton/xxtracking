import {fromJS} from "immutable";
import {COMPANY} from "../company/actions";
import {GAME} from "./actions";

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
	play: {
		bank: 0,
		currentPhase: "SR",
		currentOR: 1,
		currentRound: 1,
		startedMajors: [],
		operatingRounds: {}
	}
}), action) {
	let s = state;
	switch (action.type) {
		case COMPANY.START_COMPANY:
			s = state.setIn(['play', 'startedMajors'], state.getIn(['play', 'startedMajors']).push(action.payload.company));
			return s;
		case COMPANY.OPERATE_PAY:
			s = state.setIn(['play', 'operatingRounds', action.payload.operatingRound, action.payload.companyName],
				fromJS(action.payload.payoutChart));
			return s;
		case GAME.CHANGE_PHASE:
			s = state.setIn(['play', 'currentPhase'], action.payload);
			return s;
		case GAME.CHANGE_CURRENT_OR:
			s = state.setIn(['play', 'currentOR'], action.payload);
			return s;
		case GAME.CHANGE_CURRENT_ROUND:
			s = state.setIn(['play', 'currentRound'], action.payload);
			return s;
		default:
	}

	return state;
}

