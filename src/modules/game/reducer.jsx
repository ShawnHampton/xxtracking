import {fromJS} from "immutable";
import {COMPANY} from "../company/actions";

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
		currentPhase: "Initial Stock Round",
		startedMajors: [],
		operatingRounds: []
	}
}), action) {
	let s = state;
	switch (action.type) {
		case COMPANY.START_COMPANY:
			s = state.setIn(['play', 'startedMajors'], state.getIn(['play', 'startedMajors']).push(action.payload.company));
			return s;
		default:
	}

	return state;
}

