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
					main
				);

			function handleCreatePlay(action) {
				var playId;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleCreatePlay$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									console.log('Chose game', action.payload);
									_context.next = 3;
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

								case 3:
									playId = _context.sent;

								case 4:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function main() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function main$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.CHOOSE_GAME,
										handleCreatePlay
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
		},

	/***/ './src/client/modules/serverApi/utils.js':
		/*!***********************************************!*\
  !*** ./src/client/modules/serverApi/utils.js ***!
  \***********************************************/
		/*! exports provided: buildRoute, createNewPlay, listPlays, authenticateToServer */
		/*! exports used: createNewPlay, listPlays */
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
					var data = postData('/play', newPlay);
					resolve(data);
				});
			};

			var listPlays = function listPlays() {
				return new Promise(function(resolve) {
					var data = fetchData('/plays');
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

									console.log('Saved Plays', savedPlays);

								case 4:
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
		},

	/***/ './src/client/root-saga.jsx':
		/*!**********************************!*\
  !*** ./src/client/root-saga.jsx ***!
  \**********************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = root;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_startup_saga__ = __webpack_require__(
				/*! ./modules/startup/saga */ './src/client/modules/startup/saga.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_game_saga__ = __webpack_require__(
				/*! ./modules/game/saga */ './src/client/modules/game/saga.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_player_saga__ = __webpack_require__(
				/*! ./modules/player/saga */ './src/client/modules/player/saga.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_company_saga__ = __webpack_require__(
				/*! ./modules/company/saga */ './src/client/modules/company/saga.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_main_saga__ = __webpack_require__(
				/*! ./modules/main/saga */ './src/client/modules/main/saga.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
				root
			);

			/*
 * saga-middleware requires a single entry point for sagas, so
 * bundle up each "child" saga into a single root that gets called
 * by the middleware.
 */
			function root() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function root$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									return _context.delegateYield(
										Object(
											__WEBPACK_IMPORTED_MODULE_1__modules_startup_saga__[
												'a' /* default */
											]
										)(),
										't0',
										1
									);

								case 1:
									return _context.delegateYield(
										Object(
											__WEBPACK_IMPORTED_MODULE_2__modules_game_saga__[
												'a' /* default */
											]
										)(),
										't1',
										2
									);

								case 2:
									return _context.delegateYield(
										Object(
											__WEBPACK_IMPORTED_MODULE_3__modules_player_saga__[
												'a' /* default */
											]
										)(),
										't2',
										3
									);

								case 3:
									return _context.delegateYield(
										Object(
											__WEBPACK_IMPORTED_MODULE_4__modules_company_saga__[
												'a' /* default */
											]
										)(),
										't3',
										4
									);

								case 4:
									return _context.delegateYield(
										Object(
											__WEBPACK_IMPORTED_MODULE_5__modules_main_saga__[
												'a' /* default */
											]
										)(),
										't4',
										5
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

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zZXJ2ZXJBcGkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3Jvb3Qtc2FnYS5qc3giXSwibmFtZXMiOlsiaGFuZGxlQ3JlYXRlUGxheSIsIm1haW4iLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNhbGwiLCJnYW1lIiwicGxheUlkIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJDSE9PU0VfR0FNRSIsImdldFJvb3RSb3V0ZSIsImJ1aWxkUm91dGUiLCJyb3V0ZSIsImZldGNoRGF0YSIsInJvb3QiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlTmV3UGxheSIsIm5ld1BsYXkiLCJQcm9taXNlIiwiZGF0YSIsInJlc29sdmUiLCJsaXN0UGxheXMiLCJhdXRoZW50aWNhdGVUb1NlcnZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvayIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWplY3QiLCJoYW5kbGVTdGFydHVwSW5pdCIsInN0YXJ0dXAiLCJzYXZlZFBsYXlzIiwiU1RBUlRVUCIsIklOSVQiLCJwbGF5ZXIiLCJjb21wYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUlVQSxnQjttR0FLZUMsSTs7QUFUekI7QUFDQTtBQUNBOztBQUVBLFNBQVVELGdCQUFWLENBQTJCRSxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsYUFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLE9BQU9HLE9BQWpDO0FBREQ7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aWxlIjoiMC4xYWM2ZGM4ZjM1NmVlZDUxMzkzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0YWtlTGF0ZXN0LCBwdXQsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge01BSU59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZU5ld1BsYXksIGxpc3RQbGF5c30gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc29sZS5sb2coXCJDaG9zZSBnYW1lXCIsIGFjdGlvbi5wYXlsb2FkKTtcblx0Y29uc3QgcGxheUlkID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DSE9PU0VfR0FNRSwgaGFuZGxlQ3JlYXRlUGxheSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwiLyoqXG4gKiBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIHJpZ2h0IHdheSB0byBjb25maWd1cmUgdGhpc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByb290IHJvdXRlXG4gKi9cbmNvbnN0IGdldFJvb3RSb3V0ZSA9ICgpID0+IHtcblx0cmV0dXJuICcvYXBpJztcbn07XG5cbi8qKlxuICogVE9ETzogTmVlZCB0byBmaWd1cmUgb3V0IHRoZSByaWdodCB3YXkgdG8gY29uZmlndXJlIHRoaXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHBhdGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByb290IHJvdXRlXG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZFJvdXRlID0gcm91dGUgPT4ge1xuXHRyZXR1cm4gYCR7Z2V0Um9vdFJvdXRlKCl9LyR7cm91dGV9YDtcbn07XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBtYWtlIEdFVCBjYWxscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHBhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmNvbnN0IGZldGNoRGF0YSA9IChyb3V0ZSkgPT4ge1xuXHRsZXQgcm9vdCA9IGdldFJvb3RSb3V0ZSgpO1xuXG5cdHJldHVybiBmZXRjaChgJHtyb290fS8ke3JvdXRlfWAsIHtcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9XG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1ha2UgUE9TVCBjYWxsc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcm91dGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBib2R5IFRoZSBib2R5IG9mIHRoZSBjYWxsXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5jb25zdCBwb3N0RGF0YSA9IChyb3V0ZSwgYm9keSkgPT4ge1xuXHRjb25zdCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9LyR7cm91dGV9YCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1BsYXkgPSAobmV3UGxheSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IHBvc3REYXRhKCcvcGxheScsIG5ld1BsYXkpO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RQbGF5cyA9ICgpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBmZXRjaERhdGEoJy9wbGF5cycpO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDYXVzZXMgYSBsb2dpbiBhdHRlbXB0IHRvIHRoZSBzZXJ2ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgdGhlIHVzZXJuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgdGhlIHBhc3N3b3JkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVG9TZXJ2ZXIgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vYXV0aC9sb2dpbmAsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdHBhc3N3b3JkXG5cdFx0fSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdqc29uJywganNvbik7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCh7XG5cdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHRcblx0XHR9KTtcblx0fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3NlcnZlckFwaS91dGlscy5qcyIsImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBTVEFSVFVQIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7bGlzdFBsYXlzfSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5cbi8qKlxuICogUHJvY2Vzc2VzIHN0YXJ0dXAgcmVxdWVzdHMgKHNob3VsZCBvbmx5IGJlIG9uZSlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIFRoZSB0cmlnZ2VyaW5nIGFjdGlvblxuICogQHJldHVybnMge0l0ZXJhYmxlSXRlcmF0b3I8Kj59IG5vdGhpbmdcbiAqL1xuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0dXBJbml0KGFjdGlvbikge1xuXHRjb25zdCBzYXZlZFBsYXlzID0geWllbGQgY2FsbChsaXN0UGxheXMpO1xuXHRjb25zb2xlLmxvZyhcIlNhdmVkIFBsYXlzXCIsIHNhdmVkUGxheXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RhcnR1cCgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChTVEFSVFVQLklOSVQsIGhhbmRsZVN0YXJ0dXBJbml0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiLCJpbXBvcnQgc3RhcnR1cCBmcm9tICcuL21vZHVsZXMvc3RhcnR1cC9zYWdhJztcbmltcG9ydCBnYW1lIGZyb20gXCIuL21vZHVsZXMvZ2FtZS9zYWdhXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL21vZHVsZXMvcGxheWVyL3NhZ2FcIjtcbmltcG9ydCBjb21wYW55IGZyb20gXCIuL21vZHVsZXMvY29tcGFueS9zYWdhXCI7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW4vc2FnYVwiO1xuXG4vKlxuICogc2FnYS1taWRkbGV3YXJlIHJlcXVpcmVzIGEgc2luZ2xlIGVudHJ5IHBvaW50IGZvciBzYWdhcywgc29cbiAqIGJ1bmRsZSB1cCBlYWNoIFwiY2hpbGRcIiBzYWdhIGludG8gYSBzaW5nbGUgcm9vdCB0aGF0IGdldHMgY2FsbGVkXG4gKiBieSB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3QoKSB7XG4gICAgeWllbGQqIHN0YXJ0dXAoKTtcbiAgICB5aWVsZCogZ2FtZSgpO1xuICAgIHlpZWxkKiBwbGF5ZXIoKTtcbiAgICB5aWVsZCogY29tcGFueSgpO1xuICAgIHlpZWxkKiBtYWluKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3Jvb3Qtc2FnYS5qc3giXSwic291cmNlUm9vdCI6IiJ9
