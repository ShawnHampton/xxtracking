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
				return play.players ? Object.values(play.players.toJS()) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiZ2V0UGxheUltbXV0YWJsZSIsInN0YXRlIiwiZ2V0SW4iLCJnZXRHYW1lSW1tdXRhYmxlIiwiZ2V0TWFqb3JzSW1tdXRhYmxlIiwiZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZSIsImdldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSIsImdldFBsYXllckltbXV0YWJsZSIsIm5hbWUiLCJnZXRTdG9ja3NJbW11dGFibGUiLCJnZXRQbGF5IiwiY3JlYXRlU2VsZWN0b3IiLCJ2YWx1ZSIsInRvSlMiLCJnZXRHYW1lIiwiZ2V0TWFqb3JzIiwiZ2V0T3BlcmF0aW5nUm91bmRzIiwiZ2V0Q3VycmVudE9wZXJhdGluZ1JvdW5kIiwib3JzIiwicGxheSIsImN1cnJlbnQiLCJnZXQiLCJnZXRTdGFydGVkTWFqb3JzIiwibWFqb3JzIiwic3RhcnRlZCIsInUiLCJmaWx0ZXIiLCJpbmRleE9mIiwibWFqb3IiLCJnZXRVbnN0YXJ0ZWRNYWpvcnMiLCJnZXRSb3VuZExhYmVsIiwiY3VycmVudFBoYXNlIiwiY3VycmVudFJvdW5kIiwiY3VycmVudE9SIiwiZ2V0UGxheWVycyIsInBsYXllcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJnZXRQbGF5ZXIiLCJnZXRTdG9ja3MiLCJzdG9ja3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBU0MsTUFBTUMsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBWixFQUE4QixFQUE5QixDQUFUO0FBQUEsQ0FBekI7QUFDQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQVNGLE1BQU1DLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQVosRUFBOEIsRUFBOUIsQ0FBVDtBQUFBLENBQXpCO0FB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RCxFQUFFRSxPQUFGLENBQVVDLE1BQU1wQixJQUFoQixJQUF3QixDQUEvQjtBQUNBLEVBRk0sQ0FBUDtBQUdBLENBUGdDLENBQTNCOztBQVVBLElBQU1zQixnQkFBZ0IsZ0VBQUFuQixDQUFlLENBQUNYLGdCQUFELENBQWYsRUFBbUMsZ0JBQVE7QUFDdkVtQixRQUFPQSxLQUFLTixJQUFMLEVBQVA7QUFDQSxLQUFJTSxLQUFLWSxZQUFMLEtBQXNCLElBQTFCLEVBQWdDO0FBQy9CLFNBQVVaLEtBQUtZLFlBQWYsU0FBK0JaLEtBQUthLFlBQXBDLFNBQW9EYixLQUFLYyxTQUF6RDtBQUNBLEVBRkQsTUFFTyxJQUFJZCxLQUFLWSxZQUFMLEtBQXNCLElBQTFCLEVBQWdDO0FBQ3RDLFNBQVVaLEtBQUtZLFlBQWYsU0FBK0JaLEtBQUthLFlBQXBDO0FBQ0E7O0FBRUQsYUFBVWIsS0FBS1ksWUFBZjtBQUNBLENBVDRCLENBQXRCOztBQVdBLElBQU1HLGFBQWEsZ0VBQUF2QixDQUFlLENBQUNYLGdCQUFELENBQWYsRUFBbUM7QUFBQSxRQUM1RG1CLEtBQUtnQixPQUFMLEdBQWVDLE9BQU9DLE1BQVAsQ0FBY2xCLEtBQUtnQixPQUFMLENBQWF0QixJQUFiLEVBQWQsQ0FBZixHQUFvRCxJQURRO0FBQUEsQ0FBbkMsQ0FBbkI7O0FBSUEsSUFBTXlCLFlBQVksZ0VBQUEzQixDQUN4QixDQUFDSixrQkFBRCxDQUR3QixFQUV4QjtBQUFBLFFBQVVLLFFBQVFBLE1BQU1DLElBQU4sRUFBUixHQUF1QixJQUFqQztBQUFBLENBRndCLENBQWxCOztBQUtBLElBQU0wQixZQUFZLGdFQUFBNUIsQ0FBZSxDQUFDRixrQkFBRCxDQUFmLEVBQXFDO0FBQUEsUUFDN0QrQixPQUFPM0IsSUFBUCxFQUQ2RDtBQUFBLENBQXJDLENBQWxCLEMiLCJmaWxlIjoiMC4wMTI2OWQ1MTM0N2I2NWVhNmMzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmNvbnN0IGdldFBsYXlJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheSddLCBbXSk7XG5jb25zdCBnZXRHYW1lSW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydnYW1lJywgJ2dhbWUnXSwge30pO1xuY29uc3QgZ2V0TWFqb3JzSW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydnYW1lJywgJ2dhbWUnLCAnbWFqb3JzJ10sIHt9KTtcbmNvbnN0IGdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGUgPSBzdGF0ZSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdzdGFydGVkTWFqb3JzJ10sIHt9KTtcbmNvbnN0IGdldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSA9IHN0YXRlID0+XG5cdHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5JywgJ29wZXJhdGluZ1JvdW5kcyddLCBbXSk7XG5cbmNvbnN0IGdldFBsYXllckltbXV0YWJsZSA9IChzdGF0ZSwgbmFtZSkgPT5cblx0c3RhdGUuZ2V0SW4oWydnYW1lJywgJ3BsYXknLCAncGxheWVycycsIG5hbWVdLCB7fSk7XG5cbmNvbnN0IGdldFN0b2Nrc0ltbXV0YWJsZSA9IChzdGF0ZSwgbmFtZSkgPT5cblx0c3RhdGUuZ2V0SW4oWydnYW1lJywgJ3BsYXknLCAncGxheWVycycsIG5hbWUsICdzdG9ja3MnXSwgW10pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxheSA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRQbGF5SW1tdXRhYmxlXSwgdmFsdWUgPT5cblx0dmFsdWUgPyB2YWx1ZS50b0pTKCkgOiBudWxsXG4pO1xuZXhwb3J0IGNvbnN0IGdldEdhbWUgPSBjcmVhdGVTZWxlY3RvcihbZ2V0R2FtZUltbXV0YWJsZV0sIHZhbHVlID0+XG5cdHZhbHVlLnRvSlMoKVxuKTtcbmV4cG9ydCBjb25zdCBnZXRNYWpvcnMgPSBjcmVhdGVTZWxlY3RvcihbZ2V0TWFqb3JzSW1tdXRhYmxlXSwgdmFsdWUgPT5cblx0dmFsdWUudG9KUygpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlcmF0aW5nUm91bmRzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFtnZXRPcGVyYXRpbmdSb3VuZHNJbW11dGFibGVdLFxuXHR2YWx1ZSA9PiB2YWx1ZS50b0pTKClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50T3BlcmF0aW5nUm91bmQgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSwgZ2V0UGxheUltbXV0YWJsZV0sXG5cdChvcnMsIHBsYXkpID0+IHtcblx0XHRjb25zdCBjdXJyZW50ID0gb3JzLmdldChwbGF5LmdldCgnY3VycmVudE9SJykpO1xuXHRcdHJldHVybiBjdXJyZW50ID8gY3VycmVudC50b0pTKCkgOiBudWxsO1xuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhcnRlZE1ham9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0TWFqb3JzSW1tdXRhYmxlLCBnZXRTdGFydGVkTWFqb3JzSW1tdXRhYmxlXSxcblx0KG1ham9ycywgc3RhcnRlZCkgPT4ge1xuXHRcdGNvbnN0IHUgPSBzdGFydGVkLnRvSlMoKTtcblx0XHRyZXR1cm4gbWFqb3JzLnRvSlMoKS5maWx0ZXIobWFqb3IgPT4ge1xuXHRcdFx0cmV0dXJuIHUuaW5kZXhPZihtYWpvci5uYW1lKSA+PSAwO1xuXHRcdH0pO1xuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0VW5zdGFydGVkTWFqb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFtnZXRNYWpvcnNJbW11dGFibGUsIGdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGVdLFxuXHQobWFqb3JzLCBzdGFydGVkKSA9PiB7XG5cdFx0Y29uc3QgdSA9IHN0YXJ0ZWQudG9KUygpO1xuXHRcdHJldHVybiBtYWpvcnMudG9KUygpLmZpbHRlcihtYWpvciA9PiB7XG5cdFx0XHRyZXR1cm4gdS5pbmRleE9mKG1ham9yLm5hbWUpIDwgMDtcblx0XHR9KTtcblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdW5kTGFiZWwgPSBjcmVhdGVTZWxlY3RvcihbZ2V0UGxheUltbXV0YWJsZV0sIHBsYXkgPT4ge1xuXHRwbGF5ID0gcGxheS50b0pTKCk7XG5cdGlmIChwbGF5LmN1cnJlbnRQaGFzZSA9PT0gJ09SJykge1xuXHRcdHJldHVybiBgJHtwbGF5LmN1cnJlbnRQaGFzZX0gJHtwbGF5LmN1cnJlbnRSb3VuZH0uJHtwbGF5LmN1cnJlbnRPUn1gO1xuXHR9IGVsc2UgaWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnU1InKSB7XG5cdFx0cmV0dXJuIGAke3BsYXkuY3VycmVudFBoYXNlfSAke3BsYXkuY3VycmVudFJvdW5kfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7cGxheS5jdXJyZW50UGhhc2V9YDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxheWVycyA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRQbGF5SW1tdXRhYmxlXSwgcGxheSA9PlxuXHRwbGF5LnBsYXllcnMgPyBPYmplY3QudmFsdWVzKHBsYXkucGxheWVycy50b0pTKCkpIDogbnVsbFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBsYXllciA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0UGxheWVySW1tdXRhYmxlXSxcblx0dmFsdWUgPT4gKHZhbHVlID8gdmFsdWUudG9KUygpIDogbnVsbClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdG9ja3MgPSBjcmVhdGVTZWxlY3RvcihbZ2V0U3RvY2tzSW1tdXRhYmxlXSwgc3RvY2tzID0+XG5cdHN0b2Nrcy50b0pTKClcbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9nYW1lL3NlbGVjdG9ycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
