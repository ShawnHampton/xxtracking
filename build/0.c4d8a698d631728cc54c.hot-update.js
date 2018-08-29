webpackHotUpdate(0, {
	/***/ './node_modules/redux-saga/es/effects.js':
		/*!***********************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js ***!
  \***********************************************/
		/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle */
		/*! exports used: call, put, select, takeEvery, takeLatest */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_io__ = __webpack_require__(
				/*! ./internal/io */ './node_modules/redux-saga/es/internal/io.js'
			);
			/* unused harmony reexport take */
			/* unused harmony reexport takem */
			/* harmony reexport (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return __WEBPACK_IMPORTED_MODULE_0__internal_io__['f'];
				}
			);
			/* unused harmony reexport all */
			/* unused harmony reexport race */
			/* harmony reexport (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return __WEBPACK_IMPORTED_MODULE_0__internal_io__['c'];
				}
			);
			/* unused harmony reexport apply */
			/* unused harmony reexport cps */
			/* unused harmony reexport fork */
			/* unused harmony reexport spawn */
			/* unused harmony reexport join */
			/* unused harmony reexport cancel */
			/* harmony reexport (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return __WEBPACK_IMPORTED_MODULE_0__internal_io__['g'];
				}
			);
			/* unused harmony reexport actionChannel */
			/* unused harmony reexport cancelled */
			/* unused harmony reexport flush */
			/* unused harmony reexport getContext */
			/* unused harmony reexport setContext */
			/* harmony reexport (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return __WEBPACK_IMPORTED_MODULE_0__internal_io__['i'];
				}
			);
			/* harmony reexport (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return __WEBPACK_IMPORTED_MODULE_0__internal_io__['j'];
				}
			);
			/* unused harmony reexport throttle */

			/***/
		},

	/***/ './node_modules/redux-saga/es/index.js':
		/*!*********************************************!*\
  !*** ./node_modules/redux-saga/es/index.js ***!
  \*********************************************/
		/*! exports provided: default, runSaga, END, eventChannel, channel, buffers, takeEvery, takeLatest, throttle, delay, CANCEL, detach, effects, utils */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_middleware__ = __webpack_require__(
				/*! ./internal/middleware */ './node_modules/redux-saga/es/internal/middleware.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_runSaga__ = __webpack_require__(
				/*! ./internal/runSaga */ './node_modules/redux-saga/es/internal/runSaga.js'
			);
			/* unused harmony reexport runSaga */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_channel__ = __webpack_require__(
				/*! ./internal/channel */ './node_modules/redux-saga/es/internal/channel.js'
			);
			/* unused harmony reexport END */
			/* unused harmony reexport eventChannel */
			/* unused harmony reexport channel */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_buffers__ = __webpack_require__(
				/*! ./internal/buffers */ './node_modules/redux-saga/es/internal/buffers.js'
			);
			/* unused harmony reexport buffers */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_sagaHelpers__ = __webpack_require__(
				/*! ./internal/sagaHelpers */ './node_modules/redux-saga/es/internal/sagaHelpers/index.js'
			);
			/* unused harmony reexport takeEvery */
			/* unused harmony reexport takeLatest */
			/* unused harmony reexport throttle */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_utils__ = __webpack_require__(
				/*! ./internal/utils */ './node_modules/redux-saga/es/internal/utils.js'
			);
			/* unused harmony reexport delay */
			/* unused harmony reexport CANCEL */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internal_io__ = __webpack_require__(
				/*! ./internal/io */ './node_modules/redux-saga/es/internal/io.js'
			);
			/* unused harmony reexport detach */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects__ = __webpack_require__(
				/*! ./effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(
				/*! ./utils */ './node_modules/redux-saga/es/utils.js'
			);
			/* unused harmony reexport effects */
			/* unused harmony reexport utils */

			/* harmony default export */ __webpack_exports__['a'] =
				__WEBPACK_IMPORTED_MODULE_0__internal_middleware__['a' /* default */];

			/***/
		},

	/***/ './src/client/modules/company/saga.js':
		/*!********************************************!*\
  !*** ./src/client/modules/company/saga.js ***!
  \********************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = company;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handlePayout
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleWithhold
				),
				_marked3 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					company
				);

			function handlePayout(action) {
				var _action$payload,
					companyName,
					value,
					shareValue,
					play,
					players,
					payoutChart,
					i,
					stockCount;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handlePayout$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									(_action$payload = action.payload),
										(companyName = _action$payload.companyName),
										(value = _action$payload.value);
									shareValue = value / 10;
									_context.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_4__game_selectors__[
											'd' /* getPlay */
										]
									);

								case 4:
									play = _context.sent;
									_context.next = 7;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__player_selectors__[
											'b' /* getPlayers */
										]
									);

								case 7:
									players = _context.sent;
									payoutChart = {};

									for (i = 0; i < players.length; i++) {
										// get stock count for the company
										stockCount = players[i].stocks[companyName] || 0;

										payoutChart[players[i].name] = stockCount * shareValue;
									}

									_context.next = 12;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_3__actions__[
												'c' /* operatePay */
											]
										)(companyName, play.currentOR, payoutChart)
									);

								case 12:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function handleWithhold(action) {
				var _action$payload2, companyName, value, play;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleWithhold$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									(_action$payload2 = action.payload),
										(companyName = _action$payload2.companyName),
										(value = _action$payload2.value);
									_context2.next = 3;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_4__game_selectors__[
											'd' /* getPlay */
										]
									);

								case 3:
									play = _context2.sent;
									_context2.next = 6;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_3__actions__[
												'd' /* operateWithhold */
											]
										)(companyName, play.currentOR, value)
									);

								case 6:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function company() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function company$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'd' /* takeEvery */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__actions__['a' /* COMPANY */]
											.PAYOUT,
										handlePayout
									);

								case 2:
									_context3.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'd' /* takeEvery */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__actions__['a' /* COMPANY */]
											.WITHHOLD,
										handleWithhold
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

	/***/ './src/client/modules/game/saga.js':
		/*!*****************************************!*\
  !*** ./src/client/modules/game/saga.js ***!
  \*****************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = game;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_actions__ = __webpack_require__(
				/*! ../main/actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_actions__ = __webpack_require__(
				/*! ../player/actions */ './src/client/modules/player/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/game/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/game/selectors.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleStartGame
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleNextRound
				),
				_marked3 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					game
				);

			function handleStartGame(action) {
				var players, game, i;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleStartGame$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									_context.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__player_selectors__[
											'b' /* getPlayers */
										]
									);

								case 2:
									players = _context.sent;
									_context.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_5__game_selectors__[
											'b' /* getGame */
										]
									);

								case 5:
									game = _context.sent;
									i = 0;

								case 7:
									if (!(i < players.length)) {
										_context.next = 13;
										break;
									}

									_context.next = 10;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_4__player_actions__[
												'd' /* setPersonalMoney */
											]
										)(players[i].name, game.initialPlayerMoney[players.length])
									);

								case 10:
									i++;
									_context.next = 7;
									break;

								case 13:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function handleNextRound(action) {
				var play;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleNextRound$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_7__selectors__['d' /* getPlay */]
									);

								case 2:
									play = _context2.sent;

									if (!(play.currentPhase === 'OR')) {
										_context2.next = 18;
										break;
									}

									if (!(action.payload === 'OR')) {
										_context2.next = 9;
										break;
									}

									_context2.next = 7;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_6__actions__[
												'b' /* changeCurrentOR */
											]
										)(play.currentOR + 1)
									);

								case 7:
									_context2.next = 16;
									break;

								case 9:
									if (!(action.payload === 'SR')) {
										_context2.next = 16;
										break;
									}

									_context2.next = 12;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_6__actions__[
												'd' /* changePhase */
											]
										)(action.payload)
									);

								case 12:
									_context2.next = 14;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_6__actions__[
												'b' /* changeCurrentOR */
											]
										)(1)
									);

								case 14:
									_context2.next = 16;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_6__actions__[
												'c' /* changeCurrentRound */
											]
										)(play.currentRound + 1)
									);

								case 16:
									_context2.next = 22;
									break;

								case 18:
									if (!(play.currentPhase === 'SR')) {
										_context2.next = 22;
										break;
									}

									if (!(action.payload === 'OR')) {
										_context2.next = 22;
										break;
									}

									_context2.next = 22;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_6__actions__[
												'd' /* changePhase */
											]
										)(action.payload)
									);

								case 22:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function game() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function game$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__main_actions__['a' /* MAIN */]
											.START_GAME,
										handleStartGame
									);

								case 2:
									_context3.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'd' /* takeEvery */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_6__actions__['a' /* GAME */]
											.NEXT_ROUND,
										handleNextRound
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

	/***/ './src/client/modules/player/saga.js':
		/*!*******************************************!*\
  !*** ./src/client/modules/player/saga.js ***!
  \*******************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = player;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_actions__ = __webpack_require__(
				/*! ../company/actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/player/actions.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleBuyStock
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleSellStock
				),
				_marked3 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					player
				);

			function handleBuyStock(action) {
				var player, currentCount;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleBuyStock$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									_context.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__selectors__[
											'a' /* getPlayer */
										],
										action.payload.player
									);

								case 2:
									player = _context.sent;
									currentCount = player.stocks[action.payload.company] || 0;

									currentCount = currentCount + 1;

									_context.next = 7;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_4__actions__['e' /* setStock */]
										)(
											action.payload.player,
											action.payload.company,
											currentCount
										)
									);

								case 7:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function handleSellStock(action) {
				var player, currentCount;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleSellStock$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__selectors__[
											'a' /* getPlayer */
										],
										action.payload.player
									);

								case 2:
									player = _context2.sent;
									currentCount = player.stocks[action.payload.company] || 0;

									currentCount = Math.max(currentCount - 1, 0);

									_context2.next = 7;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_4__actions__['e' /* setStock */]
										)(
											action.payload.player,
											action.payload.company,
											currentCount
										)
									);

								case 7:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function player() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function player$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'd' /* takeEvery */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__company_actions__[
											'a' /* COMPANY */
										].BUY_STOCK,
										handleBuyStock
									);

								case 2:
									_context3.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'd' /* takeEvery */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__company_actions__[
											'a' /* COMPANY */
										].SELL_STOCK,
										handleSellStock
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
		/*! exports provided: buildRoute, createNewPlay, listPlays, authenticateToServer */
		/*! exports used: listPlays */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export buildRoute */
			/* unused harmony export createNewPlay */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
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
											'a' /* listPlays */
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
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvY29tcGFueS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3BsYXllci9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zZXJ2ZXJBcGkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVQYXlvdXQiLCJoYW5kbGVXaXRoaG9sZCIsImNvbXBhbnkiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY29tcGFueU5hbWUiLCJ2YWx1ZSIsInNoYXJlVmFsdWUiLCJzZWxlY3QiLCJwbGF5IiwicGxheWVycyIsInBheW91dENoYXJ0IiwiaSIsImxlbmd0aCIsInN0b2NrQ291bnQiLCJzdG9ja3MiLCJuYW1lIiwicHV0Iiwib3BlcmF0ZVBheSIsImN1cnJlbnRPUiIsIm9wZXJhdGVXaXRoaG9sZCIsInRha2VFdmVyeSIsIkNPTVBBTlkiLCJQQVlPVVQiLCJXSVRISE9MRCIsImhhbmRsZVN0YXJ0R2FtZSIsImhhbmRsZU5leHRSb3VuZCIsImdhbWUiLCJzZXRQZXJzb25hbE1vbmV5IiwiaW5pdGlhbFBsYXllck1vbmV5IiwiY3VycmVudFBoYXNlIiwiY2hhbmdlQ3VycmVudE9SIiwiY2hhbmdlUGhhc2UiLCJjaGFuZ2VDdXJyZW50Um91bmQiLCJjdXJyZW50Um91bmQiLCJ0YWtlTGF0ZXN0IiwiTUFJTiIsIlNUQVJUX0dBTUUiLCJHQU1FIiwiTkVYVF9ST1VORCIsImhhbmRsZUJ1eVN0b2NrIiwiaGFuZGxlU2VsbFN0b2NrIiwicGxheWVyIiwiY3VycmVudENvdW50Iiwic2V0U3RvY2siLCJNYXRoIiwibWF4IiwiQlVZX1NUT0NLIiwiU0VMTF9TVE9DSyIsImdldFJvb3RSb3V0ZSIsImJ1aWxkUm91dGUiLCJyb3V0ZSIsImZldGNoRGF0YSIsInJvb3QiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlTmV3UGxheSIsIm5ld1BsYXkiLCJQcm9taXNlIiwiZGF0YSIsInJlc29sdmUiLCJsaXN0UGxheXMiLCJhdXRoZW50aWNhdGVUb1NlcnZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVqZWN0IiwiaGFuZGxlU3RhcnR1cEluaXQiLCJzdGFydHVwIiwiY2FsbCIsInNhdmVkUGxheXMiLCJTVEFSVFVQIiwiSU5JVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVrQjtBQUNtQjtBQUNuQjtBQUN3QjtBQUNsQjtBQUNQOztBQUVqQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dDTlVBLFk7bUdBa0JBQyxjO21HQU9lQyxPOztBQTlCekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBVUYsWUFBVixDQUF1QkcsTUFBdkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNnQ0EsT0FBT0MsT0FEdkMsRUFDU0MsV0FEVCxtQkFDU0EsV0FEVCxFQUNzQkMsS0FEdEIsbUJBQ3NCQSxLQUR0QjtBQUVPQyxlQUZQLEdBRW9CRCxRQUFRLEVBRjVCO0FBQUE7QUFBQSxZQUlvQiwwRUFBQUUsQ0FBTyxnRUFBUCxDQUpwQjs7QUFBQTtBQUlPQyxTQUpQO0FBQUE7QUFBQSxZQUt1QiwwRUFBQUQsQ0FBTyxxRUFBUCxDQUx2Qjs7QUFBQTtBQUtPRSxZ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QTtBQUFBO0FBQUEsaUJBQzBCLHdFQUFBK0UsQ0FBSyxtRUFBTCxDQUQxQjs7QUFBQTtBQUNPQyxvQkFEUDs7QUFFQ1Isa0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTyxVQUEzQjs7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZSxTQUFVRixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSLDhFQUFBOUMsQ0FBVyx5REFBQWlELENBQVFDLElBQW5CLEVBQXlCTCxpQkFBekIsQ0FEUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuYzRkOGE2OThkNjMxNzI4Y2M1NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4vaW50ZXJuYWwvbWlkZGxld2FyZSc7XG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlO1xuXG5leHBvcnQgeyBydW5TYWdhIH0gZnJvbSAnLi9pbnRlcm5hbC9ydW5TYWdhJztcbmV4cG9ydCB7IEVORCwgZXZlbnRDaGFubmVsLCBjaGFubmVsIH0gZnJvbSAnLi9pbnRlcm5hbC9jaGFubmVsJztcbmV4cG9ydCB7IGJ1ZmZlcnMgfSBmcm9tICcuL2ludGVybmFsL2J1ZmZlcnMnO1xuZXhwb3J0IHsgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gJy4vaW50ZXJuYWwvc2FnYUhlbHBlcnMnO1xuZXhwb3J0IHsgZGVsYXksIENBTkNFTCB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbHMnO1xuZXhwb3J0IHsgZGV0YWNoIH0gZnJvbSAnLi9pbnRlcm5hbC9pbyc7XG5cbmltcG9ydCAqIGFzIGVmZmVjdHMgZnJvbSAnLi9lZmZlY3RzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgeyBlZmZlY3RzLCB1dGlscyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgdGFrZUV2ZXJ5LCBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBDT01QQU5ZLCBvcGVyYXRlUGF5LCBvcGVyYXRlV2l0aGhvbGQgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheSB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcblxuZnVuY3Rpb24qIGhhbmRsZVBheW91dChhY3Rpb24pIHtcblx0Y29uc3QgeyBjb21wYW55TmFtZSwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRjb25zdCBzaGFyZVZhbHVlID0gdmFsdWUgLyAxMDtcblxuXHRjb25zdCBwbGF5ID0geWllbGQgc2VsZWN0KGdldFBsYXkpO1xuXHRjb25zdCBwbGF5ZXJzID0geWllbGQgc2VsZWN0KGdldFBsYXllcnMpO1xuXG5cdGxldCBwYXlvdXRDaGFydCA9IHt9O1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIGdldCBzdG9jayBjb3VudCBmb3IgdGhlIGNvbXBhbnlcblx0XHRjb25zdCBzdG9ja0NvdW50ID0gcGxheWVyc1tpXS5zdG9ja3NbY29tcGFueU5hbWVdIHx8IDA7XG5cdFx0cGF5b3V0Q2hhcnRbcGxheWVyc1tpXS5uYW1lXSA9IHN0b2NrQ291bnQgKiBzaGFyZVZhbHVlO1xuXHR9XG5cblx0eWllbGQgcHV0KG9wZXJhdGVQYXkoY29tcGFueU5hbWUsIHBsYXkuY3VycmVudE9SLCBwYXlvdXRDaGFydCkpO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlV2l0aGhvbGQoYWN0aW9uKSB7XG5cdGNvbnN0IHsgY29tcGFueU5hbWUsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuXHRjb25zdCBwbGF5ID0geWllbGQgc2VsZWN0KGdldFBsYXkpO1xuXHR5aWVsZCBwdXQob3BlcmF0ZVdpdGhob2xkKGNvbXBhbnlOYW1lLCBwbGF5LmN1cnJlbnRPUiwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbXBhbnkoKSB7XG5cdHlpZWxkIHRha2VFdmVyeShDT01QQU5ZLlBBWU9VVCwgaGFuZGxlUGF5b3V0KTtcblx0eWllbGQgdGFrZUV2ZXJ5KENPTVBBTlkuV0lUSEhPTEQsIGhhbmRsZVdpdGhob2xkKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9jb21wYW55L3NhZ2EuanMiLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IE1BSU4gfSBmcm9tICcuLi9tYWluL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0UGVyc29uYWxNb25leSB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWUgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge1xuXHRjaGFuZ2VDdXJyZW50T1IsXG5cdGNoYW5nZUN1cnJlbnRSb3VuZCxcblx0Y2hhbmdlUGhhc2UsXG5cdEdBTUVcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXkgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXllcnMgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheWVycyk7XG5cdGNvbnN0IGdhbWUgPSB5aWVsZCBzZWxlY3QoZ2V0R2FtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0eWllbGQgcHV0KFxuXHRcdFx0c2V0UGVyc29uYWxNb25leShwbGF5ZXJzW2ldLm5hbWUsIGdhbWUuaW5pdGlhbFBsYXllck1vbmV5W3BsYXllcnMubGVuZ3RoXSlcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVOZXh0Um91bmQoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheSk7XG5cblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKHBsYXkuY3VycmVudE9SICsgMSkpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdTUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUigxKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudFJvdW5kKHBsYXkuY3VycmVudFJvdW5kICsgMSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ1NSJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBnYW1lKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uU1RBUlRfR0FNRSwgaGFuZGxlU3RhcnRHYW1lKTtcblx0eWllbGQgdGFrZUV2ZXJ5KEdBTUUuTkVYVF9ST1VORCwgaGFuZGxlTmV4dFJvdW5kKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NhZ2EuanMiLCJpbXBvcnQgeyBzZWxlY3QsIHRha2VFdmVyeSwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgQ09NUEFOWSB9IGZyb20gJy4uL2NvbXBhbnkvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXIgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZXRTdG9jayB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVCdXlTdG9jayhhY3Rpb24pIHtcblx0Y29uc3QgcGxheWVyID0geWllbGQgc2VsZWN0KGdldFBsYXllciwgYWN0aW9uLnBheWxvYWQucGxheWVyKTtcblx0bGV0IGN1cnJlbnRDb3VudCA9IHBsYXllci5zdG9ja3NbYWN0aW9uLnBheWxvYWQuY29tcGFueV0gfHwgMDtcblx0Y3VycmVudENvdW50ID0gY3VycmVudENvdW50ICsgMTtcblxuXHR5aWVsZCBwdXQoXG5cdFx0c2V0U3RvY2soYWN0aW9uLnBheWxvYWQucGxheWVyLCBhY3Rpb24ucGF5bG9hZC5jb21wYW55LCBjdXJyZW50Q291bnQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVTZWxsU3RvY2soYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXllciA9IHlpZWxkIHNlbGVjdChnZXRQbGF5ZXIsIGFjdGlvbi5wYXlsb2FkLnBsYXllcik7XG5cdGxldCBjdXJyZW50Q291bnQgPSBwbGF5ZXIuc3RvY2tzW2FjdGlvbi5wYXlsb2FkLmNvbXBhbnldIHx8IDA7XG5cdGN1cnJlbnRDb3VudCA9IE1hdGgubWF4KGN1cnJlbnRDb3VudCAtIDEsIDApO1xuXG5cdHlpZWxkIHB1dChcblx0XHRzZXRTdG9jayhhY3Rpb24ucGF5bG9hZC5wbGF5ZXIsIGFjdGlvbi5wYXlsb2FkLmNvbXBhbnksIGN1cnJlbnRDb3VudClcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBsYXllcigpIHtcblx0eWllbGQgdGFrZUV2ZXJ5KENPTVBBTlkuQlVZX1NUT0NLLCBoYW5kbGVCdXlTdG9jayk7XG5cdHlpZWxkIHRha2VFdmVyeShDT01QQU5ZLlNFTExfU1RPQ0ssIGhhbmRsZVNlbGxTdG9jayk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3NhZ2EuanMiLCIvKipcbiAqIFRPRE86IE5lZWQgdG8gZmlndXJlIG91dCB0aGUgcmlnaHQgd2F5IHRvIGNvbmZpZ3VyZSB0aGlzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJvb3Qgcm91dGVcbiAqL1xuY29uc3QgZ2V0Um9vdFJvdXRlID0gKCkgPT4ge1xuXHRyZXR1cm4gJy9hcGknO1xufTtcblxuLyoqXG4gKiBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIHJpZ2h0IHdheSB0byBjb25maWd1cmUgdGhpc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcGF0aFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJvb3Qgcm91dGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkUm91dGUgPSByb3V0ZSA9PiB7XG5cdHJldHVybiBgJHtnZXRSb290Um91dGUoKX0vJHtyb3V0ZX1gO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1ha2UgR0VUIGNhbGxzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcGF0aFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSB0byBiZSBydW5cbiAqL1xuY29uc3QgZmV0Y2hEYXRhID0gKHJvdXRlKSA9PiB7XG5cdGxldCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9LyR7cm91dGV9YCwge1xuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH1cblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gbWFrZSBQT1NUIGNhbGxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlIFRoZSByZXN0IG9mIHRoZSByb3V0ZVxuICogQHBhcmFtIHtvYmplY3R9IGJvZHkgVGhlIGJvZHkgb2YgdGhlIGNhbGxcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmNvbnN0IHBvc3REYXRhID0gKHJvdXRlLCBib2R5KSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vJHtyb3V0ZX1gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3UGxheSA9IChuZXdQbGF5KSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRjb25zdCBkYXRhID0gcG9zdERhdGEoJy9wbGF5JywgbmV3UGxheSk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdFBsYXlzID0gKCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IGZldGNoRGF0YSgnL3BsYXlzJyk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIENhdXNlcyBhIGxvZ2luIGF0dGVtcHQgdG8gdGhlIHNlcnZlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSB0aGUgdXNlcm5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCB0aGUgcGFzc3dvcmRcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGVUb1NlcnZlciA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGdldFJvb3RSb3V0ZSgpO1xuXG5cdHJldHVybiBmZXRjaChgJHtyb290fS9hdXRoL2xvZ2luYCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0cGFzc3dvcmRcblx0XHR9KVxuXHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2pzb24nLCBqc29uKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG5cdFx0XHRcdFx0Ym9keToganNvbixcblx0XHRcdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHtcblx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvc2VydmVyQXBpL3V0aWxzLmpzIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IFNUQVJUVVAgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtsaXN0UGxheXN9IGZyb20gXCIuLi9zZXJ2ZXJBcGkvdXRpbHNcIjtcblxuLyoqXG4gKiBQcm9jZXNzZXMgc3RhcnR1cCByZXF1ZXN0cyAoc2hvdWxkIG9ubHkgYmUgb25lKVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb24gVGhlIHRyaWdnZXJpbmcgYWN0aW9uXG4gKiBAcmV0dXJucyB7SXRlcmFibGVJdGVyYXRvcjwqPn0gbm90aGluZ1xuICovXG5mdW5jdGlvbiogaGFuZGxlU3RhcnR1cEluaXQoYWN0aW9uKSB7XG5cdGNvbnN0IHNhdmVkUGxheXMgPSB5aWVsZCBjYWxsKGxpc3RQbGF5cyk7XG5cdGNvbnNvbGUubG9nKFwiU2F2ZWQgUGxheXNcIiwgc2F2ZWRQbGF5cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzdGFydHVwKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KFNUQVJUVVAuSU5JVCwgaGFuZGxlU3RhcnR1cEluaXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
