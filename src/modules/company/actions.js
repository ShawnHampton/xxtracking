export const COMPANY = {
	BUY_STOCK: 'COMPANY_BUY_STOCK',
	SELL_STOCK: 'COMPANY_SELL_STOCK',
	START_COMPANY: 'COMPANY_START_COMPANY'
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
