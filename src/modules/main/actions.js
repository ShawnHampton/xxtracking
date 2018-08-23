export const MAIN = {
	START_GAME: 'MAIN_START_GAME',
	STOP_GAME: 'MAIN_STOP_GAME',
	CHOOSE_GAME: 'MAIN_CHOOSE_GAME'
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

export const chooseGame = game => {
	return {
		type: MAIN.CHOOSE_GAME,
		payload: game
	};
};
