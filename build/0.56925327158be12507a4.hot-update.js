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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJzdGF0ZSIsImZyb21KUyIsImdhbWUiLCJuYW1lIiwibWluUGxheWVycyIsIm1heFBsYXllcnMiLCJiYW5rU2l6ZSIsImluaXRpYWxQbGF5ZXJNb25leSIsIm1ham9ycyIsInBsYXkiLCJhY3Rpb24iLCJzIiwidHlwZSIsIkNPTVBBTlkiLCJTVEFSVF9DT01QQU5ZIiwic2V0SW4iLCJnZXRJbiIsInB1c2giLCJwYXlsb2FkIiwiY29tcGFueSIsIk9QRVJBVEVfUEFZIiwib3BlcmF0aW5nUm91bmQiLCJjb21wYW55TmFtZSIsInBheW91dENoYXJ0IiwiR0FNRSIsIkNIQU5HRV9QSEFTRSIsIkNIQU5HRV9DVVJSRU5UX09SIiwiQ0hBTkdFX0NVUlJFTlRfUk9VTkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSx5REFBZSxZQWlCSDtBQUFBLEtBakJhQSxLQWlCYix1RUFqQnFCLHlEQUFBQyxDQUFPO0FBQ3ZDQyxRQUFNO0FBQ0xDLFNBQU0sTUFERDtBQUVMQyxlQUFZLENBRlA7QUFHTEMsZUFBWSxDQUhQO0FBSUxDLGFBQVUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FKTDtBQUtMQyx1QkFBb0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FMZjs7QUFPTEMsV0FBUSxDQUFDO0FBQ1JMLFVBQU07QUFERSxJQUFELEVBRUw7QUFDRkEsVUFBTTtBQURKLElBRkssRUFJTDtBQUNGQSxVQUFNO0FBREosSUFKSztBQVBILEdBRGlDO0FBZ0J2Q00sUUFBTTtBQWhCaUMsRUFBUCxDQWlCckI7QUFBQSxLQUFSQyxNQUFROztBQUNYLEtBQUlDLElBQUlYLEtBQVI7QUFDQSxTQUFRVSxPQUFPRSxJQUFmO0FBQ0MsT0FBSyxpRUFBQUMsQ0FBUUMsYUFBYjtBQUNDSCxPQUFJWCxNQUFNZSxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsZUFBVCxDQUFaLEVBQXVDZixNQUFNZ0IsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGVBQVQsQ0FBWixFQUF1Q0MsSUFBdkMsQ0FBNENQLE9BQU9RLE9BQVAsQ0FBZUMsT0FBM0QsQ0FBdkMsQ0FBSjtBQUNBLFVBQU9SLENBQVA7QUFDRCxPQUFLLGlFQUFBRSxDQUFRTyxXQUFiO0FBQ0NULE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxpQkFBVCxFQUE0QkwsT0FBT1EsT0FBUCxDQUFlRyxjQUEzQyxFQUEyRFgsT0FBT1EsT0FBUCxDQUFlSSxXQUExRSxDQUFaLEVBQ0gseURBQUFyQixDQUFPUyxPQUFPUSxPQUFQLENBQWVLLFdBQXRCLENBREcsQ0FBSjtBQUVBLFVBQU9aLENBQVA7QUFDRCxPQUFLLHNEQUFBYSxDQUFLQyxZQUFWO0FBQ0NkLE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxjQUFULENBQVosRUFBc0NMLE9BQU9RLE9BQTdDLENBQUo7QUFDQSxVQUFPUCxDQUFQO0FBQ0QsT0FBSyxzREFBQWEsQ0FBS0UsaUJBQVY7QUFDQ2YsT0FBSVgsTUFBTWUsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FBWixFQUFtQ0wsT0FBT1EsT0FBMUMsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRCxPQUFLLHNEQUFBYSxDQUFLRyxvQkFBVjtBQUNDaEIsT0FBSVgsTUFBTWUsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGNBQVQsQ0FBWixFQUFzQ0wsT0FBT1EsT0FBN0MsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRDtBQWpCRDs7QUFvQkEsUUFBT1gsS0FBUDtBQUNBLEMiLCJmaWxlIjoiMC41NjkyNTMyNzE1OGJlMTI1MDdhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmcm9tSlN9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7Q09NUEFOWX0gZnJvbSBcIi4uL2NvbXBhbnkvYWN0aW9uc1wiO1xuaW1wb3J0IHtHQU1FfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZyb21KUyh7XG5cdGdhbWU6IHtcblx0XHRuYW1lOiBcIjE4NDZcIixcblx0XHRtaW5QbGF5ZXJzOiAyLFxuXHRcdG1heFBsYXllcnM6IDYsXG5cdFx0YmFua1NpemU6IFs3NzAwLCA3NzAwLCA3NzAwLCA3NzAwLCA3NzAwXSxcblx0XHRpbml0aWFsUGxheWVyTW9uZXk6IFs1MDAsIDUwMCwgNTAwLCA1MDAsIDUwMF0sXG5cblx0XHRtYWpvcnM6IFt7XG5cdFx0XHRuYW1lOiBcIkImT1wiXG5cdFx0fSwge1xuXHRcdFx0bmFtZTogXCJHV1RcIlxuXHRcdH0sIHtcblx0XHRcdG5hbWU6IFwiSUNcIlxuXHRcdH1dXG5cdH0sXG5cdHBsYXk6IG51bGxcbn0pLCBhY3Rpb24pIHtcblx0bGV0IHMgPSBzdGF0ZTtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ09NUEFOWS5TVEFSVF9DT01QQU5ZOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdzdGFydGVkTWFqb3JzJ10sIHN0YXRlLmdldEluKFsncGxheScsICdzdGFydGVkTWFqb3JzJ10pLnB1c2goYWN0aW9uLnBheWxvYWQuY29tcGFueSkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBDT01QQU5ZLk9QRVJBVEVfUEFZOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdvcGVyYXRpbmdSb3VuZHMnLCBhY3Rpb24ucGF5bG9hZC5vcGVyYXRpbmdSb3VuZCwgYWN0aW9uLnBheWxvYWQuY29tcGFueU5hbWVdLFxuXHRcdFx0XHRmcm9tSlMoYWN0aW9uLnBheWxvYWQucGF5b3V0Q2hhcnQpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgR0FNRS5DSEFOR0VfUEhBU0U6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ2N1cnJlbnRQaGFzZSddLCBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIEdBTUUuQ0hBTkdFX0NVUlJFTlRfT1I6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ2N1cnJlbnRPUiddLCBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIEdBTUUuQ0hBTkdFX0NVUlJFTlRfUk9VTkQ6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ2N1cnJlbnRSb3VuZCddLCBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRkZWZhdWx0OlxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=
