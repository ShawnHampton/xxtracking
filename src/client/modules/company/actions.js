export const COMPANY = {
	BUY_STOCK: 'COMPANY_BUY_STOCK',
	SELL_STOCK: 'COMPANY_SELL_STOCK',
	START_COMPANY: 'COMPANY_START_COMPANY',
	PAYOUT: 'COMPANY_PAYOUT',
	WITHHOLD: 'COMPANY_WITHHOLD',
	OPERATE_PAY: 'COMPANY_OPERATE_PAY',
	OPERATE_WITHHOLD: 'COMPANY_OPERATE_WITHHOLD'
};

export const operatePay = (companyName, operatingRound, payoutChart) => {
	return {
		type: COMPANY.OPERATE_PAY,
		payload: {
			companyName,
			operatingRound,
			payoutChart
		}
	};
};

export const operateWithhold = (companyName, operatingRound, value) => {
	return {
		type: COMPANY.OPERATE_PAY,
		payload: {
			companyName,
			operatingRound,
			value
		}
	};
};

export const payout = (companyName, value) => {
	return {
		type: COMPANY.PAYOUT,
		payload: {
			companyName,
			value
		}
	};
};

export const withhold = (companyName, value) => {
	return {
		type: COMPANY.WITHHOLD,
		payload: {
			companyName,
			value
		}
	};
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
