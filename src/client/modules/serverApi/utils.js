/**
 * TODO: Need to figure out the right way to configure this
 *
 * @returns {string} The root route
 */
const getRootRoute = () => {
	return '/api';
};

/**
 * TODO: Need to figure out the right way to configure this
 *
 * @param {string} route The rest of the path
 * @returns {string} The root route
 */
export const buildRoute = route => {
	return `${getRootRoute()}/${route}`;
};

/**
 * Helper method to make GET calls.
 *
 * @param {string} route The rest of the path
 * @returns {Promise<any>} Promise to be run
 */
const fetchData = route => {
	let root = getRootRoute();

	return fetch(`${root}/${route}`, {
		method: 'GET',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		return response.json();
	});
};

/**
 * Helper method to make POST calls
 *
 * @param {string} route The rest of the route
 * @param {object} body The body of the call
 * @returns {Promise<any>} Promise to be run
 */
const postData = (route, body) => {
	const root = getRootRoute();

	return fetch(`${root}/${route}`, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(response => {
		return response.json();
	});
};

export const createNewPlay = newPlay => {
	return new Promise(resolve => {
		const data = postData('plays', newPlay);
		resolve(data);
	});
};

export const listPlays = () => {
	return new Promise(resolve => {
		const data = fetchData('plays');
		resolve(data);
	});
};

export const loadSavedPlay = playId => {
	return new Promise(resolve => {
		const data = fetchData(`plays/${playId}`);
		resolve(data);
	});
};

export const savePlay = play => {
	return new Promise(resolve => {
		const data = postData(`plays/${play.id}`, play);
		resolve(data);
	});
};

/**
 * Causes a login attempt to the server
 *
 * @param {string} username the username
 * @param {string} password the password
 * @returns {Promise<any>} Promise to be run
 */
export const authenticateToServer = (username, password) => {
	const root = getRootRoute();

	return fetch(`${root}/auth/login`, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			password
		})
	}).then(response => {
		if (response.ok) {
			return response.json().then(json => {
				console.log('json', json);
				return Promise.resolve({
					body: json,
					status: response.status,
					statusText: response.statusText
				});
			});
		}

		return Promise.reject({
			status: response.status,
			statusText: response.statusText
		});
	});
};
