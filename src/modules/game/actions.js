export const GAME = {
	INIT: 'GAME_INIT',
	NEXT_ROUND: 'GAME_NEXT_ROUND',
	CHANGE_CURRENT_OR: 'GAME_CHANGE_CURRENT_OR',
	CHANGE_PHASE: 'GAME_CHANGE_PHASE',
	CHANGE_CURRENT_ROUND: 'GAME_CHANGE_CURRENT_ROUND'
};

export const startupInit = () => {
	return {
		type: GAME.INIT
	};
};

export const nextRound = type => {
	return {
		type: GAME.NEXT_ROUND,
		payload: type
	};
};

export const changeCurrentOR = nextValue => {
	return {
		type: GAME.CHANGE_CURRENT_OR,
		payload: nextValue
	};
};

export const changeCurrentRound = nextValue => {
	return {
		type: GAME.CHANGE_CURRENT_ROUND,
		payload: nextValue
	};
};

export const changePhase = newPhase => {
	return {
		type: GAME.CHANGE_PHASE,
		payload: newPhase
	};
};
