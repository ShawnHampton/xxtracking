webpackHotUpdate(0, {
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
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9tYWluLmpzIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsImdhbWVTdGF0dXMiLCJzdGF0ZSIsImdhbWUiLCJuYW1lIiwic3RhcnRHYW1lIiwicGxheWVycyIsImxlbmd0aCIsIm1pblBsYXllcnMiLCJzdG9wR2FtZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImdldFBsYXllcnMiLCJnZXRHYW1lU3RhdHVzIiwiZ2V0R2FtZSIsInBsYXkiLCJnZXRQbGF5IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBYUEsSUFBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkJBQ1U7QUFDUixPQUFJLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkMsS0FBdEIsS0FBZ0MsS0FBcEMsRUFBMkM7QUFDMUMsV0FDQztBQUFBO0FBQUEsT0FBSyxJQUFHLE1BQVI7QUFDQztBQUFDLHNFQUFEO0FBQUEsUUFBUSxVQUFTLFFBQWpCLEVBQTBCLFdBQVUsWUFBcEM7QUFDQztBQUFDLHdFQUFEO0FBQUE7QUFDQztBQUFDLDRFQUFEO0FBQUEsVUFBWSxTQUFRLE9BQXBCLEVBQTRCLFdBQVUsT0FBdEM7QUFBQTtBQUFBO0FBREQ7QUFERCxNQUREO0FBUUMsaUVBQUMsOERBQUQ7QUFSRCxLQUREO0FBWUEsSUFiRCxNQWFPLElBQUksS0FBS0YsS0FBTCxDQUFXQyxVQUFYLENBQXNCQyxLQUF0QixLQUFnQyxPQUFwQyxFQUE2QztBQUNuRCxXQUNDO0FBQUE7QUFBQSxPQUFLLElBQUcsTUFBUjtBQUNDO0FBQUMsc0VBQUQ7QUFBQSxRQUFRLFVBQVMsUUFBakIsRUFBMEIsV0FBVSxZQUFwQztBQUNDO0FBQUMsd0VBQUQ7QUFBQTtBQUNDO0FBQUMsNEVBQUQ7QUFBQSxVQUFZLFNBQVEsT0FBcEIsRUFBNEIsV0FBVSxPQUF0QztBQUNFLGFBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkM7QUFEbEIsUUFERDtBQUlDO0FBQUMsd0VBQUQ7QUFBQTtBQUNDLGtCQUFTLEtBQUtKLEtBQUwsQ0FBV0ssU0FEckI7QUFFQyxtQkFDQyxLQUFLTCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJDLE1BQW5CLEdBQTRCLEtBQUtQLEtBQUwsQ0FBV0csSUFBWCxDQUFnQks7QUFIOUM7QUFBQTtBQUFBO0FBSkQ7QUFERCxNQUREO0FBZ0JDLGlFQUFDLGlFQUFEO0FBaEJELEtBREQ7QUFvQkEsSUFyQk0sTUFxQkEsSUFBSSxLQUFLUixLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLEtBQXRCLEtBQWdDLFNBQXBDLEVBQStDO0FBQ3JELFdBQ0M7QUFBQTtBQUFBLE9BQUssSUFBRyxNQUFSO0FBQ0M7QUFBQyxzRUFBRDtBQUFBLFFBQVEsVUFBUyxRQUFqQixFQUEwQixXQUFVLFlBQXBDO0FBQ0M7QUFBQyx3RUFBRDtBQUFBO0FBQ0M7QUFBQyw0RUFBRDtBQUFBLFVBQVksU0FBUSxPQUFwQixFQUE0QixXQUFVLE9BQXRDO0FBQ0UsYUFBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCQztBQURsQixRQUREO0FBSUMsbUVBQUMsb0VBQUQsT0FKRDtBQUtDO0FBQUMsd0VBQUQ7QUFBQSxVQUFRLFNBQVMsS0FBS0osS0FBTCxDQUFXUyxRQUE1QjtBQUFBO0FBQUE7QUFMRDtBQURELE1BREQ7QUFVQyxpRUFBQyxpRUFBRCxPQVZEO0FBV0MsaUVBQUMsb0VBQUQsT0FYRDtBQVlDLGlFQUFDLGdFQUFEO0FBWkQsS0FERDtBQWdCQSxJQWpCTSxNQWlCQTtBQUNOLFdBQ0M7QUFBQTtBQUFBLE9BQUssSUFBRyxNQUFSO0FBQ0M7QUFBQyxzRUFBRDtBQUFBLFFBQVEsVUFBUyxRQUFqQixFQUEwQixXQUFVLFlBQXBDO0FBQ0M7QUFBQyx3RUFBRDtBQUFBO0FBQ0M7QUFBQyw0RUFBRDtBQUFBLFVBQVksU0FBUSxPQUFwQixFQUE0QixXQUFVLE9BQXRDO0FBQ0UsYUFBS1QsS0FBTCxDQUFXRyxJQUFYLENBQWdCQztBQURsQixRQUREO0FBSUM7QUFBQyx3RUFBRDtBQUFBLFVBQVEsU0FBUyxLQUFLSixLQUFMLENBQVdLLFNBQTVCO0FBQUE7QUFBQTtBQUpEO0FBREQsTUFERDtBQVNDLGlFQUFDLGlFQUFEO0FBVEQsS0FERDtBQWFBO0FBQ0Q7QUFwRUY7O0FBQUE7QUFBQSxFQUEwQiw2Q0FBQUssQ0FBTUMsYUFBaEM7O0FBdUVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ1YsS0FBRCxFQUFRRixLQUFSO0FBQUEsUUFBbUI7QUFDMUNNLFdBQVMsOEVBQUFPLENBQVdYLEtBQVgsQ0FEaUM7QUFFMUNELGNBQVksMEVBQUFhLENBQWNaLEtBQWQsQ0FGOEI7QUFHMUNDLFFBQU0seUVBQUFZLENBQVFiLEtBQVIsQ0FIb0M7QUFJMUNjLFFBQU0seUVBQUFDLENBQVFmLEtBQVI7QUFKb0MsRUFBbkI7QUFBQSxDQUF4Qjs7QUFPQSx5REFBZSxvRUFBQWdCLENBQ2ROLGVBRGMsRUFFZCxFQUFFUCxXQUFBLDREQUFGLEVBQWFJLFVBQUEsMkRBQWIsRUFGYyxFQUdiVixJQUhhLENBQWYsRSIsImZpbGUiOiIwLmQ3MzA3MDQ2ZmVhMWQ5M2JlN2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IEdhbWVDaG9vc2VyIGZyb20gJy4vZ2FtZUNob29zZXInO1xuaW1wb3J0IFBsYXllcnMgZnJvbSAnLi4vcGxheWVyL3BsYXllcnMnO1xuaW1wb3J0IENvbXBhbmllcyBmcm9tICcuLi9jb21wYW55L2NvbXBhbmllcyc7XG5pbXBvcnQgU2NvcmVzIGZyb20gJy4uL3Njb3Jlcy9zY29yZXMnO1xuaW1wb3J0IFJvdW5kTWFuYWdlciBmcm9tICcuLi9nYW1lL3JvdW5kTWFuYWdlcic7XG5cbmltcG9ydCB7IHN0YXJ0R2FtZSwgc3RvcEdhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFBsYXllcnMgfSBmcm9tICcuLi9wbGF5ZXIvc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldEdhbWUsIGdldFBsYXkgfSBmcm9tICcuLi9nYW1lL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5nYW1lU3RhdHVzLnN0YXRlID09PSAnbmV3Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eHhTY29yZUtlZXBlclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PEdhbWVDaG9vc2VyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3JlYWR5Jykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBpZD1cIm1haW5cIj5cblx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPVwibWFpbkFwcEJhclwiPlxuXHRcdFx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cInRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2FtZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0R2FtZX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoIDwgdGhpcy5wcm9wcy5nYW1lLm1pblBsYXllcnNcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRTdGFydCBHYW1lXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxQbGF5ZXJzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuZ2FtZVN0YXR1cy5zdGF0ZSA9PT0gJ3N0YXJ0ZWQnKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjbGFzc05hbWU9XCJtYWluQXBwQmFyXCI+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cInRpdGxlXCIgY2xhc3NOYW1lPVwidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PFJvdW5kTWFuYWdlciAvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RvcEdhbWV9PkZpbmlzaCBHYW1lPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdFx0PC9BcHBCYXI+XG5cdFx0XHRcdFx0PFBsYXllcnMgLz5cblx0XHRcdFx0XHQ8Q29tcGFuaWVzIC8+XG5cdFx0XHRcdFx0PFNjb3JlcyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgaWQ9XCJtYWluXCI+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT1cIm1haW5BcHBCYXJcIj5cblx0XHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmdhbWUubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RhcnRHYW1lfT5SZXN0YXJ0IEdhbWU8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0XHQ8L0FwcEJhcj5cblx0XHRcdFx0XHQ8UGxheWVycyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG5cdHBsYXllcnM6IGdldFBsYXllcnMoc3RhdGUpLFxuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKSxcblx0Z2FtZTogZ2V0R2FtZShzdGF0ZSksXG5cdHBsYXk6IGdldFBsYXkoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7IHN0YXJ0R2FtZSwgc3RvcEdhbWUgfVxuKShNYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9
