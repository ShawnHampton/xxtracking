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
		/*! exports provided: MAIN, playList, startGame, stopGame, createNewGame */
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
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var playList = function playList(plays) {
				return {
					type: MAIN.PLAY_LIST,
					payload: plays
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
				startGame: __WEBPACK_IMPORTED_MODULE_21__actions__['d' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_21__actions__['e' /* stopGame */]
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
											.CREATE_NEW_GAME,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwibmFtZXMiOlsiaGFuZGxlU3RhcnRHYW1lIiwiaGFuZGxlTmV4dFJvdW5kIiwiZ2FtZSIsImFjdGlvbiIsInNlbGVjdCIsInBsYXllcnMiLCJpIiwibGVuZ3RoIiwicHV0Iiwic2V0UGVyc29uYWxNb25leSIsIm5hbWUiLCJpbml0aWFsUGxheWVyTW9uZXkiLCJwbGF5IiwiY3VycmVudFBoYXNlIiwicGF5bG9hZCIsImNoYW5nZUN1cnJlbnRPUiIsImN1cnJlbnRPUiIsImNoYW5nZVBoYXNlIiwiY2hhbmdlQ3VycmVudFJvdW5kIiwiY3VycmVudFJvdW5kIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJTVEFSVF9HQU1FIiwidGFrZUV2ZXJ5IiwiR0FNRSIsIk5FWFRfUk9VTkQiLCJQTEFZX0xJU1QiLCJTVE9QX0dBTUUiLCJDUkVBVEVfTkVXX0dBTUUiLCJwbGF5TGlzdCIsInBsYXlzIiwidHlwZSIsInN0YXJ0R2FtZSIsInN0b3BHYW1lIiwiY3JlYXRlTmV3R2FtZSIsIkdhbWVDaG9vc2VyIiwic3RhdGUiLCJhbmNob3JFbCIsImhhbmRsZU1lbnUiLCJzZXRTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2hvb3NlR2FtZU1lbnUiLCJwcm9wcyIsImNob29zZUdhbWUiLCJCb29sZWFuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZ2FtZVN0YXR1cyIsImdldEdhbWVTdGF0dXMiLCJjb25uZWN0IiwiTWFpbiIsIm1hcCIsImlkIiwibWluUGxheWVycyIsImdldFBsYXllcnMiLCJnZXRHYW1lIiwiZ2V0UGxheSIsImdldFBsYXlzIiwiZnJvbUpTIiwic3RhdHVzIiwicyIsInNldCIsInNldEluIiwiaGFuZGxlQ3JlYXRlUGxheSIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwiY2FsbCIsInBsYXlJZCIsImhhbmRsZVN0YXJ0dXBJbml0Iiwic3RhcnR1cCIsInNhdmVkUGxheXMiLCJTVEFSVFVQIiwiSU5JVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBYVVBLGU7bUdBV0FDLGU7bUdBa0JlQyxJOztBQTFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUEsU0FBVUYsZUFBVixDQUEwQkcsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUN1QiwwRUFBQUMsQ0FBTyxxRUFBUCxDQUR2Qjs7QUFBQTtBQUNPQyxZQURQO0FBQUE7QUFBQSxZQUVvQiwwRUFBQUQsQ0FBTyxnRUFBUCxDQUZwQjs7QUFBQTtBQUVPRixTQUZQO0FBSVVJLE1BSlYsR0FJYyxDQUpkOztBQUFBO0FBQUEsV0FJaUJBLElBQUlELFFBQVFFLE1BSjdCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUFLUSx1RUFBQUMsQ0FDTCxpRkFBQUMsQ0FBaUJKLFFBQVFDLENBQVIsRUFBV0ksSUFBNUIsRUFBa0NSLEtBQUtTLGtCQUFMLENBQXdCTixRQUFRRSxNQUFoQyxDQUFsQyxDQURLLENBTFI7O0FBQUE7QUFJcUNELFFBSnJDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXQSxTQUFVTCxl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LE1BQU1DLE9BQU9XLE9BQWQsRUFBcEIsQ0FGdEI7O0FBQUE7QUFFT3lELFdBRlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2UsU0FBVUosSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNSLDhFQUFBL0MsQ0FBVyxzREFBQUMsQ0FBS08sZUFBaEIsRUFBaUNzQyxnQkFBakMsQ0FEUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQ0VMTSxpQjttR0FNZUMsTzs7QUFqQnpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxTQUFVRCxpQkFBVixDQUE0QnJFLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQzBCLHdFQUFBbUUsQ0FBSyxtRUFBTCxDQUQxQjs7QUFBQTtBQUNPSSxvQkFEUDtBQUFBO0FBQUEsaUJBRU8sdUVBQUFsRSxDQUFJLHVFQUFBcUIsQ0FBUzZDLFVBQVQsQ0FBSixDQUZQOztBQUFBO0FBR0NOLGtCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkssVUFBM0I7O0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWUsU0FBVUQsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUiw4RUFBQXJELENBQVcseURBQUF1RCxDQUFRQyxJQUFuQixFQUF5QkosaUJBQXpCLENBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLjJkNTQ4YWEwMzYyMjhmNjA3YTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IE1BSU4gfSBmcm9tICcuLi9tYWluL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0UGVyc29uYWxNb25leSB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWUgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge1xuXHRjaGFuZ2VDdXJyZW50T1IsXG5cdGNoYW5nZUN1cnJlbnRSb3VuZCxcblx0Y2hhbmdlUGhhc2UsXG5cdEdBTUVcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXkgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXllcnMgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheWVycyk7XG5cdGNvbnN0IGdhbWUgPSB5aWVsZCBzZWxlY3QoZ2V0R2FtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0eWllbGQgcHV0KFxuXHRcdFx0c2V0UGVyc29uYWxNb25leShwbGF5ZXJzW2ldLm5hbWUsIGdhbWUuaW5pdGlhbFBsYXllck1vbmV5W3BsYXllcnMubGVuZ3RoXSlcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVOZXh0Um91bmQoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheSk7XG5cblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKHBsYXkuY3VycmVudE9SICsgMSkpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdTUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUigxKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudFJvdW5kKHBsYXkuY3VycmVudFJvdW5kICsgMSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ1NSJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBnYW1lKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uU1RBUlRfR0FNRSwgaGFuZGxlU3RhcnRHYW1lKTtcblx0eWllbGQgdGFrZUV2ZXJ5KEdBTUUuTkVYVF9ST1VORCwgaGFuZGxlTmV4dFJvdW5kKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NhZ2EuanMiLCJleHBvcnQgY29uc3QgTUFJTiA9IHtcblx0UExBWV9MSVNUOiAnTUFJTl9QTEFZX0xJU1QnLFxuXHRTVEFSVF9HQU1FOiAnTUFJTl9TVEFSVF9HQU1FJyxcblx0U1RPUF9HQU1FOiAnTUFJTl9TVE9QX0dBTUUnLFxuXHRDUkVBVEVfTkVXX0dBTUU6ICdNQUlOX0NSRUFURV9ORVdfR0FNRSdcbn07XG5cbmV4cG9ydCBjb25zdCBwbGF5TGlzdCA9IChwbGF5cykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uUExBWV9MSVNULFxuXHRcdHBheWxvYWQ6IHBsYXlzXG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVEFSVF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVE9QX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdHYW1lID0gZ2FtZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5DUkVBVEVfTkVXX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcblxuaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2hvb3NlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRhbmNob3JFbDogbnVsbFxuXHR9O1xuXG5cdGhhbmRsZU1lbnUgPSBldmVudCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xuXHR9O1xuXG5cdGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCB9KTtcblx0fTtcblxuXHRoYW5kbGVDaG9vc2VHYW1lTWVudSA9IGdhbWUgPT4ge1xuXHRcdHRoaXMucHJvcHMuY2hvb3NlR2FtZShnYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYW5jaG9yRWwgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YXJpYS1vd25zPXthbmNob3JFbCA/ICdtZW51LWNob29zZWdhbWUnIDogbnVsbH1cblx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVNZW51fVxuXHRcdFx0XHRcdGNvbG9yPVwiaW5oZXJpdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRDcmVhdGUgTmV3IEdhbWVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNZW51XG5cdFx0XHRcdFx0aWQ9eydtZW51LWNob29zZWdhbWUnfVxuXHRcdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cblx0XHRcdFx0XHRvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cblx0XHRcdFx0XHRvbkNsb3NlPXt0aGlzLmhhbmRsZUNob29zZUdhbWVNZW51fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hvb3NlR2FtZU1lbnUoJzE4NDYnKX0+XG5cdFx0XHRcdFx0XHQxODQ2XG5cdFx0XHRcdFx0PC9NZW51SXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IGNob29zZUdhbWU6IGNyZWF0ZU5ld0dhbWUgfVxuKShHYW1lQ2hvb3Nlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9nYW1lQ2hvb3Nlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBJbWFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBHYW1lQ2hvb3NlciBmcm9tICcuL2dhbWVDaG9vc2VyJztcbmltcG9ydCBQbGF5ZXJzIGZyb20gJy4uL3BsYXllci9wbGF5ZXJzJztcbmltcG9ydCBDb21wYW5pZXMgZnJvbSAnLi4vY29tcGFueS9jb21wYW5pZXMnO1xuaW1wb3J0IFNjb3JlcyBmcm9tICcuLi9zY29yZXMvc2NvcmVzJztcbmltcG9ydCBSb3VuZE1hbmFnZXIgZnJvbSAnLi4vZ2FtZS9yb3VuZE1hbmFnZXInO1xuXG5pbXBvcnQge3N0YXJ0R2FtZSwgc3RvcEdhbWV9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2dldEdhbWVTdGF0dXMsIGdldFBsYXlzfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQge2dldFBsYXllcnN9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHtnZXRHYW1lLCBnZXRQbGF5fSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnbmV3Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eHhTY29yZUtlZXBlclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0U2F2ZWQgUGxheXNcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdFx0PEdhbWVDaG9vc2VyLz5cblx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0XHRcdDxMaXN0PlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5cy5tYXAoKHBsYXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17cGxheS5pZH0gYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QXZhdGFyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZUljb24vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0F2YXRhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwbGF5LmdhbWV9IHNlY29uZGFyeT1cIkphbiA5LCAyMDE0XCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0XHRcdDwvUGFwZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3JlYWR5Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoIDwgdGhpcy5wcm9wcy5nYW1lLm1pblBsYXllcnNcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRTdGFydCBHYW1lXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnc3RhcnRlZCcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8Um91bmRNYW5hZ2VyLz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0b3BHYW1lfT5GaW5pc2ggR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0XHQ8Q29tcGFuaWVzLz5cblx0XHRcdFx0XHQ8U2NvcmVzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX0+UmVzdGFydCBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpLFxuXHRwbGF5czogZ2V0UGxheXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7c3RhcnRHYW1lLCBzdG9wR2FtZX1cbikoTWFpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9tYWluLmpzIiwiaW1wb3J0IHtmcm9tSlN9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7TUFJTn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBmcm9tSlMoe1xuXHRzdGF0dXM6IHtcblx0XHRzdGF0ZTogXCJuZXdcIixcblx0fSxcblx0cGxheXM6IFtdXG59KSwgYWN0aW9uKSB7XG5cdGxldCBzID0gc3RhdGU7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIE1BSU4uUExBWV9MSVNUOlxuXHRcdFx0cyA9IHN0YXRlLnNldCgncGxheXMnLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQucGxheXMpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5DUkVBVEVfTkVXX0dBTUU6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJyZWFkeVwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5TVEFSVF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwic3RhcnRlZFwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5TVE9QX0dBTUU6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJmaW5pc2hlZFwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGRlZmF1bHQ6XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3JlZHVjZXIuanN4IiwiaW1wb3J0IHt0YWtlTGF0ZXN0LCBwdXQsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge01BSU59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZU5ld1BsYXksIGxpc3RQbGF5c30gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc29sZS5sb2coXCJDaG9zZSBnYW1lXCIsIGFjdGlvbi5wYXlsb2FkKTtcblx0Y29uc3QgcGxheUlkID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DUkVBVEVfTkVXX0dBTUUsIGhhbmRsZUNyZWF0ZVBsYXkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vc2FnYS5qcyIsImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBTVEFSVFVQIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7bGlzdFBsYXlzfSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5pbXBvcnQge3BsYXlMaXN0fSBmcm9tIFwiLi4vbWFpbi9hY3Rpb25zXCI7XG5cbi8qKlxuICogUHJvY2Vzc2VzIHN0YXJ0dXAgcmVxdWVzdHMgKHNob3VsZCBvbmx5IGJlIG9uZSlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uIFRoZSB0cmlnZ2VyaW5nIGFjdGlvblxuICogQHJldHVybnMge0l0ZXJhYmxlSXRlcmF0b3I8Kj59IG5vdGhpbmdcbiAqL1xuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0dXBJbml0KGFjdGlvbikge1xuXHRjb25zdCBzYXZlZFBsYXlzID0geWllbGQgY2FsbChsaXN0UGxheXMpO1xuXHR5aWVsZCBwdXQocGxheUxpc3Qoc2F2ZWRQbGF5cykpO1xuXHRjb25zb2xlLmxvZyhcIlNhdmVkIFBsYXlzXCIsIHNhdmVkUGxheXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogc3RhcnR1cCgpIHtcblx0eWllbGQgdGFrZUxhdGVzdChTVEFSVFVQLklOSVQsIGhhbmRsZVN0YXJ0dXBJbml0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwic291cmNlUm9vdCI6IiJ9
