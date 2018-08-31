export const PLAYER = {
	SET_STOCK: 'PLAYER_SET_STOCK',
	ADD_PLAYER: 'PLAYER_ADD_PLAYER',
	REMOVE_PLAYER: 'PLAYER_REMOVE_PLAYER',
	SET_PERSONAL_MONEY: 'PLAYER_SET_PERSONAL_MONEY',
	ACQUIRE_PRIVATE_COMPANY: 'PLAYER_ACQUIRE_PRIVATE_COMPANY'
};

export const setPlayerStock = (playerName, companyName, count) => {
	return {
		type: PLAYER.SET_STOCK,
		payload: {
			playerName,
			companyName,
			count
		}
	};
};

export const addPlayer = player => {
	return {
		type: PLAYER.ADD_PLAYER,
		payload: player
	};
};

export const removePlayer = player => {
	return {
		type: PLAYER.REMOVE_PLAYER,
		payload: player
	};
};

export const setPersonalMoney = (playerName, personalMoney) => {
	return {
		type: PLAYER.SET_PERSONAL_MONEY,
		payload: {
			playerName,
			personalMoney
		}
	};
};

export const acquirePrivateCompany = (player, company) => {
	return {
		type: PLAYER.REMOVE_PLAYER,
		payload: {
			player,
			company
		}
	};
};
