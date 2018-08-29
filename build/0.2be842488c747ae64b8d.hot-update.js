webpackHotUpdate(0, {
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_selectors__ = __webpack_require__(
				/*! ../main/selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__playerCreator__ = __webpack_require__(
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
								console.log('Player', this.props.players);

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
												__WEBPACK_IMPORTED_MODULE_15__playerCreator__[
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
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['f' /* getPlayers */]
					)(state),
					game: Object(
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['b' /* getGame */]
					)(state),
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_13__main_selectors__[
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiXSwibmFtZXMiOlsiUGxheWVycyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInBsYXllcnMiLCJnYW1lIiwiZ2FtZVN0YXR1cyIsImFkZFBsYXllciIsIm1hcCIsInBsYXllciIsIm5hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImdldFBsYXllcnMiLCJnZXRHYW1lIiwiZ2V0R2FtZVN0YXR1cyIsImNvbm5lY3QiLCJzdGFydENvbXBhbnkiLCJhY3F1aXJlUHJpdmF0ZUNvbXBhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQWFBLE9BQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJCQUNVO0FBQ1JDLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLEtBQUtDLEtBQUwsQ0FBV0MsT0FBakM7O0FBRUEsVUFDQztBQUFDLG1FQUFEO0FBQUE7QUFDQztBQUFDLHFFQUFEO0FBQUEsT0FBUSxVQUFTLFFBQWpCLEVBQTBCLE9BQU0sU0FBaEM7QUFDQztBQUFDLHVFQUFEO0FBQUEsUUFBUyxTQUFRLE9BQWpCO0FBQ0M7QUFBQywyRUFBRDtBQUFBLFNBQVksU0FBUSxPQUFwQixFQUE0QixXQUFVLE9BQXRDO0FBQUE7QUFBQSxPQUREO0FBSUMsa0VBQUMsZ0VBQUQ7QUFDQyxnQkFBUyxLQUFLRCxLQUFMLENBQVdDLE9BRHJCO0FBRUMsYUFBTSxLQUFLRCxLQUFMLENBQVdFLElBRmxCO0FBR0MsbUJBQVksS0FBS0YsS0FBTCxDQUFXRyxVQUh4QjtBQUlDLGtCQUFXLEtBQUtILEtBQUwsQ0FBV0k7QUFKdkI7QUFKRDtBQURELEtBREQ7QUFlQztBQUFBO0FBQUEsT0FBSyxJQUFHLFNBQVI7QUFDRSxVQUFLSixLQUFMLENBQVdDLE9BQVgsQ0FBbUJJLEdBQW5CLENBQXVCLGtCQUFVO0FBQ2pDLGFBQU8sNERBQUMseURBQUQsSUFBUSxLQUFLQyxPQUFPQyxJQUFwQixFQUEwQixRQUFRRCxNQUFsQyxHQUFQO0FBQ0EsTUFGQTtBQURGO0FBZkQsSUFERDtBQXVCQTtBQTNCRjs7QUFBQTtBQUFBLEVBQTZCLDZDQUFBRSxDQUFNQyxhQUFuQzs7QUE4QkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFYLEtBQVI7QUFBQSxRQUFtQjtBQUMxQ0MsV0FBUyw0RUFBQVcsQ0FBV0QsS0FBWCxDQURpQztBQUUxQ1QsUUFBTSx5RUFBQVcsQ0FBUUYsS0FBUixDQUZvQztBQUcxQ1IsY0FBWSwrRUFBQVcsQ0FBY0gsS0FBZDtBQUg4QixFQUFuQjtBQUFBLENBQXhCOztBQU1BLHlEQUFlLG9FQUFBSSxDQUNkTCxlQURjLEVBRWQsRUFBRU4sV0FBQSw0REFBRixFQUFhWSxjQUFBLHVFQUFiLEVBQTJCQyx1QkFBQSx3RUFBM0IsRUFGYyxFQUdicEIsT0FIYSxDQUFmLEUiLCJmaWxlIjoiMC4yYmU4NDI0ODhjNzQ3YWU2NGI4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5pbXBvcnQgeyBzdGFydENvbXBhbnkgfSBmcm9tICcuLi9jb21wYW55L2FjdGlvbnMnO1xuaW1wb3J0IHsgYWRkUGxheWVyLCBhY3F1aXJlUHJpdmF0ZUNvbXBhbnkgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4uL21haW4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldEdhbWUsIGdldFBsYXllcnMgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5pbXBvcnQgUGxheWVyQ3JlYXRvciBmcm9tICcuL3BsYXllckNyZWF0b3InO1xuXG5leHBvcnQgY2xhc3MgUGxheWVycyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJQbGF5ZXJcIiwgdGhpcy5wcm9wcy5wbGF5ZXJzKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFwZXI+XG5cdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cblx0XHRcdFx0XHQ8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIj5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFBsYXllcnNcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxQbGF5ZXJDcmVhdG9yXG5cdFx0XHRcdFx0XHRcdHBsYXllcnM9e3RoaXMucHJvcHMucGxheWVyc31cblx0XHRcdFx0XHRcdFx0Z2FtZT17dGhpcy5wcm9wcy5nYW1lfVxuXHRcdFx0XHRcdFx0XHRnYW1lU3RhdHVzPXt0aGlzLnByb3BzLmdhbWVTdGF0dXN9XG5cdFx0XHRcdFx0XHRcdGFkZFBsYXllcj17dGhpcy5wcm9wcy5hZGRQbGF5ZXJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PC9BcHBCYXI+XG5cblx0XHRcdFx0PGRpdiBpZD1cInBsYXllcnNcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wbGF5ZXJzLm1hcChwbGF5ZXIgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxQbGF5ZXIga2V5PXtwbGF5ZXIubmFtZX0gcGxheWVyPXtwbGF5ZXJ9IC8+O1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvUGFwZXI+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRwbGF5ZXJzOiBnZXRQbGF5ZXJzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdGdhbWVTdGF0dXM6IGdldEdhbWVTdGF0dXMoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IGFkZFBsYXllciwgc3RhcnRDb21wYW55LCBhY3F1aXJlUHJpdmF0ZUNvbXBhbnkgfVxuKShQbGF5ZXJzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9wbGF5ZXIvcGxheWVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
