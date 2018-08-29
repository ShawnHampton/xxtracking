webpackHotUpdate(0, {
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__(
				/*! @material-ui/core/Button */ './node_modules/@material-ui/core/Button/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gameChooser__ = __webpack_require__(
				/*! ./gameChooser */ './src/client/modules/main/gameChooser.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__player_players__ = __webpack_require__(
				/*! ../player/players */ './src/client/modules/player/players.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_companies__ = __webpack_require__(
				/*! ../company/companies */ './src/client/modules/company/companies.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__scores_scores__ = __webpack_require__(
				/*! ../scores/scores */ './src/client/modules/scores/scores.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_roundManager__ = __webpack_require__(
				/*! ../game/roundManager */ './src/client/modules/game/roundManager.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__game_selectors__ = __webpack_require__(
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
											__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													'xxScoreKeeper'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_10__gameChooser__[
												'a' /* default */
											],
											null
										)
									);
								} else if (this.props.gameStatus.state === 'ready') {
									return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'main' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a,
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
											__WEBPACK_IMPORTED_MODULE_11__player_players__[
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
											__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_14__game_roundManager__[
														'a' /* default */
													],
													null
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a,
													{ onClick: this.props.stopGame },
													'Finish Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_11__player_players__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_12__company_companies__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_13__scores_scores__[
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
											__WEBPACK_IMPORTED_MODULE_7__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a,
													{ onClick: this.props.startGame },
													'Restart Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_11__player_players__[
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
						__WEBPACK_IMPORTED_MODULE_17__player_selectors__[
							'b' /* getPlayers */
						]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_16__selectors__['a' /* getGameStatus */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_18__game_selectors__['b' /* getGame */]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_18__game_selectors__['d' /* getPlay */]
					)(state),
					plays: Object(
						__WEBPACK_IMPORTED_MODULE_16__selectors__['b' /* getPlays */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				startGame: __WEBPACK_IMPORTED_MODULE_15__actions__['c' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_15__actions__['d' /* stopGame */]
			})(Main);

			/***/
		},

	/***/ './src/client/modules/main/selectors.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/main/selectors.js ***!
  \**********************************************/
		/*! exports provided: getGameStatus, getPlays */
		/*! exports used: getGameStatus, getPlays */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return getGameStatus;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return getPlays;
				}
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(
				/*! reselect */ './node_modules/reselect/lib/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_reselect__
			);

			var getGameStatusImmutable = function getGameStatusImmutable(state) {
				return state.getIn(['main', 'status'], {});
			};
			var getPlaysImmutable = function getPlaysImmutable(state) {
				return state.getIn(['main', 'plays'], []);
			};

			var getGameStatus = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getGameStatusImmutable], function(status) {
				return status.toJS();
			});

			var getPlays = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlaysImmutable], function(status) {
				return status.toJS();
			});

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
							'g' /* getUnstartedMajors */
						]
					)(state),
					started: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__[
							'f' /* getStartedMajors */
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
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9nYW1lQ2hvb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiXSwibmFtZXMiOlsiR2FtZUNob29zZXIiLCJzdGF0ZSIsImFuY2hvckVsIiwiaGFuZGxlTWVudSIsInNldFN0YXRlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaG9vc2VHYW1lTWVudSIsInByb3BzIiwiY2hvb3NlR2FtZSIsImdhbWUiLCJCb29sZWFuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZ2FtZVN0YXR1cyIsImdldEdhbWVTdGF0dXMiLCJjb25uZWN0IiwiTWFpbiIsIm5hbWUiLCJzdGFydEdhbWUiLCJwbGF5ZXJzIiwibGVuZ3RoIiwibWluUGxheWVycyIsInN0b3BHYW1lIiwiZ2V0UGxheWVycyIsImdldEdhbWUiLCJwbGF5IiwiZ2V0UGxheSIsInBsYXlzIiwiZ2V0UGxheXMiLCJnZXRHYW1lU3RhdHVzSW1tdXRhYmxlIiwiZ2V0SW4iLCJnZXRQbGF5c0ltbXV0YWJsZSIsImNyZWF0ZVNlbGVjdG9yIiwic3RhdHVzIiwidG9KUyIsIlBsYXllciIsInBsYXllciIsInVuc3RhcnRlZCIsInN0YXJ0Q29tcGFueSIsInN0YXJ0ZWQiLCJidXlTdG9jayIsIk9iamVjdCIsImtleXMiLCJzdG9ja3MiLCJzZWxsU3RvY2siLCJtYXAiLCJzdG9ja05hbWUiLCJwZXJzb25hbE1vbmV5IiwicmVuZGVyQm9keSIsImdldFVuc3RhcnRlZE1ham9ycyIsImdldFN0YXJ0ZWRNYWpvcnMiLCJnZXRTdG9ja3MiLCJQbGF5ZXJzIiwiYWRkUGxheWVyIiwiYWNxdWlyZVByaXZhdGVDb21wYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFhQSxXQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMlBBQ0NDLEtBREQsR0FDUztBQUNQQyxhQUFVO0FBREgsR0FEVCxRQUtDQyxVQUxELEdBS2MsaUJBQVM7QUFDckIsU0FBS0MsUUFBTCxDQUFjLEVBQUVGLFVBQVVHLE1BQU1DLGFBQWxCLEVBQWQ7QUFDQSxHQVBGLFFBU0NDLFdBVEQsR0FTZSxZQUFNO0FBQ25CLFNBQUtILFFBQUwsQ0FBYyxFQUFFRixVQUFVLElBQVosRUFBZDtBQUNBLEdBWEYsUUFhQ00sb0JBYkQsR0Fhd0IsZ0JBQVE7QUFDOUIsU0FBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCQyxJQUF0QjtBQUNBLFNBQUtQLFFBQUwsQ0FBYyxFQUFFRixVQUFVLElBQVosRUFBZDtBQUNBLEdBaEJGO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJCQWtCVTtBQUFBOztBQUFBLE9BQ0FBLFFBREEsR0FDYSxLQUFLRCxLQURsQixDQUNBQyxRQURBOzs7QUFHUixVQUNDO0FBQUMsbURBQUQ7QUFBQTtBQUNDO0FBQUMscUVBQUQ7QUFBQTtBQUNDLG1CQUFXQSxXQUFXLGlCQUFYLEdBQStCLElBRDNDO0FBRUMsdUJBQWMsTUFGZjtBQUdDLGVBQVMsS0FBS0MsVUFIZjtBQUlDLGFBQU07QUFKUDtBQUFBO0FBQUEsS0FERDtBQVNDO0FBQUMsb0VBQUQ7QUFBQTtBQUNDLFVBQUksaUJBREw7QUFFQyxnQkFBVUQsUUFGWDtBQUdD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O0FBRUMsYUFBTSxLQUFLYixLQUFMLENBQVdFLElBRmxCO0FBR0MsbUJBQVksS0FBS0YsS0FBTCxDQUFXTyxVQUh4QjtBQUlDLGtCQUFXLEtBQUtQLEtBQUwsQ0FBVytDO0FBSnZCO0FBSkQ7QUFERCxLQUREO0FBZUM7QUFBQTtBQUFBLE9BQUssSUFBRyxTQUFSO0FBQ0UsVUFBSy9DLEtBQUwsQ0FBV2EsT0FBWCxDQUFtQjBCLEdBQW5CLENBQXVCLGtCQUFVO0FBQ2pDLGFBQU8sNERBQUMseURBQUQsSUFBUSxLQUFLVCxPQUFPbkIsSUFBcEIsRUFBMEIsUUFBUW1CLE1BQWxDLEdBQVA7QUFDQSxNQUZBO0FBREY7QUFmRCxJQUREO0FBdUJBO0FBekJGOztBQUFBO0FBQUEsRUFBNkIsNkNBQUExQixDQUFNQyxhQUFuQzs7QUE0QkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDZCxLQUFELEVBQVFRLEtBQVI7QUFBQSxRQUFtQjtBQUMxQ2EsV0FBUyx1RUFBQUksQ0FBV3pCLEtBQVgsQ0FEaUM7QUFFMUNVLFFBQU0seUVBQUFnQixDQUFRMUIsS0FBUixDQUZvQztBQUcxQ2UsY0FBWSwrRUFBQUMsQ0FBY2hCLEtBQWQ7QUFIOEIsRUFBbkI7QUFBQSxDQUF4Qjs7QUFNQSx5REFBZSxvRUFBQWlCLENBQ2RILGVBRGMsRUFFZCxFQUFFeUMsV0FBQSw0REFBRixFQUFhZixjQUFBLHVFQUFiLEVBQTJCZ0IsdUJBQUEsd0VBQTNCLEVBRmMsRUFHYkYsT0FIYSxDQUFmLEUiLCJmaWxlIjoiMC5lZDY4ODU3OWE0YTFlYzA5ZWU3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5cbmltcG9ydCB7IGFkZFBsYXllciB9IGZyb20gJy4uL3BsYXllci9hY3Rpb25zJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGNob29zZUdhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNob29zZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0YW5jaG9yRWw6IG51bGxcblx0fTtcblxuXHRoYW5kbGVNZW51ID0gZXZlbnQgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcblx0fTtcblxuXHRoYW5kbGVDbG9zZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0aGFuZGxlQ2hvb3NlR2FtZU1lbnUgPSBnYW1lID0+IHtcblx0XHR0aGlzLnByb3BzLmNob29zZUdhbWUoZ2FtZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBudWxsIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGFyaWEtb3ducz17YW5jaG9yRWwgPyAnbWVudS1jaG9vc2VnYW1lJyA6IG51bGx9XG5cdFx0XHRcdFx0YXJpYS1oYXNwb3B1cD1cInRydWVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVudX1cblx0XHRcdFx0XHRjb2xvcj1cImluaGVyaXRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0Q2hvb3NlIEdhbWVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNZW51XG5cdFx0XHRcdFx0aWQ9eydtZW51LWNob29zZWdhbWUnfVxuXHRcdFx0XHRcdGFuY2hvckVsPXthbmNob3JFbH1cblx0XHRcdFx0XHRvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cblx0XHRcdFx0XHRvbkNsb3NlPXt0aGlzLmhhbmRsZUNob29zZUdhbWVNZW51fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hvb3NlR2FtZU1lbnUoJzE4NDYnKX0+XG5cdFx0XHRcdFx0XHQxODQ2XG5cdFx0XHRcdFx0PC9NZW51SXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IGNob29zZUdhbWUgfVxuKShHYW1lQ2hvb3Nlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9nYW1lQ2hvb3Nlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgR2FtZUNob29zZXIgZnJvbSAnLi9nYW1lQ2hvb3Nlcic7XG5pbXBvcnQgUGxheWVycyBmcm9tICcuLi9wbGF5ZXIvcGxheWVycyc7XG5pbXBvcnQgQ29tcGFuaWVzIGZyb20gJy4uL2NvbXBhbnkvY29tcGFuaWVzJztcbmltcG9ydCBTY29yZXMgZnJvbSAnLi4vc2NvcmVzL3Njb3Jlcyc7XG5pbXBvcnQgUm91bmRNYW5hZ2VyIGZyb20gJy4uL2dhbWUvcm91bmRNYW5hZ2VyJztcblxuaW1wb3J0IHsgc3RhcnRHYW1lLCBzdG9wR2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2dldEdhbWVTdGF0dXMsIGdldFBsYXlzfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRHYW1lLCBnZXRQbGF5IH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ25ldycpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHh4U2NvcmVLZWVwZXJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxHYW1lQ2hvb3NlciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdyZWFkeScpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5zdGFydEdhbWV9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGF5ZXJzLmxlbmd0aCA8IHRoaXMucHJvcHMuZ2FtZS5taW5QbGF5ZXJzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0U3RhcnQgR2FtZVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICdzdGFydGVkJykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxSb3VuZE1hbmFnZXIgLz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0b3BHYW1lfT5GaW5pc2ggR2FtZTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzIC8+XG5cdFx0XHRcdFx0PENvbXBhbmllcyAvPlxuXHRcdFx0XHRcdDxTY29yZXMgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX0+UmVzdGFydCBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZVN0YXR1czogZ2V0R2FtZVN0YXR1cyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRwbGF5OiBnZXRQbGF5KHN0YXRlKSxcblx0cGxheXM6IGdldFBsYXlzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0eyBzdGFydEdhbWUsIHN0b3BHYW1lIH1cbikoTWFpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9tYWluLmpzIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmNvbnN0IGdldEdhbWVTdGF0dXNJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ21haW4nLCAnc3RhdHVzJ10sIHt9KTtcbmNvbnN0IGdldFBsYXlzSW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydtYWluJywgJ3BsYXlzJ10sIFtdKTtcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihbZ2V0R2FtZVN0YXR1c0ltbXV0YWJsZV0sIHN0YXR1cyA9PlxuXHRzdGF0dXMudG9KUygpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxheXMgPSBjcmVhdGVTZWxlY3RvcihbZ2V0UGxheXNJbW11dGFibGVdLCBzdGF0dXMgPT5cblx0c3RhdHVzLnRvSlMoKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NlbGVjdG9ycy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBDb21wYW55Q2hvb3NlciBmcm9tICcuLi9jb21wYW55L2NvbXBhbnlDaG9vc2VyJztcblxuaW1wb3J0IHsgc3RhcnRDb21wYW55LCBidXlTdG9jaywgc2VsbFN0b2NrIH0gZnJvbSAnLi4vY29tcGFueS9hY3Rpb25zJztcbmltcG9ydCB7XG5cdGdldEdhbWUsXG5cdGdldFN0YXJ0ZWRNYWpvcnMsXG5cdGdldFVuc3RhcnRlZE1ham9yc1xufSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi4vbWFpbi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0U3RvY2tzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlckJvZHkoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCIgY2xhc3NOYW1lPVwiY29tcGFueVRvb2xiYXJcIj5cblx0XHRcdFx0XHQ8Q29tcGFueUNob29zZXJcblx0XHRcdFx0XHRcdHRpdGxlPVwiU3RhcnQgQ29tcGFueVwiXG5cdFx0XHRcdFx0XHRwbGF5ZXI9e3RoaXMucHJvcHMucGxheWVyfVxuXHRcdFx0XHRcdFx0Y29tcGFuaWVzPXt0aGlzLnByb3BzLnVuc3RhcnRlZH1cblx0XHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5zdGFydENvbXBhbnl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Q29tcGFueUNob29zZXJcblx0XHRcdFx0XHRcdHRpdGxlPVwiQnV5IFNoYXJlXCJcblx0XHRcdFx0XHRcdHBsYXllcj17dGhpcy5wcm9wcy5wbGF5ZXJ9XG5cdFx0XHRcdFx0XHRjb21wYW5pZXM9e3RoaXMucHJvcHMuc3RhcnRlZH1cblx0XHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5idXlTdG9ja31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxDb21wYW55Q2hvb3NlclxuXHRcdFx0XHRcdFx0dGl0bGU9XCJTZWxsIFNoYXJlXCJcblx0XHRcdFx0XHRcdHBsYXllcj17dGhpcy5wcm9wcy5wbGF5ZXJ9XG5cdFx0XHRcdFx0XHRjb21wYW5pZXM9e09iamVjdC5rZXlzKHRoaXMucHJvcHMuc3RvY2tzKX1cblx0XHRcdFx0XHRcdGNob29zZT17dGhpcy5wcm9wcy5zZWxsU3RvY2t9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Ub29sYmFyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGxheWVyU3RvY2tzXCI+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMuc3RvY2tzKS5tYXAoc3RvY2tOYW1lID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxDaGlwXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtzdG9ja05hbWV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3RvY2tDaGlwXCJcblx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e3N0b2NrTmFtZX08L0F2YXRhcj59XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3RoaXMucHJvcHMuc3RvY2tzW3N0b2NrTmFtZV19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyIGNsYXNzTmFtZT1cInBsYXllclwiPlxuXHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwicGxheWVyQXBwQmFyXCI+XG5cdFx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5ZXIubmFtZX1cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdCR7dGhpcy5wcm9wcy5wbGF5ZXIucGVyc29uYWxNb25leX1cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdHt0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgIT09ICdyZWFkeScgPyB0aGlzLnJlbmRlckJvZHkoKSA6IG51bGx9XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpLFxuXHR1bnN0YXJ0ZWQ6IGdldFVuc3RhcnRlZE1ham9ycyhzdGF0ZSksXG5cdHN0YXJ0ZWQ6IGdldFN0YXJ0ZWRNYWpvcnMoc3RhdGUpLFxuXHRzdG9ja3M6IGdldFN0b2NrcyhzdGF0ZSwgcHJvcHMucGxheWVyLm5hbWUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IHN0YXJ0Q29tcGFueSwgYnV5U3RvY2ssIHNlbGxTdG9jayB9XG4pKFBsYXllcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllci5qcyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuaW1wb3J0IHsgc3RhcnRDb21wYW55IH0gZnJvbSAnLi4vY29tcGFueS9hY3Rpb25zJztcbmltcG9ydCB7IGFkZFBsYXllciwgYWNxdWlyZVByaXZhdGVDb21wYW55IH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi4vbWFpbi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0R2FtZSB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCBQbGF5ZXJDcmVhdG9yIGZyb20gJy4vcGxheWVyQ3JlYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyPlxuXHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XG5cdFx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRQbGF5ZXJzXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8UGxheWVyQ3JlYXRvclxuXHRcdFx0XHRcdFx0XHRwbGF5ZXJzPXt0aGlzLnByb3BzLnBsYXllcnN9XG5cdFx0XHRcdFx0XHRcdGdhbWU9e3RoaXMucHJvcHMuZ2FtZX1cblx0XHRcdFx0XHRcdFx0Z2FtZVN0YXR1cz17dGhpcy5wcm9wcy5nYW1lU3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRhZGRQbGF5ZXI9e3RoaXMucHJvcHMuYWRkUGxheWVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJwbGF5ZXJzXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMucGxheWVycy5tYXAocGxheWVyID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8UGxheWVyIGtleT17cGxheWVyLm5hbWV9IHBsYXllcj17cGxheWVyfSAvPjtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0cGxheWVyczogZ2V0UGxheWVycyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0eyBhZGRQbGF5ZXIsIHN0YXJ0Q29tcGFueSwgYWNxdWlyZVByaXZhdGVDb21wYW55IH1cbikoUGxheWVycyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiXSwic291cmNlUm9vdCI6IiJ9
