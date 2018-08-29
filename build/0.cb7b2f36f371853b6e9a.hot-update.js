webpackHotUpdate(0, {
	/***/ './src/client/modules/player/selectors.js': false,

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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__orChart__ = __webpack_require__(
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
										__WEBPACK_IMPORTED_MODULE_17__orChart__['a' /* default */],
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
						__WEBPACK_IMPORTED_MODULE_16__game_selectors__['f' /* getPlayers */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_4_react_redux__['b' /* connect */]
			)(mapStateToProps, {})(Scores);

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvc2NvcmVzL3Njb3Jlcy5qcyJdLCJuYW1lcyI6WyJTY29yZXMiLCJwcm9wcyIsIm9wZXJhdGluZ1JvdW5kIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNvbXBhbnkiLCJwbGF5ZXJzIiwicGxheWVyIiwiaSIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwicmVuZGVyU2NvcmVDYXJkIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJnZXRDdXJyZW50T3BlcmF0aW5nUm91bmQiLCJnZXRQbGF5ZXJzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQWFBLE1BQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9DQUNtQjtBQUFBOztBQUNqQixPQUFJLEtBQUtDLEtBQUwsQ0FBV0MsY0FBZixFQUErQjtBQUM5QixXQUNDO0FBQUMsbUVBQUQ7QUFBQSxPQUFNLFdBQVUsb0JBQWhCO0FBQ0M7QUFBQyxzRUFBRDtBQUFBO0FBQ0M7QUFBQywyRUFBRDtBQUFBO0FBQ0M7QUFBQywyRUFBRDtBQUFBO0FBQ0M7QUFBQyw2RUFBRDtBQUFBLFdBQVcsV0FBVSxJQUFyQixFQUEwQixPQUFNLEtBQWhDO0FBQUE7QUFBQSxTQUREO0FBSUVDLGVBQU9DLElBQVAsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLGNBQXZCLEVBQXVDRyxHQUF2QyxDQUEyQyxtQkFBVztBQUN0RCxnQkFBTztBQUFDLDhFQUFEO0FBQUEsWUFBVyxLQUFLQyxPQUFoQjtBQUEwQkE7QUFBMUIsVUFBUDtBQUNBLFNBRkEsQ0FKRjtBQU9DO0FBQUMsNkVBQUQ7QUFBQSxXQUFXLFdBQVUsSUFBckIsRUFBMEIsT0FBTSxLQUFoQztBQUFBO0FBQUE7QUFQRDtBQURELE9BREQ7QUFjQztBQUFDLDJFQUFEO0FBQUE7QUFDRSxZQUFLTCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJGLEdBQW5CLENBQXVCLFVBQUNHLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3RDLGVBQ0M7QUFBQyw0RUFBRDtBQUFBLFdBQVUsS0FBS0EsQ0FBZjtBQUNDO0FBQUMsOEVBQUQ7QUFBQSxZQUFXLFdBQVUsSUFBckIsRUFBMEIsT0FBTSxLQUFoQztBQUNFRCxpQkFBT0U7QUFEVCxVQUREO0FBSUVQLGdCQUFPQyxJQUFQLENBQVksT0FBS0gsS0FBTCxDQUFXQyxjQUF2QixFQUF1Q0csR0FBdkMsQ0FBMkMsbUJBQVc7QUFDdEQsaUJBQ0M7QUFBQywrRUFBRDtBQUFBLGFBQVcsS0FBS0MsT0FBaEI7QUFDRSxrQkFBS0wsS0FBTCxDQUFXQyxjQUFYLENBQTBCSSxPQUExQixFQUFtQ0UsT0FBT0UsSUFBMUM7QUFERixXQUREO0FBS0EsVUFOQSxDQUpGO0FBV0M7QUFBQyw4RUFBRDtBQUFBO0FBQ0VQLGlCQUFPQyxJQUFQLENBQVksT0FBS0gsS0FBTCxDQUFXQyxjQUF2QixFQUNDRyxHQURELENBQ0ssbUJBQVc7QUFDZixrQkFBTyxPQUFLSixLQUFMLENBQVdDLGNBQVgsQ0FBMEJJLE9BQTFCLEVBQ05FLE9BQU9FLElBREQsQ0FBUDtBQUdBLFdBTEQsRUFNQ0MsTUFORCxDQU1RLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ3RCLGtCQUFPRCxNQUFNQyxJQUFiO0FBQ0EsV0FSRDtBQURGO0FBWEQsU0FERDtBQXlCQSxRQTFCQTtBQURGO0FBZEQ7QUFERCxLQUREO0FBZ0RBOztBQUVELFVBQU8sSUFBUDtBQUNBO0FBdERGO0FBQUE7QUFBQSwyQkF3RFU7QUFDUixVQUNDO0FBQUMsbUVBQUQ7QUFBQSxNQUFPLElBQUcsUUFBVjtBQUNDO0FBQUMscUVBQUQ7QUFBQSxPQUFRLFVBQVMsUUFBakIsRUFBMEIsT0FBTSxTQUFoQztBQUNDO0FBQUMsdUVBQUQ7QUFBQSxRQUFTLFNBQVEsT0FBakI7QUFDQztBQUFDLDRFQUFEO0FBQUEsU0FBWSxTQUFRLE9BQXBCLEVBQTRCLFdBQVUsT0FBdEM7QUFBQTtBQUFBO0FBREQ7QUFERCxLQUREO0FBU0UsU0FBS0MsZUFBTCxFQVRGO0FBV0MsZ0VBQUMsMERBQUQ7QUFYRCxJQUREO0FBZUE7QUF4RUY7O0FBQUE7QUFBQSxFQUE0Qiw2Q0FBQUMsQ0FBTUMsYUFBbEM7O0FBMkVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRakIsS0FBUjtBQUFBLFFBQW1CO0FBQzFDQyxrQkFBZ0IsMEZBQUFpQixDQUF5QkQsS0FBekIsQ0FEMEI7QUFFMUNYLFdBQVMsNEVBQUFhLENBQVdGLEtBQVg7QUFGaUMsRUFBbkI7QUFBQSxDQUF4Qjs7QUFLQSx5REFBZSxvRUFBQUcsQ0FDZEosZUFEYyxFQUVkLEVBRmMsRUFHYmpCLE1BSGEsQ0FBZixFIiwiZmlsZSI6IjAuY2I3YjJmMzZmMzcxODUzYjZlOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5cbmltcG9ydCB7IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZCB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQgT1JDaGFydCBmcm9tICcuL29yQ2hhcnQnO1xuXG5leHBvcnQgY2xhc3MgU2NvcmVzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlclNjb3JlQ2FyZCgpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5vcGVyYXRpbmdSb3VuZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwib3BlcmF0aW5nUm91bmRDYXJkXCI+XG5cdFx0XHRcdFx0PFRhYmxlPlxuXHRcdFx0XHRcdFx0PFRhYmxlSGVhZD5cblx0XHRcdFx0XHRcdFx0PFRhYmxlUm93PlxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0UGxheWVyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmQpLm1hcChjb21wYW55ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8VGFibGVDZWxsIGtleT17Y29tcGFueX0+e2NvbXBhbnl9PC9UYWJsZUNlbGw+O1xuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0VG90YWxcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cblx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0XHRcdDwvVGFibGVIZWFkPlxuXHRcdFx0XHRcdFx0PFRhYmxlQm9keT5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMucGxheWVycy5tYXAoKHBsYXllciwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3cga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BsYXllci5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKHRoaXMucHJvcHMub3BlcmF0aW5nUm91bmQpLm1hcChjb21wYW55ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBrZXk9e2NvbXBhbnl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5vcGVyYXRpbmdSb3VuZFtjb21wYW55XVtwbGF5ZXIubmFtZV19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGhpcy5wcm9wcy5vcGVyYXRpbmdSb3VuZClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoY29tcGFueSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLm9wZXJhdGluZ1JvdW5kW2NvbXBhbnldW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllci5uYW1lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBhY2MgKyBjdXJyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvVGFibGVCb2R5PlxuXHRcdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdDwvQ2FyZD5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYXBlciBpZD1cInNjb3Jlc1wiPlxuXHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XG5cdFx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRTY29yZXNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdHt0aGlzLnJlbmRlclNjb3JlQ2FyZCgpfVxuXG5cdFx0XHRcdDxPUkNoYXJ0IC8+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0b3BlcmF0aW5nUm91bmQ6IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZChzdGF0ZSksXG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7fVxuKShTY29yZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3Njb3Jlcy9zY29yZXMuanMiXSwic291cmNlUm9vdCI6IiJ9
