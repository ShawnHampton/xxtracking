webpackHotUpdate(0, {
	/***/ './node_modules/@material-ui/core/ListItemText/ListItemText.js':
		/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/ListItemText/ListItemText.js ***!
  \*********************************************************************/
		/*! dynamic exports provided */
		/*! all exports used */
		/***/ function(module, exports, __webpack_require__) {
			'use strict';
			/* WEBPACK VAR INJECTION */ (function(process) {
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
				);

				Object.defineProperty(exports, '__esModule', {
					value: true
				});
				exports.default = exports.styles = void 0;

				var _extends2 = _interopRequireDefault(
					__webpack_require__(
						/*! @babel/runtime/helpers/extends */ './node_modules/@babel/runtime/helpers/extends.js'
					)
				);

				var _defineProperty2 = _interopRequireDefault(
					__webpack_require__(
						/*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js'
					)
				);

				var _objectWithoutProperties2 = _interopRequireDefault(
					__webpack_require__(
						/*! @babel/runtime/helpers/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/objectWithoutProperties.js'
					)
				);

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ './node_modules/react/index.js')
				);

				var _propTypes = _interopRequireDefault(
					__webpack_require__(
						/*! prop-types */ './node_modules/prop-types/index.js'
					)
				);

				var _classnames = _interopRequireDefault(
					__webpack_require__(
						/*! classnames */ './node_modules/classnames/index.js'
					)
				);

				var _withStyles = _interopRequireDefault(
					__webpack_require__(
						/*! ../styles/withStyles */ './node_modules/@material-ui/core/styles/withStyles.js'
					)
				);

				var _Typography = _interopRequireDefault(
					__webpack_require__(
						/*! ../Typography */ './node_modules/@material-ui/core/Typography/index.js'
					)
				);

				var styles = function styles(theme) {
					return {
						/* Styles applied to the root element. */
						root: {
							flex: '1 1 auto',
							minWidth: 0,
							padding: '0 16px',
							'&:first-child': {
								paddingLeft: 0
							}
						},

						/* Styles applied to the root element if `inset={true}`. */
						inset: {
							'&:first-child': {
								paddingLeft: 56
							}
						},

						/* Styles applied to the root element if `context.dense` is `true`. */
						dense: {
							fontSize: theme.typography.pxToRem(13)
						},

						/* Styles applied to the primary `Typography` component. */
						primary: {
							'&$textDense': {
								fontSize: 'inherit'
							}
						},

						/* Styles applied to the secondary `Typography` component. */
						secondary: {
							'&$textDense': {
								fontSize: 'inherit'
							}
						},

						/* Styles applied to the `Typography` components if `context.dense` is `true`. */
						textDense: {}
					};
				};

				exports.styles = styles;

				function ListItemText(props, context) {
					var _classNames3;

					var children = props.children,
						classes = props.classes,
						classNameProp = props.className,
						disableTypography = props.disableTypography,
						inset = props.inset,
						primaryProp = props.primary,
						primaryTypographyProps = props.primaryTypographyProps,
						secondaryProp = props.secondary,
						secondaryTypographyProps = props.secondaryTypographyProps,
						other = (0, _objectWithoutProperties2.default)(props, [
							'children',
							'classes',
							'className',
							'disableTypography',
							'inset',
							'primary',
							'primaryTypographyProps',
							'secondary',
							'secondaryTypographyProps'
						]);
					var dense = context.dense;
					var primary = primaryProp != null ? primaryProp : children;

					if (
						primary != null &&
						primary.type !== _Typography.default &&
						!disableTypography
					) {
						primary = _react.default.createElement(
							_Typography.default,
							(0, _extends2.default)(
								{
									variant: 'subheading',
									className: (0, _classnames.default)(
										classes.primary,
										(0, _defineProperty2.default)({}, classes.textDense, dense)
									),
									component: 'span'
								},
								primaryTypographyProps
							),
							primary
						);
					}

					var secondary = secondaryProp;

					if (
						secondary != null &&
						secondary.type !== _Typography.default &&
						!disableTypography
					) {
						secondary = _react.default.createElement(
							_Typography.default,
							(0, _extends2.default)(
								{
									variant: 'body1',
									className: (0, _classnames.default)(
										classes.secondary,
										(0, _defineProperty2.default)({}, classes.textDense, dense)
									),
									color: 'textSecondary'
								},
								secondaryTypographyProps
							),
							secondary
						);
					}

					return _react.default.createElement(
						'div',
						(0, _extends2.default)(
							{
								className: (0, _classnames.default)(
									classes.root,
									((_classNames3 = {}),
									(0, _defineProperty2.default)(
										_classNames3,
										classes.dense,
										dense
									),
									(0, _defineProperty2.default)(
										_classNames3,
										classes.inset,
										inset
									),
									_classNames3),
									classNameProp
								)
							},
							other
						),
						primary,
						secondary
					);
				}

				ListItemText.propTypes =
					process.env.NODE_ENV !== 'production'
						? {
								/**
								 * Alias for the `primary` property.
								 */
								children: _propTypes.default.node,

								/**
								 * Override or extend the styles applied to the component.
								 * See [CSS API](#css-api) below for more details.
								 */
								classes: _propTypes.default.object.isRequired,

								/**
								 * @ignore
								 */
								className: _propTypes.default.string,

								/**
								 * If `true`, the children won't be wrapped by a Typography component.
								 * This can be useful to render an alternative Typography variant by wrapping
								 * the `children` (or `primary`) text, and optional `secondary` text
								 * with the Typography component.
								 */
								disableTypography: _propTypes.default.bool,

								/**
								 * If `true`, the children will be indented.
								 * This should be used if there is no left avatar or left icon.
								 */
								inset: _propTypes.default.bool,

								/**
								 * The main content element.
								 */
								primary: _propTypes.default.node,

								/**
								 * These props will be forwarded to the primary typography component
								 * (as long as disableTypography is not `true`).
								 */
								primaryTypographyProps: _propTypes.default.object,

								/**
								 * The secondary content element.
								 */
								secondary: _propTypes.default.node,

								/**
								 * These props will be forwarded to the secondary typography component
								 * (as long as disableTypography is not `true`).
								 */
								secondaryTypographyProps: _propTypes.default.object
						  }
						: {};
				ListItemText.defaultProps = {
					disableTypography: false,
					inset: false
				};
				ListItemText.contextTypes = {
					dense: _propTypes.default.bool
				};

				var _default = (0, _withStyles.default)(styles, {
					name: 'MuiListItemText'
				})(ListItemText);

				exports.default = _default;
				/* WEBPACK VAR INJECTION */
			}.call(
				exports,
				__webpack_require__(
					/*! ./../../../process/browser.js */ './node_modules/process/browser.js'
				)
			));

			/***/
		},

	/***/ './node_modules/@material-ui/core/ListItemText/index.js':
		/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/ListItemText/index.js ***!
  \**************************************************************/
		/*! dynamic exports provided */
		/***/ function(module, exports, __webpack_require__) {
			'use strict';

			var _interopRequireDefault = __webpack_require__(
				/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
			);

			Object.defineProperty(exports, '__esModule', {
				value: true
			});
			Object.defineProperty(exports, 'default', {
				enumerable: true,
				get: function get() {
					return _ListItemText.default;
				}
			});

			var _ListItemText = _interopRequireDefault(
				__webpack_require__(
					/*! ./ListItemText */ './node_modules/@material-ui/core/ListItemText/ListItemText.js'
				)
			);

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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem__ = __webpack_require__(
				/*! @material-ui/core/ListItem */ './node_modules/@material-ui/core/ListItem/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_List__ = __webpack_require__(
				/*! @material-ui/core/List */ './node_modules/@material-ui/core/List/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_List___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_List__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__ = __webpack_require__(
				/*! @material-ui/core/ListItemText */ './node_modules/@material-ui/core/ListItemText/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar__ = __webpack_require__(
				/*! @material-ui/core/Avatar */ './node_modules/@material-ui/core/Avatar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button__ = __webpack_require__(
				/*! @material-ui/core/Button */ './node_modules/@material-ui/core/Button/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gameChooser__ = __webpack_require__(
				/*! ./gameChooser */ './src/client/modules/main/gameChooser.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__player_players__ = __webpack_require__(
				/*! ../player/players */ './src/client/modules/player/players.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__company_companies__ = __webpack_require__(
				/*! ../company/companies */ './src/client/modules/company/companies.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__scores_scores__ = __webpack_require__(
				/*! ../scores/scores */ './src/client/modules/scores/scores.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__game_roundManager__ = __webpack_require__(
				/*! ../game/roundManager */ './src/client/modules/game/roundManager.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__game_selectors__ = __webpack_require__(
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
											__WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													'xxScoreKeeper'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											Paper,
											null,
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar___default.a,
												{ position: 'static', className: 'mainAppBar' },
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar___default.a,
													null,
													__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a,
														{ variant: 'title', className: 'title' },
														'Saved Plays'
													),
													__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_14__gameChooser__[
															'a' /* default */
														],
														null
													)
												)
											),
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_7__material_ui_core_List___default.a,
												null,
												this.props.plays.map(function(play) {
													return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItem___default.a,
														{ key: play.id }
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
											__WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default.a,
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
											__WEBPACK_IMPORTED_MODULE_15__player_players__[
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
											__WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_18__game_roundManager__[
														'a' /* default */
													],
													null
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default.a,
													{ onClick: this.props.stopGame },
													'Finish Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_15__player_players__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_16__company_companies__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_17__scores_scores__[
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
											__WEBPACK_IMPORTED_MODULE_11__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default.a,
													{ onClick: this.props.startGame },
													'Restart Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_15__player_players__[
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
						__WEBPACK_IMPORTED_MODULE_21__player_selectors__[
							'b' /* getPlayers */
						]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_20__selectors__['a' /* getGameStatus */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_22__game_selectors__['b' /* getGame */]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_22__game_selectors__['d' /* getPlay */]
					)(state),
					plays: Object(
						__WEBPACK_IMPORTED_MODULE_20__selectors__['b' /* getPlays */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				startGame: __WEBPACK_IMPORTED_MODULE_19__actions__['c' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_19__actions__['d' /* stopGame */]
			})(Main);

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0L0xpc3RJdGVtVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwiZ2FtZVN0YXR1cyIsInN0YXRlIiwicGxheXMiLCJtYXAiLCJwbGF5IiwiaWQiLCJnYW1lIiwibmFtZSIsInN0YXJ0R2FtZSIsInBsYXllcnMiLCJsZW5ndGgiLCJtaW5QbGF5ZXJzIiwic3RvcEdhbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJnZXRQbGF5ZXJzIiwiZ2V0R2FtZVN0YXR1cyIsImdldEdhbWUiLCJnZXRQbGF5IiwiZ2V0UGxheXMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzsrQ0FBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esd0VBQXdFO0FBQ3hFLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkI7Ozs7Ozs7Ozs7Ozs7QUM5S0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1Sjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBYUEsSUFBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkJBQ1U7QUFDUixPQUFJLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkMsS0FBdEIsS0FBZ0MsS0FBcEMsRUFBMkM7QUFDMUMsV0FDQztBQUFBO0FBQUEsT0FBSyxJQUFHLE1BQVI7QUFDQztBQUFDLHVFQUFEO0FBQUEsUUFBUSxVQUFTLFFBQWpCLEVBQTBCLFdBQVUsWUFBcEM7QUFDQztBQUFDLHlFQUFEO0FBQUE7QUFDQztBQUFDLDZFQUFEO0FBQUEsVUFBWSxTQUFRLE9BQXBCLEVBQTRCLFdBQVUsT0FBdEM7QUFBQTtBQUFBO0FBREQ7QUFERCxNQUREO0FBU0M7QUFBQyxXQUFEO0FBQUE7QUFDQztBQUFDLHdFQUFEO0FBQUEsU0FBUSxVQUFTLFFBQWpCLEVBQTBCLFdBQVUsWUFBcEM7QUFDQztBQUFDLDBFQUFEO0FBQUE7QUFDQztBQUFDLDhFQUFEO0FBQUEsV0FBWSxTQUFRLE9BQXBCLEVBQTRCLFdBQVUsT0FBdEM7QUFBQTtBQUFBLFNBREQ7QUFJQyxvRUFBQyw4REFBRDtBQUpEO0FBREQsT0FERDtBQVVDO0FBQUMscUVBQUQ7QUFBQTtBQUNFLFlBQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9CLGVBQ0MsNERBQUMsa0VBQUQsSUFBVSxLQUFLQSxLQUFLQyxFQUFwQixHQUREO0FBS0EsUUFOQTtBQURGO0FBVkQ7QUFURCxLQUREO0FBZ0NBLElBakNELE1BaUNPLElBQUksS0FBS04sS0FBTCxDQUFXQyxVQUFYLENBQXNCQyxLQUF0QixLQUFnQyxPQUFwQyxFQUE2QztBQUNuRCxXQUNDO0FBQUE7QUFBQSxPQUFLLElBQUcsTUFBUjtBQUNDO0FBQUMsdUVBQUQ7QUFBQSxRQUFRLFVBQVMsUUFBakIsRUFBMEIsV0FBVSxZQUFwQztBQUNDO0FBQUMseUVBQUQ7QUFBQTtBQUNDO0FBQUMsNkVBQUQ7QUFBQSxVQUFZLFNBQVEsT0FBcEIsRUFBNEIsV0FBVSxPQUF0QztBQUNFLGFBQUtGLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkM7QUFEbEIsUUFERDtBQUlDO0FBQUMseUVBQUQ7QUFBQTtBQUNDLGtCQUFTLEtBQUtSLEtBQUwsQ0FBV1MsU0FEckI7QUFFQyxtQkFDQyxLQUFLVCxLQUFMLENBQVdVLE9BQVgsQ0FBbUJDLE1BQW5CLEdBQTRCLEtBQUtYLEtBQUwsQ0FBV08sSUFBWCxDQUFnQks7QUFIOUM7QUFBQTtBQUFBO0FBSkQ7QUFERCxNQUREO0FBZ0JDLGlFQUFDLGlFQUFEO0FBaEJELEtBREQ7QUFvQkEsSUFyQk0sTUFxQkEsSUFBSSxLQUFLWixLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLEtBQXRCLEtBQWdDLFNBQXBDLEVBQStDO0FBQ3JELFdBQ0M7QUFBQTtBQUFBLE9BQUssSUFBRyxNQUFSO0FBQ0M7QUFBQyx1RUFBRDtBQUFBLFFBQVEsVUFBUyxRQUFqQixFQUEwQixXQUFVLFlBQXBDO0FBQ0M7QUFBQyx5RUFBRDtBQUFBO0FBQ0M7QUFBQyw2RUFBRDtBQUFBLFVBQVksU0FBUSxPQUFwQixFQUE0QixXQUFVLE9BQXRDO0FBQ0UsYUFBS0YsS0FBTCxDQUFXTyxJQUFYLENBQWdCQztBQURsQixRQUREO0FBSUMsbUVBQUMsb0VBQUQsT0FKRDtBQUtDO0FBQUMseUVBQUQ7QUFBQSxVQUFRLFNBQVMsS0FBS1IsS0FBTCxDQUFXYSxRQUE1QjtBQUFBO0FBQUE7QUFMRDtBQURELE1BREQ7QUFVQyxpRUFBQyxpRUFBRCxPQVZEO0FBV0MsaUVBQUMsb0VBQUQsT0FYRDtBQVlDLGlFQUFDLGdFQUFEO0FBWkQsS0FERDtBQWdCQSxJQWpCTSxNQWlCQTtBQUNOLFdBQ0M7QUFBQTtBQUFBLE9BQUssSUFBRyxNQUFSO0FBQ0M7QUFBQyx1RUFBRDtBQUFBLFFBQVEsVUFBUyxRQUFqQixFQUEwQixXQUFVLFlBQXBDO0FBQ0M7QUFBQyx5RUFBRDtBQUFBO0FBQ0M7QUFBQyw2RUFBRDtBQUFBLFVBQVksU0FBUSxPQUFwQixFQUE0QixXQUFVLE9BQXRDO0FBQ0UsYUFBS2IsS0FBTCxDQUFXTyxJQUFYLENBQWdCQztBQURsQixRQUREO0FBSUM7QUFBQyx5RUFBRDtBQUFBLFVBQVEsU0FBUyxLQUFLUixLQUFMLENBQVdTLFNBQTVCO0FBQUE7QUFBQTtBQUpEO0FBREQsTUFERDtBQVNDLGlFQUFDLGlFQUFEO0FBVEQsS0FERDtBQWFBO0FBQ0Q7QUF4RkY7O0FBQUE7QUFBQSxFQUEwQiw2Q0FBQUssQ0FBTUMsYUFBaEM7O0FBMkZBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2QsS0FBRCxFQUFRRixLQUFSO0FBQUEsUUFBbUI7QUFDMUNVLFdBQVMsOEVBQUFPLENBQVdmLEtBQVgsQ0FEaUM7QUFFMUNELGNBQVksMEVBQUFpQixDQUFjaEIsS0FBZCxDQUY4QjtBQUcxQ0ssUUFBTSx5RUFBQVksQ0FBUWpCLEtBQVIsQ0FIb0M7QUFJMUNHLFFBQU0seUVBQUFlLENBQVFsQixLQUFSLENBSm9DO0FBSzFDQyxTQUFPLHFFQUFBa0IsQ0FBU25CLEtBQVQ7QUFMbUMsRUFBbkI7QUFBQSxDQUF4Qjs7QUFRQSx5REFBZSxvRUFBQW9CLENBQ2ROLGVBRGMsRUFFZCxFQUFFUCxXQUFBLDREQUFGLEVBQWFJLFVBQUEsMkRBQWIsRUFGYyxFQUdiZCxJQUhhLENBQWYsRSIsImZpbGUiOiIwLmU1M2VmMDdhNmE2ZDk5YzhhNWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLnN0eWxlcyA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3dpdGhTdHlsZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdHlsZXMvd2l0aFN0eWxlc1wiKSk7XG5cbnZhciBfVHlwb2dyYXBoeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL1R5cG9ncmFwaHlcIikpO1xuXG52YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogMFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnNldD17dHJ1ZX1gLiAqL1xuICAgIGluc2V0OiB7XG4gICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDU2XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbnRleHQuZGVuc2VgIGlzIGB0cnVlYC4gKi9cbiAgICBkZW5zZToge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHByaW1hcnkgYFR5cG9ncmFwaHlgIGNvbXBvbmVudC4gKi9cbiAgICBwcmltYXJ5OiB7XG4gICAgICAnJiR0ZXh0RGVuc2UnOiB7XG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlY29uZGFyeSBgVHlwb2dyYXBoeWAgY29tcG9uZW50LiAqL1xuICAgIHNlY29uZGFyeToge1xuICAgICAgJyYkdGV4dERlbnNlJzoge1xuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgVHlwb2dyYXBoeWAgY29tcG9uZW50cyBpZiBgY29udGV4dC5kZW5zZWAgaXMgYHRydWVgLiAqL1xuICAgIHRleHREZW5zZToge31cbiAgfTtcbn07XG5cbmV4cG9ydHMuc3R5bGVzID0gc3R5bGVzO1xuXG5mdW5jdGlvbiBMaXN0SXRlbVRleHQocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIF9jbGFzc05hbWVzMztcblxuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVUeXBvZ3JhcGh5ID0gcHJvcHMuZGlzYWJsZVR5cG9ncmFwaHksXG4gICAgICBpbnNldCA9IHByb3BzLmluc2V0LFxuICAgICAgcHJpbWFyeVByb3AgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcyA9IHByb3BzLnByaW1hcnlUeXBvZ3JhcGh5UHJvcHMsXG4gICAgICBzZWNvbmRhcnlQcm9wID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzID0gcHJvcHMuc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZVR5cG9ncmFwaHlcIiwgXCJpbnNldFwiLCBcInByaW1hcnlcIiwgXCJwcmltYXJ5VHlwb2dyYXBoeVByb3BzXCIsIFwic2Vjb25kYXJ5XCIsIFwic2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzXCJdKTtcbiAgdmFyIGRlbnNlID0gY29udGV4dC5kZW5zZTtcbiAgdmFyIHByaW1hcnkgPSBwcmltYXJ5UHJvcCAhPSBudWxsID8gcHJpbWFyeVByb3AgOiBjaGlsZHJlbjtcblxuICBpZiAocHJpbWFyeSAhPSBudWxsICYmIHByaW1hcnkudHlwZSAhPT0gX1R5cG9ncmFwaHkuZGVmYXVsdCAmJiAhZGlzYWJsZVR5cG9ncmFwaHkpIHtcbiAgICBwcmltYXJ5ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHlwb2dyYXBoeS5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAgIHZhcmlhbnQ6IFwic3ViaGVhZGluZ1wiLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3Nlcy5wcmltYXJ5LCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh7fSwgY2xhc3Nlcy50ZXh0RGVuc2UsIGRlbnNlKSksXG4gICAgICBjb21wb25lbnQ6IFwic3BhblwiXG4gICAgfSwgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcyksIHByaW1hcnkpO1xuICB9XG5cbiAgdmFyIHNlY29uZGFyeSA9IHNlY29uZGFyeVByb3A7XG5cbiAgaWYgKHNlY29uZGFyeSAhPSBudWxsICYmIHNlY29uZGFyeS50eXBlICE9PSBfVHlwb2dyYXBoeS5kZWZhdWx0ICYmICFkaXNhYmxlVHlwb2dyYXBoeSkge1xuICAgIHNlY29uZGFyeSA9IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1R5cG9ncmFwaHkuZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgICB2YXJpYW50OiBcImJvZHkxXCIsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc2VzLnNlY29uZGFyeSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoe30sIGNsYXNzZXMudGV4dERlbnNlLCBkZW5zZSkpLFxuICAgICAgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiXG4gICAgfSwgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzKSwgc2Vjb25kYXJ5KTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzZXMucm9vdCwgKF9jbGFzc05hbWVzMyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lczMsIGNsYXNzZXMuZGVuc2UsIGRlbnNlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMzLCBjbGFzc2VzLmluc2V0LCBpbnNldCksIF9jbGFzc05hbWVzMyksIGNsYXNzTmFtZVByb3ApXG4gIH0sIG90aGVyKSwgcHJpbWFyeSwgc2Vjb25kYXJ5KTtcbn1cblxuTGlzdEl0ZW1UZXh0LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEFsaWFzIGZvciB0aGUgYHByaW1hcnlgIHByb3BlcnR5LlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpbGRyZW4gd29uJ3QgYmUgd3JhcHBlZCBieSBhIFR5cG9ncmFwaHkgY29tcG9uZW50LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gcmVuZGVyIGFuIGFsdGVybmF0aXZlIFR5cG9ncmFwaHkgdmFyaWFudCBieSB3cmFwcGluZ1xuICAgKiB0aGUgYGNoaWxkcmVuYCAob3IgYHByaW1hcnlgKSB0ZXh0LCBhbmQgb3B0aW9uYWwgYHNlY29uZGFyeWAgdGV4dFxuICAgKiB3aXRoIHRoZSBUeXBvZ3JhcGh5IGNvbXBvbmVudC5cbiAgICovXG4gIGRpc2FibGVUeXBvZ3JhcGh5OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpbGRyZW4gd2lsbCBiZSBpbmRlbnRlZC5cbiAgICogVGhpcyBzaG91bGQgYmUgdXNlZCBpZiB0aGVyZSBpcyBubyBsZWZ0IGF2YXRhciBvciBsZWZ0IGljb24uXG4gICAqL1xuICBpbnNldDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIHByaW1hcnk6IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wcyB3aWxsIGJlIGZvcndhcmRlZCB0byB0aGUgcHJpbWFyeSB0eXBvZ3JhcGh5IGNvbXBvbmVudFxuICAgKiAoYXMgbG9uZyBhcyBkaXNhYmxlVHlwb2dyYXBoeSBpcyBub3QgYHRydWVgKS5cbiAgICovXG4gIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBzZWNvbmRhcnkgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSxcblxuICAvKipcbiAgICogVGhlc2UgcHJvcHMgd2lsbCBiZSBmb3J3YXJkZWQgdG8gdGhlIHNlY29uZGFyeSB0eXBvZ3JhcGh5IGNvbXBvbmVudFxuICAgKiAoYXMgbG9uZyBhcyBkaXNhYmxlVHlwb2dyYXBoeSBpcyBub3QgYHRydWVgKS5cbiAgICovXG4gIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wczogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuTGlzdEl0ZW1UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZVR5cG9ncmFwaHk6IGZhbHNlLFxuICBpbnNldDogZmFsc2Vcbn07XG5MaXN0SXRlbVRleHQuY29udGV4dFR5cGVzID0ge1xuICBkZW5zZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2xcbn07XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfd2l0aFN0eWxlcy5kZWZhdWx0KShzdHlsZXMsIHtcbiAgbmFtZTogJ011aUxpc3RJdGVtVGV4dCdcbn0pKExpc3RJdGVtVGV4dCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dC9MaXN0SXRlbVRleHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dC9MaXN0SXRlbVRleHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTGlzdEl0ZW1UZXh0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0xpc3RJdGVtVGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTGlzdEl0ZW1UZXh0XCIpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IEdhbWVDaG9vc2VyIGZyb20gJy4vZ2FtZUNob29zZXInO1xuaW1wb3J0IFBsYXllcnMgZnJvbSAnLi4vcGxheWVyL3BsYXllcnMnO1xuaW1wb3J0IENvbXBhbmllcyBmcm9tICcuLi9jb21wYW55L2NvbXBhbmllcyc7XG5pbXBvcnQgU2NvcmVzIGZyb20gJy4uL3Njb3Jlcy9zY29yZXMnO1xuaW1wb3J0IFJvdW5kTWFuYWdlciBmcm9tICcuLi9nYW1lL3JvdW5kTWFuYWdlcic7XG5cbmltcG9ydCB7IHN0YXJ0R2FtZSwgc3RvcEdhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtnZXRHYW1lU3RhdHVzLCBnZXRQbGF5c30gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0UGxheWVycyB9IGZyb20gJy4uL3BsYXllci9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0R2FtZSwgZ2V0UGxheSB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmdhbWVTdGF0dXMuc3RhdGUgPT09ICduZXcnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR4eFNjb3JlS2VlcGVyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XG5cdFx0XHRcdFx0PFBhcGVyPlxuXHRcdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFNhdmVkIFBsYXlzXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHRcdDxHYW1lQ2hvb3NlciAvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdFx0PExpc3Q+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXlzLm1hcCgocGxheSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0ga2V5PXtwbGF5LmlkfT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0XHRcdDwvUGFwZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3JlYWR5Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoIDwgdGhpcy5wcm9wcy5nYW1lLm1pblBsYXllcnNcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRTdGFydCBHYW1lXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlciAvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RvcEdhbWV9PkZpbmlzaCBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMgLz5cblx0XHRcdFx0XHQ8Q29tcGFuaWVzIC8+XG5cdFx0XHRcdFx0PFNjb3JlcyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RhcnRHYW1lfT5SZXN0YXJ0IEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpLFxuXHRwbGF5czogZ2V0UGxheXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IHN0YXJ0R2FtZSwgc3RvcEdhbWUgfVxuKShNYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9
