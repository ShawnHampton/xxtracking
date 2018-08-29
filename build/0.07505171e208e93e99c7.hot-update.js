webpackHotUpdate(0, {
	/***/ './src/client/modules/game/selectors.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/game/selectors.js ***!
  \**********************************************/
		/*! exports provided: getPlay, getGame, getMajors, getOperatingRounds, getCurrentOperatingRound, getStartedMajors, getUnstartedMajors, getRoundLabel, getPlayers, getPlayer, getStocks */
		/*! exports used: getCurrentOperatingRound, getGame, getOperatingRounds, getPlay, getPlayer, getPlayers, getRoundLabel, getStartedMajors, getStocks, getUnstartedMajors */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return getPlay;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return getGame;
				}
			);
			/* unused harmony export getMajors */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return getOperatingRounds;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return getCurrentOperatingRound;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'h',
				function() {
					return getStartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'j',
				function() {
					return getUnstartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'g',
				function() {
					return getRoundLabel;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
				function() {
					return getPlayers;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return getPlayer;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'i',
				function() {
					return getStocks;
				}
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(
				/*! reselect */ './node_modules/reselect/lib/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_reselect__
			);

			var getPlayImmutable = function getPlayImmutable(state) {
				return state.getIn(['game', 'play'], []);
			};
			var getGameImmutable = function getGameImmutable(state) {
				return state.getIn(['game', 'game'], {});
			};
			var getMajorsImmutable = function getMajorsImmutable(state) {
				return state.getIn(['game', 'game', 'majors'], {});
			};
			var getStartedMajorsImmutable = function getStartedMajorsImmutable(
				state
			) {
				return state.getIn(['game', 'play', 'startedMajors'], {});
			};
			var getOperatingRoundsImmutable = function getOperatingRoundsImmutable(
				state
			) {
				return state.getIn(['game', 'play', 'operatingRounds'], []);
			};

			var getPlayerImmutable = function getPlayerImmutable(state, name) {
				return state.getIn(['game', 'play', 'players', name], {});
			};

			var getStocksImmutable = function getStocksImmutable(state, name) {
				return state.getIn(['game', 'play', 'players', name, 'stocks'], []);
			};

			var getPlay = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayImmutable], function(value) {
				return value ? value.toJS() : null;
			});
			var getGame = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getGameImmutable], function(value) {
				return value.toJS();
			});
			var getMajors = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getMajorsImmutable], function(value) {
				return value.toJS();
			});

			var getOperatingRounds = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getOperatingRoundsImmutable], function(value) {
				return value.toJS();
			});

			var getCurrentOperatingRound = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getOperatingRoundsImmutable, getPlayImmutable], function(ors, play) {
				var current = ors.get(play.get('currentOR'));
				return current ? current.toJS() : null;
			});

			var getStartedMajors = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getMajorsImmutable, getStartedMajorsImmutable], function(
				majors,
				started
			) {
				var u = started.toJS();
				return majors.toJS().filter(function(major) {
					return u.indexOf(major.name) >= 0;
				});
			});

			var getUnstartedMajors = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getMajorsImmutable, getStartedMajorsImmutable], function(
				majors,
				started
			) {
				var u = started.toJS();
				return majors.toJS().filter(function(major) {
					return u.indexOf(major.name) < 0;
				});
			});

			var getRoundLabel = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayImmutable], function(play) {
				play = play.toJS();
				if (play.currentPhase === 'OR') {
					return (
						play.currentPhase + ' ' + play.currentRound + '.' + play.currentOR
					);
				} else if (play.currentPhase === 'SR') {
					return play.currentPhase + ' ' + play.currentRound;
				}

				return '' + play.currentPhase;
			});

			var getPlayers = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayImmutable], function(play) {
				return play && play.players ? Object.values(play.players.toJS()) : [];
			});

			var getPlayer = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlayerImmutable], function(value) {
				return value ? value.toJS() : null;
			});

			var getStocks = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getStocksImmutable], function(stocks) {
				return stocks.toJS();
			});

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiZ2V0UGxheUltbXV0YWJsZSIsInN0YXRlIiwiZ2V0SW4iLCJnZXRHYW1lSW1tdXRhYmxlIiwiZ2V0TWFqb3JzSW1tdXRhYmxlIiwiZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZSIsImdldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSIsImdldFBsYXllckltbXV0YWJsZSIsIm5hbWUiLCJnZXRTdG9ja3NJbW11dGFibGUiLCJnZXRQbGF5IiwiY3JlYXRlU2VsZWN0b3IiLCJ2YWx1ZSIsInRvSlMiLCJnZXRHYW1lIiwiZ2V0TWFqb3JzIiwiZ2V0T3BlcmF0aW5nUm91bmRzIiwiZ2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kIiwib3JzIiwicGxheSIsImN1cnJlbnQiLCJnZXQiLCJnZXRTdGFydGVkTWFqb3JzIiwibWFqb3JzIiwic3RhcnRlZCIsInUiLCJmaWx0ZXIiLCJpbmRleE9mIiwibWFqb3IiLCJnZXRVbnN0YXJ0ZWRNYWpvcnMiLCJnZXRSb3VuZExhYmVsIiwiY3VycmVudFBoYXNlIiwiY3VycmVudFJvdW5kIiwiY3VycmVudE9SIiwiZ2V0UGxheWVycyIsInBsYXllcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJnZXRQbGF5ZXIiLCJnZXRTdG9ja3MiLCJzdG9ja3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBU0MsTUFBTUMsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBWixFQUE4QixFQUE5QixDQUFUO0FBQUEsQ0FBekI7QUFDQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQVNGLE1BQU1DLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQVosRUFBOEIsRUFBOUIsQ0FBVDtBQUFBLENBQXpCO0FB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RCxFQUFFRSxPQUFGLENBQVVDLE1BQU1wQixJQUFoQixJQUF3QixDQUEvQjtBQUNBLEVBRk0sQ0FBUDtBQUdBLENBUGdDLENBQTNCOztBQVVBLElBQU1zQixnQkFBZ0IsZ0VBQUFuQixDQUFlLENBQUNYLGdCQUFELENBQWYsRUFBbUMsZ0JBQVE7QUFDdkVtQixRQUFPQSxLQUFLTixJQUFMLEVBQVA7QUFDQSxLQUFJTSxLQUFLWSxZQUFMLEtBQXNCLElBQTFCLEVBQWdDO0FBQy9CLFNBQVVaLEtBQUtZLFlBQWYsU0FBK0JaLEtBQUthLFlBQXBDLFNBQW9EYixLQUFLYyxTQUF6RDtBQUNBLEVBRkQsTUFFTyxJQUFJZCxLQUFLWSxZQUFMLEtBQXNCLElBQTFCLEVBQWdDO0FBQ3RDLFNBQVVaLEtBQUtZLFlBQWYsU0FBK0JaLEtBQUthLFlBQXBDO0FBQ0E7O0FBRUQsYUFBVWIsS0FBS1ksWUFBZjtBQUNBLENBVDRCLENBQXRCOztBQVdBLElBQU1HLGFBQWEsZ0VBQUF2QixDQUFlLENBQUNYLGdCQUFELENBQWYsRUFBbUM7QUFBQSxRQUMzRG1CLFFBQVFBLEtBQUtnQixPQUFkLEdBQXlCQyxPQUFPQyxNQUFQLENBQWNsQixLQUFLZ0IsT0FBTCxDQUFhdEIsSUFBYixFQUFkLENBQXpCLEdBQThELEVBREY7QUFBQSxDQUFuQyxDQUFuQjs7QUFJQSxJQUFNeUIsWUFBWSxnRUFBQTNCLENBQ3hCLENBQUNKLGtCQUFELENBRHdCLEVBRXhCO0FBQUEsUUFBVUssUUFBUUEsTUFBTUMsSUFBTixFQUFSLEdBQXVCLElBQWpDO0FBQUEsQ0FGd0IsQ0FBbEI7O0FBS0EsSUFBTTBCLFlBQVksZ0VBQUE1QixDQUFlLENBQUNGLGtCQUFELENBQWYsRUFBcUM7QUFBQSxRQUM3RCtCLE9BQU8zQixJQUFQLEVBRDZEO0FBQUEsQ0FBckMsQ0FBbEIsQyIsImZpbGUiOiIwLjA3NTA1MTcxZTIwOGU5M2U5OWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuY29uc3QgZ2V0UGxheUltbXV0YWJsZSA9IHN0YXRlID0+IHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5J10sIFtdKTtcbmNvbnN0IGdldEdhbWVJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ2dhbWUnLCAnZ2FtZSddLCB7fSk7XG5jb25zdCBnZXRNYWpvcnNJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ2dhbWUnLCAnZ2FtZScsICdtYWpvcnMnXSwge30pO1xuY29uc3QgZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZSA9IHN0YXRlID0+XG5cdHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5JywgJ3N0YXJ0ZWRNYWpvcnMnXSwge30pO1xuY29uc3QgZ2V0T3BlcmF0aW5nUm91bmRzSW1tdXRhYmxlID0gc3RhdGUgPT5cblx0c3RhdGUuZ2V0SW4oWydnYW1lJywgJ3BsYXknLCAnb3BlcmF0aW5nUm91bmRzJ10sIFtdKTtcblxuY29uc3QgZ2V0UGxheWVySW1tdXRhYmxlID0gKHN0YXRlLCBuYW1lKSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdwbGF5ZXJzJywgbmFtZV0sIHt9KTtcblxuY29uc3QgZ2V0U3RvY2tzSW1tdXRhYmxlID0gKHN0YXRlLCBuYW1lKSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdwbGF5ZXJzJywgbmFtZSwgJ3N0b2NrcyddLCBbXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXlJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZSA/IHZhbHVlLnRvSlMoKSA6IG51bGxcbik7XG5leHBvcnQgY29uc3QgZ2V0R2FtZSA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRHYW1lSW1tdXRhYmxlXSwgdmFsdWUgPT5cblx0dmFsdWUudG9KUygpXG4pO1xuZXhwb3J0IGNvbnN0IGdldE1ham9ycyA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRNYWpvcnNJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZS50b0pTKClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVyYXRpbmdSb3VuZHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZV0sXG5cdHZhbHVlID0+IHZhbHVlLnRvSlMoKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0T3BlcmF0aW5nUm91bmRzSW1tdXRhYmxlLCBnZXRQbGF5SW1tdXRhYmxlXSxcblx0KG9ycywgcGxheSkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBvcnMuZ2V0KHBsYXkuZ2V0KCdjdXJyZW50T1InKSk7XG5cdFx0cmV0dXJuIGN1cnJlbnQgPyBjdXJyZW50LnRvSlMoKSA6IG51bGw7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGFydGVkTWFqb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFtnZXRNYWpvcnNJbW11dGFibGUsIGdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGVdLFxuXHQobWFqb3JzLCBzdGFydGVkKSA9PiB7XG5cdFx0Y29uc3QgdSA9IHN0YXJ0ZWQudG9KUygpO1xuXHRcdHJldHVybiBtYWpvcnMudG9KUygpLmZpbHRlcihtYWpvciA9PiB7XG5cdFx0XHRyZXR1cm4gdS5pbmRleE9mKG1ham9yLm5hbWUpID49IDA7XG5cdFx0fSk7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRVbnN0YXJ0ZWRNYWpvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE1ham9yc0ltbXV0YWJsZSwgZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZV0sXG5cdChtYWpvcnMsIHN0YXJ0ZWQpID0+IHtcblx0XHRjb25zdCB1ID0gc3RhcnRlZC50b0pTKCk7XG5cdFx0cmV0dXJuIG1ham9ycy50b0pTKCkuZmlsdGVyKG1ham9yID0+IHtcblx0XHRcdHJldHVybiB1LmluZGV4T2YobWFqb3IubmFtZSkgPCAwO1xuXHRcdH0pO1xuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91bmRMYWJlbCA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRQbGF5SW1tdXRhYmxlXSwgcGxheSA9PiB7XG5cdHBsYXkgPSBwbGF5LnRvSlMoKTtcblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0cmV0dXJuIGAke3BsYXkuY3VycmVudFBoYXNlfSAke3BsYXkuY3VycmVudFJvdW5kfS4ke3BsYXkuY3VycmVudE9SfWA7XG5cdH0gZWxzZSBpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdTUicpIHtcblx0XHRyZXR1cm4gYCR7cGxheS5jdXJyZW50UGhhc2V9ICR7cGxheS5jdXJyZW50Um91bmR9YDtcblx0fVxuXG5cdHJldHVybiBgJHtwbGF5LmN1cnJlbnRQaGFzZX1gO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXJzID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXlJbW11dGFibGVdLCBwbGF5ID0+XG5cdChwbGF5ICYmIHBsYXkucGxheWVycykgPyBPYmplY3QudmFsdWVzKHBsYXkucGxheWVycy50b0pTKCkpIDogW11cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ZXIgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldFBsYXllckltbXV0YWJsZV0sXG5cdHZhbHVlID0+ICh2YWx1ZSA/IHZhbHVlLnRvSlMoKSA6IG51bGwpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvY2tzID0gY3JlYXRlU2VsZWN0b3IoW2dldFN0b2Nrc0ltbXV0YWJsZV0sIHN0b2NrcyA9PlxuXHRzdG9ja3MudG9KUygpXG4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiXSwic291cmNlUm9vdCI6IiJ9
