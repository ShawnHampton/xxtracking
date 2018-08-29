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
						__WEBPACK_IMPORTED_MODULE_14__game_selectors__['e' /* getPlayers */]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiXSwibmFtZXMiOlsiUGxheWVycyIsInByb3BzIiwicGxheWVycyIsImdhbWUiLCJnYW1lU3RhdHVzIiwiYWRkUGxheWVyIiwibWFwIiwicGxheWVyIiwibmFtZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZ2V0UGxheWVycyIsImdldEdhbWUiLCJnZXRHYW1lU3RhdHVzIiwiY29ubmVjdCIsInN0YXJ0Q29tcGFueSIsImFjcXVpcmVQcml2YXRlQ29tcGFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBYUEsT0FBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkJBQ1U7QUFDUixVQUNDO0FBQUMsbUVBQUQ7QUFBQTtBQUNDO0FBQUMscUVBQUQ7QUFBQSxPQUFRLFVBQVMsUUFBakIsRUFBMEIsT0FBTSxTQUFoQztBQUNDO0FBQUMsdUVBQUQ7QUFBQSxRQUFTLFNBQVEsT0FBakI7QUFDQztBQUFDLDJFQUFEO0FBQUEsU0FBWSxTQUFRLE9BQXBCLEVBQTRCLFdBQVUsT0FBdEM7QUFBQTtBQUFBLE9BREQ7QUFJQyxrRUFBQyxnRUFBRDtBQUNDLGdCQUFTLEtBQUtDLEtBQUwsQ0FBV0MsT0FEckI7QUFFQyxhQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFGbEI7QUFHQyxtQkFBWSxLQUFLRixLQUFMLENBQVdHLFVBSHhCO0FBSUMsa0JBQVcsS0FBS0gsS0FBTCxDQUFXSTtBQUp2QjtBQUpEO0FBREQsS0FERDtBQWVDO0FBQUE7QUFBQSxPQUFLLElBQUcsU0FBUjtBQUNFLFVBQUtKLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkksR0FBbkIsQ0FBdUIsa0JBQVU7QUFDakMsYUFBTyw0REFBQyx5REFBRCxJQUFRLEtBQUtDLE9BQU9DLElBQXBCLEVBQTBCLFFBQVFELE1BQWxDLEdBQVA7QUFDQSxNQUZBO0FBREY7QUFmRCxJQUREO0FBdUJBO0FBekJGOztBQUFBO0FBQUEsRUFBNkIsNkNBQUFFLENBQU1DLGFBQW5DOztBQTRCQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUVgsS0FBUjtBQUFBLFFBQW1CO0FBQzFDQyxXQUFTLDRFQUFBVyxDQUFXRCxLQUFYLENBRGlDO0FBRTFDVCxRQUFNLHlFQUFBVyxDQUFRRixLQUFSLENBRm9DO0FBRzFDUixjQUFZLCtFQUFBVyxDQUFjSCxLQUFkO0FBSDhCLEVBQW5CO0FBQUEsQ0FBeEI7O0FBTUEseURBQWUsb0VBQUFJLENBQ2RMLGVBRGMsRUFFZCxFQUFFTixXQUFBLDREQUFGLEVBQWFZLGNBQUEsdUVBQWIsRUFBMkJDLHVCQUFBLHdFQUEzQixFQUZjLEVBR2JsQixPQUhhLENBQWYsRSIsImZpbGUiOiIwLjVmNmI1ZmY4MTI0ZDI3NzI4MjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmltcG9ydCB7IHN0YXJ0Q29tcGFueSB9IGZyb20gJy4uL2NvbXBhbnkvYWN0aW9ucyc7XG5pbXBvcnQgeyBhZGRQbGF5ZXIsIGFjcXVpcmVQcml2YXRlQ29tcGFueSB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRHYW1lU3RhdHVzIH0gZnJvbSAnLi4vbWFpbi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0R2FtZSwgZ2V0UGxheWVycyB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCBQbGF5ZXJDcmVhdG9yIGZyb20gJy4vcGxheWVyQ3JlYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhcGVyPlxuXHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XG5cdFx0XHRcdFx0PFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRQbGF5ZXJzXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8UGxheWVyQ3JlYXRvclxuXHRcdFx0XHRcdFx0XHRwbGF5ZXJzPXt0aGlzLnByb3BzLnBsYXllcnN9XG5cdFx0XHRcdFx0XHRcdGdhbWU9e3RoaXMucHJvcHMuZ2FtZX1cblx0XHRcdFx0XHRcdFx0Z2FtZVN0YXR1cz17dGhpcy5wcm9wcy5nYW1lU3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRhZGRQbGF5ZXI9e3RoaXMucHJvcHMuYWRkUGxheWVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDwvQXBwQmFyPlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJwbGF5ZXJzXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMucGxheWVycy5tYXAocGxheWVyID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8UGxheWVyIGtleT17cGxheWVyLm5hbWV9IHBsYXllcj17cGxheWVyfSAvPjtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1BhcGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHtcblx0cGxheWVyczogZ2V0UGxheWVycyhzdGF0ZSksXG5cdGdhbWU6IGdldEdhbWUoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0eyBhZGRQbGF5ZXIsIHN0YXJ0Q29tcGFueSwgYWNxdWlyZVByaXZhdGVDb21wYW55IH1cbikoUGxheWVycyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvcGxheWVyL3BsYXllcnMuanMiXSwic291cmNlUm9vdCI6IiJ9
