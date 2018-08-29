webpackHotUpdate(0, {
	/***/ './node_modules/@material-ui/icons/Image.js':
		/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Image.js ***!
  \**************************************************/
		/*! dynamic exports provided */
		/***/ function(module, exports, __webpack_require__) {
			'use strict';

			var _interopRequireDefault = __webpack_require__(
				/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
			);

			Object.defineProperty(exports, '__esModule', {
				value: true
			});
			exports.default = void 0;

			var _react = _interopRequireDefault(
				__webpack_require__(/*! react */ './node_modules/react/index.js')
			);

			var _createSvgIcon = _interopRequireDefault(
				__webpack_require__(
					/*! ./utils/createSvgIcon */ './node_modules/@material-ui/icons/utils/createSvgIcon.js'
				)
			);

			var _default = (0, _createSvgIcon.default)(
				_react.default.createElement(
					_react.default.Fragment,
					null,
					_react.default.createElement('path', {
						fill: 'none',
						d: 'M0 0h24v24H0z'
					}),
					_react.default.createElement('path', {
						d:
							'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'
					})
				),
				'Image'
			);

			exports.default = _default;

			/***/
		},

	/***/ './node_modules/@material-ui/icons/utils/createSvgIcon.js':
		/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
		/*! dynamic exports provided */
		/*! all exports used */
		/***/ function(module, exports, __webpack_require__) {
			'use strict';

			var _interopRequireDefault = __webpack_require__(
				/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js'
			);

			Object.defineProperty(exports, '__esModule', {
				value: true
			});
			exports.default = void 0;

			var _react = _interopRequireDefault(
				__webpack_require__(/*! react */ './node_modules/react/index.js')
			);

			var _pure = _interopRequireDefault(
				__webpack_require__(
					/*! recompose/pure */ './node_modules/recompose/pure.js'
				)
			);

			var _SvgIcon = _interopRequireDefault(
				__webpack_require__(
					/*! @material-ui/core/SvgIcon */ './node_modules/@material-ui/core/SvgIcon/index.js'
				)
			);

			function createSvgIcon(path, displayName) {
				var Icon = function Icon(props) {
					return _react.default.createElement(_SvgIcon.default, props, path);
				};

				Icon.displayName = displayName;
				Icon = (0, _pure.default)(Icon);
				Icon.muiName = 'SvgIcon';
				return Icon;
			}

			var _default = createSvgIcon;
			exports.default = _default;

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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Image__ = __webpack_require__(
				/*! @material-ui/icons/Image */ './node_modules/@material-ui/icons/Image.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Image___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_10__material_ui_icons_Image__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Button__ = __webpack_require__(
				/*! @material-ui/core/Button */ './node_modules/@material-ui/core/Button/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Button___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Button__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar__ = __webpack_require__(
				/*! @material-ui/core/AppBar */ './node_modules/@material-ui/core/AppBar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar__ = __webpack_require__(
				/*! @material-ui/core/Toolbar */ './node_modules/@material-ui/core/Toolbar/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography__ = __webpack_require__(
				/*! @material-ui/core/Typography */ './node_modules/@material-ui/core/Typography/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gameChooser__ = __webpack_require__(
				/*! ./gameChooser */ './src/client/modules/main/gameChooser.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__player_players__ = __webpack_require__(
				/*! ../player/players */ './src/client/modules/player/players.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__company_companies__ = __webpack_require__(
				/*! ../company/companies */ './src/client/modules/company/companies.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__scores_scores__ = __webpack_require__(
				/*! ../scores/scores */ './src/client/modules/scores/scores.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__game_roundManager__ = __webpack_require__(
				/*! ../game/roundManager */ './src/client/modules/game/roundManager.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__player_selectors__ = __webpack_require__(
				/*! ../player/selectors */ './src/client/modules/player/selectors.js'
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
								if (this.props.gameStatus.state === 'new') {
									return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										'div',
										{ id: 'main' },
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													'xxScoreKeeper'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											Paper,
											null,
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar___default.a,
												{ position: 'static', className: 'mainAppBar' },
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar___default.a,
													null,
													__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography___default.a,
														{ variant: 'title', className: 'title' },
														'Saved Plays'
													),
													__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
														__WEBPACK_IMPORTED_MODULE_15__gameChooser__[
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
											__WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Button___default.a,
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
											__WEBPACK_IMPORTED_MODULE_16__player_players__[
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
											__WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_19__game_roundManager__[
														'a' /* default */
													],
													null
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Button___default.a,
													{ onClick: this.props.stopGame },
													'Finish Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_16__player_players__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_17__company_companies__[
												'a' /* default */
											],
											null
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_18__scores_scores__[
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
											__WEBPACK_IMPORTED_MODULE_12__material_ui_core_AppBar___default.a,
											{ position: 'static', className: 'mainAppBar' },
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_13__material_ui_core_Toolbar___default.a,
												null,
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_14__material_ui_core_Typography___default.a,
													{ variant: 'title', className: 'title' },
													this.props.game.name
												),
												__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
													__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Button___default.a,
													{ onClick: this.props.startGame },
													'Restart Game'
												)
											)
										),
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_16__player_players__[
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
						__WEBPACK_IMPORTED_MODULE_22__player_selectors__[
							'b' /* getPlayers */
						]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_21__selectors__['a' /* getGameStatus */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_23__game_selectors__['b' /* getGame */]
					)(state),
					play: Object(
						__WEBPACK_IMPORTED_MODULE_23__game_selectors__['d' /* getPlay */]
					)(state),
					plays: Object(
						__WEBPACK_IMPORTED_MODULE_21__selectors__['b' /* getPlays */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				startGame: __WEBPACK_IMPORTED_MODULE_20__actions__['c' /* startGame */],
				stopGame: __WEBPACK_IMPORTED_MODULE_20__actions__['d' /* stopGame */]
			})(Main);

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvdXRpbHMvY3JlYXRlU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9tYWluLmpzIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsImdhbWVTdGF0dXMiLCJzdGF0ZSIsInBsYXlzIiwibWFwIiwicGxheSIsImlkIiwiZ2FtZSIsIm5hbWUiLCJzdGFydEdhbWUiLCJwbGF5ZXJzIiwibGVuZ3RoIiwibWluUGxheWVycyIsInN0b3BHYW1lIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZ2V0UGxheWVycyIsImdldEdhbWVTdGF0dXMiLCJnZXRHYW1lIiwiZ2V0UGxheSIsImdldFBsYXlzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRCwyQjs7Ozs7Ozs7Ozs7OztBQ3BCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQWFBLElBQWI7QUFBQTs7QUFBQTtBQUFBOztB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QUFEbEIsUUFERDtBQUlDO0FBQUMseUVBQUQ7QUFBQSxVQUFRLFNBQVMsS0FBS1IsS0FBTCxDQUFXUyxTQUE1QjtBQUFBO0FBQUE7QUFKRDtBQURELE1BREQ7QUFTQyxpRUFBQyxpRUFBRDtBQVRELEtBREQ7QUFhQTtBQUNEO0FBeEZGOztBQUFBO0FBQUEsRUFBMEIsNkNBQUFLLENBQU1DLGFBQWhDOztBQTJGQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNkLEtBQUQsRUFBUUYsS0FBUjtBQUFBLFFBQW1CO0FBQzFDVSxXQUFTLDhFQUFBTyxDQUFXZixLQUFYLENBRGlDO0FBRTFDRCxjQUFZLDBFQUFBaUIsQ0FBY2hCLEtBQWQsQ0FGOEI7QUFHMUNLLFFBQU0seUVBQUFZLENBQVFqQixLQUFSLENBSG9DO0FBSTFDRyxRQUFNLHlFQUFBZSxDQUFRbEIsS0FBUixDQUpvQztBQUsxQ0MsU0FBTyxxRUFBQWtCLENBQVNuQixLQUFUO0FBTG1DLEVBQW5CO0FBQUEsQ0FBeEI7O0FBUUEseURBQWUsb0VBQUFvQixDQUNkTixlQURjLEVBRWQsRUFBRVAsV0FBQSw0REFBRixFQUFhSSxVQUFBLDJEQUFiLEVBRmMsRUFHYmQsSUFIYSxDQUFmLEUiLCJmaWxlIjoiMC43MTZkMDVhOGY2YmQwYjQyMGE3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsOiBcIm5vbmVcIixcbiAgZDogXCJNMCAwaDI0djI0SDB6XCJcbn0pLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCJcbn0pKSwgJ0ltYWdlJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9JbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wdXJlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVjb21wb3NlL3B1cmVcIikpO1xuXG52YXIgX1N2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uXCIpKTtcblxuZnVuY3Rpb24gY3JlYXRlU3ZnSWNvbihwYXRoLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgSWNvbiA9IGZ1bmN0aW9uIEljb24ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU3ZnSWNvbi5kZWZhdWx0LCBwcm9wcywgcGF0aCk7XG4gIH07XG5cbiAgSWNvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICBJY29uID0gKDAsIF9wdXJlLmRlZmF1bHQpKEljb24pO1xuICBJY29uLm11aU5hbWUgPSAnU3ZnSWNvbic7XG4gIHJldHVybiBJY29uO1xufVxuXG47XG52YXIgX2RlZmF1bHQgPSBjcmVhdGVTdmdJY29uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy91dGlscy9jcmVhdGVTdmdJY29uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgSW1hZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgR2FtZUNob29zZXIgZnJvbSAnLi9nYW1lQ2hvb3Nlcic7XG5pbXBvcnQgUGxheWVycyBmcm9tICcuLi9wbGF5ZXIvcGxheWVycyc7XG5pbXBvcnQgQ29tcGFuaWVzIGZyb20gJy4uL2NvbXBhbnkvY29tcGFuaWVzJztcbmltcG9ydCBTY29yZXMgZnJvbSAnLi4vc2NvcmVzL3Njb3Jlcyc7XG5pbXBvcnQgUm91bmRNYW5hZ2VyIGZyb20gJy4uL2dhbWUvcm91bmRNYW5hZ2VyJztcblxuaW1wb3J0IHsgc3RhcnRHYW1lLCBzdG9wR2FtZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2dldEdhbWVTdGF0dXMsIGdldFBsYXlzfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRQbGF5ZXJzIH0gZnJvbSAnLi4vcGxheWVyL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBnZXRHYW1lLCBnZXRQbGF5IH0gZnJvbSAnLi4vZ2FtZS9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ25ldycpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHh4U2NvcmVLZWVwZXJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdFx0PFBhcGVyPlxuXHRcdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFNhdmVkIFBsYXlzXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHRcdDxHYW1lQ2hvb3NlciAvPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0XHQ8L0FwcEJhcj5cblxuXHRcdFx0XHRcdFx0PExpc3Q+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBsYXlzLm1hcCgocGxheSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0ga2V5PXtwbGF5LmlkfT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0XHRcdDwvUGFwZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3JlYWR5Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoIDwgdGhpcy5wcm9wcy5nYW1lLm1pblBsYXllcnNcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRTdGFydCBHYW1lXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlciAvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RvcEdhbWV9PkZpbmlzaCBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMgLz5cblx0XHRcdFx0XHQ8Q29tcGFuaWVzIC8+XG5cdFx0XHRcdFx0PFNjb3JlcyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RhcnRHYW1lfT5SZXN0YXJ0IEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpLFxuXHRwbGF5czogZ2V0UGxheXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IHN0YXJ0R2FtZSwgc3RvcEdhbWUgfVxuKShNYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9
