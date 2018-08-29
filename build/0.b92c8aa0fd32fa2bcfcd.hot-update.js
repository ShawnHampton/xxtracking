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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_actions__ = __webpack_require__(
				/*! ../player/actions */ './src/client/modules/player/actions.js'
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
					case __WEBPACK_IMPORTED_MODULE_4__player_actions__['a' /* PLAYER */]
						.ADD_PLAYER:
						s = state.setIn(
							['players', action.payload.name],
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload
							)
						);
						s = s.setIn(['players', action.payload.name, 'personalMoney'], 0);
						s = s.setIn(
							['players', action.payload.name, 'stocks'],
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])({})
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_4__player_actions__['a' /* PLAYER */]
						.REMOVE_PLAYER:
						s = state.deleteIn('players', action.payload);
						return s;
					case __WEBPACK_IMPORTED_MODULE_4__player_actions__['a' /* PLAYER */]
						.SET_PERSONAL_MONEY:
						s = state.setIn(
							['players', action.payload.playerName, 'personalMoney'],
							action.payload.personalMoney
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_4__player_actions__['a' /* PLAYER */]
						.SET_STOCK:
						if (action.payload.count === 0) {
							s = state.deleteIn([
								'players',
								action.payload.playerName,
								'stocks',
								action.payload.companyName
							]);
						} else {
							s = state.setIn(
								[
									'players',
									action.payload.playerName,
									'stocks',
									action.payload.companyName
								],
								action.payload.count
							);
						}
						return s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJzdGF0ZSIsImZyb21KUyIsImdhbWUiLCJuYW1lIiwibWluUGxheWVycyIsIm1heFBsYXllcnMiLCJiYW5rU2l6ZSIsImluaXRpYWxQbGF5ZXJNb25leSIsIm1ham9ycyIsInBsYXkiLCJhY3Rpb24iLCJzIiwidHlwZSIsIlBMQVlFUiIsIkFERF9QTEFZRVIiLCJzZXRJbiIsInBheWxvYWQiLCJSRU1PVkVfUExBWUVSIiwiZGVsZXRlSW4iLCJTRVRfUEVSU09OQUxfTU9ORVkiLCJwbGF5ZXJOYW1lIiwicGVyc29uYWxNb25leSIsIlNFVF9TVE9DSyIsImNvdW50IiwiY29tcGFueU5hbWUiLCJDT01QQU5ZIiwiU1RBUlRfQ09NUEFOWSIsImdldEluIiwicHVzaCIsImNvbXBhbnkiLCJPUEVSQVRFX1BBWSIsIm9wZXJhdGluZ1JvdW5kIiwicGF5b3V0Q2hhcnQiLCJNQUlOIiwiR0FNRV9MT0FERUQiLCJzZXQiLCJHQU1FIiwiQ0hBTkdFX1BIQVNFIiwiQ0hBTkdFX0NVUlJFTlRfT1IiLCJDSEFOR0VfQ1VSUkVOVF9ST1VORCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUFlLFlBaUJIO0FBQUEsS0FqQmFBLEtBaUJiLHVFQWpCcUIseURBQUFDLENBQU87QUFDdkNDLFFBQU07QUFDTEMsU0FBTSxNQUREO0FBRUxDLGVBQVksQ0FGUDtBQUdMQyxlQUFZLENBSFA7QUFJTEMsYUFBVSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUpMO0FBS0xDLHVCQUFvQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUxmOztBQU9MQyxXQUFRLENBQUM7QUFDUkwsVUFBTTtBQURFLElBQUQs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WixFQUFzQ0wsT0FBT00sT0FBN0MsQ0FBSjtBQUNBLFVBQU9MLENBQVA7QUFDRCxPQUFLLHNEQUFBeUIsQ0FBS0UsaUJBQVY7QUFDQzNCLE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxXQUFULENBQVosRUFBbUNMLE9BQU9NLE9BQTFDLENBQUo7QUFDQSxVQUFPTCxDQUFQO0FBQ0QsT0FBSyxzREFBQXlCLENBQUtHLG9CQUFWO0FBQ0M1QixPQUFJWCxNQUFNZSxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsY0FBVCxDQUFaLEVBQXNDTCxPQUFPTSxPQUE3QyxDQUFKO0FBQ0EsVUFBT0wsQ0FBUDtBQUNEO0FBdkNEOztBQTBDQSxRQUFPWCxLQUFQO0FBQ0EsQyIsImZpbGUiOiIwLmI5MmM4YWEwZmQzMmZhMmJjZmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb21KU30gZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtDT01QQU5ZfSBmcm9tIFwiLi4vY29tcGFueS9hY3Rpb25zXCI7XG5pbXBvcnQge0dBTUV9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7TUFJTn0gZnJvbSBcIi4uL21haW4vYWN0aW9uc1wiO1xuaW1wb3J0IHtQTEFZRVJ9IGZyb20gXCIuLi9wbGF5ZXIvYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBmcm9tSlMoe1xuXHRnYW1lOiB7XG5cdFx0bmFtZTogXCIxODQ2XCIsXG5cdFx0bWluUGxheWVyczogMixcblx0XHRtYXhQbGF5ZXJzOiA2LFxuXHRcdGJhbmtTaXplOiBbNzcwMCwgNzcwMCwgNzcwMCwgNzcwMCwgNzcwMF0sXG5cdFx0aW5pdGlhbFBsYXllck1vbmV5OiBbNTAwLCA1MDAsIDUwMCwgNTAwLCA1MDBdLFxuXG5cdFx0bWFqb3JzOiBbe1xuXHRcdFx0bmFtZTogXCJCJk9cIlxuXHRcdH0sIHtcblx0XHRcdG5hbWU6IFwiR1dUXCJcblx0XHR9LCB7XG5cdFx0XHRuYW1lOiBcIklDXCJcblx0XHR9XVxuXHR9LFxuXHRwbGF5OiBudWxsXG59KSwgYWN0aW9uKSB7XG5cdGxldCBzID0gc3RhdGU7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFBMQVlFUi5BRERfUExBWUVSOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLm5hbWVdLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQpKTtcblx0XHRcdHMgPSBzLnNldEluKFsncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLm5hbWUsIFwicGVyc29uYWxNb25leVwiXSwgMCk7XG5cdFx0XHRzID0gcy5zZXRJbihbJ3BsYXllcnMnLCBhY3Rpb24ucGF5bG9hZC5uYW1lLCBcInN0b2Nrc1wiXSwgZnJvbUpTKHt9KSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIFBMQVlFUi5SRU1PVkVfUExBWUVSOlxuXHRcdFx0cyA9IHN0YXRlLmRlbGV0ZUluKCdwbGF5ZXJzJywgYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBQTEFZRVIuU0VUX1BFUlNPTkFMX01PTkVZOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLnBsYXllck5hbWUsIFwicGVyc29uYWxNb25leVwiXSwgYWN0aW9uLnBheWxvYWQucGVyc29uYWxNb25leSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIFBMQVlFUi5TRVRfU1RPQ0s6XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQuY291bnQgPT09IDApIHtcblx0XHRcdFx0cyA9IHN0YXRlLmRlbGV0ZUluKFsncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLnBsYXllck5hbWUsIFwic3RvY2tzXCIsIGFjdGlvbi5wYXlsb2FkLmNvbXBhbnlOYW1lXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5ZXJzJywgYWN0aW9uLnBheWxvYWQucGxheWVyTmFtZSwgXCJzdG9ja3NcIiwgYWN0aW9uLnBheWxvYWQuY29tcGFueU5hbWVdLFxuXHRcdFx0XHRcdGFjdGlvbi5wYXlsb2FkLmNvdW50KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgQ09NUEFOWS5TVEFSVF9DT01QQU5ZOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdzdGFydGVkTWFqb3JzJ10sIHN0YXRlLmdldEluKFsncGxheScsICdzdGFydGVkTWFqb3JzJ10pLnB1c2goYWN0aW9uLnBheWxvYWQuY29tcGFueSkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBDT01QQU5ZLk9QRVJBVEVfUEFZOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsncGxheScsICdvcGVyYXRpbmdSb3VuZHMnLCBhY3Rpb24ucGF5bG9hZC5vcGVyYXRpbmdSb3VuZCwgYWN0aW9uLnBheWxvYWQuY29tcGFueU5hbWVdLFxuXHRcdFx0XHRmcm9tSlMoYWN0aW9uLnBheWxvYWQucGF5b3V0Q2hhcnQpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgTUFJTi5HQU1FX0xPQURFRDpcblx0XHRcdHMgPSBzdGF0ZS5zZXQoJ3BsYXknLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQpKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgR0FNRS5DSEFOR0VfUEhBU0U6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ2N1cnJlbnRQaGFzZSddLCBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIEdBTUUuQ0hBTkdFX0NVUlJFTlRfT1I6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ2N1cnJlbnRPUiddLCBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIEdBTUUuQ0hBTkdFX0NVUlJFTlRfUk9VTkQ6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ2N1cnJlbnRSb3VuZCddLCBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRkZWZhdWx0OlxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=
