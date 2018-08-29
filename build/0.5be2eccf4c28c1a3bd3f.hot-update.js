webpackHotUpdate(0, {
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
		/*! exports provided: MAIN, playList, loadSavedGame, savedGameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, playList, savedGameLoaded, startGame, stopGame */
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
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return savedGameLoaded;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
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
														{ key: play.id, button: true },
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
				startGame: __WEBPACK_IMPORTED_MODULE_21__actions__['e' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_21__actions__['f' /* stopGame */]
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
						.CREATE_NEW_GAME:
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
									_context2.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_2__actions__[
												'd' /* savedGameLoaded */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwibmFtZXMiOlsiaGFuZGxlU3RhcnRHYW1lIiwiaGFuZGxlTmV4dFJvdW5kIiwiZ2FtZSIsImFjdGlvbiIsInNlbGVjdCIsInBsYXllcnMiLCJpIiwibGVuZ3RoIiwicHV0Iiwic2V0UGVyc29uYWxNb25leSIsIm5hbWUiLCJpbml0aWFsUGxheWVyTW9uZXkiLCJwbGF5IiwiY3VycmVudFBoYXNlIiwicGF5bG9hZCIsImNoYW5nZUN1cnJlbnRPUiIsImN1cnJlbnRPUiIsImNoYW5nZVBoYXNlIiwiY2hhbmdlQ3VycmVudFJvdW5kIiwiY3VycmVudFJvdW5kIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJTVEFSVF9HQU1FIiwidGFrZUV2ZXJ5IiwiR0FNRSIsIk5FWFRfUk9VTkQiLCJQTEFZX0xJU1QiLCJTVE9QX0dBTUUiLCJMT0FEX1NBVkVEX0dBTUUiLCJTQVZFRF9HQU1FX0xPQURFRCIsIkNSRUFURV9ORVdfR0FNRSIsInBsYXlMaXN0IiwicGxheXMiLCJ0eXBlIiwibG9hZFNhdmVkR2FtZSIsInNhdmVkR2FtZUxvYWRlZCIsInN0YXJ0R2FtZSIsInN0b3BHYW1lIiwiY3JlYXRlTmV3R2FtZSIsIkdhbWVDaG9vc2VyIiwic3RhdGUiLCJhbmNob3JFbCIsImhhbmRsZU1lbnUiLCJzZXRTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hvb3NlR2FtZU1lbnUiLCJwcm9wcyIsImNob29zZUdhbWUiLCJCb29sZWFuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZ2FtZVN0YXR1cyIsImdldEdhbWVTdGF0dXMiLCJjb25uZWN0IiwiTWFpbiIsIm1hcCIsImlkIiwibWluUGxheWVycyIsImdldFBsYXllcnMiLCJnZXRHYW1lIiwiZ2V0UGxheSIsImdldFBsYXlzIiwiZnJvbUpTIiwic3RhdHVzIiwicyIsInNldCIsInNldEluIiwiaGFuZGxlQ3JlYXRlUGxheSIsImhhbmRsZUxvYWRTYXZlZEdhbWUiLCJtYWluIiwiY2FsbCIsImhhbmRsZVN0YXJ0dXBJbml0Iiwic3RhcnR1cCIsInNhdmVkUGxheXMiLCJjb25zb2xlIiwibG9nIiwiU1RBUlRVUCIsIklOSVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWFVQSxlO21HQVdBQyxlO21HQWtCZUMsSTs7QUExQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLFNBQVVGLGVBQVYsQ0FBMEJHLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDdUIsMEVBQUFDLENBQU8scUVBQVAsQ0FEdkI7O0FBQUE7QUFDT0MsWUFEUDtBQUFBO0FBQUEsWUFFb0IsMEVBQUFELENBQU8sZ0VBQVAsQ0FGcEI7O0FBQUE7QUFFT0YsU0FGUDtBQUlVSSxNQUpWLEdBSWMsQ0FKZDs7QUFBQTtBQUFBLFdBSWlCQSxJQUFJRCxRQUFRRSxNQUo3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBS1EsdUVBQUFDLENBQ0wsaUZBQUFDLENBQWlCSixRQUFRQyxDQUFSLEVBQVdJLElBQTVCLEVBQWtDUixLQUFLUyxrQkFBTCxDQUF3Qk4sUUFBUUUsTUFBaEMsQ0FBbEMsQ0FE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bUdBTWVDLE87O0FBakJ6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsU0FBVUQsaUJBQVYsQ0FBNEJ2RSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUMwQix3RUFBQXNFLENBQUssbUVBQUwsQ0FEMUI7O0FBQUE7QUFDT0csb0JBRFA7QUFBQTtBQUFBLGlCQUVPLHVFQUFBcEUsQ0FBSSx1RUFBQXVCLENBQVM2QyxVQUFULENBQUosQ0FGUDs7QUFBQTtBQUdDQyxrQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJGLFVBQTNCOztBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lLFNBQVVELE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1IsOEVBQUF2RCxDQUFXLHlEQUFBMkQsQ0FBUUMsSUFBbkIsRUFBeUJOLGlCQUF6QixDQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiMC41YmUyZWNjZjRjMjhjMWEzYmQzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5LCBwdXQsIHNlbGVjdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBNQUlOIH0gZnJvbSAnLi4vbWFpbi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcbmltcG9ydCB7IHNldFBlcnNvbmFsTW9uZXkgfSBmcm9tICcuLi9wbGF5ZXIvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lIH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHtcblx0Y2hhbmdlQ3VycmVudE9SLFxuXHRjaGFuZ2VDdXJyZW50Um91bmQsXG5cdGNoYW5nZVBoYXNlLFxuXHRHQU1FXG59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQbGF5IH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5mdW5jdGlvbiogaGFuZGxlU3RhcnRHYW1lKGFjdGlvbikge1xuXHRjb25zdCBwbGF5ZXJzID0geWllbGQgc2VsZWN0KGdldFBsYXllcnMpO1xuXHRjb25zdCBnYW1lID0geWllbGQgc2VsZWN0KGdldEdhbWUpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuXHRcdHlpZWxkIHB1dChcblx0XHRcdHNldFBlcnNvbmFsTW9uZXkocGxheWVyc1tpXS5uYW1lLCBnYW1lLmluaXRpYWxQbGF5ZXJNb25leVtwbGF5ZXJzLmxlbmd0aF0pXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiogaGFuZGxlTmV4dFJvdW5kKGFjdGlvbikge1xuXHRjb25zdCBwbGF5ID0geWllbGQgc2VsZWN0KGdldFBsYXkpO1xuXG5cdGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ09SJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUihwbGF5LmN1cnJlbnRPUiArIDEpKTtcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi5wYXlsb2FkID09PSAnU1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlUGhhc2UoYWN0aW9uLnBheWxvYWQpKTtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50T1IoMSkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRSb3VuZChwbGF5LmN1cnJlbnRSb3VuZCArIDEpKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdTUicpIHtcblx0XHRpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdPUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogZ2FtZSgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLlNUQVJUX0dBTUUsIGhhbmRsZVN0YXJ0R2FtZSk7XG5cdHlpZWxkIHRha2VFdmVyeShHQU1FLk5FWFRfUk9VTkQsIGhhbmRsZU5leHRSb3VuZCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwiZXhwb3J0IGNvbnN0IE1BSU4gPSB7XG5cdFBMQVlfTElTVDogJ01BSU5fUExBWV9MSVNUJyxcblx0U1RBUlRfR0FNRTogJ01BSU5fU1RBUlRfR0FNRScsXG5cdFNUT1BfR0FNRTogJ01BSU5fU1RPUF9HQU1FJyxcblx0TE9BRF9TQVZFRF9HQU1FOiAnTUFJTl9MT0FEX1NBVkVEX0dBTUUnLFxuXHRTQVZFRF9HQU1FX0xPQURFRDogJ01BSU5fU0FWRURfR0FNRV9MT0FERUQnLFxuXHRDUkVBVEVfTkVXX0dBTUU6ICdNQUlOX0NSRUFURV9ORVdfR0FNRSdcbn07XG5cbmV4cG9ydCBjb25zdCBwbGF5TGlzdCA9IChwbGF5cykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uUExBWV9MSVNULFxuXHRcdHBheWxvYWQ6IHBsYXlzXG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU2F2ZWRHYW1lID0gKHBsYXkpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkxPQURfU0FWRURfR0FNRSxcblx0XHRwYXlsb2FkOiBwbGF5XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlZEdhbWVMb2FkZWQgPSAocGxheSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU0FWRURfR0FNRV9MT0FERUQsXG5cdFx0cGF5bG9hZDogcGxheVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU1RBUlRfR0FNRVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN0b3BHYW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU1RPUF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3R2FtZSA9IGdhbWUgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uQ1JFQVRFX05FV19HQU1FLFxuXHRcdHBheWxvYWQ6IGdhbWVcblx0fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5cbmltcG9ydCB7IGFkZFBsYXllciB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGNyZWF0ZU5ld0dhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNob29zZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0YW5jaG9yRWw6IG51bGxcblx0fTtcblxuXHRoYW5kbGVNZW51ID0gZXZlbnQgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcblx0fTtcblxuXHRoYW5kbGVDbG9zZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0aGFuZGxlQ2hvb3NlR2FtZU1lbnUgPSBnYW1lID0+IHtcblx0XHR0aGlzLnByb3BzLmNob29zZUdhbWUoZ2FtZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBudWxsIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGFyaWEtb3ducz17YW5jaG9yRWwgPyAnbWVudS1jaG9vc2VnYW1lJyA6IG51bGx9XG5cdFx0XHRcdFx0YXJpYS1oYXNwb3B1cD1cInRydWVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVudX1cblx0XHRcdFx0XHRjb2xvcj1cImluaGVyaXRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0Q3JlYXRlIE5ldyBHYW1lXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8TWVudVxuXHRcdFx0XHRcdGlkPXsnbWVudS1jaG9vc2VnYW1lJ31cblx0XHRcdFx0XHRhbmNob3JFbD17YW5jaG9yRWx9XG5cdFx0XHRcdFx0b3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG5cdFx0XHRcdFx0b25DbG9zZT17dGhpcy5oYW5kbGVDaG9vc2VHYW1lTWVudX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNob29zZUdhbWVNZW51KCcxODQ2Jyl9PlxuXHRcdFx0XHRcdFx0MTg0NlxuXHRcdFx0XHRcdDwvTWVudUl0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0eyBjaG9vc2VHYW1lOiBjcmVhdGVOZXdHYW1lIH1cbikoR2FtZUNob29zZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgSW1hZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgR2FtZUNob29zZXIgZnJvbSAnLi9nYW1lQ2hvb3Nlcic7XG5pbXBvcnQgUGxheWVycyBmcm9tICcuLi9wbGF5ZXIvcGxheWVycyc7XG5pbXBvcnQgQ29tcGFuaWVzIGZyb20gJy4uL2NvbXBhbnkvY29tcGFuaWVzJztcbmltcG9ydCBTY29yZXMgZnJvbSAnLi4vc2NvcmVzL3Njb3Jlcyc7XG5pbXBvcnQgUm91bmRNYW5hZ2VyIGZyb20gJy4uL2dhbWUvcm91bmRNYW5hZ2VyJztcblxuaW1wb3J0IHtzdGFydEdhbWUsIHN0b3BHYW1lfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtnZXRHYW1lU3RhdHVzLCBnZXRQbGF5c30gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHtnZXRQbGF5ZXJzfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcbmltcG9ydCB7Z2V0R2FtZSwgZ2V0UGxheX0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ25ldycpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHh4U2NvcmVLZWVwZXJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdFx0PFBhcGVyPlxuXHRcdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFNhdmVkIFBsYXlzXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHRcdDxHYW1lQ2hvb3Nlci8+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdFx0XHQ8TGlzdD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMucGxheXMubWFwKChwbGF5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBrZXk9e3BsYXkuaWR9IGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VJY29uLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cGxheS5nYW1lfSBzZWNvbmRhcnk9XCJKYW4gOSwgMjAxNFwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvTGlzdD5cblx0XHRcdFx0XHQ8L1BhcGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdyZWFkeScpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGF5ZXJzLmxlbmd0aCA8IHRoaXMucHJvcHMuZ2FtZS5taW5QbGF5ZXJzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0U3RhcnQgR2FtZVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlci8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdG9wR2FtZX0+RmluaXNoIEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdFx0PENvbXBhbmllcy8+XG5cdFx0XHRcdFx0PFNjb3Jlcy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9PlJlc3RhcnQgR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e3N0YXJ0R2FtZSwgc3RvcEdhbWV9XG4pKE1haW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsImltcG9ydCB7ZnJvbUpTfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge01BSU59IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZnJvbUpTKHtcblx0c3RhdHVzOiB7XG5cdFx0c3RhdGU6IFwibmV3XCIsXG5cdH0sXG5cdHBsYXlzOiBbXVxufSksIGFjdGlvbikge1xuXHRsZXQgcyA9IHN0YXRlO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBNQUlOLlBMQVlfTElTVDpcblx0XHRcdHMgPSBzdGF0ZS5zZXQoJ3BsYXlzJywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkLnBsYXlzKSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uQ1JFQVRFX05FV19HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwicmVhZHlcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RBUlRfR0FNRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3N0YXR1cycsICdzdGF0ZSddLCBcInN0YXJ0ZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RPUF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwiZmluaXNoZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRkZWZhdWx0OlxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsImltcG9ydCB7dGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtNQUlOLCBzYXZlZEdhbWVMb2FkZWR9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZU5ld1BsYXksIGxvYWRTYXZlZFBsYXl9IGZyb20gXCIuLi9zZXJ2ZXJBcGkvdXRpbHNcIjtcblxuZnVuY3Rpb24qIGhhbmRsZUNyZWF0ZVBsYXkoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGNyZWF0ZU5ld1BsYXksIHtnYW1lOiBhY3Rpb24ucGF5bG9hZH0pO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlTG9hZFNhdmVkR2FtZShhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIGNhbGwobG9hZFNhdmVkUGxheSwgYWN0aW9uLnBheWxvYWQuaWQpO1xuXHR5aWVsZCBwdXQoc2F2ZWRHYW1lTG9hZGVkKHBsYXkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DUkVBVEVfTkVXX0dBTUUsIGhhbmRsZUNyZWF0ZVBsYXkpO1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uTE9BRF9TQVZFRF9HQU1FLCBoYW5kbGVMb2FkU2F2ZWRHYW1lKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgU1RBUlRVUCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2xpc3RQbGF5c30gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuaW1wb3J0IHtwbGF5TGlzdH0gZnJvbSBcIi4uL21haW4vYWN0aW9uc1wiO1xuXG4vKipcbiAqIFByb2Nlc3NlcyBzdGFydHVwIHJlcXVlc3RzIChzaG91bGQgb25seSBiZSBvbmUpXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbiBUaGUgdHJpZ2dlcmluZyBhY3Rpb25cbiAqIEByZXR1cm5zIHtJdGVyYWJsZUl0ZXJhdG9yPCo+fSBub3RoaW5nXG4gKi9cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydHVwSW5pdChhY3Rpb24pIHtcblx0Y29uc3Qgc2F2ZWRQbGF5cyA9IHlpZWxkIGNhbGwobGlzdFBsYXlzKTtcblx0eWllbGQgcHV0KHBsYXlMaXN0KHNhdmVkUGxheXMpKTtcblx0Y29uc29sZS5sb2coXCJTYXZlZCBQbGF5c1wiLCBzYXZlZFBsYXlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN0YXJ0dXAoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoU1RBUlRVUC5JTklULCBoYW5kbGVTdGFydHVwSW5pdCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvc3RhcnR1cC9zYWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
