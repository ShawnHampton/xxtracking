import {combineReducers} from 'redux-immutable';

import MainReducer from "./modules/main/reducer";
import GameReducer from "./modules/game/reducer";

const allReducers = combineReducers({
	main: MainReducer,
	game: GameReducer
});

export default allReducers;
