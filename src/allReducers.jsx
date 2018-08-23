import {combineReducers} from 'redux-immutable';

import PlayerReducer from "./modules/player/reducer";
import MainReducer from "./modules/main/reducer";
import GameReducer from "./modules/game/reducer";

const allReducers = combineReducers({
	players: PlayerReducer,
	main: MainReducer,
	game: GameReducer
});

export default allReducers;
