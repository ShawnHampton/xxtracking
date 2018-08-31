export const COMPANY = {
	ISSUE_STOCK: 'COMPANY_ISSUE_STOCK',
	REDEEM_STOCK: 'COMPANY_REDEEM_STOCK',
	SET_COMPANY_STOCK: 'COMPANY_SET_COMPANY_STOCK',
	BUY_STOCK: 'COMPANY_BUY_STOCK',
	SELL_STOCK: 'COMPANY_SELL_STOCK',
	START_COMPANY: 'COMPANY_START_COMPANY',
	PAYOUT: 'COMPANY_PAYOUT',
	WITHHOLD: 'COMPANY_WITHHOLD',
	OPERATE_PAY: 'COMPANY_OPERATE_PAY',
	OPERATE_WITHHOLD: 'COMPANY_OPERATE_WITHHOLD'
};

export const setCompanyStock = (companyName, type, count) => {
	return {
		type: COMPANY.SET_COMPANY_STOCK,
		payload: {
			companyName,
			type,
			count
		}
	};
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

export const issueStock = (companyName, price) => {
	return {
		type: COMPANY.ISSUE_STOCK,
		payload: {
			companyName,
			price
		}
	};
};

export const redeemStock = (companyName, price) => {
	return {
		type: COMPANY.REDEEM_STOCK,
		payload: {
			companyName,
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
