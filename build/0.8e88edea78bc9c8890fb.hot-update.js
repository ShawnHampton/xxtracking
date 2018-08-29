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
							'h' /* getStartedMajors */
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
											'f' /* getPlayers */
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
						__WEBPACK_IMPORTED_MODULE_8__selectors__['g' /* getRoundLabel */]
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_actions__ = __webpack_require__(
				/*! ../player/actions */ './src/client/modules/player/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/game/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(
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
										__WEBPACK_IMPORTED_MODULE_4__game_selectors__[
											'f' /* getPlayers */
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
										__WEBPACK_IMPORTED_MODULE_4__game_selectors__[
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
											__WEBPACK_IMPORTED_MODULE_3__player_actions__[
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
										__WEBPACK_IMPORTED_MODULE_6__selectors__['d' /* getPlay */]
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
											__WEBPACK_IMPORTED_MODULE_5__actions__[
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
											__WEBPACK_IMPORTED_MODULE_5__actions__[
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
											__WEBPACK_IMPORTED_MODULE_5__actions__[
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
											__WEBPACK_IMPORTED_MODULE_5__actions__[
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
											__WEBPACK_IMPORTED_MODULE_5__actions__[
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
										__WEBPACK_IMPORTED_MODULE_5__actions__['a' /* GAME */]
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
		/*! exports used: getCurrentOperatingRound, getGame, getOperatingRounds, getPlay, getPlayer, getPlayers, getRoundLabel, getStartedMajors, getStocks, getUnstartedMajors */
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
				'h',
				function() {
					return getStartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'j',
				function() {
					return getUnstartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'g',
				function() {
					return getRoundLabel;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
				function() {
					return getPlayers;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return getPlayer;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'i',
				function() {
					return getStocks;
				}
			);
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__game_selectors__ = __webpack_require__(
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
						__WEBPACK_IMPORTED_MODULE_23__game_selectors__['f' /* getPlayers */]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_22__selectors__['a' /* getGameStatus */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_23__game_selectors__['b' /* getGame */]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_23__game_selectors__['d' /* getPlay */]
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
							'j' /* getUnstartedMajors */
						]
					)(state),
					started: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__[
							'h' /* getStartedMajors */
						]
					)(state),
					stocks: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['i' /* getStocks */]
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_selectors__ = __webpack_require__(
				/*! ../main/selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__playerCreator__ = __webpack_require__(
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
												__WEBPACK_IMPORTED_MODULE_15__playerCreator__[
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
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['f' /* getPlayers */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['b' /* getGame */]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_13__main_selectors__[
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
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
										__WEBPACK_IMPORTED_MODULE_3__game_selectors__[
											'e' /* getPlayer */
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
										__WEBPACK_IMPORTED_MODULE_3__game_selectors__[
											'e' /* getPlayer */
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

	/***/ './src/client/modules/player/selectors.js':
		/*!************************************************!*\
  !*** ./src/client/modules/player/selectors.js ***!
  \************************************************/
		/*! exports provided: getPlayers, getPlayer, getStocks */
		/*! exports used: getPlayers */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
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

			var getPlayersImmutable = function getPlayersImmutable(state) {
				return state.getIn(['players', 'players'], []);
			};
			var getPlayerImmutable = function getPlayerImmutable(state, name) {
				return state.getIn(['players', 'players', name], {});
			};
			var getStocksImmutable = function getStocksImmutable(state, name) {
				return state.getIn(['players', 'players', name, 'stocks'], []);
			};

			var getPlayers = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayersImmutable], function(players) {
				return Object.values(players.toJS());
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
							'h' /* getStartedMajors */
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
							'a' /* getPlayers */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvY29tcGFueS9jb21wYW5pZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL2NvbXBhbnkvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yb3VuZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3BsYXllci9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9wbGF5ZXIvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zY29yZXMvb3JDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvc2NvcmVzL3Njb3Jlcy5qcyJdLCJuYW1lcyI6WyJDb21wYW5pZXMiLCJwcm9wcyIsInN0YXJ0ZWRNYWpvcnMiLCJtYXAiLCJjb21wYW55IiwibmFtZSIsInBsYXkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImdldFN0YXJ0ZWRNYWpvcnMiLCJnZXRQbGF5IiwiY29ubmVjdCIsImhhbmRsZVBheW91dCIsImhhbmRsZVdpdGhob2xkIiwiYWN0aW9uIiwicGF5bG9hZCIsImNvbXBhbnlOYW1lIiwidmFsdWUiLCJzaGFyZVZhbHVlIiwic2VsZWN0IiwicGxheWVycyIsInBheW91dENoYXJ0IiwiaSIsImxlbmd0aCIsInN0b2NrQ291bnQiLCJzdG9ja3MiLCJwdXQiLCJvcGVyYXRlUGF5IiwiY3VycmVudE9SIiwib3BlcmF0ZVdpdGhob2xkIiwidGFrZUV2ZXJ5IiwiQ09NUEFOWSIsIlBBWU9VVCIsIldJVEhIT0xEIiwiUm91bmRNYW5hZ2VyIiwicm91bmRMYWJlbCIsIm5leHRSb3VuZCIsImdhbWUiLCJnZXRHYW1lIiwiZ2V0Um91bmRMYWJlbCIsImhhbmRsZVN0YXJ0R2FtZSIsImhhbmRsZU5leHRSb3VuZCIsInNldFBlcnNvbmFsTW9uZXkiLCJpbml0aWFsUGxheWVyTW9uZXkiLCJjdXJyZW50UGhhc2UiLCJjaGFuZ2VDdXJyZW50T1IiLCJjaGFuZ2VQaGFzZSIsImNoYW5nZUN1cnJlbnRSb3VuZCIsImN1cnJlbnRSb3VuZCIsInRha2VMYXRlc3QiLCJNQUlOIiwiU1RBUlRfR0FNRSIsIkdBTUUiLCJORVhUX1JPVU5EIiwiZ2V0UGxheUltbXV0YWJsZSIsImdldEluIiwiZ2V0R2FtZUltbXV0YWJsZSIsImdldE1ham9yc0ltbXV0YWJsZSIsImdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGUiLCJnZXRPcGVyYXRpbmdSb3VuZHNJbW11dGFibGUiLCJnZXRQbGF5ZXJJbW11dGFibGUiLCJnZXRTdG9ja3NJbW11dGFibGUiLCJjcmVhdGVTZWxlY3RvciIsInRvSlMiLCJnZXRNYWpvcnMiLCJnZXRPcGVyYXRpbmdSb3VuZHMiLCJnZXRDdXJyZW50T3BlcmF0aW5nUm91bmQiLCJvcnMiLCJjdXJyZW50IiwiZ2V0IiwibWFqb3JzIiwic3RhcnRlZCIsInUiLCJmaWx0ZXIiLCJpbmRleE9mIiwibWFqb3IiLCJnZXRVbnN0YXJ0ZWRNYWpvcnMiLCJnZXRQbGF5ZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwiZ2V0UGxheWVyIiwiZ2V0U3RvY2tzIiwiTWFpbiIsImdhbWVTdGF0dXMiLCJwbGF5cyIsImlkIiwibG9hZFNhdmVkR2FtZSIsInN0YXJ0R2FtZSIsIm1pblBsYXllcnMiLCJzYXZlR2FtZSIsInN0b3BHYW1lIiwiZ2V0R2FtZVN0YXR1cyIsImdldFBsYXlzIiwiUGxheWVyIiwicGxheWVyIiwidW5zdGFydGVkIiwic3RhcnRDb21wYW55IiwiYnV5U3RvY2siLCJrZXlzIiwic2VsbFN0b2NrIiwic3RvY2tOYW1lIiwicGVyc29uYWxNb25leSIsInJlbmRlckJvZHkiLCJQbGF5ZXJzIiwiYWRkUGxheWVyIiwiYWNxdWlyZVByaXZhdGVDb21wYW55IiwiaGFuZGxlQnV5U3RvY2siLCJoYW5kbGVTZWxsU3RvY2siLCJjdXJyZW50Q291bnQiLCJzZXRTdG9jayIsIk1hdGgiLCJtYXgiLCJCVVlfU1RPQ0siLCJTRUxMX1NUT0NLIiwiZ2V0UGxheWVyc0ltbXV0YWJsZSIsIk9SQ2hhcnQiLCJpbml0aWFsaXplQ2hhcnQiLCJkcmF3Q2hhcnQiLCJzdmciLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImF0dHIiLCJoZWlnaHQiLCJnIiwiYXBwZW5kIiwieCIsInJhbmdlIiwiZG9tYWluIiwieSIsInoiLCJsaW5lIiwiY3VydmUiLCJkIiwidGV4dCIsIm9wZXJhdGluZ1JvdW5kcyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwic3R5bGUiLCJkYXR1bSIsImRhdGUiLCJ0ZW1wZXJhdHVyZSIsImN1cnJlbnRPcGVyYXRpbmdSb3VuZCIsIlNjb3JlcyIsIm9wZXJhdGluZ1JvdW5kIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInJlbmRlclNjb3JlQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFhQSxTQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwyQkFDVTtBQUFBOztBQUNSLFVBQ0M7QUFBQyxtRUFBRDtBQUFB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LEtBREQ7QUFnREE7O0FBRUQsVUFBTyxJQUFQO0FBQ0E7QUF0REY7QUFBQTtBQUFBLDJCQXdEVTtBQUNSLFVBQ0M7QUFBQyxtRUFBRDtBQUFBLE1BQU8sSUFBRyxRQUFWO0FBQ0M7QUFBQyxxRUFBRDtBQUFBLE9BQVEsVUFBUyxRQUFqQixFQUEwQixPQUFNLFNBQWhDO0FBQ0M7QUFBQyx1RUFBRDtBQUFBLFFBQVMsU0FBUSxPQUFqQjtBQUNDO0FBQUMsNEVBQUQ7QUFBQSxTQUFZLFNBQVEsT0FBcEIsRUFBNEIsV0FBVSxPQUF0QztBQUFBO0FBQUE7QUFERDtBQURELEtBREQ7QUFTRSxTQUFLQyxlQUFMLEVBVEY7QUFXQyxnRUFBQywwREFBRDtBQVhELElBREQ7QUFlQTtBQXhFRjs7QUFBQTtBQUFBLEVBQTRCLDZDQUFBdEosQ0FBTUMsYUFBbEM7O0FBMkVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRVCxLQUFSO0FBQUEsUUFBbUI7QUFDMUN3SixrQkFBZ0IsMEZBQUFyRixDQUF5QjFELEtBQXpCLENBRDBCO0FBRTFDWSxXQUFTLDhFQUFBeUQsQ0FBV3JFLEtBQVg7QUFGaUMsRUFBbkI7QUFBQSxDQUF4Qjs7QUFLQSx5REFBZSxvRUFBQUcsQ0FDZEosZUFEYyxFQUVkLEVBRmMsRUFHYitJLE1BSGEsQ0FBZixFIiwiZmlsZSI6IjAuOGU4OGVkZWE3OGJjOWM4ODkwZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IHsgZ2V0UGxheSwgZ2V0U3RhcnRlZE1ham9ycyB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCBDb21wYW55IGZyb20gJy4vY29tcGFueSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wYW5pZXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cblx0XHRcdFx0XHQ8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIj5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdENvbXBhbmllc1xuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0PGRpdiBpZD1cImNvbXBhbmllc1wiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnN0YXJ0ZWRNYWpvcnMubWFwKGNvbXBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PENvbXBhbnlcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2NvbXBhbnkubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRjb21wYW55PXtjb21wYW55fVxuXHRcdFx0XHRcdFx0XHRcdHBsYXk9e3RoaXMucHJvcHMucGxheX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHN0YXJ0ZWRNYWpvcnM6IGdldFN0YXJ0ZWRNYWpvcnMoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e31cbikoQ29tcGFuaWVzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9jb21wYW55L2NvbXBhbmllcy5qcyIsImltcG9ydCB7IHRha2VFdmVyeSwgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgQ09NUEFOWSwgb3BlcmF0ZVBheSwgb3BlcmF0ZVdpdGhob2xkIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXksIGdldFBsYXllcnMgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVQYXlvdXQoYWN0aW9uKSB7XG5cdGNvbnN0IHsgY29tcGFueU5hbWUsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0Y29uc3Qgc2hhcmVWYWx1ZSA9IHZhbHVlIC8gMTA7XG5cblx0Y29uc3QgcGxheSA9IHlpZWxkIHNlbGVjdChnZXRQbGF5KTtcblx0Y29uc3QgcGxheWVycyA9IHlpZWxkIHNlbGVjdChnZXRQbGF5ZXJzKTtcblxuXHRsZXQgcGF5b3V0Q2hhcnQgPSB7fTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBnZXQgc3RvY2sgY291bnQgZm9yIHRoZSBjb21wYW55XG5cdFx0Y29uc3Qgc3RvY2tDb3VudCA9IHBsYXllcnNbaV0uc3RvY2tzW2NvbXBhbnlOYW1lXSB8fCAwO1xuXHRcdHBheW91dENoYXJ0W3BsYXllcnNbaV0ubmFtZV0gPSBzdG9ja0NvdW50ICogc2hhcmVWYWx1ZTtcblx0fVxuXG5cdHlpZWxkIHB1dChvcGVyYXRlUGF5KGNvbXBhbnlOYW1lLCBwbGF5LmN1cnJlbnRPUiwgcGF5b3V0Q2hhcnQpKTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZVdpdGhob2xkKGFjdGlvbikge1xuXHRjb25zdCB7IGNvbXBhbnlOYW1lLCB2YWx1ZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cblx0Y29uc3QgcGxheSA9IHlpZWxkIHNlbGVjdChnZXRQbGF5KTtcblx0eWllbGQgcHV0KG9wZXJhdGVXaXRoaG9sZChjb21wYW55TmFtZSwgcGxheS5jdXJyZW50T1IsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjb21wYW55KCkge1xuXHR5aWVsZCB0YWtlRXZlcnkoQ09NUEFOWS5QQVlPVVQsIGhhbmRsZVBheW91dCk7XG5cdHlpZWxkIHRha2VFdmVyeShDT01QQU5ZLldJVEhIT0xELCBoYW5kbGVXaXRoaG9sZCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvY29tcGFueS9zYWdhLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCB7IGdldEdhbWUsIGdldFBsYXksIGdldFJvdW5kTGFiZWwgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBuZXh0Um91bmQgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IENob29zZXIgZnJvbSAnLi4vdXRpbHMvY2hvb3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBSb3VuZE1hbmFnZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIiBpZD1cInJvdW5kTWFuYWdlclwiPlxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnJvdW5kTGFiZWx9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PENob29zZXJcblx0XHRcdFx0XHR0aXRsZT1cIk5leHQgUm91bmRcIlxuXHRcdFx0XHRcdHZhbHVlcz17WydPUicsICdTUiddfVxuXHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5uZXh0Um91bmR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRnYW1lOiBnZXRHYW1lKHN0YXRlKSxcblx0cGxheTogZ2V0UGxheShzdGF0ZSksXG5cdHJvdW5kTGFiZWw6IGdldFJvdW5kTGFiZWwoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IG5leHRSb3VuZCB9XG4pKFJvdW5kTWFuYWdlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yb3VuZE1hbmFnZXIuanMiLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IE1BSU4gfSBmcm9tICcuLi9tYWluL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0UGVyc29uYWxNb25leSB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWUsIGdldFBsYXllcnMgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge1xuXHRjaGFuZ2VDdXJyZW50T1IsXG5cdGNoYW5nZUN1cnJlbnRSb3VuZCxcblx0Y2hhbmdlUGhhc2UsXG5cdEdBTUVcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXkgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXllcnMgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheWVycyk7XG5cdGNvbnN0IGdhbWUgPSB5aWVsZCBzZWxlY3QoZ2V0R2FtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0eWllbGQgcHV0KFxuXHRcdFx0c2V0UGVyc29uYWxNb25leShwbGF5ZXJzW2ldLm5hbWUsIGdhbWUuaW5pdGlhbFBsYXllck1vbmV5W3BsYXllcnMubGVuZ3RoXSlcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVOZXh0Um91bmQoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheSk7XG5cblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKHBsYXkuY3VycmVudE9SICsgMSkpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdTUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUigxKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudFJvdW5kKHBsYXkuY3VycmVudFJvdW5kICsgMSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ1NSJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBnYW1lKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uU1RBUlRfR0FNRSwgaGFuZGxlU3RhcnRHYW1lKTtcblx0eWllbGQgdGFrZUV2ZXJ5KEdBTUUuTkVYVF9ST1VORCwgaGFuZGxlTmV4dFJvdW5kKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NhZ2EuanMiLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuY29uc3QgZ2V0UGxheUltbXV0YWJsZSA9IHN0YXRlID0+IHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5J10sIFtdKTtcbmNvbnN0IGdldEdhbWVJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ2dhbWUnLCAnZ2FtZSddLCB7fSk7XG5jb25zdCBnZXRNYWpvcnNJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ2dhbWUnLCAnZ2FtZScsICdtYWpvcnMnXSwge30pO1xuY29uc3QgZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZSA9IHN0YXRlID0+XG5cdHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5JywgJ3N0YXJ0ZWRNYWpvcnMnXSwge30pO1xuY29uc3QgZ2V0T3BlcmF0aW5nUm91bmRzSW1tdXRhYmxlID0gc3RhdGUgPT5cblx0c3RhdGUuZ2V0SW4oWydnYW1lJywgJ3BsYXknLCAnb3BlcmF0aW5nUm91bmRzJ10sIFtdKTtcblxuY29uc3QgZ2V0UGxheWVySW1tdXRhYmxlID0gKHN0YXRlLCBuYW1lKSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdwbGF5ZXJzJywgbmFtZV0sIHt9KTtcblxuY29uc3QgZ2V0U3RvY2tzSW1tdXRhYmxlID0gKHN0YXRlLCBuYW1lKSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdwbGF5ZXJzJywgbmFtZSwgJ3N0b2NrcyddLCBbXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXlJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZSA/IHZhbHVlLnRvSlMoKSA6IG51bGxcbik7XG5leHBvcnQgY29uc3QgZ2V0R2FtZSA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRHYW1lSW1tdXRhYmxlXSwgdmFsdWUgPT5cblx0dmFsdWUudG9KUygpXG4pO1xuZXhwb3J0IGNvbnN0IGdldE1ham9ycyA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRNYWpvcnNJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZS50b0pTKClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVyYXRpbmdSb3VuZHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZV0sXG5cdHZhbHVlID0+IHZhbHVlLnRvSlMoKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0T3BlcmF0aW5nUm91bmRzSW1tdXRhYmxlLCBnZXRQbGF5SW1tdXRhYmxlXSxcblx0KG9ycywgcGxheSkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBvcnMuZ2V0KHBsYXkuZ2V0KCdjdXJyZW50T1InKSk7XG5cdFx0cmV0dXJuIGN1cnJlbnQgPyBjdXJyZW50LnRvSlMoKSA6IG51bGw7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGFydGVkTWFqb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFtnZXRNYWpvcnNJbW11dGFibGUsIGdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGVdLFxuXHQobWFqb3JzLCBzdGFydGVkKSA9PiB7XG5cdFx0Y29uc3QgdSA9IHN0YXJ0ZWQudG9KUygpO1xuXHRcdHJldHVybiBtYWpvcnMudG9KUygpLmZpbHRlcihtYWpvciA9PiB7XG5cdFx0XHRyZXR1cm4gdS5pbmRleE9mKG1ham9yLm5hbWUpID49IDA7XG5cdFx0fSk7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRVbnN0YXJ0ZWRNYWpvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE1ham9yc0ltbXV0YWJsZSwgZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZV0sXG5cdChtYWpvcnMsIHN0YXJ0ZWQpID0+IHtcblx0XHRjb25zdCB1ID0gc3RhcnRlZC50b0pTKCk7XG5cdFx0cmV0dXJuIG1ham9ycy50b0pTKCkuZmlsdGVyKG1ham9yID0+IHtcblx0XHRcdHJldHVybiB1LmluZGV4T2YobWFqb3IubmFtZSkgPCAwO1xuXHRcdH0pO1xuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91bmRMYWJlbCA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRQbGF5SW1tdXRhYmxlXSwgcGxheSA9PiB7XG5cdHBsYXkgPSBwbGF5LnRvSlMoKTtcblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0cmV0dXJuIGAke3BsYXkuY3VycmVudFBoYXNlfSAke3BsYXkuY3VycmVudFJvdW5kfS4ke3BsYXkuY3VycmVudE9SfWA7XG5cdH0gZWxzZSBpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdTUicpIHtcblx0XHRyZXR1cm4gYCR7cGxheS5jdXJyZW50UGhhc2V9ICR7cGxheS5jdXJyZW50Um91bmR9YDtcblx0fVxuXG5cdHJldHVybiBgJHtwbGF5LmN1cnJlbnRQaGFzZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJzID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXlJbW11dGFibGVdLCBwbGF5ID0+XG5cdE9iamVjdC52YWx1ZXMocGxheS5wbGF5ZXJzLnRvSlMoKSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXIgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldFBsYXllckltbXV0YWJsZV0sXG5cdHZhbHVlID0+ICh2YWx1ZSA/IHZhbHVlLnRvSlMoKSA6IG51bGwpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvY2tzID0gY3JlYXRlU2VsZWN0b3IoW2dldFN0b2Nrc0ltbXV0YWJsZV0sIHN0b2NrcyA9PlxuXHRzdG9ja3MudG9KUygpXG4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgSW1hZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgR2FtZUNob29zZXIgZnJvbSAnLi9nYW1lQ2hvb3Nlcic7XG5pbXBvcnQgUGxheWVycyBmcm9tICcuLi9wbGF5ZXIvcGxheWVycyc7XG5pbXBvcnQgQ29tcGFuaWVzIGZyb20gJy4uL2NvbXBhbnkvY29tcGFuaWVzJztcbmltcG9ydCBTY29yZXMgZnJvbSAnLi4vc2NvcmVzL3Njb3Jlcyc7XG5pbXBvcnQgUm91bmRNYW5hZ2VyIGZyb20gJy4uL2dhbWUvcm91bmRNYW5hZ2VyJztcblxuaW1wb3J0IHtzdGFydEdhbWUsIHN0b3BHYW1lLCBzYXZlR2FtZX0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Z2V0R2FtZVN0YXR1cywgZ2V0UGxheXN9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7Z2V0R2FtZSwgZ2V0UGxheSwgZ2V0UGxheWVyc30gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHtsb2FkU2F2ZWRHYW1lfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnbmV3Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eHhTY29yZUtlZXBlclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2F2ZWQgUGxheXNcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdFx0PEdhbWVDaG9vc2VyLz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHRcdDxMaXN0PlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5cy5tYXAoKHBsYXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17cGxheS5pZH0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubG9hZFNhdmVkR2FtZShwbGF5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxBdmF0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlSWNvbi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQXZhdGFyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3BsYXkuZ2FtZX0gc2Vjb25kYXJ5PVwiSmFuIDksIDIwMTRcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L0xpc3Q+XG5cdFx0XHRcdFx0PC9QYXBlcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAncmVhZHknKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RhcnRHYW1lfVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMucGxheWVycy5sZW5ndGggPCB0aGlzLnByb3BzLmdhbWUubWluUGxheWVyc1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFN0YXJ0IEdhbWVcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdzdGFydGVkJykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxSb3VuZE1hbmFnZXIvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2F2ZUdhbWUodGhpcy5wcm9wcy5wbGF5KX0+U2F2ZSBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdG9wR2FtZX0+RmluaXNoIEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdFx0PENvbXBhbmllcy8+XG5cdFx0XHRcdFx0PFNjb3Jlcy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9PlJlc3RhcnQgR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e3N0YXJ0R2FtZSwgc3RvcEdhbWUsIGxvYWRTYXZlZEdhbWUsIHNhdmVHYW1lfVxuKShNYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgQ29tcGFueUNob29zZXIgZnJvbSAnLi4vY29tcGFueS9jb21wYW55Q2hvb3Nlcic7XG5cbmltcG9ydCB7IHN0YXJ0Q29tcGFueSwgYnV5U3RvY2ssIHNlbGxTdG9jayB9IGZyb20gJy4uL2NvbXBhbnkvYWN0aW9ucyc7XG5pbXBvcnQge1xuXHRnZXRHYW1lLFxuXHRnZXRTdG9ja3MsXG5cdGdldFN0YXJ0ZWRNYWpvcnMsXG5cdGdldFVuc3RhcnRlZE1ham9yc1xufSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi4vbWFpbi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlckJvZHkoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCIgY2xhc3NOYW1lPVwiY29tcGFueVRvb2xiYXJcIj5cblx0XHRcdFx0XHQ8Q29tcGFueUNob29zZXJcblx0XHRcdFx0XHRcdHRpdGxlPVwiU3RhcnQgQ29tcGFueVwiXG5cdFx0XHRcdFx0XHRwbGF5ZXI9e3RoaXMucHJvcHMucGxheWVyfVxuXHRcdFx0XHRcdFx0Y29tcGFuaWVzPXt0aGlzLnByb3BzLnVuc3RhcnRlZH1cblx0XHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5zdGFydENvbXBhbnl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Q29tcGFueUNob29zZXJcblx0XHRcdFx0XHRcdHRpdGxlPVwiQnV5IFNoYXJlXCJcblx0XHRcdFx0XHRcdHBsYXllcj17dGhpcy5wcm9wcy5wbGF5ZXJ9XG5cdFx0XHRcdFx0XHRjb21wYW5pZXM9e3RoaXMucHJvcHMuc3RhcnRlZH1cblx0XHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5idXlTdG9ja31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxDb21wYW55Q2hvb3NlclxuXHRcdFx0XHRcdFx0dGl0bGU9XCJTZWxsIFNoYXJlXCJcblx0XHRcdFx0XHRcdHBsYXllcj17dGhpcy5wcm9wcy5wbGF5ZXJ9XG5cdFx0XHRcdFx0XHRjb21wYW5pZXM9e09iamVjdC5rZXlzKHRoaXMucHJvcHMuc3RvY2tzKX1cblx0XHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5zZWxsU3RvY2t9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Ub29sYmFyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGxheWVyU3RvY2tzXCI+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMuc3RvY2tzKS5tYXAoc3RvY2tOYW1lID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxDaGlwXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtzdG9ja05hbWV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3RvY2tDaGlwXCJcblx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e3N0b2NrTmFtZX08L0F2YXRhcj59XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3RoaXMucHJvcHMuc3RvY2tzW3N0b2NrTmFtZV19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyIGNsYXNzTmFtZT1cInBsYXllclwiPlxuXHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwicGxheWVyQXBwQmFyXCI+XG5cdFx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5ZXIubmFtZX1cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdCR7dGhpcy5wcm9wcy5wbGF5ZXIucGVyc29uYWxNb25leX1cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdHt0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgIT09ICdyZWFkeScgPyB0aGlzLnJlbmRlckJvZHkoKSA6IG51bGx9XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpLFxuXHR1bnN0YXJ0ZWQ6IGdldFVuc3RhcnRlZE1ham9ycyhzdGF0ZSksXG5cdHN0YXJ0ZWQ6IGdldFN0YXJ0ZWRNYWpvcnMoc3RhdGUpLFxuXHRzdG9ja3M6IGdldFN0b2NrcyhzdGF0ZSwgcHJvcHMucGxheWVyLm5hbWUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IHN0YXJ0Q29tcGFueSwgYnV5U3RvY2ssIHNlbGxTdG9jayB9XG4pKFBsYXllcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllci5qcyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuaW1wb3J0IHsgc3RhcnRDb21wYW55IH0gZnJvbSAnLi4vY29tcGFueS9hY3Rpb25zJztcbmltcG9ydCB7IGFkZFBsYXllciwgYWNxdWlyZVByaXZhdGVDb21wYW55IH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWVTdGF0dXMgfSBmcm9tICcuLi9tYWluL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRHYW1lLCBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IFBsYXllckNyZWF0b3IgZnJvbSAnLi9wbGF5ZXJDcmVhdG9yJztcblxuZXhwb3J0IGNsYXNzIFBsYXllcnMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cblx0XHRcdFx0XHQ8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIj5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFBsYXllcnNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxQbGF5ZXJDcmVhdG9yXG5cdFx0XHRcdFx0XHRcdHBsYXllcnM9e3RoaXMucHJvcHMucGxheWVyc31cblx0XHRcdFx0XHRcdFx0Z2FtZT17dGhpcy5wcm9wcy5nYW1lfVxuXHRcdFx0XHRcdFx0XHRnYW1lU3RhdHVzPXt0aGlzLnByb3BzLmdhbWVTdGF0dXN9XG5cdFx0XHRcdFx0XHRcdGFkZFBsYXllcj17dGhpcy5wcm9wcy5hZGRQbGF5ZXJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0PGRpdiBpZD1cInBsYXllcnNcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5ZXJzLm1hcChwbGF5ZXIgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxQbGF5ZXIga2V5PXtwbGF5ZXIubmFtZX0gcGxheWVyPXtwbGF5ZXJ9IC8+O1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IGFkZFBsYXllciwgc3RhcnRDb21wYW55LCBhY3F1aXJlUHJpdmF0ZUNvbXBhbnkgfVxuKShQbGF5ZXJzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9wbGF5ZXIvcGxheWVycy5qcyIsImltcG9ydCB7IHNlbGVjdCwgdGFrZUV2ZXJ5LCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBDT01QQU5ZIH0gZnJvbSAnLi4vY29tcGFueS9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXllciB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCB7IHNldFN0b2NrIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZnVuY3Rpb24qIGhhbmRsZUJ1eVN0b2NrKGFjdGlvbikge1xuXHRjb25zdCBwbGF5ZXIgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheWVyLCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXIpO1xuXHRsZXQgY3VycmVudENvdW50ID0gcGxheWVyLnN0b2Nrc1thY3Rpb24ucGF5bG9hZC5jb21wYW55XSB8fCAwO1xuXHRjdXJyZW50Q291bnQgPSBjdXJyZW50Q291bnQgKyAxO1xuXG5cdHlpZWxkIHB1dChcblx0XHRzZXRTdG9jayhhY3Rpb24ucGF5bG9hZC5wbGF5ZXIsIGFjdGlvbi5wYXlsb2FkLmNvbXBhbnksIGN1cnJlbnRDb3VudClcblx0KTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZVNlbGxTdG9jayhhY3Rpb24pIHtcblx0Y29uc3QgcGxheWVyID0geWllbGQgc2VsZWN0KGdldFBsYXllciwgYWN0aW9uLnBheWxvYWQucGxheWVyKTtcblx0bGV0IGN1cnJlbnRDb3VudCA9IHBsYXllci5zdG9ja3NbYWN0aW9uLnBheWxvYWQuY29tcGFueV0gfHwgMDtcblx0Y3VycmVudENvdW50ID0gTWF0aC5tYXgoY3VycmVudENvdW50IC0gMSwgMCk7XG5cblx0eWllbGQgcHV0KFxuXHRcdHNldFN0b2NrKGFjdGlvbi5wYXlsb2FkLnBsYXllciwgYWN0aW9uLnBheWxvYWQuY29tcGFueSwgY3VycmVudENvdW50KVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcGxheWVyKCkge1xuXHR5aWVsZCB0YWtlRXZlcnkoQ09NUEFOWS5CVVlfU1RPQ0ssIGhhbmRsZUJ1eVN0b2NrKTtcblx0eWllbGQgdGFrZUV2ZXJ5KENPTVBBTlkuU0VMTF9TVE9DSywgaGFuZGxlU2VsbFN0b2NrKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9wbGF5ZXIvc2FnYS5qcyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5jb25zdCBnZXRQbGF5ZXJzSW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydwbGF5ZXJzJywgJ3BsYXllcnMnXSwgW10pO1xuY29uc3QgZ2V0UGxheWVySW1tdXRhYmxlID0gKHN0YXRlLCBuYW1lKSA9PlxuXHRzdGF0ZS5nZXRJbihbJ3BsYXllcnMnLCAncGxheWVycycsIG5hbWVdLCB7fSk7XG5jb25zdCBnZXRTdG9ja3NJbW11dGFibGUgPSAoc3RhdGUsIG5hbWUpID0+XG5cdHN0YXRlLmdldEluKFsncGxheWVycycsICdwbGF5ZXJzJywgbmFtZSwgJ3N0b2NrcyddLCBbXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJzID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXllcnNJbW11dGFibGVdLCBwbGF5ZXJzID0+XG5cdE9iamVjdC52YWx1ZXMocGxheWVycy50b0pTKCkpXG4pO1xuZXhwb3J0IGNvbnN0IGdldFBsYXllciA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0UGxheWVySW1tdXRhYmxlXSxcblx0dmFsdWUgPT4gKHZhbHVlID8gdmFsdWUudG9KUygpIDogbnVsbClcbik7XG5leHBvcnQgY29uc3QgZ2V0U3RvY2tzID0gY3JlYXRlU2VsZWN0b3IoW2dldFN0b2Nrc0ltbXV0YWJsZV0sIHN0b2NrcyA9PlxuXHRzdG9ja3MudG9KUygpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3BsYXllci9zZWxlY3RvcnMuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5pbXBvcnQge1xuXHRnZXRDdXJyZW50T3BlcmF0aW5nUm91bmQsXG5cdGdldE9wZXJhdGluZ1JvdW5kcyxcblx0Z2V0UGxheSxcblx0Z2V0U3RhcnRlZE1ham9yc1xufSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBPUkNoYXJ0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZUNoYXJ0KCk7XG5cdFx0dGhpcy5kcmF3Q2hhcnQoKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHR0aGlzLmRyYXdDaGFydCgpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUNoYXJ0KCkge1xuXHRcdHRoaXMuc3ZnID0gZDMuc2VsZWN0KCcjb3JDaGFydCBzdmcnKTtcblx0XHR0aGlzLm1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDgwLCBib3R0b206IDMwLCBsZWZ0OiA1MCB9O1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcpIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRcdHRoaXMuaGVpZ2h0ID1cblx0XHRcdHRoaXMuc3ZnLmF0dHIoJ2hlaWdodCcpIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHRcdHRoaXMuZyA9IHRoaXMuc3ZnXG5cdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKFxuXHRcdFx0XHQndHJhbnNmb3JtJyxcblx0XHRcdFx0J3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJ1xuXHRcdFx0KTtcblxuXHRcdHRoaXMueCA9IGQzXG5cdFx0XHQuc2NhbGVMaW5lYXIoKVxuXHRcdFx0LnJhbmdlKFswLCB0aGlzLndpZHRoXSlcblx0XHRcdC5kb21haW4oWzAsIDEwXSk7XG5cdFx0dGhpcy55ID0gZDNcblx0XHRcdC5zY2FsZUxpbmVhcigpXG5cdFx0XHQucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSlcblx0XHRcdC5kb21haW4oWzAsIDIwMF0pO1xuXHRcdHRoaXMueiA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuXHRcdHRoaXMubGluZSA9IGQzXG5cdFx0XHQubGluZSgpXG5cdFx0XHQuY3VydmUoZDMuY3VydmVCYXNpcylcblx0XHRcdC54KGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMueChpKTtcblx0XHRcdH0pXG5cdFx0XHQueShmdW5jdGlvbihkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnkoZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZ1xuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYXhpcyBheGlzLS14Jylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJyArIHRoaXMuaGVpZ2h0ICsgJyknKTtcblxuXHRcdHRoaXMuZ1xuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYXhpcyBheGlzLS15Jylcblx0XHRcdC5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwKScpXG5cdFx0XHQuYXR0cigneScsIDYpXG5cdFx0XHQuYXR0cignZHknLCAnMC43MWVtJylcblx0XHRcdC5hdHRyKCdmaWxsJywgJyMwMDAnKVxuXHRcdFx0LnRleHQoJ1ZhbHVlICgkKScpO1xuXHR9XG5cblx0ZHJhd0NoYXJ0KCkge1xuXHRcdHRoaXMueC5kb21haW4oWzAsIE1hdGgubWF4KHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmRzLmxlbmd0aCB8fCAwLCAxMCldKTtcblx0XHR0aGlzLnkuZG9tYWluKFswLCAyMDBdKTtcblx0XHR0aGlzLnouZG9tYWluKHRoaXMucHJvcHMuc3RhcnRlZE1ham9ycyk7XG5cblx0XHR0aGlzLmcuc2VsZWN0KCcuYXhpcy0teCcpLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLngpKTtcblx0XHR0aGlzLmcuc2VsZWN0KCcuYXhpcy0teScpLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55KSk7XG5cblx0XHRjb25zb2xlLmxvZygnZGF0YScsIHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmRzKTtcblxuXHRcdHRoaXMuY29tcGFueSA9IHRoaXMuZ1xuXHRcdFx0LnNlbGVjdEFsbCgnLmNvbXBhbnknKVxuXHRcdFx0LmRhdGEoW10pXG5cdFx0XHQuZW50ZXIoKVxuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnY29tcGFueScpO1xuXG5cdFx0dGhpcy5jb21wYW55XG5cdFx0XHQuYXBwZW5kKCdwYXRoJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdsaW5lJylcblx0XHRcdC5hdHRyKCdkJywgZCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbmUoZC52YWx1ZXMpO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnooZC5pZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcGFueVxuXHRcdFx0LmFwcGVuZCgndGV4dCcpXG5cdFx0XHQuZGF0dW0oZCA9PiB7XG5cdFx0XHRcdHJldHVybiB7IGlkOiBkLmlkLCB2YWx1ZTogZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0gfTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgZCA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0J3RyYW5zbGF0ZSgnICtcblx0XHRcdFx0XHR0aGlzLngoZC52YWx1ZS5kYXRlKSArXG5cdFx0XHRcdFx0JywnICtcblx0XHRcdFx0XHR0aGlzLnkoZC52YWx1ZS50ZW1wZXJhdHVyZSkgK1xuXHRcdFx0XHRcdCcpJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd4JywgMylcblx0XHRcdC5hdHRyKCdkeScsICcwLjM1ZW0nKVxuXHRcdFx0LnN0eWxlKCdmb250JywgJzEwcHggc2Fucy1zZXJpZicpXG5cdFx0XHQudGV4dChkID0+IGQuaWQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXIgaWQ9XCJvckNoYXJ0XCI+XG5cdFx0XHRcdDxzdmcgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpLFxuXHRvcGVyYXRpbmdSb3VuZHM6IGdldE9wZXJhdGluZ1JvdW5kcyhzdGF0ZSksXG5cdGN1cnJlbnRPcGVyYXRpbmdSb3VuZDogZ2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kKHN0YXRlKSxcblx0c3RhcnRlZE1ham9yczogZ2V0U3RhcnRlZE1ham9ycyhzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHt9XG4pKE9SQ2hhcnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3Njb3Jlcy9vckNoYXJ0LmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcblxuaW1wb3J0IHsgZ2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kIH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IE9SQ2hhcnQgZnJvbSAnLi9vckNoYXJ0JztcblxuZXhwb3J0IGNsYXNzIFNjb3JlcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXJTY29yZUNhcmQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cIm9wZXJhdGluZ1JvdW5kQ2FyZFwiPlxuXHRcdFx0XHRcdDxUYWJsZT5cblx0XHRcdFx0XHRcdDxUYWJsZUhlYWQ+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZVJvdz5cblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFBsYXllclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kKS5tYXAoY29tcGFueSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFRhYmxlQ2VsbCBrZXk9e2NvbXBhbnl9Pntjb21wYW55fTwvVGFibGVDZWxsPjtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFRvdGFsXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XG5cdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdFx0XHQ8L1RhYmxlSGVhZD5cblx0XHRcdFx0XHRcdDxUYWJsZUJvZHk+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXllcnMubWFwKChwbGF5ZXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93IGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwbGF5ZXIubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kKS5tYXAoY29tcGFueSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwga2V5PXtjb21wYW55fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMub3BlcmF0aW5nUm91bmRbY29tcGFueV1bcGxheWVyLm5hbWVdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubWFwKGNvbXBhbnkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vcGVyYXRpbmdSb3VuZFtjb21wYW55XVtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXIubmFtZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYWNjICsgY3Vycjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L1RhYmxlQm9keT5cblx0XHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXIgaWQ9XCJzY29yZXNcIj5cblx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuXHRcdFx0XHRcdDxUb29sYmFyIHZhcmlhbnQ9XCJkZW5zZVwiPlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0U2NvcmVzXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHR7dGhpcy5yZW5kZXJTY29yZUNhcmQoKX1cblxuXHRcdFx0XHQ8T1JDaGFydCAvPlxuXHRcdFx0PC9QYXBlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdG9wZXJhdGluZ1JvdW5kOiBnZXRDdXJyZW50T3BlcmF0aW5nUm91bmQoc3RhdGUpLFxuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e31cbikoU2NvcmVzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zY29yZXMvc2NvcmVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
