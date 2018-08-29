webpackHotUpdate(0, {
	/***/ './src/client/modules/game/reducer.jsx':
		/*!*********************************************!*\
  !*** ./src/client/modules/game/reducer.jsx ***!
  \*********************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(
				/*! immutable */ './node_modules/immutable/dist/immutable.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_immutable__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_actions__ = __webpack_require__(
				/*! ../company/actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/game/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_actions__ = __webpack_require__(
				/*! ../main/actions */ './src/client/modules/main/actions.js'
			);

			/* harmony default export */ __webpack_exports__['a'] = function() {
				var state =
					arguments.length > 0 && arguments[0] !== undefined
						? arguments[0]
						: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])({
								game: {
									name: '1846',
									minPlayers: 2,
									maxPlayers: 6,
									bankSize: [7700, 7700, 7700, 7700, 7700],
									initialPlayerMoney: [500, 500, 500, 500, 500],

									majors: [
										{
											name: 'B&O'
										},
										{
											name: 'GWT'
										},
										{
											name: 'IC'
										}
									]
								},
								play: null
						  });
				var action = arguments[1];

				var s = state;
				switch (action.type) {
					case __WEBPACK_IMPORTED_MODULE_1__company_actions__['a' /* COMPANY */]
						.START_COMPANY:
						s = state.setIn(
							['play', 'startedMajors'],
							state
								.getIn(['play', 'startedMajors'])
								.push(action.payload.company)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__company_actions__['a' /* COMPANY */]
						.OPERATE_PAY:
						s = state.setIn(
							[
								'play',
								'operatingRounds',
								action.payload.operatingRound,
								action.payload.companyName
							],
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload.payoutChart
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_3__main_actions__['a' /* MAIN */]
						.GAME_LOADED:
						s = state.set(
							'play',
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_2__actions__['a' /* GAME */]
						.CHANGE_PHASE:
						s = state.setIn(['play', 'currentPhase'], action.payload);
						return s;
					case __WEBPACK_IMPORTED_MODULE_2__actions__['a' /* GAME */]
						.CHANGE_CURRENT_OR:
						s = state.setIn(['play', 'currentOR'], action.payload);
						return s;
					case __WEBPACK_IMPORTED_MODULE_2__actions__['a' /* GAME */]
						.CHANGE_CURRENT_ROUND:
						s = state.setIn(['play', 'currentRound'], action.payload);
						return s;
					default:
				}

				return state;
			};

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

	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, playList, loadSavedGame, gameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, gameLoaded, loadSavedGame, playList, startGame, stopGame */
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
				'e',
				function() {
					return playList;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return loadSavedGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return gameLoaded;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'g',
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
				GAME_LOADED: 'MAIN_GAME_LOADED',
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var playList = function playList(plays) {
				return {
					type: MAIN.PLAY_LIST,
					payload: plays
				};
			};

			var loadSavedGame = function loadSavedGame(playId) {
				return {
					type: MAIN.LOAD_SAVED_GAME,
					payload: playId
				};
			};

			var gameLoaded = function gameLoaded(play) {
				return {
					type: MAIN.GAME_LOADED,
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

	/***/ './src/client/modules/main/gameChooser.js':
		/*!************************************************!*\
  !*** ./src/client/modules/main/gameChooser.js ***!
  \************************************************/
		/*! exports provided: GameChooser, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export GameChooser */
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__(
				/*! @material-ui/core/Button */ './node_modules/@material-ui/core/Button/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField__ = __webpack_require__(
				/*! @material-ui/core/TextField */ './node_modules/@material-ui/core/TextField/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TextField__
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem__ = __webpack_require__(
				/*! @material-ui/core/MenuItem */ './node_modules/@material-ui/core/MenuItem/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu__ = __webpack_require__(
				/*! @material-ui/core/Menu */ './node_modules/@material-ui/core/Menu/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__player_actions__ = __webpack_require__(
				/*! ../player/actions */ './src/client/modules/player/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__player_player__ = __webpack_require__(
				/*! ../player/player */ './src/client/modules/player/player.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/main/selectors.js'
			);

			var GameChooser = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					GameChooser,
					_React$PureComponent
				);

				function GameChooser() {
					var _ref;

					var _temp, _this, _ret;

					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						GameChooser
					);

					for (
						var _len = arguments.length, args = Array(_len), _key = 0;
						_key < _len;
						_key++
					) {
						args[_key] = arguments[_key];
					}

					return (
						(_ret = ((_temp = ((_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
							this,
							(_ref =
								GameChooser.__proto__ ||
								Object.getPrototypeOf(GameChooser)).call.apply(
								_ref,
								[this].concat(args)
							)
						)),
						_this)),
						(_this.state = {
							anchorEl: null
						}),
						(_this.handleMenu = function(event) {
							_this.setState({ anchorEl: event.currentTarget });
						}),
						(_this.handleClose = function() {
							_this.setState({ anchorEl: null });
						}),
						(_this.handleChooseGameMenu = function(game) {
							_this.props.chooseGame(game);
							_this.setState({ anchorEl: null });
						}),
						_temp)),
						__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
							_this,
							_ret
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					GameChooser,
					[
						{
							key: 'render',
							value: function render() {
								var _this2 = this;

								var anchorEl = this.state.anchorEl;

								return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_4_react__['Fragment'],
									null,
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a,
										{
											'aria-owns': anchorEl ? 'menu-choosegame' : null,
											'aria-haspopup': 'true',
											onClick: this.handleMenu,
											color: 'inherit'
										},
										'Create New Game'
									),
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Menu___default.a,
										{
											id: 'menu-choosegame',
											anchorEl: anchorEl,
											open: Boolean(anchorEl),
											onClose: this.handleChooseGameMenu
										},
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_12__material_ui_core_MenuItem___default.a,
											{
												onClick: function onClick() {
													return _this2.handleChooseGameMenu('1846');
												}
											},
											'1846'
										)
									)
								);
							}
						}
					]
				);

				return GameChooser;
			})(__WEBPACK_IMPORTED_MODULE_4_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_18__selectors__['a' /* getGameStatus */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				chooseGame:
					__WEBPACK_IMPORTED_MODULE_17__actions__['b' /* createNewGame */]
			})(GameChooser);

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
				startGame: __WEBPACK_IMPORTED_MODULE_21__actions__['f' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_21__actions__['g' /* stopGame */],
				loadSavedGame:
					__WEBPACK_IMPORTED_MODULE_21__actions__['d' /* loadSavedGame */]
			})(Main);

			/***/
		},

	/***/ './src/client/modules/main/reducer.jsx':
		/*!*********************************************!*\
  !*** ./src/client/modules/main/reducer.jsx ***!
  \*********************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(
				/*! immutable */ './node_modules/immutable/dist/immutable.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_immutable__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);

			/* harmony default export */ __webpack_exports__['a'] = function() {
				var state =
					arguments.length > 0 && arguments[0] !== undefined
						? arguments[0]
						: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])({
								status: {
									state: 'new'
								},
								plays: []
						  });
				var action = arguments[1];

				var s = state;
				switch (action.type) {
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */].PLAY_LIST:
						s = state.set(
							'plays',
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload.plays
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.GAME_LOADED:
						s = state.setIn(['status', 'state'], 'ready');
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.START_GAME:
						s = state.setIn(['status', 'state'], 'started');
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */].STOP_GAME:
						s = state.setIn(['status', 'state'], 'finished');
						return s;
					default:
				}

				return state;
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
										action.payload.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwibmFtZXMiOlsic3RhdGUiLCJmcm9tSlMiLCJnYW1lIiwibmFtZSIsIm1pblBsYXllcnMiLCJtYXhQbGF5ZXJzIiwiYmFua1NpemUiLCJpbml0aWFsUGxheWVyTW9uZXkiLCJtYWpvcnMiLCJwbGF5IiwiYWN0aW9uIiwicyIsInR5cGUiLCJDT01QQU5ZIiwiU1RBUlRfQ09NUEFOWSIsInNldEluIiwiZ2V0SW4iLCJwdXNoIiwicGF5bG9hZCIsImNvbXBhbnkiLCJPUEVSQVRFX1BBWSIsIm9wZXJhdGluZ1JvdW5kIiwiY29tcGFueU5hbWUiLCJwYXlvdXRDaGFydCIsIk1BSU4iLCJHQU1FX0xPQURFRCIsInNldCIsIkdBTUUiLCJDSEFOR0VfUEhBU0UiLCJDSEFOR0VfQ1VSUkVOVF9PUiIsIkNIQU5HRV9DVVJSRU5UX1JPVU5EIiwiaGFuZGxlU3RhcnRHYW1lIiwiaGFuZGxlTmV4dFJvdW5kIiwic2VsZWN0IiwicGxheWVycyIsImkiLCJsZW5ndGgiLCJwdXQiLCJzZXRQZXJzb25hbE1vbmV5IiwiY3VycmVudFBoYXNlIiwiY2hhbmdlQ3VycmVudE9SIiwiY3VycmVudE9SIiwiY2hhbmdlUGhhc2UiLCJjaGFuZ2VDdXJyZW50Um91bmQiLCJjdXJyZW50Um91bmQiLCJ0YWtlTGF0ZXN0IiwiU1RBUlRfR0FNRSIsInRha2VFdmVyeSIsIk5FWFRfUk9VTkQiLCJQTEFZX0xJU1QiLCJTVE9QX0dBTUUiLCJMT0FEX1NBVkVEX0dBTUUiLCJDUkVBVEVfTkVXX0dBTUUiLCJwbGF5TGlzdCIsInBsYXlzIiwibG9hZFNhdmVkR2FtZSIsInBsYXlJZCIsImdhbWVMb2FkZWQiLCJzdGFydEdhbWUiLCJzdG9wR2FtZSIsImNyZWF0ZU5ld0dhbWUiLCJHYW1lQ2hvb3NlciIsImFuY2hvckVsIiwiaGFuZGxlTWVudSIsInNldFN0YXRlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaG9vc2VHYW1lTWVudSIsInByb3BzIiwiY2hvb3NlR2FtZSIsIkJvb2xlYW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJnYW1lU3RhdHVzIiwiZ2V0R2FtZVN0YXR1cyIsImNvbm5lY3QiLCJNYWluIiwibWFwIiwiaWQiLCJnZXRQbGF5ZXJzIiwiZ2V0R2FtZSIsImdldFBsYXkiLCJnZXRQbGF5cyIsInN0YXR1cyIsImhhbmRsZUNyZWF0ZVBsYXkiLCJoYW5kbGVMb2FkU2F2ZWRHYW1lIiwibWFpbiIsImNhbGwiLCJoYW5kbGVTdGFydHVwSW5pdCIsInN0YXJ0dXAiLCJzYXZlZFBsYXlzIiwiY29uc29sZSIsImxvZyIsIlNUQVJUVVAiLCJJTklUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQWUsWUFpQkg7QUFBQSxLQWpCYUEsS0FpQmIsdUVBakJxQix5REFBQUMsQ0FBTztBQUN2Q0MsUUFBTTtBQUNMQyxTQUFNLE1BREQ7QUFFTEMsZUFBWSxDQUZQO0FBR0xDLGVBQVksQ0FIUDtBQUlMQyxhQUFVLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFi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b0MsbUJBQWpDLENBRlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0NITEcsaUI7bUdBTWVDLE87O0FBakJ6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsU0FBVUQsaUJBQVYsQ0FBNEJoRixNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUMwQix3RUFBQStFLENBQUssbUVBQUwsQ0FEMUI7O0FBQUE7QUFDT0csb0JBRFA7QUFBQTtBQUFBLGlCQUVPLHVFQUFBdkQsQ0FBSSx1RUFBQWdCLENBQVN1QyxVQUFULENBQUosQ0FGUDs7QUFBQTtBQUdDQyxrQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJGLFVBQTNCOztBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lLFNBQVVELE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1IsOEVBQUE5QyxDQUFXLHlEQUFBa0QsQ0FBUUMsSUFBbkIsRUFBeUJOLGlCQUF6QixDQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiMC41ZGM0ODAzZmMxYjA3NDNiYzVlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmcm9tSlN9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7Q09NUEFOWX0gZnJvbSBcIi4uL2NvbXBhbnkvYWN0aW9uc1wiO1xuaW1wb3J0IHtHQU1FfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge01BSU59IGZyb20gXCIuLi9tYWluL2FjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZnJvbUpTKHtcblx0Z2FtZToge1xuXHRcdG5hbWU6IFwiMTg0NlwiLFxuXHRcdG1pblBsYXllcnM6IDIsXG5cdFx0bWF4UGxheWVyczogNixcblx0XHRiYW5rU2l6ZTogWzc3MDAsIDc3MDAsIDc3MDAsIDc3MDAsIDc3MDBdLFxuXHRcdGluaXRpYWxQbGF5ZXJNb25leTogWzUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwXSxcblxuXHRcdG1ham9yczogW3tcblx0XHRcdG5hbWU6IFwiQiZPXCJcblx0XHR9LCB7XG5cdFx0XHRuYW1lOiBcIkdXVFwiXG5cdFx0fSwge1xuXHRcdFx0bmFtZTogXCJJQ1wiXG5cdFx0fV1cblx0fSxcblx0cGxheTogbnVsbFxufSksIGFjdGlvbikge1xuXHRsZXQgcyA9IHN0YXRlO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDT01QQU5ZLlNUQVJUX0NPTVBBTlk6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ3N0YXJ0ZWRNYWpvcnMnXSwgc3RhdGUuZ2V0SW4oWydwbGF5JywgJ3N0YXJ0ZWRNYWpvcnMnXSkucHVzaChhY3Rpb24ucGF5bG9hZC5jb21wYW55KSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIENPTVBBTlkuT1BFUkFURV9QQVk6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ29wZXJhdGluZ1JvdW5kcycsIGFjdGlvbi5wYXlsb2FkLm9wZXJhdGluZ1JvdW5kLCBhY3Rpb24ucGF5bG9hZC5jb21wYW55TmFtZV0sXG5cdFx0XHRcdGZyb21KUyhhY3Rpb24ucGF5bG9hZC5wYXlvdXRDaGFydCkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBNQUlOLkdBTUVfTE9BREVEOlxuXHRcdFx0cyA9IHN0YXRlLnNldCgncGxheScsIGZyb21KUyhhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBHQU1FLkNIQU5HRV9QSEFTRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnY3VycmVudFBoYXNlJ10sIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgR0FNRS5DSEFOR0VfQ1VSUkVOVF9PUjpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnY3VycmVudE9SJ10sIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgR0FNRS5DSEFOR0VfQ1VSUkVOVF9ST1VORDpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnY3VycmVudFJvdW5kJ10sIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGRlZmF1bHQ6XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3JlZHVjZXIuanN4IiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5LCBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBNQUlOIH0gZnJvbSAnLi4vbWFpbi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcbmltcG9ydCB7IHNldFBlcnNvbmFsTW9uZXkgfSBmcm9tICcuLi9wbGF5ZXIvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lIH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHtcblx0Y2hhbmdlQ3VycmVudE9SLFxuXHRjaGFuZ2VDdXJyZW50Um91bmQsXG5cdGNoYW5nZVBoYXNlLFxuXHRHQU1FXG59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQbGF5IH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5mdW5jdGlvbiogaGFuZGxlU3RhcnRHYW1lKGFjdGlvbikge1xuXHRjb25zdCBwbGF5ZXJzID0geWllbGQgc2VsZWN0KGdldFBsYXllcnMpO1xuXHRjb25zdCBnYW1lID0geWllbGQgc2VsZWN0KGdldEdhbWUpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuXHRcdHlpZWxkIHB1dChcblx0XHRcdHNldFBlcnNvbmFsTW9uZXkocGxheWVyc1tpXS5uYW1lLCBnYW1lLmluaXRpYWxQbGF5ZXJNb25leVtwbGF5ZXJzLmxlbmd0aF0pXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiogaGFuZGxlTmV4dFJvdW5kKGFjdGlvbikge1xuXHRjb25zdCBwbGF5ID0geWllbGQgc2VsZWN0KGdldFBsYXkpO1xuXG5cdGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ09SJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUihwbGF5LmN1cnJlbnRPUiArIDEpKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi5wYXlsb2FkID09PSAnU1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlUGhhc2UoYWN0aW9uLnBheWxvYWQpKTtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50T1IoMSkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRSb3VuZChwbGF5LmN1cnJlbnRSb3VuZCArIDEpKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdTUicpIHtcblx0XHRpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdPUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZ2FtZSgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLlNUQVJUX0dBTUUsIGhhbmRsZVN0YXJ0R2FtZSk7XG5cdHlpZWxkIHRha2VFdmVyeShHQU1FLk5FWFRfUk9VTkQsIGhhbmRsZU5leHRSb3VuZCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwiZXhwb3J0IGNvbnN0IE1BSU4gPSB7XG5cdFBMQVlfTElTVDogJ01BSU5fUExBWV9MSVNUJyxcblx0U1RBUlRfR0FNRTogJ01BSU5fU1RBUlRfR0FNRScsXG5cdFNUT1BfR0FNRTogJ01BSU5fU1RPUF9HQU1FJyxcblx0TE9BRF9TQVZFRF9HQU1FOiAnTUFJTl9MT0FEX1NBVkVEX0dBTUUnLFxuXHRHQU1FX0xPQURFRDogJ01BSU5fR0FNRV9MT0FERUQnLFxuXHRDUkVBVEVfTkVXX0dBTUU6ICdNQUlOX0NSRUFURV9ORVdfR0FNRSdcbn07XG5cbmV4cG9ydCBjb25zdCBwbGF5TGlzdCA9IChwbGF5cykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uUExBWV9MSVNULFxuXHRcdHBheWxvYWQ6IHBsYXlzXG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU2F2ZWRHYW1lID0gKHBsYXlJZCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uTE9BRF9TQVZFRF9HQU1FLFxuXHRcdHBheWxvYWQ6IHBsYXlJZFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZUxvYWRlZCA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5HQU1FX0xPQURFRCxcblx0XHRwYXlsb2FkOiBwbGF5XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVEFSVF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVE9QX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdHYW1lID0gZ2FtZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5DUkVBVEVfTkVXX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcblxuaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2hvb3NlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRhbmNob3JFbDogbnVsbFxuXHR9O1xuXG5cdGhhbmRsZU1lbnUgPSBldmVudCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xuXHR9O1xuXG5cdGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCB9KTtcblx0fTtcblxuXHRoYW5kbGVDaG9vc2VHYW1lTWVudSA9IGdhbWUgPT4ge1xuXHRcdHRoaXMucHJvcHMuY2hvb3NlR2FtZShnYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYW5jaG9yRWwgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YXJpYS1vd25zPXthbmNob3JFbCA/ICdtZW51LWNob29zZWdhbWUnIDogbnVsbH1cblx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVNZW51fVxuXHRcdFx0XHRcdGNvbG9yPVwiaW5oZXJpdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRDcmVhdGUgTmV3IEdhbWVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNZW51XG5cdFx0XHRcdFx0aWQ9eydtZW51LWNob29zZWdhbWUnfVxuXHRcdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cblx0XHRcdFx0XHRvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cblx0XHRcdFx0XHRvbkNsb3NlPXt0aGlzLmhhbmRsZUNob29zZUdhbWVNZW51fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hvb3NlR2FtZU1lbnUoJzE4NDYnKX0+XG5cdFx0XHRcdFx0XHQxODQ2XG5cdFx0XHRcdFx0PC9NZW51SXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IGNob29zZUdhbWU6IGNyZWF0ZU5ld0dhbWUgfVxuKShHYW1lQ2hvb3Nlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9nYW1lQ2hvb3Nlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBJbWFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBHYW1lQ2hvb3NlciBmcm9tICcuL2dhbWVDaG9vc2VyJztcbmltcG9ydCBQbGF5ZXJzIGZyb20gJy4uL3BsYXllci9wbGF5ZXJzJztcbmltcG9ydCBDb21wYW5pZXMgZnJvbSAnLi4vY29tcGFueS9jb21wYW5pZXMnO1xuaW1wb3J0IFNjb3JlcyBmcm9tICcuLi9zY29yZXMvc2NvcmVzJztcbmltcG9ydCBSb3VuZE1hbmFnZXIgZnJvbSAnLi4vZ2FtZS9yb3VuZE1hbmFnZXInO1xuXG5pbXBvcnQge3N0YXJ0R2FtZSwgc3RvcEdhbWV9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2dldEdhbWVTdGF0dXMsIGdldFBsYXlzfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQge2dldFBsYXllcnN9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHtnZXRHYW1lLCBnZXRQbGF5fSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge2xvYWRTYXZlZEdhbWV9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICduZXcnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR4eFNjb3JlS2VlcGVyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdDxQYXBlcj5cblx0XHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRTYXZlZCBQbGF5c1xuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0XHQ8R2FtZUNob29zZXIvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdFx0PExpc3Q+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXlzLm1hcCgocGxheSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0ga2V5PXtwbGF5LmlkfSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5sb2FkU2F2ZWRHYW1lKHBsYXkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VJY29uLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cGxheS5nYW1lfSBzZWNvbmRhcnk9XCJKYW4gOSwgMjAxNFwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvTGlzdD5cblx0XHRcdFx0XHQ8L1BhcGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdyZWFkeScpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGF5ZXJzLmxlbmd0aCA8IHRoaXMucHJvcHMuZ2FtZS5taW5QbGF5ZXJzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0U3RhcnQgR2FtZVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlci8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdG9wR2FtZX0+RmluaXNoIEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdFx0PENvbXBhbmllcy8+XG5cdFx0XHRcdFx0PFNjb3Jlcy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9PlJlc3RhcnQgR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e3N0YXJ0R2FtZSwgc3RvcEdhbWUsIGxvYWRTYXZlZEdhbWV9XG4pKE1haW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsImltcG9ydCB7ZnJvbUpTfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge01BSU59IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZnJvbUpTKHtcblx0c3RhdHVzOiB7XG5cdFx0c3RhdGU6IFwibmV3XCIsXG5cdH0sXG5cdHBsYXlzOiBbXVxufSksIGFjdGlvbikge1xuXHRsZXQgcyA9IHN0YXRlO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBNQUlOLlBMQVlfTElTVDpcblx0XHRcdHMgPSBzdGF0ZS5zZXQoJ3BsYXlzJywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkLnBsYXlzKSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uR0FNRV9MT0FERUQ6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJyZWFkeVwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5TVEFSVF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwic3RhcnRlZFwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5TVE9QX0dBTUU6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJmaW5pc2hlZFwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGRlZmF1bHQ6XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3JlZHVjZXIuanN4IiwiaW1wb3J0IHt0YWtlTGF0ZXN0LCBwdXQsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge2dhbWVMb2FkZWQsIE1BSU59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZU5ld1BsYXksIGxvYWRTYXZlZFBsYXl9IGZyb20gXCIuLi9zZXJ2ZXJBcGkvdXRpbHNcIjtcblxuZnVuY3Rpb24qIGhhbmRsZUNyZWF0ZVBsYXkoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGNyZWF0ZU5ld1BsYXksIHtnYW1lOiBhY3Rpb24ucGF5bG9hZH0pO1xuXHR5aWVsZCBwdXQoZ2FtZUxvYWRlZChwbGF5KSk7XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVMb2FkU2F2ZWRHYW1lKGFjdGlvbikge1xuXHRjb25zdCBwbGF5ID0geWllbGQgY2FsbChsb2FkU2F2ZWRQbGF5LCBhY3Rpb24ucGF5bG9hZC5pZCk7XG5cdHlpZWxkIHB1dChnYW1lTG9hZGVkKHBsYXkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DUkVBVEVfTkVXX0dBTUUsIGhhbmRsZUNyZWF0ZVBsYXkpO1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uTE9BRF9TQVZFRF9HQU1FLCBoYW5kbGVMb2FkU2F2ZWRHYW1lKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgU1RBUlRVUCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2xpc3RQbGF5c30gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuaW1wb3J0IHtwbGF5TGlzdH0gZnJvbSBcIi4uL21haW4vYWN0aW9uc1wiO1xuXG4vKipcbiAqIFByb2Nlc3NlcyBzdGFydHVwIHJlcXVlc3RzIChzaG91bGQgb25seSBiZSBvbmUpXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbiBUaGUgdHJpZ2dlcmluZyBhY3Rpb25cbiAqIEByZXR1cm5zIHtJdGVyYWJsZUl0ZXJhdG9yPCo+fSBub3RoaW5nXG4gKi9cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydHVwSW5pdChhY3Rpb24pIHtcblx0Y29uc3Qgc2F2ZWRQbGF5cyA9IHlpZWxkIGNhbGwobGlzdFBsYXlzKTtcblx0eWllbGQgcHV0KHBsYXlMaXN0KHNhdmVkUGxheXMpKTtcblx0Y29uc29sZS5sb2coXCJTYXZlZCBQbGF5c1wiLCBzYXZlZFBsYXlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN0YXJ0dXAoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoU1RBUlRVUC5JTklULCBoYW5kbGVTdGFydHVwSW5pdCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvc3RhcnR1cC9zYWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
