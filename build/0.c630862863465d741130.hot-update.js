webpackHotUpdate(0, {
	/***/ './src/client/modules/game/reducer.jsx':
		/*!*********************************************!*\
  !*** ./src/client/modules/game/reducer.jsx ***!
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_actions__ = __webpack_require__(
				/*! ../company/actions */ './src/client/modules/company/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/game/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_actions__ = __webpack_require__(
				/*! ../main/actions */ './src/client/modules/main/actions.js'
			);

			/* harmony default export */ __webpack_exports__['a'] = function() {
				var state =
					arguments.length > 0 && arguments[0] !== undefined
						? arguments[0]
						: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])({
								game: {
									name: '1846',
									minPlayers: 2,
									maxPlayers: 6,
									bankSize: [7700, 7700, 7700, 7700, 7700],
									initialPlayerMoney: [500, 500, 500, 500, 500],

									majors: [
										{
											name: 'B&O'
										},
										{
											name: 'GWT'
										},
										{
											name: 'IC'
										}
									]
								},
								play: null
						  });
				var action = arguments[1];

				var s = state;
				switch (action.type) {
					case __WEBPACK_IMPORTED_MODULE_1__company_actions__['a' /* COMPANY */]
						.START_COMPANY:
						s = state.setIn(
							['play', 'startedMajors'],
							state
								.getIn(['play', 'startedMajors'])
								.push(action.payload.company)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__company_actions__['a' /* COMPANY */]
						.OPERATE_PAY:
						s = state.setIn(
							[
								'play',
								'operatingRounds',
								action.payload.operatingRound,
								action.payload.companyName
							],
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload.payoutChart
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_3__main_actions__['a' /* MAIN */]
						.GAME_LOADED:
						s = state.set(
							'play',
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_2__actions__['a' /* GAME */]
						.CHANGE_PHASE:
						s = state.setIn(['play', 'currentPhase'], action.payload);
						return s;
					case __WEBPACK_IMPORTED_MODULE_2__actions__['a' /* GAME */]
						.CHANGE_CURRENT_OR:
						s = state.setIn(['play', 'currentOR'], action.payload);
						return s;
					case __WEBPACK_IMPORTED_MODULE_2__actions__['a' /* GAME */]
						.CHANGE_CURRENT_ROUND:
						s = state.setIn(['play', 'currentRound'], action.payload);
						return s;
					default:
				}

				return state;
			};

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJzdGF0ZSIsImZyb21KUyIsImdhbWUiLCJuYW1lIiwibWluUGxheWVycyIsIm1heFBsYXllcnMiLCJiYW5rU2l6ZSIsImluaXRpYWxQbGF5ZXJNb25leSIsIm1ham9ycyIsInBsYXkiLCJhY3Rpb24iLCJzIiwidHlwZSIsIkNPTVBBTlkiLCJTVEFSVF9DT01QQU5ZIiwic2V0SW4iLCJnZXRJbiIsInB1c2giLCJwYXlsb2FkIiwiY29tcGFueSIsIk9QRVJBVEVfUEFZIiwib3BlcmF0aW5nUm91bmQiLCJjb21wYW55TmFtZSIsInBheW91dENoYXJ0IiwiTUFJTiIsIkdBTUVfTE9BREVEIiwic2V0IiwiR0FNRSIsIkNIQU5HRV9QSEFTRSIsIkNIQU5HRV9DVVJSRU5UX09SIiwiQ0hBTkdFX0NVUlJFTlRfUk9VTkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBZSxZQWlCSDtBQUFBLEtBakJhQSxLQWlCYix1RUFqQnFCLHlEQUFBQyxDQUFPO0FBQ3ZDQyxRQUFNO0FBQ0xDLFNBQU0sTUFERDtBQUVMQyxlQUFZLENBRlA7QUFHTEMsZUFBWSxDQUhQO0FBSUxDLGFBQVUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FKTDtBQUtMQyx1QkFBb0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FMZjs7QUFPTEMsV0FBUSxDQUFDO0FBQ1JMLFVBQU07QUFERSxJQUFELEVBRUw7QUFDRkEsVUFBTTtBQURKLElBRkssRUFJTDtBQUNGQSxVQUFNO0FBREosSUFKSztBQVBILEdBRGlDO0FBZ0J2Q00sUUFBTTtBQWhCaUMsRUFBUCxDQWlCckI7QUFBQSxLQUFSQyxNQUFROztBQUNYLEtBQUlDLElBQUlYLEtBQVI7QUFDQSxTQUFRVSxPQUFPRSxJQUFmO0FBQ0MsT0FBSyxpRUFBQUMsQ0FBUUMsYUFBYjtBQUNDSCxPQUFJWCxNQUFNZSxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsZUFBVCxDQUFaLEVBQXVDZixNQUFNZ0IsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGVBQVQsQ0FBWixFQUF1Q0MsSUFBdkMsQ0FBNENQLE9BQU9RLE9BQVAsQ0FBZUMsT0FBM0QsQ0FBdkMsQ0FBSjtBQUNBLFVBQU9SLENBQVA7QUFDRCxPQUFLLGlFQUFBRSxDQUFRTyxXQUFiO0FBQ0NULE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxpQkFBVCxFQUE0QkwsT0FBT1EsT0FBUCxDQUFlRyxjQUEzQyxFQUEyRFgsT0FBT1EsT0FBUCxDQUFlSSxXQUExRSxDQUFaLEVBQ0gseURBQUFyQixDQUFPUyxPQUFPUSxPQUFQLENBQWVLLFdBQXRCLENBREcsQ0FBSjtBQUVBLFVBQU9aLENBQVA7QUFDRCxPQUFLLDJEQUFBYSxDQUFLQyxXQUFWO0FBQ0NkLE9BQUlYLE1BQU0wQixHQUFOLENBQVUsTUFBVixFQUFrQix5REFBQXpCLENBQU9TLE9BQU9RLE9BQWQsQ0FBbEIsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRCxPQUFLLHNEQUFBZ0IsQ0FBS0MsWUFBVjtBQUNDakIsT0FBSVgsTUFBTWUsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGNBQVQsQ0FBWixFQUFzQ0wsT0FBT1EsT0FBN0MsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRCxPQUFLLHNEQUFBZ0IsQ0FBS0UsaUJBQVY7QUFDQ2xCLE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxXQUFULENBQVosRUFBbUNMLE9BQU9RLE9BQTFDLENBQUo7QUFDQSxVQUFPUCxDQUFQO0FBQ0QsT0FBSyxzREFBQWdCLENBQUtHLG9CQUFWO0FBQ0NuQixPQUFJWCxNQUFNZSxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsY0FBVCxDQUFaLEVBQXNDTCxPQUFPUSxPQUE3QyxDQUFKO0FBQ0EsVUFBT1AsQ0FBUDtBQUNEO0FBcEJEOztBQXVCQSxRQUFPWCxLQUFQO0FBQ0EsQyIsImZpbGUiOiIwLmM2MzA4NjI4NjM0NjVkNzQxMTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb21KU30gZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtDT01QQU5ZfSBmcm9tIFwiLi4vY29tcGFueS9hY3Rpb25zXCI7XG5pbXBvcnQge0dBTUV9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7TUFJTn0gZnJvbSBcIi4uL21haW4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBmcm9tSlMoe1xuXHRnYW1lOiB7XG5cdFx0bmFtZTogXCIxODQ2XCIsXG5cdFx0bWluUGxheWVyczogMixcblx0XHRtYXhQbGF5ZXJzOiA2LFxuXHRcdGJhbmtTaXplOiBbNzcwMCwgNzcwMCwgNzcwMCwgNzcwMCwgNzcwMF0sXG5cdFx0aW5pdGlhbFBsYXllck1vbmV5OiBbNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDBdLFxuXG5cdFx0bWFqb3JzOiBbe1xuXHRcdFx0bmFtZTogXCJCJk9cIlxuXHRcdH0sIHtcblx0XHRcdG5hbWU6IFwiR1dUXCJcblx0XHR9LCB7XG5cdFx0XHRuYW1lOiBcIklDXCJcblx0XHR9XVxuXHR9LFxuXHRwbGF5OiBudWxsXG59KSwgYWN0aW9uKSB7XG5cdGxldCBzID0gc3RhdGU7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENPTVBBTlkuU1RBUlRfQ09NUEFOWTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnc3RhcnRlZE1ham9ycyddLCBzdGF0ZS5nZXRJbihbJ3BsYXknLCAnc3RhcnRlZE1ham9ycyddKS5wdXNoKGFjdGlvbi5wYXlsb2FkLmNvbXBhbnkpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgQ09NUEFOWS5PUEVSQVRFX1BBWTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnb3BlcmF0aW5nUm91bmRzJywgYWN0aW9uLnBheWxvYWQub3BlcmF0aW5nUm91bmQsIGFjdGlvbi5wYXlsb2FkLmNvbXBhbnlOYW1lXSxcblx0XHRcdFx0ZnJvbUpTKGFjdGlvbi5wYXlsb2FkLnBheW91dENoYXJ0KSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uR0FNRV9MT0FERUQ6XG5cdFx0XHRzID0gc3RhdGUuc2V0KCdwbGF5JywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIEdBTUUuQ0hBTkdFX1BIQVNFOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdjdXJyZW50UGhhc2UnXSwgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBHQU1FLkNIQU5HRV9DVVJSRU5UX09SOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdjdXJyZW50T1InXSwgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBHQU1FLkNIQU5HRV9DVVJSRU5UX1JPVU5EOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdjdXJyZW50Um91bmQnXSwgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0ZGVmYXVsdDpcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvcmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9
