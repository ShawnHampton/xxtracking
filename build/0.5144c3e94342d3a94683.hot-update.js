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
							['play', 'players', action.payload.name],
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload
							)
						);
						s = s.setIn(
							['play', 'players', action.payload.name, 'personalMoney'],
							0
						);
						s = s.setIn(
							['play', 'players', action.payload.name, 'stocks'],
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
							['play', 'players', action.payload.playerName, 'personalMoney'],
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
									'play',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9yZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJzdGF0ZSIsImZyb21KUyIsImdhbWUiLCJuYW1lIiwibWluUGxheWVycyIsIm1heFBsYXllcnMiLCJiYW5rU2l6ZSIsImluaXRpYWxQbGF5ZXJNb25leSIsIm1ham9ycyIsInBsYXkiLCJhY3Rpb24iLCJzIiwidHlwZSIsIlBMQVlFUiIsIkFERF9QTEFZRVIiLCJzZXRJbiIsInBheWxvYWQiLCJSRU1PVkVfUExBWUVSIiwiZGVsZXRlSW4iLCJTRVRfUEVSU09OQUxfTU9ORVkiLCJwbGF5ZXJOYW1lIiwicGVyc29uYWxNb25leSIsIlNFVF9TVE9DSyIsImNvdW50IiwiY29tcGFueU5hbWUiLCJDT01QQU5ZIiwiU1RBUlRfQ09NUEFOWSIsImdldEluIiwicHVzaCIsImNvbXBhbnkiLCJPUEVSQVRFX1BBWSIsIm9wZXJhdGluZ1JvdW5kIiwicGF5b3V0Q2hhcnQiLCJNQUlOIiwiR0FNRV9MT0FERUQiLCJzZXQiLCJHQU1FIiwiQ0hBTkdFX1BIQVNFIiwiQ0hBTkdFX0NVUlJFTlRfT1IiLCJDSEFOR0VfQ1VSUkVOVF9ST1VORCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUFlLFlBaUJIO0FBQUEsS0FqQmFBLEtBaUJiLHVFQWpCcUIseURBQUFDLENBQU87QUFDdkNDLFFBQU07QUFDTEMsU0FBTSxNQUREO0FBRUxDLGVBQVksQ0FGUDtBQUdMQyxlQUFZLENBSFA7QUFJTEMsYUFBVSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUpMO0FBS0xDLHVCQUFvQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUxmOztBQU9MQyxXQUFRLENBQUM7QUFDUkwsVUFBTTtBQURFLElBQUQsRUFFTDtBQUNGQSxVQUFNO0FBREosSUFGSyxFQUlMO0FBQ0ZBLFVBQU07QUFESixJQUpLO0FBUEgsR0FEaUM7QUFnQnZDTSxRQUFNO0FBaEJpQyxFQUFQLENBaUJyQjtBQUFBLEtBQVJDLE1BQVE7O0FBQ1gsS0FBSUMsSUFBSVgsS0FBUjtBQUNBLFNBQVFVLE9BQU9FLElBQWY7QUFDQyxPQUFLLCtEQUFBQyxDQUFPQyxVQUFaO0FBQ0NILE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CTCxPQUFPTSxPQUFQLENBQWViLElBQW5DLENBQVosRUFBc0QseURBQUFGLENBQU9TLE9BQU9NLE9BQWQsQ0FBdEQsQ0FBSjtBQUNBTCxPQUFJQSxFQUFFSSxLQUFGLENBQVEsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQkwsT0FBT00sT0FBUCxDQUFlYixJQUFuQyxFQUF5QyxlQUF6QyxDQUFSLEVBQW1FLENBQW5FLENBQUo7QUFDQVEsT0FBSUEsRUFBRUksS0FBRixDQUFRLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0JMLE9BQU9NLE9BQVAsQ0FBZWIsSUFBbkMsRUFBeUMsUUFBekMsQ0FBUixFQUE0RCx5REFBQUYsQ0FBTyxFQUFQLENBQTVELENBQUo7QUFDQSxVQUFPVSxDQUFQO0FBQ0QsT0FBSywrREFBQUUsQ0FBT0ksYUFBWjtBQUNDTixPQUFJWCxNQUFNa0IsUUFBTixDQUFlLFNBQWYsRUFBMEJSLE9BQU9NLE9BQWpDLENBQUo7QUFDQSxVQUFPTCxDQUFQO0FBQ0QsT0FBSywrREFBQUUsQ0FBT00sa0JBQVo7QUFDQ1IsT0FBSVgsTUFBTWUsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0JMLE9BQU9NLE9BQVAsQ0FBZUksVUFBbkMsRUFBK0MsZUFBL0MsQ0FBWixFQUE2RVYsT0FBT00sT0FBUCxDQUFlSyxhQUE1RixDQUFKO0FBQ0EsVUFBT1YsQ0FBUDtBQUNELE9BQUssK0RBQUFFLENBQU9TLFNBQVo7QUFDQyxPQUFJWixPQUFPTSxPQUFQLENBQWVPLEtBQWYsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDL0JaLFFBQUlYLE1BQU1rQixRQUFOLENBQWUsQ0FBQyxTQUFELEVBQVlSLE9BQU9NLE9BQVAsQ0FBZUksVUFBM0IsRUFBdUMsUUFBdkMsRUFBaURWLE9BQU9NLE9BQVAsQ0FBZVEsV0FBaEUsQ0FBZixDQUFKO0FBQ0EsSUFGRCxNQUVPO0FBQ05iLFFBQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CTCxPQUFPTSxPQUFQLENBQWVJLFVBQW5DLEVBQStDLFFBQS9DLEVBQXlEVixPQUFPTSxPQUFQLENBQWVRLFdBQXhFLENBQVosRUFDSGQsT0FBT00sT0FBUCxDQUFlTyxLQURaLENBQUo7QUFFQTtBQUNELFVBQU9aLENBQVA7QUFDRCxPQUFLLGlFQUFBYyxDQUFRQyxhQUFiO0FBQ0NmLE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxlQUFULENBQVosRUFBdUNmLE1BQU0yQixLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsZUFBVCxDQUFaLEVBQXVDQyxJQUF2QyxDQUE0Q2xCLE9BQU9NLE9BQVAsQ0FBZWEsT0FBM0QsQ0FBdkMsQ0FBSjtBQUNBLFVBQU9sQixDQUFQO0FBQ0QsT0FBSyxpRUFBQWMsQ0FBUUssV0FBYjtBQUNDbkIsT0FBSVgsTUFBTWUsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGlCQUFULEVBQTRCTCxPQUFPTSxPQUFQLENBQWVlLGNBQTNDLEVBQTJEckIsT0FBT00sT0FBUCxDQUFlUSxXQUExRSxDQUFaLEVBQ0gseURBQUF2QixDQUFPUyxPQUFPTSxPQUFQLENBQWVnQixXQUF0QixDQURHLENBQUo7QUFFQSxVQUFPckIsQ0FBUDtBQUNELE9BQUssMkRBQUFzQixDQUFLQyxXQUFWO0FBQ0N2QixPQUFJWCxNQUFNbUMsR0FBTixDQUFVLE1BQVYsRUFBa0IseURBQUFsQyxDQUFPUyxPQUFPTSxPQUFkLENBQWxCLENBQUo7QUFDQSxVQUFPTCxDQUFQO0FBQ0QsT0FBSyxzREFBQXlCLENBQUtDLFlBQVY7QUFDQzFCLE9BQUlYLE1BQU1lLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxjQUFULENBQVosRUFBc0NMLE9BQU9NLE9BQTdDLENBQUo7QUFDQSxVQUFPTCxDQUFQO0FBQ0QsT0FBSyxzREFBQXlCLENBQUtFLGlCQUFWO0FBQ0MzQixPQUFJWCxNQUFNZSxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUFaLEVBQW1DTCxPQUFPTSxPQUExQyxDQUFKO0FBQ0EsVUFBT0wsQ0FBUDtBQUNELE9BQUssc0RBQUF5QixDQUFLRyxvQkFBVjtBQUNDNUIsT0FBSVgsTUFBTWUsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLGNBQVQsQ0FBWixFQUFzQ0wsT0FBT00sT0FBN0MsQ0FBSjtBQUNBLFVBQU9MLENBQVA7QUFDRDtBQXZDRDs7QUEwQ0EsUUFBT1gsS0FBUDtBQUNBLEMiLCJmaWxlIjoiMC41MTQ0YzNlOTQzNDJkM2E5NDY4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmcm9tSlN9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7Q09NUEFOWX0gZnJvbSBcIi4uL2NvbXBhbnkvYWN0aW9uc1wiO1xuaW1wb3J0IHtHQU1FfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge01BSU59IGZyb20gXCIuLi9tYWluL2FjdGlvbnNcIjtcbmltcG9ydCB7UExBWUVSfSBmcm9tIFwiLi4vcGxheWVyL2FjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZnJvbUpTKHtcblx0Z2FtZToge1xuXHRcdG5hbWU6IFwiMTg0NlwiLFxuXHRcdG1pblBsYXllcnM6IDIsXG5cdFx0bWF4UGxheWVyczogNixcblx0XHRiYW5rU2l6ZTogWzc3MDAsIDc3MDAsIDc3MDAsIDc3MDAsIDc3MDBdLFxuXHRcdGluaXRpYWxQbGF5ZXJNb25leTogWzUwMCwgNTAwLCA1MDAsIDUwMCwgNTAwXSxcblxuXHRcdG1ham9yczogW3tcblx0XHRcdG5hbWU6IFwiQiZPXCJcblx0XHR9LCB7XG5cdFx0XHRuYW1lOiBcIkdXVFwiXG5cdFx0fSwge1xuXHRcdFx0bmFtZTogXCJJQ1wiXG5cdFx0fV1cblx0fSxcblx0cGxheTogbnVsbFxufSksIGFjdGlvbikge1xuXHRsZXQgcyA9IHN0YXRlO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBQTEFZRVIuQUREX1BMQVlFUjpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLm5hbWVdLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQpKTtcblx0XHRcdHMgPSBzLnNldEluKFsncGxheScsICdwbGF5ZXJzJywgYWN0aW9uLnBheWxvYWQubmFtZSwgXCJwZXJzb25hbE1vbmV5XCJdLCAwKTtcblx0XHRcdHMgPSBzLnNldEluKFsncGxheScsICdwbGF5ZXJzJywgYWN0aW9uLnBheWxvYWQubmFtZSwgXCJzdG9ja3NcIl0sIGZyb21KUyh7fSkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBQTEFZRVIuUkVNT1ZFX1BMQVlFUjpcblx0XHRcdHMgPSBzdGF0ZS5kZWxldGVJbigncGxheWVycycsIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgUExBWUVSLlNFVF9QRVJTT05BTF9NT05FWTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLnBsYXllck5hbWUsIFwicGVyc29uYWxNb25leVwiXSwgYWN0aW9uLnBheWxvYWQucGVyc29uYWxNb25leSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIFBMQVlFUi5TRVRfU1RPQ0s6XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQuY291bnQgPT09IDApIHtcblx0XHRcdFx0cyA9IHN0YXRlLmRlbGV0ZUluKFsncGxheWVycycsIGFjdGlvbi5wYXlsb2FkLnBsYXllck5hbWUsIFwic3RvY2tzXCIsIGFjdGlvbi5wYXlsb2FkLmNvbXBhbnlOYW1lXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ3BsYXllcnMnLCBhY3Rpb24ucGF5bG9hZC5wbGF5ZXJOYW1lLCBcInN0b2Nrc1wiLCBhY3Rpb24ucGF5bG9hZC5jb21wYW55TmFtZV0sXG5cdFx0XHRcdFx0YWN0aW9uLnBheWxvYWQuY291bnQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBDT01QQU5ZLlNUQVJUX0NPTVBBTlk6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ3N0YXJ0ZWRNYWpvcnMnXSwgc3RhdGUuZ2V0SW4oWydwbGF5JywgJ3N0YXJ0ZWRNYWpvcnMnXSkucHVzaChhY3Rpb24ucGF5bG9hZC5jb21wYW55KSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIENPTVBBTlkuT1BFUkFURV9QQVk6XG5cdFx0XHRzID0gc3RhdGUuc2V0SW4oWydwbGF5JywgJ29wZXJhdGluZ1JvdW5kcycsIGFjdGlvbi5wYXlsb2FkLm9wZXJhdGluZ1JvdW5kLCBhY3Rpb24ucGF5bG9hZC5jb21wYW55TmFtZV0sXG5cdFx0XHRcdGZyb21KUyhhY3Rpb24ucGF5bG9hZC5wYXlvdXRDaGFydCkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBNQUlOLkdBTUVfTE9BREVEOlxuXHRcdFx0cyA9IHN0YXRlLnNldCgncGxheScsIGZyb21KUyhhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBHQU1FLkNIQU5HRV9QSEFTRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnY3VycmVudFBoYXNlJ10sIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgR0FNRS5DSEFOR0VfQ1VSUkVOVF9PUjpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnY3VycmVudE9SJ10sIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGNhc2UgR0FNRS5DSEFOR0VfQ1VSUkVOVF9ST1VORDpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3BsYXknLCAnY3VycmVudFJvdW5kJ10sIGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdHJldHVybiBzO1xuXHRcdGRlZmF1bHQ6XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3JlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==
