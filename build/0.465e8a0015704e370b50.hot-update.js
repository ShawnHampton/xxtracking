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
		/*! exports provided: MAIN, playList, startGame, stopGame, chooseGame */
		/*! exports used: MAIN, chooseGame, playList, startGame, stopGame */
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
					return chooseGame;
				}
			);
			var MAIN = {
				PLAY_LIST: 'MAIN_PLAY_LIST',
				START_GAME: 'MAIN_START_GAME',
				STOP_GAME: 'MAIN_STOP_GAME',
				CHOOSE_GAME: 'MAIN_CHOOSE_GAME'
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

			var chooseGame = function chooseGame(game) {
				return {
					type: MAIN.CHOOSE_GAME,
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
										'Choose Game'
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
					__WEBPACK_IMPORTED_MODULE_17__actions__['b' /* chooseGame */]
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
														{ key: play.id },
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
								action.payload
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.CHOOSE_GAME:
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
										__WEBPACK_IMPORTED_MODULE_4__main_actions__[
											'c' /* playList */
										],
										savedPlays
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9zdGFydHVwL3NhZ2EuanMiXSwibmFtZXMiOlsiaGFuZGxlU3RhcnRHYW1lIiwiaGFuZGxlTmV4dFJvdW5kIiwiZ2FtZSIsImFjdGlvbiIsInNlbGVjdCIsInBsYXllcnMiLCJpIiwibGVuZ3RoIiwicHV0Iiwic2V0UGVyc29uYWxNb25leSIsIm5hbWUiLCJpbml0aWFsUGxheWVyTW9uZXkiLCJwbGF5IiwiY3VycmVudFBoYXNlIiwicGF5bG9hZCIsImNoYW5nZUN1cnJlbnRPUiIsImN1cnJlbnRPUiIsImNoYW5nZVBoYXNlIiwiY2hhbmdlQ3VycmVudFJvdW5kIiwiY3VycmVudFJvdW5kIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJTVEFSVF9HQU1FIiwidGFrZUV2ZXJ5IiwiR0FNRSIsIk5FWFRfUk9VTkQiLCJQTEFZX0xJU1QiLCJTVE9QX0dBTUUiLCJDSE9PU0VfR0FNRSIsInBsYXlMaXN0IiwicGxheXMiLCJ0eXBlIiwic3RhcnRHYW1lIiwic3RvcEdhbWUiLCJjaG9vc2VHYW1lIiwiR2FtZUNob29zZXIiLCJzdGF0ZSIsImFuY2hvckVsIiwiaGFuZGxlTWVudSIsInNldFN0YXRlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaG9vc2VHYW1lTWVudSIsInByb3BzIiwiQm9vbGVhbiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImdhbWVTdGF0dXMiLCJnZXRHYW1lU3RhdHVzIiwiY29ubmVjdCIsIk1haW4iLCJtYXAiLCJpZCIsIm1pblBsYXllcnMiLCJnZXRQbGF5ZXJzIiwiZ2V0R2FtZSIsImdldFBsYXkiLCJnZXRQbGF5cyIsImZyb21KUyIsInN0YXR1cyIsInMiLCJzZXQiLCJzZXRJbiIsImhhbmRsZUNyZWF0ZVBsYXkiLCJtYWluIiwiY29uc29sZSIsImxvZyIsImNhbGwiLCJwbGF5SWQiLCJoYW5kbGVTdGFydHVwSW5pdCIsInN0YXJ0dXAiLCJzYXZlZFBsYXlzIiwiU1RBUlRVUCIsIklOSVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWFVQSxlO21HQVdBQyxlO21HQWtCZUMsSTs7QUExQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLFNBQVVGLGVBQVYsQ0FBMEJHLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDdUIsMEVBQUFDLENBQU8scUVBQVAsQ0FEdkI7O0FBQUE7QUFDT0MsWUFEUDtBQUFBO0FBQUEsWUFFb0IsMEVBQUFELENBQU8sZ0VBQVAsQ0FGcEI7O0FBQUE7QUFFT0YsU0FGUDtBQUlVSSxNQUpWLEdBSWMsQ0FKZDs7QUFBQTtBQUFBLFdBSWlCQSxJQUFJRCxRQUFRRSxNQUo3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBS1EsdUVBQUFDLENBQ0wsaUZBQUFDLENBQWlCSixRQUFRQyxDQUFSLEVBQVdJLElBQTVCLEVBQWtDUixLQUFLUyxrQkFBTCxDQUF3Qk4sUUFBUUUsTUFBaEMsQ0FBbEMsQ0FESyxDQUxSOztBQUFBO0FBSXFDRCxRQUpyQztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV0EsU0FBVUwsZUFBVixDQUEwQkUsTUFBMUI7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVKLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDUiw4RUFBQTlDLENBQVcsc0RBQUFDLENBQUtPLFdBQWhCLEVBQTZCcUMsZ0JBQTdCLENBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0NFTE0saUI7bUdBTWVDLE87O0FBakJ6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsU0FBVUQsaUJBQVYsQ0FBNEJwRSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUMwQix3RUFBQWtFLENBQUssbUVBQUwsQ0FEMUI7O0FBQUE7QUFDT0ksb0JBRFA7QUFBQTtBQUFBLGlCQUVPLHVFQUFBakUsQ0FBSSwrREFBSixFQUFjaUUsVUFBZCxDQUZQOztBQUFBO0FBR0NOLGtCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkssVUFBM0I7O0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWUsU0FBVUQsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUiw4RUFBQXBELENBQVcseURBQUFzRCxDQUFRQyxJQUFuQixFQUF5QkosaUJBQXpCLENBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLjQ2NWU4YTAwMTU3MDRlMzcwYjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIHB1dCwgc2VsZWN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IE1BSU4gfSBmcm9tICcuLi9tYWluL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2V0UGVyc29uYWxNb25leSB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IGdldEdhbWUgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQge1xuXHRjaGFuZ2VDdXJyZW50T1IsXG5cdGNoYW5nZUN1cnJlbnRSb3VuZCxcblx0Y2hhbmdlUGhhc2UsXG5cdEdBTUVcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXkgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXllcnMgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheWVycyk7XG5cdGNvbnN0IGdhbWUgPSB5aWVsZCBzZWxlY3QoZ2V0R2FtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0eWllbGQgcHV0KFxuXHRcdFx0c2V0UGVyc29uYWxNb25leShwbGF5ZXJzW2ldLm5hbWUsIGdhbWUuaW5pdGlhbFBsYXllck1vbmV5W3BsYXllcnMubGVuZ3RoXSlcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBoYW5kbGVOZXh0Um91bmQoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBzZWxlY3QoZ2V0UGxheSk7XG5cblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKHBsYXkuY3VycmVudE9SICsgMSkpO1xuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdTUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VQaGFzZShhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZUN1cnJlbnRPUigxKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudFJvdW5kKHBsYXkuY3VycmVudFJvdW5kICsgMSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ1NSJykge1xuXHRcdGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ09SJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBnYW1lKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uU1RBUlRfR0FNRSwgaGFuZGxlU3RhcnRHYW1lKTtcblx0eWllbGQgdGFrZUV2ZXJ5KEdBTUUuTkVYVF9ST1VORCwgaGFuZGxlTmV4dFJvdW5kKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NhZ2EuanMiLCJleHBvcnQgY29uc3QgTUFJTiA9IHtcblx0UExBWV9MSVNUOiAnTUFJTl9QTEFZX0xJU1QnLFxuXHRTVEFSVF9HQU1FOiAnTUFJTl9TVEFSVF9HQU1FJyxcblx0U1RPUF9HQU1FOiAnTUFJTl9TVE9QX0dBTUUnLFxuXHRDSE9PU0VfR0FNRTogJ01BSU5fQ0hPT1NFX0dBTUUnXG59O1xuXG5leHBvcnQgY29uc3QgcGxheUxpc3QgPSAocGxheXMpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlBMQVlfTElTVCxcblx0XHRwYXlsb2FkOiBwbGF5c1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU1RBUlRfR0FNRVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN0b3BHYW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU1RPUF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgY2hvb3NlR2FtZSA9IGdhbWUgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uQ0hPT1NFX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcblxuaW1wb3J0IHsgYWRkUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgY2hvb3NlR2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2hvb3NlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRhbmNob3JFbDogbnVsbFxuXHR9O1xuXG5cdGhhbmRsZU1lbnUgPSBldmVudCA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xuXHR9O1xuXG5cdGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCB9KTtcblx0fTtcblxuXHRoYW5kbGVDaG9vc2VHYW1lTWVudSA9IGdhbWUgPT4ge1xuXHRcdHRoaXMucHJvcHMuY2hvb3NlR2FtZShnYW1lKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYW5jaG9yRWwgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YXJpYS1vd25zPXthbmNob3JFbCA/ICdtZW51LWNob29zZWdhbWUnIDogbnVsbH1cblx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVNZW51fVxuXHRcdFx0XHRcdGNvbG9yPVwiaW5oZXJpdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRDaG9vc2UgR2FtZVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PE1lbnVcblx0XHRcdFx0XHRpZD17J21lbnUtY2hvb3NlZ2FtZSd9XG5cdFx0XHRcdFx0YW5jaG9yRWw9e2FuY2hvckVsfVxuXHRcdFx0XHRcdG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuXHRcdFx0XHRcdG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2hvb3NlR2FtZU1lbnV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaG9vc2VHYW1lTWVudSgnMTg0NicpfT5cblx0XHRcdFx0XHRcdDE4NDZcblx0XHRcdFx0XHQ8L01lbnVJdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHsgY2hvb3NlR2FtZSB9XG4pKEdhbWVDaG9vc2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2dhbWVDaG9vc2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEltYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IEdhbWVDaG9vc2VyIGZyb20gJy4vZ2FtZUNob29zZXInO1xuaW1wb3J0IFBsYXllcnMgZnJvbSAnLi4vcGxheWVyL3BsYXllcnMnO1xuaW1wb3J0IENvbXBhbmllcyBmcm9tICcuLi9jb21wYW55L2NvbXBhbmllcyc7XG5pbXBvcnQgU2NvcmVzIGZyb20gJy4uL3Njb3Jlcy9zY29yZXMnO1xuaW1wb3J0IFJvdW5kTWFuYWdlciBmcm9tICcuLi9nYW1lL3JvdW5kTWFuYWdlcic7XG5cbmltcG9ydCB7c3RhcnRHYW1lLCBzdG9wR2FtZX0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Z2V0R2FtZVN0YXR1cywgZ2V0UGxheXN9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7Z2V0UGxheWVyc30gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5pbXBvcnQge2dldEdhbWUsIGdldFBsYXl9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICduZXcnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR4eFNjb3JlS2VlcGVyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdDxQYXBlcj5cblx0XHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRTYXZlZCBQbGF5c1xuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0XHQ8R2FtZUNob29zZXIvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdFx0PExpc3Q+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXlzLm1hcCgocGxheSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0ga2V5PXtwbGF5LmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VJY29uLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9BdmF0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cGxheS5nYW1lfSBzZWNvbmRhcnk9XCJKYW4gOSwgMjAxNFwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvTGlzdD5cblx0XHRcdFx0XHQ8L1BhcGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdyZWFkeScpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGF5ZXJzLmxlbmd0aCA8IHRoaXMucHJvcHMuZ2FtZS5taW5QbGF5ZXJzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0U3RhcnQgR2FtZVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlci8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdG9wR2FtZX0+RmluaXNoIEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycy8+XG5cdFx0XHRcdFx0PENvbXBhbmllcy8+XG5cdFx0XHRcdFx0PFNjb3Jlcy8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9PlJlc3RhcnQgR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e3N0YXJ0R2FtZSwgc3RvcEdhbWV9XG4pKE1haW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vbWFpbi5qcyIsImltcG9ydCB7ZnJvbUpTfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge01BSU59IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZnJvbUpTKHtcblx0c3RhdHVzOiB7XG5cdFx0c3RhdGU6IFwibmV3XCIsXG5cdH0sXG5cdHBsYXlzOiBbXVxufSksIGFjdGlvbikge1xuXHRsZXQgcyA9IHN0YXRlO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBNQUlOLlBMQVlfTElTVDpcblx0XHRcdHMgPSBzdGF0ZS5zZXQoJ3BsYXlzJywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uQ0hPT1NFX0dBTUU6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJyZWFkeVwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5TVEFSVF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwic3RhcnRlZFwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5TVE9QX0dBTUU6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydzdGF0dXMnLCAnc3RhdGUnXSwgXCJmaW5pc2hlZFwiKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGRlZmF1bHQ6XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3JlZHVjZXIuanN4IiwiaW1wb3J0IHt0YWtlTGF0ZXN0LCBwdXQsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge01BSU59IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZU5ld1BsYXksIGxpc3RQbGF5c30gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc29sZS5sb2coXCJDaG9zZSBnYW1lXCIsIGFjdGlvbi5wYXlsb2FkKTtcblx0Y29uc3QgcGxheUlkID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DSE9PU0VfR0FNRSwgaGFuZGxlQ3JlYXRlUGxheSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IFNUQVJUVVAgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtsaXN0UGxheXN9IGZyb20gXCIuLi9zZXJ2ZXJBcGkvdXRpbHNcIjtcbmltcG9ydCB7cGxheUxpc3R9IGZyb20gXCIuLi9tYWluL2FjdGlvbnNcIjtcblxuLyoqXG4gKiBQcm9jZXNzZXMgc3RhcnR1cCByZXF1ZXN0cyAoc2hvdWxkIG9ubHkgYmUgb25lKVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb24gVGhlIHRyaWdnZXJpbmcgYWN0aW9uXG4gKiBAcmV0dXJucyB7SXRlcmFibGVJdGVyYXRvcjwqPn0gbm90aGluZ1xuICovXG5mdW5jdGlvbiogaGFuZGxlU3RhcnR1cEluaXQoYWN0aW9uKSB7XG5cdGNvbnN0IHNhdmVkUGxheXMgPSB5aWVsZCBjYWxsKGxpc3RQbGF5cyk7XG5cdHlpZWxkIHB1dChwbGF5TGlzdCwgc2F2ZWRQbGF5cyk7XG5cdGNvbnNvbGUubG9nKFwiU2F2ZWQgUGxheXNcIiwgc2F2ZWRQbGF5cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzdGFydHVwKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KFNUQVJUVVAuSU5JVCwgaGFuZGxlU3RhcnR1cEluaXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3N0YXJ0dXAvc2FnYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
