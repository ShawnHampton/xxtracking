export const MAIN = {
	PLAY_LIST: 'MAIN_PLAY_LIST',
	START_GAME: 'MAIN_START_GAME',
	STOP_GAME: 'MAIN_STOP_GAME',
	LOAD_SAVED_GAME: 'MAIN_LOAD_SAVED_GAME',
	GAME_LOADED: 'MAIN_GAME_LOADED',
	SAVE_GAME: 'MAIN_SAVE_GAME',
	CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
};

export const saveGame = play => {
	return {
		type: MAIN.SAVE_GAME,
		payload: play
	};
};

export const playList = plays => {
	return {
		type: MAIN.PLAY_LIST,
		payload: plays
	};
};

export const loadSavedGame = playId => {
	return {
		type: MAIN.LOAD_SAVED_GAME,
		payload: playId
	};
};

export const gameLoaded = play => {
	return {
		type: MAIN.GAME_LOADED,
		payload: play
	};
};

export const startGame = () => {
	return {
		type: MAIN.START_GAME
	};
};

export const stopGame = () => {
	return {
		type: MAIN.STOP_GAME
	};
};

export const createNewGame = game => {
	return {
		type: MAIN.CREATE_NEW_GAME,
		payload: game
	};
};
