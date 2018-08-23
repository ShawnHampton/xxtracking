export const COMPANY = {
	BUY_STOCK: 'STOCK_BUY_STOCK',
	SELL_STOCK: 'STOCK_SELL_STOCK',
	START_COMPANY: 'STOCK_START_COMPANY'
};

export const buyStock = (player, company, price) => {
	return {
		type: COMPANY.BUY_STOCK,
		payload: {
			player,
			company,
			price
		}
	};
};

export const sellStock = (player, company, price) => {
	return {
		type: COMPANY.SELL_STOCK,
		payload: {
			player,
			company,
			price
		}
	};
};

export const startCompany = (player, company, price) => {
	return {
		type: COMPANY.START_COMPANY,
		payload: {
			player,
			company,
			price
		}
	};
};
