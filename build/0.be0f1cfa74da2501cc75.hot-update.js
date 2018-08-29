webpackHotUpdate(0, {
	/***/ './src/client/modules/company/companies.js':
		/*!*************************************************!*\
  !*** ./src/client/modules/company/companies.js ***!
  \*************************************************/
		/*! exports provided: Companies, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export Companies */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_5_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__ = __webpack_require__(
				/*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company__ = __webpack_require__(
				/*! ./company */ './src/client/modules/company/company.js'
			);

			var Companies = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					Companies,
					_React$PureComponent
				);

				function Companies() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						Companies
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(Companies.__proto__ || Object.getPrototypeOf(Companies)).apply(
							this,
							arguments
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					Companies,
					[
						{
							key: 'render',
							value: function render() {
								var _this2 = this;

								return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default.a,
									null,
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default.a,
										{ position: 'static', color: 'default' },
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default.a,
											{ variant: 'dense' },
											__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default.a,
												{ variant: 'title', className: 'title' },
												'Companies'
											)
										)
									),
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										'div',
										{ id: 'companies' },
										this.props.startedMajors.map(function(company) {
											return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_11__company__[
													'a' /* default */
												],
												{
													key: company.name,
													company: company,
													play: _this2.props.play
												}
											);
										})
									)
								);
							}
						}
					]
				);

				return Companies;
			})(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					startedMajors: Object(
						__WEBPACK_IMPORTED_MODULE_10__game_selectors__[
							'g' /* getStartedMajors */
						]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_10__game_selectors__['d' /* getPlay */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_4_react_redux__['b' /* connect */]
			)(mapStateToProps, {})(Companies);

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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_selectors__ = __webpack_require__(
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
										__WEBPACK_IMPORTED_MODULE_3__game_selectors__[
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
										__WEBPACK_IMPORTED_MODULE_3__game_selectors__[
											'e' /* getPlayers */
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
											__WEBPACK_IMPORTED_MODULE_2__actions__[
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
										__WEBPACK_IMPORTED_MODULE_3__game_selectors__[
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
											__WEBPACK_IMPORTED_MODULE_2__actions__[
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
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* COMPANY */]
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
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* COMPANY */]
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

	/***/ './src/client/modules/game/roundManager.js':
		/*!*************************************************!*\
  !*** ./src/client/modules/game/roundManager.js ***!
  \*************************************************/
		/*! exports provided: RoundManager, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export RoundManager */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_5_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/game/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_chooser__ = __webpack_require__(
				/*! ../utils/chooser */ './src/client/modules/utils/chooser.js'
			);

			var RoundManager = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					RoundManager,
					_React$PureComponent
				);

				function RoundManager() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						RoundManager
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(
							RoundManager.__proto__ || Object.getPrototypeOf(RoundManager)
						).apply(this, arguments)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					RoundManager,
					[
						{
							key: 'render',
							value: function render() {
								return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Toolbar___default.a,
									{ variant: 'dense', id: 'roundManager' },
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a,
										{ variant: 'title', className: 'title' },
										this.props.roundLabel
									),
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_10__utils_chooser__[
											'a' /* default */
										],
										{
											title: 'Next Round',
											values: ['OR', 'SR'],
											choose: this.props.nextRound
										}
									)
								);
							}
						}
					]
				);

				return RoundManager;
			})(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					game: Object(
						__WEBPACK_IMPORTED_MODULE_8__selectors__['b' /* getGame */]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_8__selectors__['d' /* getPlay */]
					)(state),
					roundLabel: Object(
						__WEBPACK_IMPORTED_MODULE_8__selectors__['f' /* getRoundLabel */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_4_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				nextRound: __WEBPACK_IMPORTED_MODULE_9__actions__['e' /* nextRound */]
			})(RoundManager);

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

	/***/ './src/client/modules/game/selectors.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/game/selectors.js ***!
  \**********************************************/
		/*! exports provided: getPlay, getGame, getMajors, getOperatingRounds, getCurrentOperatingRound, getStartedMajors, getUnstartedMajors, getRoundLabel, getPlayers, getPlayer, getStocks */
		/*! exports used: getCurrentOperatingRound, getGame, getOperatingRounds, getPlay, getPlayers, getRoundLabel, getStartedMajors, getUnstartedMajors */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return getPlay;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return getGame;
				}
			);
			/* unused harmony export getMajors */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return getOperatingRounds;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return getCurrentOperatingRound;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'g',
				function() {
					return getStartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'h',
				function() {
					return getUnstartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
				function() {
					return getRoundLabel;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return getPlayers;
				}
			);
			/* unused harmony export getPlayer */
			/* unused harmony export getStocks */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(
				/*! reselect */ './node_modules/reselect/lib/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_reselect__
			);

			var getPlayImmutable = function getPlayImmutable(state) {
				return state.getIn(['game', 'play'], []);
			};
			var getGameImmutable = function getGameImmutable(state) {
				return state.getIn(['game', 'game'], {});
			};
			var getMajorsImmutable = function getMajorsImmutable(state) {
				return state.getIn(['game', 'game', 'majors'], {});
			};
			var getStartedMajorsImmutable = function getStartedMajorsImmutable(
				state
			) {
				return state.getIn(['game', 'play', 'startedMajors'], {});
			};
			var getOperatingRoundsImmutable = function getOperatingRoundsImmutable(
				state
			) {
				return state.getIn(['game', 'play', 'operatingRounds'], []);
			};

			var getPlayerImmutable = function getPlayerImmutable(state, name) {
				return state.getIn(['game', 'play', 'players', name], {});
			};

			var getStocksImmutable = function getStocksImmutable(state, name) {
				return state.getIn(['game', 'play', 'players', name, 'stocks'], []);
			};

			var getPlay = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayImmutable], function(value) {
				return value ? value.toJS() : null;
			});
			var getGame = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getGameImmutable], function(value) {
				return value.toJS();
			});
			var getMajors = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getMajorsImmutable], function(value) {
				return value.toJS();
			});

			var getOperatingRounds = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getOperatingRoundsImmutable], function(value) {
				return value.toJS();
			});

			var getCurrentOperatingRound = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getOperatingRoundsImmutable, getPlayImmutable], function(ors, play) {
				var current = ors.get(play.get('currentOR'));
				return current ? current.toJS() : null;
			});

			var getStartedMajors = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getMajorsImmutable, getStartedMajorsImmutable], function(
				majors,
				started
			) {
				var u = started.toJS();
				return majors.toJS().filter(function(major) {
					return u.indexOf(major.name) >= 0;
				});
			});

			var getUnstartedMajors = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getMajorsImmutable, getStartedMajorsImmutable], function(
				majors,
				started
			) {
				var u = started.toJS();
				return majors.toJS().filter(function(major) {
					return u.indexOf(major.name) < 0;
				});
			});

			var getRoundLabel = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayImmutable], function(play) {
				play = play.toJS();
				if (play.currentPhase === 'OR') {
					return (
						play.currentPhase + ' ' + play.currentRound + '.' + play.currentOR
					);
				} else if (play.currentPhase === 'SR') {
					return play.currentPhase + ' ' + play.currentRound;
				}

				return '' + play.currentPhase;
			});

			var getPlayers = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayImmutable], function(play) {
				return Object.values(play.players.toJS());
			});

			var getPlayer = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayerImmutable], function(value) {
				return value ? value.toJS() : null;
			});

			var getStocks = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getStocksImmutable], function(stocks) {
				return stocks.toJS();
			});

			/***/
		},

	/***/ './src/client/modules/main/main.js':
		/*!*****************************************!*\
  !*** ./src/client/modules/main/main.js ***!
  \*****************************************/
		/*! exports provided: Main, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export Main */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_4_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__ = __webpack_require__(
				/*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem__ = __webpack_require__(
				/*! @material-ui/core/ListItem */ './node_modules/@material-ui/core/ListItem/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_List__ = __webpack_require__(
				/*! @material-ui/core/List */ './node_modules/@material-ui/core/List/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_List___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_List__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemText__ = __webpack_require__(
				/*! @material-ui/core/ListItemText */ './node_modules/@material-ui/core/ListItemText/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemText___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemText__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar__ = __webpack_require__(
				/*! @material-ui/core/Avatar */ './node_modules/@material-ui/core/Avatar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Image__ = __webpack_require__(
				/*! @material-ui/icons/Image */ './node_modules/@material-ui/icons/Image.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Image___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Image__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button__ = __webpack_require__(
				/*! @material-ui/core/Button */ './node_modules/@material-ui/core/Button/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gameChooser__ = __webpack_require__(
				/*! ./gameChooser */ './src/client/modules/main/gameChooser.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__player_players__ = __webpack_require__(
				/*! ../player/players */ './src/client/modules/player/players.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__company_companies__ = __webpack_require__(
				/*! ../company/companies */ './src/client/modules/company/companies.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__scores_scores__ = __webpack_require__(
				/*! ../scores/scores */ './src/client/modules/scores/scores.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__game_roundManager__ = __webpack_require__(
				/*! ../game/roundManager */ './src/client/modules/game/roundManager.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);

			var Main = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					Main,
					_React$PureComponent
				);

				function Main() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						Main
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(Main.__proto__ || Object.getPrototypeOf(Main)).apply(
							this,
							arguments
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					Main,
					[
						{
							key: 'render',
							value: function render() {
								var _this2 = this;

								if (this.props.gameStatus.state === 'new') {
									return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'main' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													'xxScoreKeeper'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default.a,
											null,
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar___default.a,
												{ position: 'static', className: 'mainAppBar' },
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar___default.a,
													null,
													__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography___default.a,
														{ variant: 'title', className: 'title' },
														'Saved Plays'
													),
													__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_16__gameChooser__[
															'a' /* default */
														],
														null
													)
												)
											),
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_8__material_ui_core_List___default.a,
												null,
												this.props.plays.map(function(play) {
													return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default.a,
														{
															key: play.id,
															button: true,
															onClick: function onClick() {
																return _this2.props.loadSavedGame(play.id);
															}
														},
														__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
															__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar___default.a,
															null,
															__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
																__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Image___default.a,
																null
															)
														),
														__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
															__WEBPACK_IMPORTED_MODULE_9__material_ui_core_ListItemText___default.a,
															{ primary: play.game, secondary: 'Jan 9, 2014' }
														)
													);
												})
											)
										)
									);
								} else if (this.props.gameStatus.state === 'ready') {
									return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'main' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button___default.a,
													{
														onClick: this.props.startGame,
														disabled:
															this.props.players.length <
															this.props.game.minPlayers
													},
													'Start Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_17__player_players__[
												'a' /* default */
											],
											null
										)
									);
								} else if (this.props.gameStatus.state === 'started') {
									return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'main' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_20__game_roundManager__[
														'a' /* default */
													],
													null
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button___default.a,
													{
														onClick: function onClick() {
															return _this2.props.saveGame(_this2.props.play);
														}
													},
													'Save Game'
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button___default.a,
													{ onClick: this.props.stopGame },
													'Finish Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_17__player_players__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_18__company_companies__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_19__scores_scores__[
												'a' /* default */
											],
											null
										)
									);
								} else {
									return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'main' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_13__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_15__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Button___default.a,
													{ onClick: this.props.startGame },
													'Restart Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_17__player_players__[
												'a' /* default */
											],
											null
										)
									);
								}
							}
						}
					]
				);

				return Main;
			})(__WEBPACK_IMPORTED_MODULE_4_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					players: Object(
						__WEBPACK_IMPORTED_MODULE_23__player_selectors__[
							'b' /* getPlayers */
						]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_22__selectors__['a' /* getGameStatus */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_24__game_selectors__['b' /* getGame */]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_24__game_selectors__['d' /* getPlay */]
					)(state),
					plays: Object(
						__WEBPACK_IMPORTED_MODULE_22__selectors__['b' /* getPlays */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				startGame: __WEBPACK_IMPORTED_MODULE_21__actions__['g' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_21__actions__['h' /* stopGame */],
				loadSavedGame:
					__WEBPACK_IMPORTED_MODULE_21__actions__['d' /* loadSavedGame */],
				saveGame: __WEBPACK_IMPORTED_MODULE_21__actions__['f' /* saveGame */]
			})(Main);

			/***/
		},

	/***/ './src/client/modules/player/player.js':
		/*!*********************************************!*\
  !*** ./src/client/modules/player/player.js ***!
  \*********************************************/
		/*! exports provided: Player, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export Player */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_5_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Chip__ = __webpack_require__(
				/*! @material-ui/core/Chip */ './node_modules/@material-ui/core/Chip/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Chip___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Chip__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Avatar__ = __webpack_require__(
				/*! @material-ui/core/Avatar */ './node_modules/@material-ui/core/Avatar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Avatar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Avatar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Paper__ = __webpack_require__(
				/*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Paper___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Paper__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_companyChooser__ = __webpack_require__(
				/*! ../company/companyChooser */ './src/client/modules/company/companyChooser.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__company_actions__ = __webpack_require__(
				/*! ../company/actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_selectors__ = __webpack_require__(
				/*! ../main/selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/player/selectors.js'
			);

			var Player = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					Player,
					_React$PureComponent
				);

				function Player() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						Player
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(Player.__proto__ || Object.getPrototypeOf(Player)).apply(
							this,
							arguments
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					Player,
					[
						{
							key: 'renderBody',
							value: function renderBody() {
								var _this2 = this;

								return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_5_react__['Fragment'],
									null,
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Toolbar___default.a,
										{ variant: 'dense', className: 'companyToolbar' },
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_12__company_companyChooser__[
												'a' /* default */
											],
											{
												title: 'Start Company',
												player: this.props.player,
												companies: this.props.unstarted,
												choose: this.props.startCompany
											}
										),
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_12__company_companyChooser__[
												'a' /* default */
											],
											{
												title: 'Buy Share',
												player: this.props.player,
												companies: this.props.started,
												choose: this.props.buyStock
											}
										),
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_12__company_companyChooser__[
												'a' /* default */
											],
											{
												title: 'Sell Share',
												player: this.props.player,
												companies: Object.keys(this.props.stocks),
												choose: this.props.sellStock
											}
										)
									),
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										'div',
										{ className: 'playerStocks' },
										Object.keys(this.props.stocks).map(function(stockName) {
											return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Chip___default.a,
												{
													key: stockName,
													className: 'stockChip',
													avatar: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Avatar___default.a,
														null,
														stockName
													),
													label: _this2.props.stocks[stockName]
												}
											);
										})
									)
								);
							}
						},
						{
							key: 'render',
							value: function render() {
								return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Paper___default.a,
									{ className: 'player' },
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_9__material_ui_core_AppBar___default.a,
										{ position: 'static', className: 'playerAppBar' },
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Toolbar___default.a,
											{ variant: 'dense' },
											__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Typography___default.a,
												{
													variant: 'title',
													color: 'inherit',
													className: 'title'
												},
												this.props.player.name
											),
											__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Typography___default.a,
												{
													variant: 'title',
													color: 'inherit',
													className: 'title'
												},
												'$',
												this.props.player.personalMoney
											)
										)
									),
									this.props.gameStatus.state !== 'ready'
										? this.renderBody()
										: null
								);
							}
						}
					]
				);

				return Player;
			})(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					game: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['b' /* getGame */]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_15__main_selectors__[
							'a' /* getGameStatus */
						]
					)(state),
					unstarted: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__[
							'h' /* getUnstartedMajors */
						]
					)(state),
					started: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__[
							'g' /* getStartedMajors */
						]
					)(state),
					stocks: Object(
						__WEBPACK_IMPORTED_MODULE_16__selectors__['c' /* getStocks */]
					)(state, props.player.name)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_4_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				startCompany:
					__WEBPACK_IMPORTED_MODULE_13__company_actions__[
						'g' /* startCompany */
					],
				buyStock:
					__WEBPACK_IMPORTED_MODULE_13__company_actions__['b' /* buyStock */],
				sellStock:
					__WEBPACK_IMPORTED_MODULE_13__company_actions__['f' /* sellStock */]
			})(Player);

			/***/
		},

	/***/ './src/client/modules/player/players.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/player/players.js ***!
  \**********************************************/
		/*! exports provided: Players, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export Players */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_4_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__ = __webpack_require__(
				/*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__player__ = __webpack_require__(
				/*! ./player */ './src/client/modules/player/player.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_actions__ = __webpack_require__(
				/*! ../company/actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/player/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_selectors__ = __webpack_require__(
				/*! ../main/selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__playerCreator__ = __webpack_require__(
				/*! ./playerCreator */ './src/client/modules/player/playerCreator.js'
			);

			var Players = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					Players,
					_React$PureComponent
				);

				function Players() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						Players
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(Players.__proto__ || Object.getPrototypeOf(Players)).apply(
							this,
							arguments
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					Players,
					[
						{
							key: 'render',
							value: function render() {
								return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default.a,
									null,
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default.a,
										{ position: 'static', color: 'default' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default.a,
											{ variant: 'dense' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default.a,
												{ variant: 'title', className: 'title' },
												'Players'
											),
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_16__playerCreator__[
													'a' /* default */
												],
												{
													players: this.props.players,
													game: this.props.game,
													gameStatus: this.props.gameStatus,
													addPlayer: this.props.addPlayer
												}
											)
										)
									),
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'players' },
										this.props.players.map(function(player) {
											return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_10__player__[
													'a' /* default */
												],
												{ key: player.name, player: player }
											);
										})
									)
								);
							}
						}
					]
				);

				return Players;
			})(__WEBPACK_IMPORTED_MODULE_4_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					players: Object(
						__WEBPACK_IMPORTED_MODULE_13__selectors__['b' /* getPlayers */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_15__game_selectors__['b' /* getGame */]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_14__main_selectors__[
							'a' /* getGameStatus */
						]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				addPlayer: __WEBPACK_IMPORTED_MODULE_12__actions__['c' /* addPlayer */],
				startCompany:
					__WEBPACK_IMPORTED_MODULE_11__company_actions__[
						'g' /* startCompany */
					],
				acquirePrivateCompany:
					__WEBPACK_IMPORTED_MODULE_12__actions__[
						'b' /* acquirePrivateCompany */
					]
			})(Players);

			/***/
		},

	/***/ './src/client/modules/scores/orChart.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/scores/orChart.js ***!
  \**********************************************/
		/*! exports provided: ORChart, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export ORChart */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_5_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__(
				/*! d3 */ './node_modules/d3/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__ = __webpack_require__(
				/*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);

			var ORChart = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					ORChart,
					_React$PureComponent
				);

				function ORChart() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						ORChart
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(ORChart.__proto__ || Object.getPrototypeOf(ORChart)).apply(
							this,
							arguments
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					ORChart,
					[
						{
							key: 'componentDidMount',
							value: function componentDidMount() {
								this.initializeChart();
								this.drawChart();
							}
						},
						{
							key: 'componentDidUpdate',
							value: function componentDidUpdate() {
								this.drawChart();
							}
						},
						{
							key: 'initializeChart',
							value: function initializeChart() {
								this.svg = __WEBPACK_IMPORTED_MODULE_6_d3__['h' /* select */](
									'#orChart svg'
								);
								this.margin = { top: 20, right: 80, bottom: 30, left: 50 };
								this.width =
									this.svg.attr('width') - this.margin.left - this.margin.right;
								this.height =
									this.svg.attr('height') -
									this.margin.top -
									this.margin.bottom;
								this.g = this.svg
									.append('g')
									.attr(
										'transform',
										'translate(' +
											this.margin.left +
											',' +
											this.margin.top +
											')'
									);

								this.x = __WEBPACK_IMPORTED_MODULE_6_d3__[
									'e' /* scaleLinear */
								]()
									.range([0, this.width])
									.domain([0, 10]);
								this.y = __WEBPACK_IMPORTED_MODULE_6_d3__[
									'e' /* scaleLinear */
								]()
									.range([this.height, 0])
									.domain([0, 200]);
								this.z = __WEBPACK_IMPORTED_MODULE_6_d3__[
									'f' /* scaleOrdinal */
								](__WEBPACK_IMPORTED_MODULE_6_d3__['g' /* schemeCategory10 */]);

								this.line = __WEBPACK_IMPORTED_MODULE_6_d3__['d' /* line */]()
									.curve(__WEBPACK_IMPORTED_MODULE_6_d3__['c' /* curveBasis */])
									.x(function(d, i) {
										return this.x(i);
									})
									.y(function(d) {
										return this.y(d);
									});

								this.g
									.append('g')
									.attr('class', 'axis axis--x')
									.attr('transform', 'translate(0,' + this.height + ')');

								this.g
									.append('g')
									.attr('class', 'axis axis--y')
									.append('text')
									.attr('transform', 'rotate(-90)')
									.attr('y', 6)
									.attr('dy', '0.71em')
									.attr('fill', '#000')
									.text('Value ($)');
							}
						},
						{
							key: 'drawChart',
							value: function drawChart() {
								var _this2 = this;

								this.x.domain([
									0,
									Math.max(this.props.operatingRounds.length || 0, 10)
								]);
								this.y.domain([0, 200]);
								this.z.domain(this.props.startedMajors);

								this.g
									.select('.axis--x')
									.call(
										__WEBPACK_IMPORTED_MODULE_6_d3__['a' /* axisBottom */](
											this.x
										)
									);
								this.g
									.select('.axis--y')
									.call(
										__WEBPACK_IMPORTED_MODULE_6_d3__['b' /* axisLeft */](this.y)
									);

								console.log('data', this.props.operatingRounds);

								this.company = this.g
									.selectAll('.company')
									.data([])
									.enter()
									.append('g')
									.attr('class', 'company');

								this.company
									.append('path')
									.attr('class', 'line')
									.attr('d', function(d) {
										return _this2.line(d.values);
									})
									.style('stroke', function(d) {
										return _this2.z(d.id);
									});

								this.company
									.append('text')
									.datum(function(d) {
										return { id: d.id, value: d.values[d.values.length - 1] };
									})
									.attr('transform', function(d) {
										return (
											'translate(' +
											_this2.x(d.value.date) +
											',' +
											_this2.y(d.value.temperature) +
											')'
										);
									})
									.attr('x', 3)
									.attr('dy', '0.35em')
									.style('font', '10px sans-serif')
									.text(function(d) {
										return d.id;
									});
							}
						},
						{
							key: 'render',
							value: function render() {
								return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default.a,
									{ id: 'orChart' },
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										'svg',
										{ width: '800', height: '200' }
									)
								);
							}
						}
					]
				);

				return ORChart;
			})(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					play: Object(
						__WEBPACK_IMPORTED_MODULE_8__game_selectors__['d' /* getPlay */]
					)(state),
					operatingRounds: Object(
						__WEBPACK_IMPORTED_MODULE_8__game_selectors__[
							'c' /* getOperatingRounds */
						]
					)(state),
					currentOperatingRound: Object(
						__WEBPACK_IMPORTED_MODULE_8__game_selectors__[
							'a' /* getCurrentOperatingRound */
						]
					)(state),
					startedMajors: Object(
						__WEBPACK_IMPORTED_MODULE_8__game_selectors__[
							'g' /* getStartedMajors */
						]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_4_react_redux__['b' /* connect */]
			)(mapStateToProps, {})(ORChart);

			/***/
		},

	/***/ './src/client/modules/scores/scores.js':
		/*!*********************************************!*\
  !*** ./src/client/modules/scores/scores.js ***!
  \*********************************************/
		/*! exports provided: Scores, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export Scores */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_5_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card__ = __webpack_require__(
				/*! @material-ui/core/Card */ './node_modules/@material-ui/core/Card/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__ = __webpack_require__(
				/*! @material-ui/core/Paper */ './node_modules/@material-ui/core/Paper/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Table__ = __webpack_require__(
				/*! @material-ui/core/Table */ './node_modules/@material-ui/core/Table/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Table___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Table__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_TableBody__ = __webpack_require__(
				/*! @material-ui/core/TableBody */ './node_modules/@material-ui/core/TableBody/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_TableBody___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_12__material_ui_core_TableBody__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell__ = __webpack_require__(
				/*! @material-ui/core/TableCell */ './node_modules/@material-ui/core/TableCell/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_TableHead__ = __webpack_require__(
				/*! @material-ui/core/TableHead */ './node_modules/@material-ui/core/TableHead/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_TableHead___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_14__material_ui_core_TableHead__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core_TableRow__ = __webpack_require__(
				/*! @material-ui/core/TableRow */ './node_modules/@material-ui/core/TableRow/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_core_TableRow___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_15__material_ui_core_TableRow__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__orChart__ = __webpack_require__(
				/*! ./orChart */ './src/client/modules/scores/orChart.js'
			);

			var Scores = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					Scores,
					_React$PureComponent
				);

				function Scores() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						Scores
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(Scores.__proto__ || Object.getPrototypeOf(Scores)).apply(
							this,
							arguments
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					Scores,
					[
						{
							key: 'renderScoreCard',
							value: function renderScoreCard() {
								var _this2 = this;

								if (this.props.operatingRound) {
									return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card___default.a,
										{ className: 'operatingRoundCard' },
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Table___default.a,
											null,
											__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_14__material_ui_core_TableHead___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_15__material_ui_core_TableRow___default.a,
													null,
													__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default.a,
														{ component: 'th', scope: 'row' },
														'Player'
													),
													Object.keys(this.props.operatingRound).map(function(
														company
													) {
														return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
															__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default.a,
															{ key: company },
															company
														);
													}),
													__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default.a,
														{ component: 'th', scope: 'row' },
														'Total'
													)
												)
											),
											__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_12__material_ui_core_TableBody___default.a,
												null,
												this.props.players.map(function(player, i) {
													return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_15__material_ui_core_TableRow___default.a,
														{ key: i },
														__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
															__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default.a,
															{ component: 'th', scope: 'row' },
															player.name
														),
														Object.keys(_this2.props.operatingRound).map(
															function(company) {
																return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
																	__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default.a,
																	{ key: company },
																	_this2.props.operatingRound[company][
																		player.name
																	]
																);
															}
														),
														__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
															__WEBPACK_IMPORTED_MODULE_13__material_ui_core_TableCell___default.a,
															null,
															Object.keys(_this2.props.operatingRound)
																.map(function(company) {
																	return _this2
																		.props.operatingRound[company][player.name];
																})
																.reduce(function(acc, curr) {
																	return acc + curr;
																})
														)
													);
												})
											)
										)
									);
								}

								return null;
							}
						},
						{
							key: 'render',
							value: function render() {
								return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default.a,
									{ id: 'scores' },
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar___default.a,
										{ position: 'static', color: 'default' },
										__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar___default.a,
											{ variant: 'dense' },
											__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Typography___default.a,
												{ variant: 'title', className: 'title' },
												'Scores'
											)
										)
									),
									this.renderScoreCard(),
									__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_18__orChart__['a' /* default */],
										null
									)
								);
							}
						}
					]
				);

				return Scores;
			})(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					operatingRound: Object(
						__WEBPACK_IMPORTED_MODULE_16__game_selectors__[
							'a' /* getCurrentOperatingRound */
						]
					)(state),
					players: Object(
						__WEBPACK_IMPORTED_MODULE_17__player_selectors__[
							'b' /* getPlayers */
						]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_4_react_redux__['b' /* connect */]
			)(mapStateToProps, {})(Scores);

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvY29tcGFueS9jb21wYW5pZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL2NvbXBhbnkvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3Njb3Jlcy9vckNoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zY29yZXMvc2NvcmVzLmpzIl0sIm5hbWVzIjpbIkNvbXBhbmllcyIsInByb3BzIiwic3RhcnRlZE1ham9ycyIsIm1hcCIsImNvbXBhbnkiLCJuYW1lIiwicGxheSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZ2V0U3RhcnRlZE1ham9ycyIsImdldFBsYXkiLCJjb25uZWN0IiwiaGFuZGxlUGF5b3V0IiwiaGFuZGxlV2l0aGhvbGQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY29tcGFueU5hbWUiLCJ2YWx1ZSIsInNoYXJlVmFsdWUiLCJzZWxlY3QiLCJwbGF5ZXJzIiwicGF5b3V0Q2hhcnQiLCJpIiwibGVuZ3RoIiwic3RvY2tDb3VudCIsInN0b2NrcyIsInB1dCIsIm9wZXJhdGVQYXkiLCJjdXJyZW50T1IiLCJvcGVyYXRlV2l0aGhvbGQiLCJ0YWtlRXZlcnkiLCJDT01QQU5ZIiwiUEFZT1VUIiwiV0lUSEhPTEQiLCJSb3VuZE1hbmFnZXIiLCJyb3VuZExhYmVsIiwibmV4dFJvdW5kIiwiZ2FtZSIsImdldEdhbWUiLCJnZXRSb3VuZExhYmVsIiwiaGFuZGxlU3RhcnRHYW1lIiwiaGFuZGxlTmV4dFJvdW5kIiwic2V0UGVyc29uYWxNb25leSIsImluaXRpYWxQbGF5ZXJNb25leSIsImN1cnJlbnRQaGFzZSIsImNoYW5nZUN1cnJlbnRPUiIsImNoYW5nZVBoYXNlIiwiY2hhbmdlQ3VycmVudFJvdW5kIiwiY3VycmVudFJvdW5kIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJTVEFSVF9HQU1FIiwiR0FNRSIsIk5FWFRfUk9VTkQiLCJnZXRQbGF5SW1tdXRhYmxlIiwiZ2V0SW4iLCJnZXRHYW1lSW1tdXRhYmxlIiwiZ2V0TWFqb3JzSW1tdXRhYmxlIiwiZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZSIsImdldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSIsImdldFBsYXllckltbXV0YWJsZSIsImdldFN0b2Nrc0ltbXV0YWJsZSIsImNyZWF0ZVNlbGVjdG9yIiwidG9KUyIsImdldE1ham9ycyIsImdldE9wZXJhdGluZ1JvdW5kcyIsImdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZCIsIm9ycyIsImN1cnJlbnQiLCJnZXQiLCJtYWpvcnMiLCJzdGFydGVkIiwidSIsImZpbHRlciIsImluZGV4T2YiLCJtYWpvciIsImdldFVuc3RhcnRlZE1ham9ycyIsImdldFBsYXllcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJnZXRQbGF5ZXIiLCJnZXRTdG9ja3MiLCJNYWluIiwiZ2FtZVN0YXR1cyIsInBsYXlzIiwiaWQiLCJsb2FkU2F2ZWRHYW1lIiwic3RhcnRHYW1lIiwibWluUGxheWVycyIsInNhdmVHYW1lIiwic3RvcEdhbWUiLCJnZXRHYW1lU3RhdHVzIiwiZ2V0UGxheXMiLCJQbGF5ZXIiLCJwbGF5ZXIiLCJ1bnN0YXJ0ZWQiLCJzdGFydENvbXBhbnkiLCJidXlTdG9jayIsImtleXMiLCJzZWxsU3RvY2siLCJzdG9ja05hbWUiLCJwZXJzb25hbE1vbmV5IiwicmVuZGVyQm9keSIsIlBsYXllcnMiLCJhZGRQbGF5ZXIiLCJhY3F1aXJlUHJpdmF0ZUNvbXBhbnkiLCJPUkNoYXJ0IiwiaW5pdGlhbGl6ZUNoYXJ0IiwiZHJhd0NoYXJ0Iiwic3ZnIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJhdHRyIiwiaGVpZ2h0IiwiZyIsImFwcGVuZCIsIngiLCJyYW5nZSIsImRvbWFpbiIsInkiLCJ6IiwibGluZSIsImN1cnZlIiwiZCIsInRleHQiLCJNYXRoIiwibWF4Iiwib3BlcmF0aW5nUm91bmRzIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJzdHlsZSIsImRhdHVtIiwiZGF0ZSIsInRlbXBlcmF0dXJlIiwiY3VycmVudE9wZXJhdGluZ1JvdW5kIiwiU2NvcmVzIiwib3BlcmF0aW5nUm91bmQiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwicmVuZGVyU2NvcmVDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQWFBLFNBQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJCQUNVO0FBQUE7O0FBQ1IsVUFDQztBQUFDLG1FQUFEO0FBQUE7QUFDQztBQUFDLHFFQUFEO0FBQUEsT0FBUSxVQUFTLFFBQWpCLEVBQTBCLE9BQU0sU0FBaEM7QUFDQztBQUFDLHVFQUFEO0FBQUEsUUFBUyxTQUFRLE9BQWpCO0FBQ0M7QUFBQywyRUFBRDtBQUFBLFNBQVksU0FBUSxPQUFwQixFQUE0QixXQUFVLE9BQXRDO0FBQUE7QUFBQTtBQUREO0FBREQsS0FERDtBQVNDO0FBQUE7QUFBQSxPQUFLLElBQUcsV0FBUjtBQUNFLFVBQUtD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SUFERDtBQWVBO0FBeEVGOztBQUFBO0FBQUEsRUFBNEIsNkNBQUEvSSxDQUFNQyxhQUFsQzs7QUEyRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFULEtBQVI7QUFBQSxRQUFtQjtBQUMxQ2lKLGtCQUFnQiwwRkFBQTlFLENBQXlCMUQsS0FBekIsQ0FEMEI7QUFFMUNZLFdBQVMsOEVBQUF5RCxDQUFXckUsS0FBWDtBQUZpQyxFQUFuQjtBQUFBLENBQXhCOztBQUtBLHlEQUFlLG9FQUFBRyxDQUNkSixlQURjLEVBRWQsRUFGYyxFQUdid0ksTUFIYSxDQUFmLEUiLCJmaWxlIjoiMC5iZTBmMWNmYTc0ZGEyNTAxY2M3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgeyBnZXRQbGF5LCBnZXRTdGFydGVkTWFqb3JzIH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi9jb21wYW55JztcblxuZXhwb3J0IGNsYXNzIENvbXBhbmllcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlcj5cblx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuXHRcdFx0XHRcdDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiPlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0Q29tcGFuaWVzXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29tcGFuaWVzXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuc3RhcnRlZE1ham9ycy5tYXAoY29tcGFueSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8Q29tcGFueVxuXHRcdFx0XHRcdFx0XHRcdGtleT17Y29tcGFueS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdGNvbXBhbnk9e2NvbXBhbnl9XG5cdFx0XHRcdFx0XHRcdFx0cGxheT17dGhpcy5wcm9wcy5wbGF5fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0c3RhcnRlZE1ham9yczogZ2V0U3RhcnRlZE1ham9ycyhzdGF0ZSksXG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7fVxuKShDb21wYW5pZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2NvbXBhbnkvY29tcGFuaWVzLmpzIiwiaW1wb3J0IHsgdGFrZUV2ZXJ5LCBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBDT01QQU5ZLCBvcGVyYXRlUGF5LCBvcGVyYXRlV2l0aGhvbGQgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheSwgZ2V0UGxheWVycyB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcblxuZnVuY3Rpb24qIGhhbmRsZVBheW91dChhY3Rpb24pIHtcblx0Y29uc3QgeyBjb21wYW55TmFtZSwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRjb25zdCBzaGFyZVZhbHVlID0gdmFsdWUgLyAxMDtcblxuXHRjb25zdCBwbGF5ID0geWllbGQgc2VsZWN0KGdldFBsYXkpO1xuXHRjb25zdCBwbGF5ZXJzID0geWllbGQgc2VsZWN0KGdldFBsYXllcnMpO1xuXG5cdGxldCBwYXlvdXRDaGFydCA9IHt9O1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIGdldCBzdG9jayBjb3VudCBmb3IgdGhlIGNvbXBhbnlcblx0XHRjb25zdCBzdG9ja0NvdW50ID0gcGxheWVyc1tpXS5zdG9ja3NbY29tcGFueU5hbWVdIHx8IDA7XG5cdFx0cGF5b3V0Q2hhcnRbcGxheWVyc1tpXS5uYW1lXSA9IHN0b2NrQ291bnQgKiBzaGFyZVZhbHVlO1xuXHR9XG5cblx0eWllbGQgcHV0KG9wZXJhdGVQYXkoY29tcGFueU5hbWUsIHBsYXkuY3VycmVudE9SLCBwYXlvdXRDaGFydCkpO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlV2l0aGhvbGQoYWN0aW9uKSB7XG5cdGNvbnN0IHsgY29tcGFueU5hbWUsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuXHRjb25zdCBwbGF5ID0geWllbGQgc2VsZWN0KGdldFBsYXkpO1xuXHR5aWVsZCBwdXQob3BlcmF0ZVdpdGhob2xkKGNvbXBhbnlOYW1lLCBwbGF5LmN1cnJlbnRPUiwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbXBhbnkoKSB7XG5cdHlpZWxkIHRha2VFdmVyeShDT01QQU5ZLlBBWU9VVCwgaGFuZGxlUGF5b3V0KTtcblx0eWllbGQgdGFrZUV2ZXJ5KENPTVBBTlkuV0lUSEhPTEQsIGhhbmRsZVdpdGhob2xkKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9jb21wYW55L3NhZ2EuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IHsgZ2V0R2FtZSwgZ2V0UGxheSwgZ2V0Um91bmRMYWJlbCB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IG5leHRSb3VuZCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgQ2hvb3NlciBmcm9tICcuLi91dGlscy9jaG9vc2VyJztcblxuZXhwb3J0IGNsYXNzIFJvdW5kTWFuYWdlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiIGlkPVwicm91bmRNYW5hZ2VyXCI+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMucm91bmRMYWJlbH1cblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8Q2hvb3NlclxuXHRcdFx0XHRcdHRpdGxlPVwiTmV4dCBSb3VuZFwiXG5cdFx0XHRcdFx0dmFsdWVzPXtbJ09SJywgJ1NSJ119XG5cdFx0XHRcdFx0Y2hvb3NlPXt0aGlzLnByb3BzLm5leHRSb3VuZH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVG9vbGJhcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cm91bmRMYWJlbDogZ2V0Um91bmRMYWJlbChzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHsgbmV4dFJvdW5kIH1cbikoUm91bmRNYW5hZ2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3JvdW5kTWFuYWdlci5qcyIsImltcG9ydCB7IHRha2VMYXRlc3QsIHRha2VFdmVyeSwgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgTUFJTiB9IGZyb20gJy4uL21haW4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZXRQZXJzb25hbE1vbmV5IH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZSB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCB7XG5cdGNoYW5nZUN1cnJlbnRPUixcblx0Y2hhbmdlQ3VycmVudFJvdW5kLFxuXHRjaGFuZ2VQaGFzZSxcblx0R0FNRVxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheSB9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0R2FtZShhY3Rpb24pIHtcblx0Y29uc3QgcGxheWVycyA9IHlpZWxkIHNlbGVjdChnZXRQbGF5ZXJzKTtcblx0Y29uc3QgZ2FtZSA9IHlpZWxkIHNlbGVjdChnZXRHYW1lKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcblx0XHR5aWVsZCBwdXQoXG5cdFx0XHRzZXRQZXJzb25hbE1vbmV5KHBsYXllcnNbaV0ubmFtZSwgZ2FtZS5pbml0aWFsUGxheWVyTW9uZXlbcGxheWVycy5sZW5ndGhdKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24qIGhhbmRsZU5leHRSb3VuZChhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIHNlbGVjdChnZXRQbGF5KTtcblxuXHRpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdPUicpIHtcblx0XHRpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdPUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50T1IocGxheS5jdXJyZW50T1IgKyAxKSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ1NSJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKDEpKTtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50Um91bmQocGxheS5jdXJyZW50Um91bmQgKyAxKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnU1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlUGhhc2UoYWN0aW9uLnBheWxvYWQpKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGdhbWUoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5TVEFSVF9HQU1FLCBoYW5kbGVTdGFydEdhbWUpO1xuXHR5aWVsZCB0YWtlRXZlcnkoR0FNRS5ORVhUX1JPVU5ELCBoYW5kbGVOZXh0Um91bmQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvc2FnYS5qcyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5jb25zdCBnZXRQbGF5SW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydnYW1lJywgJ3BsYXknXSwgW10pO1xuY29uc3QgZ2V0R2FtZUltbXV0YWJsZSA9IHN0YXRlID0+IHN0YXRlLmdldEluKFsnZ2FtZScsICdnYW1lJ10sIHt9KTtcbmNvbnN0IGdldE1ham9yc0ltbXV0YWJsZSA9IHN0YXRlID0+IHN0YXRlLmdldEluKFsnZ2FtZScsICdnYW1lJywgJ21ham9ycyddLCB7fSk7XG5jb25zdCBnZXRTdGFydGVkTWFqb3JzSW1tdXRhYmxlID0gc3RhdGUgPT5cblx0c3RhdGUuZ2V0SW4oWydnYW1lJywgJ3BsYXknLCAnc3RhcnRlZE1ham9ycyddLCB7fSk7XG5jb25zdCBnZXRPcGVyYXRpbmdSb3VuZHNJbW11dGFibGUgPSBzdGF0ZSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdvcGVyYXRpbmdSb3VuZHMnXSwgW10pO1xuXG5jb25zdCBnZXRQbGF5ZXJJbW11dGFibGUgPSAoc3RhdGUsIG5hbWUpID0+XG5cdHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5JywgJ3BsYXllcnMnLCBuYW1lXSwge30pO1xuXG5jb25zdCBnZXRTdG9ja3NJbW11dGFibGUgPSAoc3RhdGUsIG5hbWUpID0+XG5cdHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5JywgJ3BsYXllcnMnLCBuYW1lLCAnc3RvY2tzJ10sIFtdKTtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXkgPSBjcmVhdGVTZWxlY3RvcihbZ2V0UGxheUltbXV0YWJsZV0sIHZhbHVlID0+XG5cdHZhbHVlID8gdmFsdWUudG9KUygpIDogbnVsbFxuKTtcbmV4cG9ydCBjb25zdCBnZXRHYW1lID0gY3JlYXRlU2VsZWN0b3IoW2dldEdhbWVJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZS50b0pTKClcbik7XG5leHBvcnQgY29uc3QgZ2V0TWFqb3JzID0gY3JlYXRlU2VsZWN0b3IoW2dldE1ham9yc0ltbXV0YWJsZV0sIHZhbHVlID0+XG5cdHZhbHVlLnRvSlMoKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9wZXJhdGluZ1JvdW5kcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0T3BlcmF0aW5nUm91bmRzSW1tdXRhYmxlXSxcblx0dmFsdWUgPT4gdmFsdWUudG9KUygpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kID0gY3JlYXRlU2VsZWN0b3IoXG5cdFtnZXRPcGVyYXRpbmdSb3VuZHNJbW11dGFibGUsIGdldFBsYXlJbW11dGFibGVdLFxuXHQob3JzLCBwbGF5KSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG9ycy5nZXQocGxheS5nZXQoJ2N1cnJlbnRPUicpKTtcblx0XHRyZXR1cm4gY3VycmVudCA/IGN1cnJlbnQudG9KUygpIDogbnVsbDtcblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXJ0ZWRNYWpvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE1ham9yc0ltbXV0YWJsZSwgZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZV0sXG5cdChtYWpvcnMsIHN0YXJ0ZWQpID0+IHtcblx0XHRjb25zdCB1ID0gc3RhcnRlZC50b0pTKCk7XG5cdFx0cmV0dXJuIG1ham9ycy50b0pTKCkuZmlsdGVyKG1ham9yID0+IHtcblx0XHRcdHJldHVybiB1LmluZGV4T2YobWFqb3IubmFtZSkgPj0gMDtcblx0XHR9KTtcblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFVuc3RhcnRlZE1ham9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0TWFqb3JzSW1tdXRhYmxlLCBnZXRTdGFydGVkTWFqb3JzSW1tdXRhYmxlXSxcblx0KG1ham9ycywgc3RhcnRlZCkgPT4ge1xuXHRcdGNvbnN0IHUgPSBzdGFydGVkLnRvSlMoKTtcblx0XHRyZXR1cm4gbWFqb3JzLnRvSlMoKS5maWx0ZXIobWFqb3IgPT4ge1xuXHRcdFx0cmV0dXJuIHUuaW5kZXhPZihtYWpvci5uYW1lKSA8IDA7XG5cdFx0fSk7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSb3VuZExhYmVsID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXlJbW11dGFibGVdLCBwbGF5ID0+IHtcblx0cGxheSA9IHBsYXkudG9KUygpO1xuXHRpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdPUicpIHtcblx0XHRyZXR1cm4gYCR7cGxheS5jdXJyZW50UGhhc2V9ICR7cGxheS5jdXJyZW50Um91bmR9LiR7cGxheS5jdXJyZW50T1J9YDtcblx0fSBlbHNlIGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ1NSJykge1xuXHRcdHJldHVybiBgJHtwbGF5LmN1cnJlbnRQaGFzZX0gJHtwbGF5LmN1cnJlbnRSb3VuZH1gO1xuXHR9XG5cblx0cmV0dXJuIGAke3BsYXkuY3VycmVudFBoYXNlfWA7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXllcnMgPSBjcmVhdGVTZWxlY3RvcihbZ2V0UGxheUltbXV0YWJsZV0sIHBsYXkgPT5cblx0T2JqZWN0LnZhbHVlcyhwbGF5LnBsYXllcnMudG9KUygpKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXllciA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0UGxheWVySW1tdXRhYmxlXSxcblx0dmFsdWUgPT4gKHZhbHVlID8gdmFsdWUudG9KUygpIDogbnVsbClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9ja3MgPSBjcmVhdGVTZWxlY3RvcihbZ2V0U3RvY2tzSW1tdXRhYmxlXSwgc3RvY2tzID0+XG5cdHN0b2Nrcy50b0pTKClcbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NlbGVjdG9ycy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBJbWFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBHYW1lQ2hvb3NlciBmcm9tICcuL2dhbWVDaG9vc2VyJztcbmltcG9ydCBQbGF5ZXJzIGZyb20gJy4uL3BsYXllci9wbGF5ZXJzJztcbmltcG9ydCBDb21wYW5pZXMgZnJvbSAnLi4vY29tcGFueS9jb21wYW5pZXMnO1xuaW1wb3J0IFNjb3JlcyBmcm9tICcuLi9zY29yZXMvc2NvcmVzJztcbmltcG9ydCBSb3VuZE1hbmFnZXIgZnJvbSAnLi4vZ2FtZS9yb3VuZE1hbmFnZXInO1xuXG5pbXBvcnQge3N0YXJ0R2FtZSwgc3RvcEdhbWUsIHNhdmVHYW1lfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtnZXRHYW1lU3RhdHVzLCBnZXRQbGF5c30gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHtnZXRQbGF5ZXJzfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcbmltcG9ydCB7Z2V0R2FtZSwgZ2V0UGxheX0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHtsb2FkU2F2ZWRHYW1lfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnbmV3Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eHhTY29yZUtlZXBlclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2F2ZWQgUGxheXNcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdFx0PEdhbWVDaG9vc2VyLz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHRcdDxMaXN0PlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5cy5tYXAoKHBsYXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17cGxheS5pZH0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubG9hZFNhdmVkR2FtZShwbGF5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxBdmF0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlSWNvbi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQXZhdGFyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3BsYXkuZ2FtZX0gc2Vjb25kYXJ5PVwiSmFuIDksIDIwMTRcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L0xpc3Q+XG5cdFx0XHRcdFx0PC9QYXBlcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAncmVhZHknKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RhcnRHYW1lfVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMucGxheWVycy5sZW5ndGggPCB0aGlzLnByb3BzLmdhbWUubWluUGxheWVyc1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFN0YXJ0IEdhbWVcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdzdGFydGVkJykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxSb3VuZE1hbmFnZXIvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2F2ZUdhbWUodGhpcy5wcm9wcy5wbGF5KX0+U2F2ZSBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdG9wR2FtZX0+RmluaXNoIEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdFx0PENvbXBhbmllcy8+XG5cdFx0XHRcdFx0PFNjb3Jlcy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9PlJlc3RhcnQgR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e3N0YXJ0R2FtZSwgc3RvcEdhbWUsIGxvYWRTYXZlZEdhbWUsIHNhdmVHYW1lfVxuKShNYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgQ29tcGFueUNob29zZXIgZnJvbSAnLi4vY29tcGFueS9jb21wYW55Q2hvb3Nlcic7XG5cbmltcG9ydCB7IHN0YXJ0Q29tcGFueSwgYnV5U3RvY2ssIHNlbGxTdG9jayB9IGZyb20gJy4uL2NvbXBhbnkvYWN0aW9ucyc7XG5pbXBvcnQge1xuXHRnZXRHYW1lLFxuXHRnZXRTdGFydGVkTWFqb3JzLFxuXHRnZXRVbnN0YXJ0ZWRNYWpvcnNcbn0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4uL21haW4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFN0b2NrcyB9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXJCb2R5KCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiIGNsYXNzTmFtZT1cImNvbXBhbnlUb29sYmFyXCI+XG5cdFx0XHRcdFx0PENvbXBhbnlDaG9vc2VyXG5cdFx0XHRcdFx0XHR0aXRsZT1cIlN0YXJ0IENvbXBhbnlcIlxuXHRcdFx0XHRcdFx0cGxheWVyPXt0aGlzLnByb3BzLnBsYXllcn1cblx0XHRcdFx0XHRcdGNvbXBhbmllcz17dGhpcy5wcm9wcy51bnN0YXJ0ZWR9XG5cdFx0XHRcdFx0XHRjaG9vc2U9e3RoaXMucHJvcHMuc3RhcnRDb21wYW55fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PENvbXBhbnlDaG9vc2VyXG5cdFx0XHRcdFx0XHR0aXRsZT1cIkJ1eSBTaGFyZVwiXG5cdFx0XHRcdFx0XHRwbGF5ZXI9e3RoaXMucHJvcHMucGxheWVyfVxuXHRcdFx0XHRcdFx0Y29tcGFuaWVzPXt0aGlzLnByb3BzLnN0YXJ0ZWR9XG5cdFx0XHRcdFx0XHRjaG9vc2U9e3RoaXMucHJvcHMuYnV5U3RvY2t9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Q29tcGFueUNob29zZXJcblx0XHRcdFx0XHRcdHRpdGxlPVwiU2VsbCBTaGFyZVwiXG5cdFx0XHRcdFx0XHRwbGF5ZXI9e3RoaXMucHJvcHMucGxheWVyfVxuXHRcdFx0XHRcdFx0Y29tcGFuaWVzPXtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnN0b2Nrcyl9XG5cdFx0XHRcdFx0XHRjaG9vc2U9e3RoaXMucHJvcHMuc2VsbFN0b2NrfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsYXllclN0b2Nrc1wiPlxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnN0b2NrcykubWFwKHN0b2NrTmFtZSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8Q2hpcFxuXHRcdFx0XHRcdFx0XHRcdGtleT17c3RvY2tOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInN0b2NrQ2hpcFwiXG5cdFx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntzdG9ja05hbWV9PC9BdmF0YXI+fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXt0aGlzLnByb3BzLnN0b2Nrc1tzdG9ja05hbWVdfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlciBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cblx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cInBsYXllckFwcEJhclwiPlxuXHRcdFx0XHRcdDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiPlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMucGxheWVyLm5hbWV9XG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHQke3RoaXMucHJvcHMucGxheWVyLnBlcnNvbmFsTW9uZXl9XG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlICE9PSAncmVhZHknID8gdGhpcy5yZW5kZXJCb2R5KCkgOiBudWxsfVxuXHRcdFx0PC9QYXBlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKSxcblx0dW5zdGFydGVkOiBnZXRVbnN0YXJ0ZWRNYWpvcnMoc3RhdGUpLFxuXHRzdGFydGVkOiBnZXRTdGFydGVkTWFqb3JzKHN0YXRlKSxcblx0c3RvY2tzOiBnZXRTdG9ja3Moc3RhdGUsIHByb3BzLnBsYXllci5uYW1lKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0eyBzdGFydENvbXBhbnksIGJ1eVN0b2NrLCBzZWxsU3RvY2sgfVxuKShQbGF5ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3BsYXllci9wbGF5ZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmltcG9ydCB7IHN0YXJ0Q29tcGFueSB9IGZyb20gJy4uL2NvbXBhbnkvYWN0aW9ucyc7XG5pbXBvcnQgeyBhZGRQbGF5ZXIsIGFjcXVpcmVQcml2YXRlQ29tcGFueSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4uL21haW4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldEdhbWUgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQgUGxheWVyQ3JlYXRvciBmcm9tICcuL3BsYXllckNyZWF0b3InO1xuXG5leHBvcnQgY2xhc3MgUGxheWVycyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlcj5cblx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuXHRcdFx0XHRcdDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiPlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0UGxheWVyc1xuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PFBsYXllckNyZWF0b3Jcblx0XHRcdFx0XHRcdFx0cGxheWVycz17dGhpcy5wcm9wcy5wbGF5ZXJzfVxuXHRcdFx0XHRcdFx0XHRnYW1lPXt0aGlzLnByb3BzLmdhbWV9XG5cdFx0XHRcdFx0XHRcdGdhbWVTdGF0dXM9e3RoaXMucHJvcHMuZ2FtZVN0YXR1c31cblx0XHRcdFx0XHRcdFx0YWRkUGxheWVyPXt0aGlzLnByb3BzLmFkZFBsYXllcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwicGxheWVyc1wiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXllcnMubWFwKHBsYXllciA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPFBsYXllciBrZXk9e3BsYXllci5uYW1lfSBwbGF5ZXI9e3BsYXllcn0gLz47XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpLFxuXHRnYW1lOiBnZXRHYW1lKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHsgYWRkUGxheWVyLCBzdGFydENvbXBhbnksIGFjcXVpcmVQcml2YXRlQ29tcGFueSB9XG4pKFBsYXllcnMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3BsYXllci9wbGF5ZXJzLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcblxuaW1wb3J0IHtcblx0Z2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kLFxuXHRnZXRPcGVyYXRpbmdSb3VuZHMsXG5cdGdldFBsYXksXG5cdGdldFN0YXJ0ZWRNYWpvcnNcbn0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgT1JDaGFydCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmluaXRpYWxpemVDaGFydCgpO1xuXHRcdHRoaXMuZHJhd0NoYXJ0KCk7XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0dGhpcy5kcmF3Q2hhcnQoKTtcblx0fVxuXG5cdGluaXRpYWxpemVDaGFydCgpIHtcblx0XHR0aGlzLnN2ZyA9IGQzLnNlbGVjdCgnI29yQ2hhcnQgc3ZnJyk7XG5cdFx0dGhpcy5tYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiA4MCwgYm90dG9tOiAzMCwgbGVmdDogNTAgfTtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5zdmcuYXR0cignd2lkdGgnKSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0XHR0aGlzLmhlaWdodCA9XG5cdFx0XHR0aGlzLnN2Zy5hdHRyKCdoZWlnaHQnKSAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0XHR0aGlzLmcgPSB0aGlzLnN2Z1xuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cihcblx0XHRcdFx0J3RyYW5zZm9ybScsXG5cdFx0XHRcdCd0cmFuc2xhdGUoJyArIHRoaXMubWFyZ2luLmxlZnQgKyAnLCcgKyB0aGlzLm1hcmdpbi50b3AgKyAnKSdcblx0XHRcdCk7XG5cblx0XHR0aGlzLnggPSBkM1xuXHRcdFx0LnNjYWxlTGluZWFyKClcblx0XHRcdC5yYW5nZShbMCwgdGhpcy53aWR0aF0pXG5cdFx0XHQuZG9tYWluKFswLCAxMF0pO1xuXHRcdHRoaXMueSA9IGQzXG5cdFx0XHQuc2NhbGVMaW5lYXIoKVxuXHRcdFx0LnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pXG5cdFx0XHQuZG9tYWluKFswLCAyMDBdKTtcblx0XHR0aGlzLnogPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cblx0XHR0aGlzLmxpbmUgPSBkM1xuXHRcdFx0LmxpbmUoKVxuXHRcdFx0LmN1cnZlKGQzLmN1cnZlQmFzaXMpXG5cdFx0XHQueChmdW5jdGlvbihkLCBpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLngoaSk7XG5cdFx0XHR9KVxuXHRcdFx0LnkoZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy55KGQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmdcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2F4aXMgYXhpcy0teCcpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCcgKyB0aGlzLmhlaWdodCArICcpJyk7XG5cblx0XHR0aGlzLmdcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2F4aXMgYXhpcy0teScpXG5cdFx0XHQuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCknKVxuXHRcdFx0LmF0dHIoJ3knLCA2KVxuXHRcdFx0LmF0dHIoJ2R5JywgJzAuNzFlbScpXG5cdFx0XHQuYXR0cignZmlsbCcsICcjMDAwJylcblx0XHRcdC50ZXh0KCdWYWx1ZSAoJCknKTtcblx0fVxuXG5cdGRyYXdDaGFydCgpIHtcblx0XHR0aGlzLnguZG9tYWluKFswLCBNYXRoLm1heCh0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kcy5sZW5ndGggfHwgMCwgMTApXSk7XG5cdFx0dGhpcy55LmRvbWFpbihbMCwgMjAwXSk7XG5cdFx0dGhpcy56LmRvbWFpbih0aGlzLnByb3BzLnN0YXJ0ZWRNYWpvcnMpO1xuXG5cdFx0dGhpcy5nLnNlbGVjdCgnLmF4aXMtLXgnKS5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54KSk7XG5cdFx0dGhpcy5nLnNlbGVjdCgnLmF4aXMtLXknKS5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueSkpO1xuXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kcyk7XG5cblx0XHR0aGlzLmNvbXBhbnkgPSB0aGlzLmdcblx0XHRcdC5zZWxlY3RBbGwoJy5jb21wYW55Jylcblx0XHRcdC5kYXRhKFtdKVxuXHRcdFx0LmVudGVyKClcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2NvbXBhbnknKTtcblxuXHRcdHRoaXMuY29tcGFueVxuXHRcdFx0LmFwcGVuZCgncGF0aCcpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbGluZScpXG5cdFx0XHQuYXR0cignZCcsIGQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5saW5lKGQudmFsdWVzKTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIGQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy56KGQuaWQpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNvbXBhbnlcblx0XHRcdC5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmRhdHVtKGQgPT4ge1xuXHRcdFx0XHRyZXR1cm4geyBpZDogZC5pZCwgdmFsdWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdIH07XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdCd0cmFuc2xhdGUoJyArXG5cdFx0XHRcdFx0dGhpcy54KGQudmFsdWUuZGF0ZSkgK1xuXHRcdFx0XHRcdCcsJyArXG5cdFx0XHRcdFx0dGhpcy55KGQudmFsdWUudGVtcGVyYXR1cmUpICtcblx0XHRcdFx0XHQnKSdcblx0XHRcdFx0KTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneCcsIDMpXG5cdFx0XHQuYXR0cignZHknLCAnMC4zNWVtJylcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMHB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnRleHQoZCA9PiBkLmlkKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyIGlkPVwib3JDaGFydFwiPlxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiODAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0b3BlcmF0aW5nUm91bmRzOiBnZXRPcGVyYXRpbmdSb3VuZHMoc3RhdGUpLFxuXHRjdXJyZW50T3BlcmF0aW5nUm91bmQ6IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZChzdGF0ZSksXG5cdHN0YXJ0ZWRNYWpvcnM6IGdldFN0YXJ0ZWRNYWpvcnMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7fVxuKShPUkNoYXJ0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zY29yZXMvb3JDaGFydC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZCB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcbmltcG9ydCBPUkNoYXJ0IGZyb20gJy4vb3JDaGFydCc7XG5cbmV4cG9ydCBjbGFzcyBTY29yZXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyU2NvcmVDYXJkKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJvcGVyYXRpbmdSb3VuZENhcmRcIj5cblx0XHRcdFx0XHQ8VGFibGU+XG5cdFx0XHRcdFx0XHQ8VGFibGVIZWFkPlxuXHRcdFx0XHRcdFx0XHQ8VGFibGVSb3c+XG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRQbGF5ZXJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5wcm9wcy5vcGVyYXRpbmdSb3VuZCkubWFwKGNvbXBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxUYWJsZUNlbGwga2V5PXtjb21wYW55fT57Y29tcGFueX08L1RhYmxlQ2VsbD47XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRUb3RhbFxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdFx0PC9UYWJsZUhlYWQ+XG5cdFx0XHRcdFx0XHQ8VGFibGVCb2R5PlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5ZXJzLm1hcCgocGxheWVyLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvdyBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGxheWVyLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5wcm9wcy5vcGVyYXRpbmdSb3VuZCkubWFwKGNvbXBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGtleT17Y29tcGFueX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kW2NvbXBhbnldW3BsYXllci5uYW1lXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1hcChjb21wYW55ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmRbY29tcGFueV1bXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxheWVyLm5hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGFjYyArIGN1cnI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9UYWJsZUJvZHk+XG5cdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyIGlkPVwic2NvcmVzXCI+XG5cdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cblx0XHRcdFx0XHQ8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIj5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFNjb3Jlc1xuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0e3RoaXMucmVuZGVyU2NvcmVDYXJkKCl9XG5cblx0XHRcdFx0PE9SQ2hhcnQgLz5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRvcGVyYXRpbmdSb3VuZDogZ2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kKHN0YXRlKSxcblx0cGxheWVyczogZ2V0UGxheWVycyhzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHt9XG4pKFNjb3Jlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvc2NvcmVzL3Njb3Jlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
