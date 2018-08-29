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
		/*! exports provided: MAIN, playList, loadSavedGame, gameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, gameLoaded, playList, startGame, stopGame */
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
				'd',
				function() {
					return playList;
				}
			);
			/* unused harmony export loadSavedGame */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return gameLoaded;
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
				GAME_LOADED: 'MAIN_GAME_LOADED',
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
												'd' /* playList */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwibmFtZXMiOlsiaGFuZGxlU3RhcnRHYW1lIiwiaGFuZGxlTmV4dFJvdW5kIiwiZ2FtZSIsImFjdGlvbiIsInNlbGVjdCIsInBsYXllcnMiLCJpIiwibGVuZ3RoIiwicHV0Iiwic2V0UGVyc29uYWxNb25leSIsIm5hbWUiLCJpbml0aWFsUGxheWVyTW9uZXkiLCJwbGF5IiwiY3VycmVudFBoYXNlIiwicGF5bG9hZCIsImNoYW5nZUN1cnJlbnRPUiIsImN1cnJlbnRPUiIsImNoYW5nZVBoYXNlIiwiY2hhbmdlQ3VycmVudFJvdW5kIiwiY3VycmVudFJvdW5kIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJTVEFSVF9HQU1FIiwidGFrZUV2ZXJ5IiwiR0FNRSIsIk5FWFRfUk9VTkQiLCJQTEFZX0xJU1QiLCJTVE9QX0dBTUUiLCJMT0FEX1NBVkVEX0dBTUUiLCJHQU1FX0xPQURFRCIsIkNSRUFURV9ORVdfR0FNRSIsInBsYXlMaXN0IiwicGxheXMiLCJ0eXBlIiwibG9hZFNhdmVkR2FtZSIsImdhbWVMb2FkZWQiLCJzdGFydEdhbWUiLCJzdG9wR2FtZSIsImNyZWF0ZU5ld0dhbWUiLCJHYW1lQ2hvb3NlciIsInN0YXRlIiwiYW5jaG9yRWwiLCJoYW5kbGVNZW51Iiwic2V0U3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNob29zZUdhbWVNZW51IiwicHJvcHMiLCJjaG9vc2VHYW1lIiwiQm9vbGVhbiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImdhbWVTdGF0dXMiLCJnZXRHYW1lU3RhdHVzIiwiY29ubmVjdCIsIk1haW4iLCJtYXAiLCJpZCIsIm1pblBsYXllcnMiLCJnZXRQbGF5ZXJzIiwiZ2V0R2FtZSIsImdldFBsYXkiLCJnZXRQbGF5cyIsImZyb21KUyIsInN0YXR1cyIsInMiLCJzZXQiLCJzZXRJbiIsImhhbmRsZUNyZWF0ZVBsYXkiLCJoYW5kbGVMb2FkU2F2ZWRHYW1lIiwibWFpbiIsImNhbGwiLCJoYW5kbGVTdGFydHVwSW5pdCIsInN0YXJ0dXAiLCJzYXZlZFBsYXlzIiwiY29uc29sZSIsImxvZyIsIlNUQVJUVVAiLCJJTklUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FhVUEsZTttR0FXQUMsZTttR0FrQmVDLEk7O0FBMUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7QUFFQSxTQUFVRixlQUFWLENBQTBCRyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ3VCLDBFQUFBQyxDQUFPLHFFQUFQLENBRHZCOztBQUFBO0FBQ09DLFlBRFA7QUFBQTtBQUFBLFlBRW9CLDBFQUFBRCxDQUFPLGdFQUFQLENBRnBCOztBQUFBO0FBRU9GLFNBRlA7QUFJVUksTUFKVixHQUljLENBSmQ7O0FBQUE7QUFBQSxXQUlpQkEsSUFBSUQsUUFBUUUsTUFKN0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQUtRLHVFQUFBQyxDQUNMLGlGQUFBQyxDQUFpQkosUUFBUUMsQ0FBUixFQUFXSSxJQUE1QixFQUFrQ1IsS0FBS1Msa0JBQUwsQ0FBd0JOLFFBQVFFLE1BQWhDLENBQWxDLENBREssQ0FMUjs7QUFB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QUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dDSExHLGlCO21HQU1lQyxPOztBQWpCekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BLFNBQVVELGlCQUFWLENBQTRCdkUsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDMEIsd0VBQUFzRSxDQUFLLG1FQUFMLENBRDFCOztBQUFBO0FBQ09HLG9CQURQO0FBQUE7QUFBQSxpQkFFTyx1RUFBQXBFLENBQUksdUVBQUF1QixDQUFTNkMsVUFBVCxDQUFKLENBRlA7O0FBQUE7QUFHQ0Msa0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixVQUEzQjs7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZSxTQUFVRCxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSLDhFQUFBdkQsQ0FBVyx5REFBQTJELENBQVFDLElBQW5CLEVBQXlCTixpQkFBekIsQ0FEUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuMDE1MTZkZDU1NGVhM2RhMGJmYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VMYXRlc3QsIHRha2VFdmVyeSwgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgTUFJTiB9IGZyb20gJy4uL21haW4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZXRQZXJzb25hbE1vbmV5IH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZSB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCB7XG5cdGNoYW5nZUN1cnJlbnRPUixcblx0Y2hhbmdlQ3VycmVudFJvdW5kLFxuXHRjaGFuZ2VQaGFzZSxcblx0R0FNRVxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheSB9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0R2FtZShhY3Rpb24pIHtcblx0Y29uc3QgcGxheWVycyA9IHlpZWxkIHNlbGVjdChnZXRQbGF5ZXJzKTtcblx0Y29uc3QgZ2FtZSA9IHlpZWxkIHNlbGVjdChnZXRHYW1lKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcblx0XHR5aWVsZCBwdXQoXG5cdFx0XHRzZXRQZXJzb25hbE1vbmV5KHBsYXllcnNbaV0ubmFtZSwgZ2FtZS5pbml0aWFsUGxheWVyTW9uZXlbcGxheWVycy5sZW5ndGhdKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24qIGhhbmRsZU5leHRSb3VuZChhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIHNlbGVjdChnZXRQbGF5KTtcblxuXHRpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdPUicpIHtcblx0XHRpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdPUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50T1IocGxheS5jdXJyZW50T1IgKyAxKSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ1NSJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKDEpKTtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50Um91bmQocGxheS5jdXJyZW50Um91bmQgKyAxKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnU1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlUGhhc2UoYWN0aW9uLnBheWxvYWQpKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGdhbWUoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5TVEFSVF9HQU1FLCBoYW5kbGVTdGFydEdhbWUpO1xuXHR5aWVsZCB0YWtlRXZlcnkoR0FNRS5ORVhUX1JPVU5ELCBoYW5kbGVOZXh0Um91bmQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvc2FnYS5qcyIsImV4cG9ydCBjb25zdCBNQUlOID0ge1xuXHRQTEFZX0xJU1Q6ICdNQUlOX1BMQVlfTElTVCcsXG5cdFNUQVJUX0dBTUU6ICdNQUlOX1NUQVJUX0dBTUUnLFxuXHRTVE9QX0dBTUU6ICdNQUlOX1NUT1BfR0FNRScsXG5cdExPQURfU0FWRURfR0FNRTogJ01BSU5fTE9BRF9TQVZFRF9HQU1FJyxcblx0R0FNRV9MT0FERUQ6ICdNQUlOX0dBTUVfTE9BREVEJyxcblx0Q1JFQVRFX05FV19HQU1FOiAnTUFJTl9DUkVBVEVfTkVXX0dBTUUnXG59O1xuXG5leHBvcnQgY29uc3QgcGxheUxpc3QgPSAocGxheXMpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlBMQVlfTElTVCxcblx0XHRwYXlsb2FkOiBwbGF5c1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNhdmVkR2FtZSA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5MT0FEX1NBVkVEX0dBTUUsXG5cdFx0cGF5bG9hZDogcGxheVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZUxvYWRlZCA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5HQU1FX0xPQURFRCxcblx0XHRwYXlsb2FkOiBwbGF5XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVEFSVF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVE9QX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdHYW1lID0gZ2FtZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5DUkVBVEVfTkVXX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcblxuaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2hvb3NlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRhbmNob3JFbDogbnVsbFxuXHR9O1xuXG5cdGhhbmRsZU1lbnUgPSBldmVudCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xuXHR9O1xuXG5cdGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCB9KTtcblx0fTtcblxuXHRoYW5kbGVDaG9vc2VHYW1lTWVudSA9IGdhbWUgPT4ge1xuXHRcdHRoaXMucHJvcHMuY2hvb3NlR2FtZShnYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYW5jaG9yRWwgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YXJpYS1vd25zPXthbmNob3JFbCA/ICdtZW51LWNob29zZWdhbWUnIDogbnVsbH1cblx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVNZW51fVxuXHRcdFx0XHRcdGNvbG9yPVwiaW5oZXJpdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRDcmVhdGUgTmV3IEdhbWVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNZW51XG5cdFx0XHRcdFx0aWQ9eydtZW51LWNob29zZWdhbWUnfVxuXHRcdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cblx0XHRcdFx0XHRvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cblx0XHRcdFx0XHRvbkNsb3NlPXt0aGlzLmhhbmRsZUNob29zZUdhbWVNZW51fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hvb3NlR2FtZU1lbnUoJzE4NDYnKX0+XG5cdFx0XHRcdFx0XHQxODQ2XG5cdFx0XHRcdFx0PC9NZW51SXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IGNob29zZUdhbWU6IGNyZWF0ZU5ld0dhbWUgfVxuKShHYW1lQ2hvb3Nlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9nYW1lQ2hvb3Nlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBJbWFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBHYW1lQ2hvb3NlciBmcm9tICcuL2dhbWVDaG9vc2VyJztcbmltcG9ydCBQbGF5ZXJzIGZyb20gJy4uL3BsYXllci9wbGF5ZXJzJztcbmltcG9ydCBDb21wYW5pZXMgZnJvbSAnLi4vY29tcGFueS9jb21wYW5pZXMnO1xuaW1wb3J0IFNjb3JlcyBmcm9tICcuLi9zY29yZXMvc2NvcmVzJztcbmltcG9ydCBSb3VuZE1hbmFnZXIgZnJvbSAnLi4vZ2FtZS9yb3VuZE1hbmFnZXInO1xuXG5pbXBvcnQge3N0YXJ0R2FtZSwgc3RvcEdhbWV9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2dldEdhbWVTdGF0dXMsIGdldFBsYXlzfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQge2dldFBsYXllcnN9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHtnZXRHYW1lLCBnZXRQbGF5fSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnbmV3Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eHhTY29yZUtlZXBlclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2F2ZWQgUGxheXNcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdFx0PEdhbWVDaG9vc2VyLz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHRcdDxMaXN0PlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5cy5tYXAoKHBsYXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17cGxheS5pZH0gYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QXZhdGFyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZUljb24vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0F2YXRhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwbGF5LmdhbWV9IHNlY29uZGFyeT1cIkphbiA5LCAyMDE0XCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0XHRcdDwvUGFwZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3JlYWR5Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoIDwgdGhpcy5wcm9wcy5nYW1lLm1pblBsYXllcnNcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRTdGFydCBHYW1lXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnc3RhcnRlZCcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8Um91bmRNYW5hZ2VyLz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0b3BHYW1lfT5GaW5pc2ggR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0XHQ8Q29tcGFuaWVzLz5cblx0XHRcdFx0XHQ8U2NvcmVzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX0+UmVzdGFydCBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpLFxuXHRwbGF5czogZ2V0UGxheXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7c3RhcnRHYW1lLCBzdG9wR2FtZX1cbikoTWFpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9tYWluLmpzIiwiaW1wb3J0IHtmcm9tSlN9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7TUFJTn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBmcm9tSlMoe1xuXHRzdGF0dXM6IHtcblx0XHRzdGF0ZTogXCJuZXdcIixcblx0fSxcblx0cGxheXM6IFtdXG59KSwgYWN0aW9uKSB7XG5cdGxldCBzID0gc3RhdGU7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIE1BSU4uUExBWV9MSVNUOlxuXHRcdFx0cyA9IHN0YXRlLnNldCgncGxheXMnLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQucGxheXMpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5HQU1FX0xPQURFRDpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3N0YXR1cycsICdzdGF0ZSddLCBcInJlYWR5XCIpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBNQUlOLlNUQVJUX0dBTUU6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJzdGFydGVkXCIpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBNQUlOLlNUT1BfR0FNRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3N0YXR1cycsICdzdGF0ZSddLCBcImZpbmlzaGVkXCIpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0ZGVmYXVsdDpcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vcmVkdWNlci5qc3giLCJpbXBvcnQge3Rha2VMYXRlc3QsIHB1dCwgY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7Z2FtZUxvYWRlZCwgTUFJTn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Y3JlYXRlTmV3UGxheSwgbG9hZFNhdmVkUGxheX0gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIGNhbGwoY3JlYXRlTmV3UGxheSwge2dhbWU6IGFjdGlvbi5wYXlsb2FkfSk7XG5cdHlpZWxkIHB1dChnYW1lTG9hZGVkKHBsYXkpKTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGxvYWRTYXZlZFBsYXksIGFjdGlvbi5wYXlsb2FkLmlkKTtcblx0eWllbGQgcHV0KGdhbWVMb2FkZWQocGxheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbWFpbigpIHtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLkNSRUFURV9ORVdfR0FNRSwgaGFuZGxlQ3JlYXRlUGxheSk7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5MT0FEX1NBVkVEX0dBTUUsIGhhbmRsZUxvYWRTYXZlZEdhbWUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vc2FnYS5qcyIsImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBTVEFSVFVQIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7bGlzdFBsYXlzfSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5pbXBvcnQge3BsYXlMaXN0fSBmcm9tIFwiLi4vbWFpbi9hY3Rpb25zXCI7XG5cbi8qKlxuICogUHJvY2Vzc2VzIHN0YXJ0dXAgcmVxdWVzdHMgKHNob3VsZCBvbmx5IGJlIG9uZSlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIFRoZSB0cmlnZ2VyaW5nIGFjdGlvblxuICogQHJldHVybnMge0l0ZXJhYmxlSXRlcmF0b3I8Kj59IG5vdGhpbmdcbiAqL1xuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0dXBJbml0KGFjdGlvbikge1xuXHRjb25zdCBzYXZlZFBsYXlzID0geWllbGQgY2FsbChsaXN0UGxheXMpO1xuXHR5aWVsZCBwdXQocGxheUxpc3Qoc2F2ZWRQbGF5cykpO1xuXHRjb25zb2xlLmxvZyhcIlNhdmVkIFBsYXlzXCIsIHNhdmVkUGxheXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RhcnR1cCgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChTVEFSVFVQLklOSVQsIGhhbmRsZVN0YXJ0dXBJbml0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwic291cmNlUm9vdCI6IiJ9
