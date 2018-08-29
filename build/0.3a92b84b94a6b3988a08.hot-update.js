webpackHotUpdate(0, {
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
					handleSaveGame
				),
				_marked4 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					main
				);

			function handleCreatePlay(action) {
				var play;
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
									play = _context.sent;
									_context.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_2__actions__[
												'c' /* gameLoaded */
											]
										)(play)
									);

								case 5:
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
										action.payload
									);

								case 2:
									play = _context2.sent;
									_context2.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_2__actions__[
												'c' /* gameLoaded */
											]
										)(play)
									);

								case 5:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function handleSaveGame(action) {
				var play;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleSaveGame$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'd' /* savePlay */
										],
										action.payload
									);

								case 2:
									play = _context3.sent;

								case 3:
								case 'end':
									return _context3.stop();
							}
						}
					},
					_marked3,
					this
				);
			}

			function main() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function main$(_context4) {
						while (1) {
							switch ((_context4.prev = _context4.next)) {
								case 0:
									_context4.next = 2;
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
									_context4.next = 4;
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
									_context4.next = 6;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.SAVE_GAME,
										handleSaveGame
									);

								case 6:
								case 'end':
									return _context4.stop();
							}
						}
					},
					_marked4,
					this
				);
			}

			/***/
		},

	/***/ './src/client/modules/serverApi/utils.js':
		/*!***********************************************!*\
  !*** ./src/client/modules/serverApi/utils.js ***!
  \***********************************************/
		/*! exports provided: buildRoute, createNewPlay, listPlays, loadSavedPlay, savePlay, authenticateToServer */
		/*! exports used: createNewPlay, listPlays, loadSavedPlay, savePlay */
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
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return savePlay;
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
					var data = fetchData('plays/' + playId);
					resolve(data);
				});
			};

			var savePlay = function savePlay(play) {
				return new Promise(function(resolve) {
					var data = postData('plays/' + play.id, play);
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
												'e' /* playList */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zZXJ2ZXJBcGkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVDcmVhdGVQbGF5IiwiaGFuZGxlTG9hZFNhdmVkR2FtZSIsImhhbmRsZVNhdmVHYW1lIiwibWFpbiIsImFjdGlvbiIsImNhbGwiLCJnYW1lIiwicGF5bG9hZCIsInBsYXkiLCJwdXQiLCJnYW1lTG9hZGVkIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJDUkVBVEVfTkVXX0dBTUUiLCJMT0FEX1NBVkVEX0dBTUUiLCJTQVZFX0dBTUUiLCJnZXRSb290Um91dGUiLCJidWlsZFJvdXRlIiwicm91dGUiLCJmZXRjaERhdGEiLCJyb290IiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicG9zdERhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZU5ld1BsYXkiLCJuZXdQbGF5IiwiUHJvbWlzZSIsImRhdGEiLCJyZXNvbHZlIiwibGlzdFBsYXlzIiwibG9hZFNhdmVkUGxheSIsInBsYXlJZCIsInNhdmVQbGF5IiwiaWQiLCJhdXRoZW50aWNhdGVUb1NlcnZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVqZWN0IiwiaGFuZGxlU3RhcnR1cEluaXQiLCJzdGFydHVwIiwic2F2ZWRQbGF5cyIsInBsYXlMaXN0IiwiU1RBUlRVUCIsIklOSVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBSVVBLGdCO21HQUtBQyxtQjttR0FLQUMsYzttR0FJZUMsSTs7QUFsQnpCO0FBQ0E7QUFDQTs7QUFF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O0FBQ25DcUIsWUFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JwQixJQUFwQjtBQUNBLFdBQU9PLFFBQVFFLE9BQVIsQ0FBZ0I7QUFDdEJQLFdBQU1GLElBRGdCO0FBRXRCcUIsYUFBUXRCLFNBQVNzQixNQUZLO0FBR3RCQyxpQkFBWXZCLFNBQVN1QjtBQUhDLEtBQWhCLENBQVA7QUFLQSxJQVBNLENBQVA7QUFRQTs7QUFFRCxTQUFPZixRQUFRZ0IsTUFBUixDQUFlO0FBQ3JCRixXQUFRdEIsU0FBU3NCLE1BREk7QUFFckJDLGVBQVl2QixTQUFTdUI7QUFGQSxHQUFmLENBQVA7QUFJQSxFQTFCTSxDQUFQO0FBMkJBLENBOUJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dDckZHRSxpQjttR0FNZUMsTzs7QUFqQnpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxTQUFVRCxpQkFBVixDQUE0Qi9DLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQzBCLHdFQUFBQyxDQUFLLG1FQUFMLENBRDFCOztBQUFBO0FBQ09nRCxvQkFEUDtBQUFBO0FBQUEsaUJBRU8sdUVBQUE1QyxDQUFJLHVFQUFBNkMsQ0FBU0QsVUFBVCxDQUFKLENBRlA7O0FBQUE7QUFHQ1Asa0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTSxVQUEzQjs7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZSxTQUFVRCxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSLDhFQUFBekMsQ0FBVyx5REFBQTRDLENBQVFDLElBQW5CLEVBQXlCTCxpQkFBekIsQ0FEUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuM2E5MmI4NGI5NGE2YjM5ODhhMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtnYW1lTG9hZGVkLCBNQUlOfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOZXdQbGF5LCBsb2FkU2F2ZWRQbGF5LCBzYXZlUGxheX0gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIGNhbGwoY3JlYXRlTmV3UGxheSwge2dhbWU6IGFjdGlvbi5wYXlsb2FkfSk7XG5cdHlpZWxkIHB1dChnYW1lTG9hZGVkKHBsYXkpKTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGxvYWRTYXZlZFBsYXksIGFjdGlvbi5wYXlsb2FkKTtcblx0eWllbGQgcHV0KGdhbWVMb2FkZWQocGxheSkpO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlU2F2ZUdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKHNhdmVQbGF5LCBhY3Rpb24ucGF5bG9hZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uQ1JFQVRFX05FV19HQU1FLCBoYW5kbGVDcmVhdGVQbGF5KTtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLkxPQURfU0FWRURfR0FNRSwgaGFuZGxlTG9hZFNhdmVkR2FtZSk7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5TQVZFX0dBTUUsIGhhbmRsZVNhdmVHYW1lKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiLCIvKipcbiAqIFRPRE86IE5lZWQgdG8gZmlndXJlIG91dCB0aGUgcmlnaHQgd2F5IHRvIGNvbmZpZ3VyZSB0aGlzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJvb3Qgcm91dGVcbiAqL1xuY29uc3QgZ2V0Um9vdFJvdXRlID0gKCkgPT4ge1xuXHRyZXR1cm4gJy9hcGknO1xufTtcblxuLyoqXG4gKiBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIHJpZ2h0IHdheSB0byBjb25maWd1cmUgdGhpc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcGF0aFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJvb3Qgcm91dGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkUm91dGUgPSByb3V0ZSA9PiB7XG5cdHJldHVybiBgJHtnZXRSb290Um91dGUoKX0vJHtyb3V0ZX1gO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1ha2UgR0VUIGNhbGxzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcGF0aFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSB0byBiZSBydW5cbiAqL1xuY29uc3QgZmV0Y2hEYXRhID0gKHJvdXRlKSA9PiB7XG5cdGxldCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9LyR7cm91dGV9YCwge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH1cblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gbWFrZSBQT1NUIGNhbGxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlIFRoZSByZXN0IG9mIHRoZSByb3V0ZVxuICogQHBhcmFtIHtvYmplY3R9IGJvZHkgVGhlIGJvZHkgb2YgdGhlIGNhbGxcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmNvbnN0IHBvc3REYXRhID0gKHJvdXRlLCBib2R5KSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vJHtyb3V0ZX1gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3UGxheSA9IChuZXdQbGF5KSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRjb25zdCBkYXRhID0gcG9zdERhdGEoJ3BsYXlzJywgbmV3UGxheSk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdFBsYXlzID0gKCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGZldGNoRGF0YSgncGxheXMnKTtcblx0XHRyZXNvbHZlKGRhdGEpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU2F2ZWRQbGF5ID0gKHBsYXlJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGZldGNoRGF0YShgcGxheXMvJHtwbGF5SWR9YCk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZVBsYXkgPSAocGxheSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IHBvc3REYXRhKGBwbGF5cy8ke3BsYXkuaWR9YCwgcGxheSk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIENhdXNlcyBhIGxvZ2luIGF0dGVtcHQgdG8gdGhlIHNlcnZlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSB0aGUgdXNlcm5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCB0aGUgcGFzc3dvcmRcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVUb1NlcnZlciA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGdldFJvb3RSb3V0ZSgpO1xuXG5cdHJldHVybiBmZXRjaChgJHtyb290fS9hdXRoL2xvZ2luYCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0cGFzc3dvcmRcblx0XHR9KVxuXHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2pzb24nLCBqc29uKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG5cdFx0XHRcdFx0Ym9keToganNvbixcblx0XHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHtcblx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvc2VydmVyQXBpL3V0aWxzLmpzIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IFNUQVJUVVAgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtsaXN0UGxheXN9IGZyb20gXCIuLi9zZXJ2ZXJBcGkvdXRpbHNcIjtcbmltcG9ydCB7cGxheUxpc3R9IGZyb20gXCIuLi9tYWluL2FjdGlvbnNcIjtcblxuLyoqXG4gKiBQcm9jZXNzZXMgc3RhcnR1cCByZXF1ZXN0cyAoc2hvdWxkIG9ubHkgYmUgb25lKVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb24gVGhlIHRyaWdnZXJpbmcgYWN0aW9uXG4gKiBAcmV0dXJucyB7SXRlcmFibGVJdGVyYXRvcjwqPn0gbm90aGluZ1xuICovXG5mdW5jdGlvbiogaGFuZGxlU3RhcnR1cEluaXQoYWN0aW9uKSB7XG5cdGNvbnN0IHNhdmVkUGxheXMgPSB5aWVsZCBjYWxsKGxpc3RQbGF5cyk7XG5cdHlpZWxkIHB1dChwbGF5TGlzdChzYXZlZFBsYXlzKSk7XG5cdGNvbnNvbGUubG9nKFwiU2F2ZWQgUGxheXNcIiwgc2F2ZWRQbGF5cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzdGFydHVwKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KFNUQVJUVVAuSU5JVCwgaGFuZGxlU3RhcnR1cEluaXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
