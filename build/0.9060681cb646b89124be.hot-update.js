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
		/*! exports provided: MAIN, saveGame, playList, loadSavedGame, gameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, gameLoaded, loadSavedGame, playList, saveGame, startGame, stopGame */
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
				'f',
				function() {
					return saveGame;
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
				'g',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'h',
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
				SAVE_GAME: 'MAIN_SAVE_GAME',
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var saveGame = function saveGame(play) {
				return {
					type: MAIN.SAVE_GAME,
					payload: play
				};
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
													{ onClick: this.props.saveGame },
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
		/*! exports provided: buildRoute, createNewPlay, listPlays, loadSavedPlay, savePlay, authenticateToServer */
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
			/* unused harmony export savePlay */
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
					var data = postData('plays/' + play, play);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zZXJ2ZXJBcGkvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImZyb21KUyIsImdhbWUiLCJuYW1lIiwibWluUGxheWVycyIsIm1heFBsYXllcnMiLCJiYW5rU2l6ZSIsImluaXRpYWxQbGF5ZXJNb25leSIsIm1ham9ycyIsInBsYXkiLCJhY3Rpb24iLCJzIiwidHlwZSIsIkNPTVBBTlkiLCJTVEFSVF9DT01QQU5ZIiwic2V0SW4iLCJnZXRJbiIsInB1c2giLCJwYXlsb2FkIiwiY29tcGFueSIsIk9QRVJBVEVfUEFZIiwib3BlcmF0aW5nUm91bmQiLCJjb21wYW55TmFtZSIsInBheW91dENoYXJ0IiwiTUFJTiIsIkdBTUVfTE9BREVEIiwic2V0IiwiR0FNRSIsIkNIQU5HRV9QSEFTRSIsIkNIQU5HRV9DVVJSRU5UX09SIiwiQ0hBTkdFX0NVUlJFTlRfUk9VTkQiLCJoYW5kbGVTdGFydEdhbWUiLCJoYW5kbGVOZXh0Um91bmQiLCJzZWxlY3QiLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1dCIsInNldFBlcnNvbmFsTW9uZXkiLCJjdXJyZW50UGhhc2UiLCJjaGFuZ2VDdXJyZW50T1IiLCJjdXJyZW50T1IiLCJjaGFuZ2VQaGFzZSIsImNoYW5nZUN1cnJlbnRSb3VuZCIsImN1cnJlbnRSb3VuZCIsInRha2VMYXRlc3QiLCJTVEFSVF9HQU1FIiwidGFrZUV2ZXJ5IiwiTkVYVF9ST1VORCIsIlBMQVlfTElTVCIsIlNUT1BfR0FNRSIsIkxPQURfU0FWRURfR0FNRSIsIlNBVkVfR0FNRSIsIkNSRUFURV9ORVdfR0FNRSIsInNhdmVHYW1lIiwicGxheUxpc3QiLCJwbGF5cyIsImxvYWRTYXZlZEdhbWUiLCJwbGF5SWQiLCJnYW1lTG9hZGVkIiwic3RhcnRHYW1lIiwic3RvcEdhbWUiLCJjcmVhdGVOZXdHYW1lIiwiR2FtZUNob29zZXIiLCJhbmNob3JFbCIsImhhbmRsZU1lbnUiLCJzZXRTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hvb3NlR2FtZU1lbnUiLCJwcm9wcyIsImNob29zZUdhbWUiLCJCb29sZWFuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZ2FtZVN0YXR1cyIsImdldEdhbWVTdGF0dXMiLCJjb25uZWN0IiwiTWFpbiIsIm1hcCIsImlkIiwiZ2V0UGxheWVycyIsImdldEdhbWUiLCJnZXRQbGF5IiwiZ2V0UGxheXMiLCJzdGF0dXMiLCJoYW5kbGVDcmVhdGVQbGF5IiwiaGFuZGxlTG9hZFNhdmVkR2FtZSIsIm1haW4iLCJjYWxsIiwiZ2V0Um9vdFJvdXRlIiwiYnVpbGRSb3V0ZSIsInJvdXRlIiwiZmV0Y2hEYXRhIiwicm9vdCIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInBvc3REYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVOZXdQbGF5IiwibmV3UGxheSIsIlByb21pc2UiLCJkYXRhIiwicmVzb2x2ZSIsImxpc3RQbGF5cyIsImxvYWRTYXZlZFBsYXkiLCJzYXZlUGxheSIsImF1dGhlbnRpY2F0ZVRvU2VydmVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm9rIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJyZWplY3QiLCJoYW5kbGVTdGFydHVwSW5pdCIsInN0YXJ0dXAiLCJzYXZlZFBsYXlzIiwiU1RBUlRVUCIsIklOSVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBZSxZQWlCSDtBQUFBLEtBakJhQSxLQWlCYix1RUFqQnFCLHlEQUFBQyxDQUFPO0FBQ3ZDQyxRQUFNO0FBQ0xDLFNBQU0sTUFERDtBQUVMQyxlQUFZLENBRlA7QUFHTEMsZUFBWSxDQUhQO0FBSUxDLGFBQVUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FKTDtBQUtMQyx1QkFBb0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FMZjs7QUFPTEMsV0FBUSxDQUFDO0FBQ1JMLFVBQU07QUFERSxJQUFELEVBRUw7QUFDRkEsVUFBTTtBQURKLElBRkssRUFJTDtBQUNGQSxVQUFNO0FBREosSUFKSztBQVBILEdBRGlDO0FBZ0J2Q00sUUFBTTtBQWhCaUMsRUFBUCxDQWlCckI7QUFBQSxLQUFSQyxNQUFROztBQUNYLEtBQUlDLElBQUlYLEtBQVI7QUFDQSxTQUFRVSxPQUFPRSxJQUFmO0FBQ0MsT0FBSyxpRUFBQUMsQ0FBUUMsYUFBYjtBQUNDSCxPQUFJWCxNQUFNZSxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsZUFBVCxDQUFaLEVBQXVDZixNQUFNZ0IsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGVBQVQsQ0FBWixFQUF1Q0MsSUFBdkMsQ0FBNENQLE9BQU9RLE9BQVAsQ0FBZUMsT0FBM0QsQ0FBdkMsQ0FBSjtBQUNBLFVBQU9SLENBQVA7QUFDRCxP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QVNvQjtBQUZBLEdBQWYsQ0FBUDtBQUlBLEVBMUJNLENBQVA7QUEyQkEsQ0E5Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0NyRkdFLGlCO21HQU1lQyxPOztBQWpCekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLFNBQVVELGlCQUFWLENBQTRCbEgsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDMEIsd0VBQUFpRixDQUFLLG1FQUFMLENBRDFCOztBQUFBO0FBQ09tQyxvQkFEUDtBQUFBO0FBQUEsaUJBRU8sdUVBQUF6RixDQUFJLHVFQUFBa0IsQ0FBU3VFLFVBQVQsQ0FBSixDQUZQOztBQUFBO0FBR0NOLGtCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkssVUFBM0I7O0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWUsU0FBVUQsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUiw4RUFBQWhGLENBQVcseURBQUFrRixDQUFRQyxJQUFuQixFQUF5QkosaUJBQXpCLENBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLjkwNjA2ODFjYjY0NmI4OTEyNGJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb21KU30gZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtDT01QQU5ZfSBmcm9tIFwiLi4vY29tcGFueS9hY3Rpb25zXCI7XG5pbXBvcnQge0dBTUV9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7TUFJTn0gZnJvbSBcIi4uL21haW4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBmcm9tSlMoe1xuXHRnYW1lOiB7XG5cdFx0bmFtZTogXCIxODQ2XCIsXG5cdFx0bWluUGxheWVyczogMixcblx0XHRtYXhQbGF5ZXJzOiA2LFxuXHRcdGJhbmtTaXplOiBbNzcwMCwgNzcwMCwgNzcwMCwgNzcwMCwgNzcwMF0sXG5cdFx0aW5pdGlhbFBsYXllck1vbmV5OiBbNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDBdLFxuXG5cdFx0bWFqb3JzOiBbe1xuXHRcdFx0bmFtZTogXCJCJk9cIlxuXHRcdH0sIHtcblx0XHRcdG5hbWU6IFwiR1dUXCJcblx0XHR9LCB7XG5cdFx0XHRuYW1lOiBcIklDXCJcblx0XHR9XVxuXHR9LFxuXHRwbGF5OiBudWxsXG59KSwgYWN0aW9uKSB7XG5cdGxldCBzID0gc3RhdGU7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENPTVBBTlkuU1RBUlRfQ09NUEFOWTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnc3RhcnRlZE1ham9ycyddLCBzdGF0ZS5nZXRJbihbJ3BsYXknLCAnc3RhcnRlZE1ham9ycyddKS5wdXNoKGFjdGlvbi5wYXlsb2FkLmNvbXBhbnkpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgQ09NUEFOWS5PUEVSQVRFX1BBWTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnb3BlcmF0aW5nUm91bmRzJywgYWN0aW9uLnBheWxvYWQub3BlcmF0aW5nUm91bmQsIGFjdGlvbi5wYXlsb2FkLmNvbXBhbnlOYW1lXSxcblx0XHRcdFx0ZnJvbUpTKGFjdGlvbi5wYXlsb2FkLnBheW91dENoYXJ0KSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uR0FNRV9MT0FERUQ6XG5cdFx0XHRzID0gc3RhdGUuc2V0KCdwbGF5JywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIEdBTUUuQ0hBTkdFX1BIQVNFOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdjdXJyZW50UGhhc2UnXSwgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBHQU1FLkNIQU5HRV9DVVJSRU5UX09SOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdjdXJyZW50T1InXSwgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBHQU1FLkNIQU5HRV9DVVJSRU5UX1JPVU5EOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdjdXJyZW50Um91bmQnXSwgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0ZGVmYXVsdDpcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvcmVkdWNlci5qc3giLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IE1BSU4gfSBmcm9tICcuLi9tYWluL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0UGVyc29uYWxNb25leSB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWUgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge1xuXHRjaGFuZ2VDdXJyZW50T1IsXG5cdGNoYW5nZUN1cnJlbnRSb3VuZCxcblx0Y2hhbmdlUGhhc2UsXG5cdEdBTUVcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXkgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXllcnMgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheWVycyk7XG5cdGNvbnN0IGdhbWUgPSB5aWVsZCBzZWxlY3QoZ2V0R2FtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0eWllbGQgcHV0KFxuXHRcdFx0c2V0UGVyc29uYWxNb25leShwbGF5ZXJzW2ldLm5hbWUsIGdhbWUuaW5pdGlhbFBsYXllck1vbmV5W3BsYXllcnMubGVuZ3RoXSlcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVOZXh0Um91bmQoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheSk7XG5cblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKHBsYXkuY3VycmVudE9SICsgMSkpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdTUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUigxKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudFJvdW5kKHBsYXkuY3VycmVudFJvdW5kICsgMSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ1NSJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBnYW1lKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uU1RBUlRfR0FNRSwgaGFuZGxlU3RhcnRHYW1lKTtcblx0eWllbGQgdGFrZUV2ZXJ5KEdBTUUuTkVYVF9ST1VORCwgaGFuZGxlTmV4dFJvdW5kKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NhZ2EuanMiLCJleHBvcnQgY29uc3QgTUFJTiA9IHtcblx0UExBWV9MSVNUOiAnTUFJTl9QTEFZX0xJU1QnLFxuXHRTVEFSVF9HQU1FOiAnTUFJTl9TVEFSVF9HQU1FJyxcblx0U1RPUF9HQU1FOiAnTUFJTl9TVE9QX0dBTUUnLFxuXHRMT0FEX1NBVkVEX0dBTUU6ICdNQUlOX0xPQURfU0FWRURfR0FNRScsXG5cdEdBTUVfTE9BREVEOiAnTUFJTl9HQU1FX0xPQURFRCcsXG5cdFNBVkVfR0FNRTogJ01BSU5fU0FWRV9HQU1FJyxcblx0Q1JFQVRFX05FV19HQU1FOiAnTUFJTl9DUkVBVEVfTkVXX0dBTUUnXG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZUdhbWUgPSAocGxheSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU0FWRV9HQU1FLFxuXHRcdHBheWxvYWQ6IHBsYXlcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHBsYXlMaXN0ID0gKHBsYXlzKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5QTEFZX0xJU1QsXG5cdFx0cGF5bG9hZDogcGxheXNcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRTYXZlZEdhbWUgPSAocGxheUlkKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5MT0FEX1NBVkVEX0dBTUUsXG5cdFx0cGF5bG9hZDogcGxheUlkXG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lTG9hZGVkID0gKHBsYXkpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkdBTUVfTE9BREVELFxuXHRcdHBheWxvYWQ6IHBsYXlcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlNUQVJUX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wR2FtZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlNUT1BfR0FNRVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld0dhbWUgPSBnYW1lID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkNSRUFURV9ORVdfR0FNRSxcblx0XHRwYXlsb2FkOiBnYW1lXG5cdH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuXG5pbXBvcnQgeyBhZGRQbGF5ZXIgfSBmcm9tICcuLi9wbGF5ZXIvYWN0aW9ucyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWVTdGF0dXMgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdHYW1lIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIEdhbWVDaG9vc2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGFuY2hvckVsOiBudWxsXG5cdH07XG5cblx0aGFuZGxlTWVudSA9IGV2ZW50ID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XG5cdH07XG5cblx0aGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBudWxsIH0pO1xuXHR9O1xuXG5cdGhhbmRsZUNob29zZUdhbWVNZW51ID0gZ2FtZSA9PiB7XG5cdFx0dGhpcy5wcm9wcy5jaG9vc2VHYW1lKGdhbWUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCB9KTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBhbmNob3JFbCB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRhcmlhLW93bnM9e2FuY2hvckVsID8gJ21lbnUtY2hvb3NlZ2FtZScgOiBudWxsfVxuXHRcdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbnV9XG5cdFx0XHRcdFx0Y29sb3I9XCJpbmhlcml0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdENyZWF0ZSBOZXcgR2FtZVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PE1lbnVcblx0XHRcdFx0XHRpZD17J21lbnUtY2hvb3NlZ2FtZSd9XG5cdFx0XHRcdFx0YW5jaG9yRWw9e2FuY2hvckVsfVxuXHRcdFx0XHRcdG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuXHRcdFx0XHRcdG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2hvb3NlR2FtZU1lbnV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaG9vc2VHYW1lTWVudSgnMTg0NicpfT5cblx0XHRcdFx0XHRcdDE4NDZcblx0XHRcdFx0XHQ8L01lbnVJdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHsgY2hvb3NlR2FtZTogY3JlYXRlTmV3R2FtZSB9XG4pKEdhbWVDaG9vc2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2dhbWVDaG9vc2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEltYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IEdhbWVDaG9vc2VyIGZyb20gJy4vZ2FtZUNob29zZXInO1xuaW1wb3J0IFBsYXllcnMgZnJvbSAnLi4vcGxheWVyL3BsYXllcnMnO1xuaW1wb3J0IENvbXBhbmllcyBmcm9tICcuLi9jb21wYW55L2NvbXBhbmllcyc7XG5pbXBvcnQgU2NvcmVzIGZyb20gJy4uL3Njb3Jlcy9zY29yZXMnO1xuaW1wb3J0IFJvdW5kTWFuYWdlciBmcm9tICcuLi9nYW1lL3JvdW5kTWFuYWdlcic7XG5cbmltcG9ydCB7c3RhcnRHYW1lLCBzdG9wR2FtZSwgc2F2ZUdhbWV9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2dldEdhbWVTdGF0dXMsIGdldFBsYXlzfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQge2dldFBsYXllcnN9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHtnZXRHYW1lLCBnZXRQbGF5fSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge2xvYWRTYXZlZEdhbWV9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICduZXcnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR4eFNjb3JlS2VlcGVyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdDxQYXBlcj5cblx0XHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRTYXZlZCBQbGF5c1xuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0XHQ8R2FtZUNob29zZXIvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdFx0PExpc3Q+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXlzLm1hcCgocGxheSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0ga2V5PXtwbGF5LmlkfSBidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5sb2FkU2F2ZWRHYW1lKHBsYXkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VJY29uLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cGxheS5nYW1lfSBzZWNvbmRhcnk9XCJKYW4gOSwgMjAxNFwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvTGlzdD5cblx0XHRcdFx0XHQ8L1BhcGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdyZWFkeScpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGF5ZXJzLmxlbmd0aCA8IHRoaXMucHJvcHMuZ2FtZS5taW5QbGF5ZXJzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0U3RhcnQgR2FtZVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlci8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zYXZlR2FtZX0+U2F2ZSBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdG9wR2FtZX0+RmluaXNoIEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdFx0PENvbXBhbmllcy8+XG5cdFx0XHRcdFx0PFNjb3Jlcy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9PlJlc3RhcnQgR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e3N0YXJ0R2FtZSwgc3RvcEdhbWUsIGxvYWRTYXZlZEdhbWUsIHNhdmVHYW1lfVxuKShNYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiLCJpbXBvcnQge2Zyb21KU30gZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtNQUlOfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZyb21KUyh7XG5cdHN0YXR1czoge1xuXHRcdHN0YXRlOiBcIm5ld1wiLFxuXHR9LFxuXHRwbGF5czogW11cbn0pLCBhY3Rpb24pIHtcblx0bGV0IHMgPSBzdGF0ZTtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgTUFJTi5QTEFZX0xJU1Q6XG5cdFx0XHRzID0gc3RhdGUuc2V0KCdwbGF5cycsIGZyb21KUyhhY3Rpb24ucGF5bG9hZC5wbGF5cykpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBNQUlOLkdBTUVfTE9BREVEOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwicmVhZHlcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RBUlRfR0FNRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3N0YXR1cycsICdzdGF0ZSddLCBcInN0YXJ0ZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RPUF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwiZmluaXNoZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRkZWZhdWx0OlxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsImltcG9ydCB7dGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtnYW1lTG9hZGVkLCBNQUlOfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOZXdQbGF5LCBsb2FkU2F2ZWRQbGF5fSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5cbmZ1bmN0aW9uKiBoYW5kbGVDcmVhdGVQbGF5KGFjdGlvbikge1xuXHRjb25zdCBwbGF5ID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcblx0eWllbGQgcHV0KGdhbWVMb2FkZWQocGxheSkpO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlTG9hZFNhdmVkR2FtZShhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIGNhbGwobG9hZFNhdmVkUGxheSwgYWN0aW9uLnBheWxvYWQpO1xuXHR5aWVsZCBwdXQoZ2FtZUxvYWRlZChwbGF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uQ1JFQVRFX05FV19HQU1FLCBoYW5kbGVDcmVhdGVQbGF5KTtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLkxPQURfU0FWRURfR0FNRSwgaGFuZGxlTG9hZFNhdmVkR2FtZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwiLyoqXG4gKiBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIHJpZ2h0IHdheSB0byBjb25maWd1cmUgdGhpc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByb290IHJvdXRlXG4gKi9cbmNvbnN0IGdldFJvb3RSb3V0ZSA9ICgpID0+IHtcblx0cmV0dXJuICcvYXBpJztcbn07XG5cbi8qKlxuICogVE9ETzogTmVlZCB0byBmaWd1cmUgb3V0IHRoZSByaWdodCB3YXkgdG8gY29uZmlndXJlIHRoaXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHBhdGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByb290IHJvdXRlXG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZFJvdXRlID0gcm91dGUgPT4ge1xuXHRyZXR1cm4gYCR7Z2V0Um9vdFJvdXRlKCl9LyR7cm91dGV9YDtcbn07XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBtYWtlIEdFVCBjYWxscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHBhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmNvbnN0IGZldGNoRGF0YSA9IChyb3V0ZSkgPT4ge1xuXHRsZXQgcm9vdCA9IGdldFJvb3RSb3V0ZSgpO1xuXG5cdHJldHVybiBmZXRjaChgJHtyb290fS8ke3JvdXRlfWAsIHtcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9XG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1ha2UgUE9TVCBjYWxsc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcm91dGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBib2R5IFRoZSBib2R5IG9mIHRoZSBjYWxsXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5jb25zdCBwb3N0RGF0YSA9IChyb3V0ZSwgYm9keSkgPT4ge1xuXHRjb25zdCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9LyR7cm91dGV9YCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1BsYXkgPSAobmV3UGxheSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IHBvc3REYXRhKCdwbGF5cycsIG5ld1BsYXkpO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RQbGF5cyA9ICgpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBmZXRjaERhdGEoJ3BsYXlzJyk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNhdmVkUGxheSA9IChwbGF5SWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBmZXRjaERhdGEoYHBsYXlzLyR7cGxheUlkfWApO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVQbGF5ID0gKHBsYXkpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBwb3N0RGF0YShgcGxheXMvJHtwbGF5fWAsIHBsYXkpO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDYXVzZXMgYSBsb2dpbiBhdHRlbXB0IHRvIHRoZSBzZXJ2ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgdGhlIHVzZXJuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgdGhlIHBhc3N3b3JkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVG9TZXJ2ZXIgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vYXV0aC9sb2dpbmAsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdHBhc3N3b3JkXG5cdFx0fSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdqc29uJywganNvbik7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCh7XG5cdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHRcblx0XHR9KTtcblx0fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3NlcnZlckFwaS91dGlscy5qcyIsImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBTVEFSVFVQIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7bGlzdFBsYXlzfSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5pbXBvcnQge3BsYXlMaXN0fSBmcm9tIFwiLi4vbWFpbi9hY3Rpb25zXCI7XG5cbi8qKlxuICogUHJvY2Vzc2VzIHN0YXJ0dXAgcmVxdWVzdHMgKHNob3VsZCBvbmx5IGJlIG9uZSlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIFRoZSB0cmlnZ2VyaW5nIGFjdGlvblxuICogQHJldHVybnMge0l0ZXJhYmxlSXRlcmF0b3I8Kj59IG5vdGhpbmdcbiAqL1xuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0dXBJbml0KGFjdGlvbikge1xuXHRjb25zdCBzYXZlZFBsYXlzID0geWllbGQgY2FsbChsaXN0UGxheXMpO1xuXHR5aWVsZCBwdXQocGxheUxpc3Qoc2F2ZWRQbGF5cykpO1xuXHRjb25zb2xlLmxvZyhcIlNhdmVkIFBsYXlzXCIsIHNhdmVkUGxheXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RhcnR1cCgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChTVEFSVFVQLklOSVQsIGhhbmRsZVN0YXJ0dXBJbml0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwic291cmNlUm9vdCI6IiJ9
