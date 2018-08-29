webpackHotUpdate(0, {
	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, playList, loadSavedGame, savedGameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, playList, startGame, stopGame */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return MAIN;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return playList;
				}
			);
			/* unused harmony export loadSavedGame */
			/* unused harmony export savedGameLoaded */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return stopGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return createNewGame;
				}
			);
			var MAIN = {
				PLAY_LIST: 'MAIN_PLAY_LIST',
				START_GAME: 'MAIN_START_GAME',
				STOP_GAME: 'MAIN_STOP_GAME',
				LOAD_SAVED_GAME: 'MAIN_LOAD_SAVED_GAME',
				SAVED_GAME_LOADED: 'MAIN_SAVED_GAME_LOADED',
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var playList = function playList(plays) {
				return {
					type: MAIN.PLAY_LIST,
					payload: plays
				};
			};

			var loadSavedGame = function loadSavedGame(play) {
				return {
					type: MAIN.LOAD_SAVED_GAME,
					payload: play
				};
			};

			var savedGameLoaded = function savedGameLoaded(play) {
				return {
					type: MAIN.SAVED_GAME_LOADED,
					payload: play
				};
			};

			var startGame = function startGame() {
				return {
					type: MAIN.START_GAME
				};
			};

			var stopGame = function stopGame() {
				return {
					type: MAIN.STOP_GAME
				};
			};

			var createNewGame = function createNewGame(game) {
				return {
					type: MAIN.CREATE_NEW_GAME,
					payload: game
				};
			};

			/***/
		},

	/***/ './src/client/modules/main/saga.js':
		/*!*****************************************!*\
  !*** ./src/client/modules/main/saga.js ***!
  \*****************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = main;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverApi_utils__ = __webpack_require__(
				/*! ../serverApi/utils */ './src/client/modules/serverApi/utils.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleCreatePlay
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleLoadSavedGame
				),
				_marked3 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					main
				);

			function handleCreatePlay(action) {
				var playId;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleCreatePlay$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									_context.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'a' /* createNewPlay */
										],
										{ game: action.payload }
									);

								case 2:
									playId = _context.sent;

								case 3:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function handleLoadSavedGame(action) {
				var play;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleLoadSavedGame$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'c' /* loadSavedPlay */
										],
										action.payload.id
									);

								case 2:
									play = _context2.sent;

								case 3:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function main() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function main$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.CREATE_NEW_GAME,
										handleCreatePlay
									);

								case 2:
									_context3.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.LOAD_SAVED_GAME,
										handleLoadSavedGame
									);

								case 4:
								case 'end':
									return _context3.stop();
							}
						}
					},
					_marked3,
					this
				);
			}

			/***/
		},

	/***/ './src/client/modules/serverApi/utils.js':
		/*!***********************************************!*\
  !*** ./src/client/modules/serverApi/utils.js ***!
  \***********************************************/
		/*! exports provided: buildRoute, createNewPlay, listPlays, loadSavedPlay, authenticateToServer */
		/*! exports used: createNewPlay, listPlays, loadSavedPlay */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export buildRoute */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return createNewPlay;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return listPlays;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return loadSavedPlay;
				}
			);
			/* unused harmony export authenticateToServer */
			/**
			 * TODO: Need to figure out the right way to configure this
			 *
			 * @returns {string} The root route
			 */
			var getRootRoute = function getRootRoute() {
				return '/api';
			};

			/**
			 * TODO: Need to figure out the right way to configure this
			 *
			 * @param {string} route The rest of the path
			 * @returns {string} The root route
			 */
			var buildRoute = function buildRoute(route) {
				return getRootRoute() + '/' + route;
			};

			/**
			 * Helper method to make GET calls.
			 *
			 * @param {string} route The rest of the path
			 * @returns {Promise<any>} Promise to be run
			 */
			var fetchData = function fetchData(route) {
				var root = getRootRoute();

				return fetch(root + '/' + route, {
					method: 'GET',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(function(response) {
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
			var postData = function postData(route, body) {
				var root = getRootRoute();

				return fetch(root + '/' + route, {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				}).then(function(response) {
					return response.json();
				});
			};

			var createNewPlay = function createNewPlay(newPlay) {
				return new Promise(function(resolve) {
					var data = postData('plays', newPlay);
					resolve(data);
				});
			};

			var listPlays = function listPlays() {
				return new Promise(function(resolve) {
					var data = fetchData('plays');
					resolve(data);
				});
			};

			var loadSavedPlay = function loadSavedPlay(playId) {
				return new Promise(function(resolve) {
					var data = fetchData('plays/:' + playId);
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
			var authenticateToServer = function authenticateToServer(
				username,
				password
			) {
				var root = getRootRoute();

				return fetch(root + '/auth/login', {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				}).then(function(response) {
					if (response.ok) {
						return response.json().then(function(json) {
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

			/***/
		},

	/***/ './src/client/modules/startup/saga.js':
		/*!********************************************!*\
  !*** ./src/client/modules/startup/saga.js ***!
  \********************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = startup;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/startup/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverApi_utils__ = __webpack_require__(
				/*! ../serverApi/utils */ './src/client/modules/serverApi/utils.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_actions__ = __webpack_require__(
				/*! ../main/actions */ './src/client/modules/main/actions.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleStartupInit
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					startup
				);

			/**
			 * Processes startup requests (should only be one)
			 *
			 * @param {object} action The triggering action
			 * @returns {IterableIterator<*>} nothing
			 */
			function handleStartupInit(action) {
				var savedPlays;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleStartupInit$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									_context.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'b' /* listPlays */
										]
									);

								case 2:
									savedPlays = _context.sent;
									_context.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_4__main_actions__[
												'c' /* playList */
											]
										)(savedPlays)
									);

								case 5:
									console.log('Saved Plays', savedPlays);

								case 6:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function startup() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function startup$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* STARTUP */]
											.INIT,
										handleStartupInit
									);

								case 2:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3NlcnZlckFwaS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvc3RhcnR1cC9zYWdhLmpzIl0sIm5hbWVzIjpbIk1BSU4iLCJQTEFZX0xJU1QiLCJTVEFSVF9HQU1FIiwiU1RPUF9HQU1FIiwiTE9BRF9TQVZFRF9HQU1FIiwiU0FWRURfR0FNRV9MT0FERUQiLCJDUkVBVEVfTkVXX0dBTUUiLCJwbGF5TGlzdCIsInBsYXlzIiwidHlwZSIsInBheWxvYWQiLCJsb2FkU2F2ZWRHYW1lIiwicGxheSIsInNhdmVkR2FtZUxvYWRlZCIsInN0YXJ0R2FtZSIsInN0b3BHYW1lIiwiY3JlYXRlTmV3R2FtZSIsImdhbWUiLCJoYW5kbGVDcmVhdGVQbGF5IiwiaGFuZGxlTG9hZFNhdmVkR2FtZSIsIm1haW4iLCJhY3Rpb24iLCJjYWxsIiwicGxheUlkIiwiaWQiLCJ0YWtlTGF0ZXN0IiwiZ2V0Um9vdFJvdXRlIiwiYnVpbGRSb3V0ZSIsInJvdXRlIiwiZmV0Y2hEYXRhIiwicm9vdCIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInBvc3REYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVOZXdQbGF5IiwibmV3UGxheSIsIlByb21pc2UiLCJkYXRhIiwicmVzb2x2ZSIsImxpc3RQbGF5cyIsImxvYWRTYXZlZFBsYXkiLCJhdXRoZW50aWNhdGVUb1NlcnZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVqZWN0IiwiaGFuZGxlU3RhcnR1cElu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dEQsQ0FBU3FELFVBQVQsQ0FBSixDQUZQOztBQUFBO0FBR0NQLGtCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQk0sVUFBM0I7O0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWUsU0FBVUQsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUiw4RUFBQWxDLENBQVcseURBQUFxQyxDQUFRQyxJQUFuQixFQUF5QkwsaUJBQXpCLENBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLjBlNDkyMDVlNDg3ZTVmNjc5MDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTUFJTiA9IHtcblx0UExBWV9MSVNUOiAnTUFJTl9QTEFZX0xJU1QnLFxuXHRTVEFSVF9HQU1FOiAnTUFJTl9TVEFSVF9HQU1FJyxcblx0U1RPUF9HQU1FOiAnTUFJTl9TVE9QX0dBTUUnLFxuXHRMT0FEX1NBVkVEX0dBTUU6ICdNQUlOX0xPQURfU0FWRURfR0FNRScsXG5cdFNBVkVEX0dBTUVfTE9BREVEOiAnTUFJTl9TQVZFRF9HQU1FX0xPQURFRCcsXG5cdENSRUFURV9ORVdfR0FNRTogJ01BSU5fQ1JFQVRFX05FV19HQU1FJ1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYXlMaXN0ID0gKHBsYXlzKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5QTEFZX0xJU1QsXG5cdFx0cGF5bG9hZDogcGxheXNcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRTYXZlZEdhbWUgPSAocGxheSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uTE9BRF9TQVZFRF9HQU1FLFxuXHRcdHBheWxvYWQ6IHBsYXlcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVkR2FtZUxvYWRlZCA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TQVZFRF9HQU1FX0xPQURFRCxcblx0XHRwYXlsb2FkOiBwbGF5XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVEFSVF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVE9QX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdHYW1lID0gZ2FtZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5DUkVBVEVfTkVXX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQge3Rha2VMYXRlc3QsIHB1dCwgY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7TUFJTn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Y3JlYXRlTmV3UGxheSwgbG9hZFNhdmVkUGxheX0gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc3QgcGxheUlkID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGxvYWRTYXZlZFBsYXksIGFjdGlvbi5wYXlsb2FkLmlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DUkVBVEVfTkVXX0dBTUUsIGhhbmRsZUNyZWF0ZVBsYXkpO1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uTE9BRF9TQVZFRF9HQU1FLCBoYW5kbGVMb2FkU2F2ZWRHYW1lKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiLCIvKipcbiAqIFRPRE86IE5lZWQgdG8gZmlndXJlIG91dCB0aGUgcmlnaHQgd2F5IHRvIGNvbmZpZ3VyZSB0aGlzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJvb3Qgcm91dGVcbiAqL1xuY29uc3QgZ2V0Um9vdFJvdXRlID0gKCkgPT4ge1xuXHRyZXR1cm4gJy9hcGknO1xufTtcblxuLyoqXG4gKiBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIHJpZ2h0IHdheSB0byBjb25maWd1cmUgdGhpc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcGF0aFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJvb3Qgcm91dGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkUm91dGUgPSByb3V0ZSA9PiB7XG5cdHJldHVybiBgJHtnZXRSb290Um91dGUoKX0vJHtyb3V0ZX1gO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1ha2UgR0VUIGNhbGxzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcGF0aFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSB0byBiZSBydW5cbiAqL1xuY29uc3QgZmV0Y2hEYXRhID0gKHJvdXRlKSA9PiB7XG5cdGxldCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9LyR7cm91dGV9YCwge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH1cblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gbWFrZSBQT1NUIGNhbGxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlIFRoZSByZXN0IG9mIHRoZSByb3V0ZVxuICogQHBhcmFtIHtvYmplY3R9IGJvZHkgVGhlIGJvZHkgb2YgdGhlIGNhbGxcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmNvbnN0IHBvc3REYXRhID0gKHJvdXRlLCBib2R5KSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vJHtyb3V0ZX1gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3UGxheSA9IChuZXdQbGF5KSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRjb25zdCBkYXRhID0gcG9zdERhdGEoJ3BsYXlzJywgbmV3UGxheSk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdFBsYXlzID0gKCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGZldGNoRGF0YSgncGxheXMnKTtcblx0XHRyZXNvbHZlKGRhdGEpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU2F2ZWRQbGF5ID0gKHBsYXlJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGZldGNoRGF0YShgcGxheXMvOiR7cGxheUlkfWApO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDYXVzZXMgYSBsb2dpbiBhdHRlbXB0IHRvIHRoZSBzZXJ2ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgdGhlIHVzZXJuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgdGhlIHBhc3N3b3JkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVG9TZXJ2ZXIgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vYXV0aC9sb2dpbmAsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdHBhc3N3b3JkXG5cdFx0fSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdqc29uJywganNvbik7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCh7XG5cdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHRcblx0XHR9KTtcblx0fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3NlcnZlckFwaS91dGlscy5qcyIsImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBTVEFSVFVQIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7bGlzdFBsYXlzfSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5pbXBvcnQge3BsYXlMaXN0fSBmcm9tIFwiLi4vbWFpbi9hY3Rpb25zXCI7XG5cbi8qKlxuICogUHJvY2Vzc2VzIHN0YXJ0dXAgcmVxdWVzdHMgKHNob3VsZCBvbmx5IGJlIG9uZSlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIFRoZSB0cmlnZ2VyaW5nIGFjdGlvblxuICogQHJldHVybnMge0l0ZXJhYmxlSXRlcmF0b3I8Kj59IG5vdGhpbmdcbiAqL1xuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0dXBJbml0KGFjdGlvbikge1xuXHRjb25zdCBzYXZlZFBsYXlzID0geWllbGQgY2FsbChsaXN0UGxheXMpO1xuXHR5aWVsZCBwdXQocGxheUxpc3Qoc2F2ZWRQbGF5cykpO1xuXHRjb25zb2xlLmxvZyhcIlNhdmVkIFBsYXlzXCIsIHNhdmVkUGxheXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RhcnR1cCgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChTVEFSVFVQLklOSVQsIGhhbmRsZVN0YXJ0dXBJbml0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwic291cmNlUm9vdCI6IiJ9
