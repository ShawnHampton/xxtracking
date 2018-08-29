webpackHotUpdate(0, {
	/***/ './src/client/modules/game/selectors.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/game/selectors.js ***!
  \**********************************************/
		/*! exports provided: getPlay, getGame, getMajors, getOperatingRounds, getCurrentOperatingRound, getStartedMajors, getUnstartedMajors, getRoundLabel */
		/*! exports used: getCurrentOperatingRound, getGame, getOperatingRounds, getPlay, getRoundLabel, getStartedMajors, getUnstartedMajors */
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
				'f',
				function() {
					return getStartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'g',
				function() {
					return getUnstartedMajors;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return getRoundLabel;
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

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiZ2V0UGxheUltbXV0YWJsZSIsInN0YXRlIiwiZ2V0SW4iLCJnZXRHYW1lSW1tdXRhYmxlIiwiZ2V0TWFqb3JzSW1tdXRhYmxlIiwiZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZSIsImdldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSIsImdldFBsYXkiLCJjcmVhdGVTZWxlY3RvciIsInZhbHVlIiwidG9KUyIsImdldEdhbWUiLCJnZXRNYWpvcnMiLCJnZXRPcGVyYXRpbmdSb3VuZHMiLCJnZXRDdXJyZW50T3BlcmF0aW5nUm91bmQiLCJvcnMiLCJwbGF5IiwiY3VycmVudCIsImdldCIsImdldFN0YXJ0ZWRNYWpvcnMiLCJtYWpvcnMiLCJzdGFydGVkIiwidSIsImZpbHRlciIsImluZGV4T2YiLCJtYWpvciIsIm5hbWUiLCJnZXRVbnN0YXJ0ZWRNYWpvcnMiLCJnZXRSb3VuZExhYmVsIiwiY3VycmVudFBoYXNlIiwiY3VycmVudFJvdW5kIiwiY3VycmVudE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQVNDLE1BQU1DLEtBQU4sQ0FBWSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQVosRUFBOEIsRUFBOUIsQ0FBVDtBQUFBLENBQXpCO0FBQ0EsSUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxRQUFTRixNQUFNQyxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFaLEVBQThCLEVBQTlCLENBQVQ7QUFBQSxDQUF6QjtBQUNBLElBQU1FLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsUUFBU0gsTUFBTUMsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsUUFBakIsQ0FBWixFQUF3QyxFQUF4QyxDQUFUO0FBQUEsQ0FB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmNvbnN0IGdldFBsYXlJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheSddLCBbXSk7XG5jb25zdCBnZXRHYW1lSW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydnYW1lJywgJ2dhbWUnXSwge30pO1xuY29uc3QgZ2V0TWFqb3JzSW1tdXRhYmxlID0gc3RhdGUgPT4gc3RhdGUuZ2V0SW4oWydnYW1lJywgJ2dhbWUnLCAnbWFqb3JzJ10sIHt9KTtcbmNvbnN0IGdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGUgPSBzdGF0ZSA9PlxuXHRzdGF0ZS5nZXRJbihbJ2dhbWUnLCAncGxheScsICdzdGFydGVkTWFqb3JzJ10sIHt9KTtcbmNvbnN0IGdldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZSA9IHN0YXRlID0+XG5cdHN0YXRlLmdldEluKFsnZ2FtZScsICdwbGF5JywgJ29wZXJhdGluZ1JvdW5kcyddLCBbXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5ID0gY3JlYXRlU2VsZWN0b3IoW2dldFBsYXlJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZSA/IHZhbHVlLnRvSlMoKSA6IG51bGxcbik7XG5leHBvcnQgY29uc3QgZ2V0R2FtZSA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRHYW1lSW1tdXRhYmxlXSwgdmFsdWUgPT5cblx0dmFsdWUudG9KUygpXG4pO1xuZXhwb3J0IGNvbnN0IGdldE1ham9ycyA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRNYWpvcnNJbW11dGFibGVdLCB2YWx1ZSA9PlxuXHR2YWx1ZS50b0pTKClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVyYXRpbmdSb3VuZHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE9wZXJhdGluZ1JvdW5kc0ltbXV0YWJsZV0sXG5cdHZhbHVlID0+IHZhbHVlLnRvSlMoKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRPcGVyYXRpbmdSb3VuZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRbZ2V0T3BlcmF0aW5nUm91bmRzSW1tdXRhYmxlLCBnZXRQbGF5SW1tdXRhYmxlXSxcblx0KG9ycywgcGxheSkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBvcnMuZ2V0KHBsYXkuZ2V0KCdjdXJyZW50T1InKSk7XG5cdFx0cmV0dXJuIGN1cnJlbnQgPyBjdXJyZW50LnRvSlMoKSA6IG51bGw7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGFydGVkTWFqb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFtnZXRNYWpvcnNJbW11dGFibGUsIGdldFN0YXJ0ZWRNYWpvcnNJbW11dGFibGVdLFxuXHQobWFqb3JzLCBzdGFydGVkKSA9PiB7XG5cdFx0Y29uc3QgdSA9IHN0YXJ0ZWQudG9KUygpO1xuXHRcdHJldHVybiBtYWpvcnMudG9KUygpLmZpbHRlcihtYWpvciA9PiB7XG5cdFx0XHRyZXR1cm4gdS5pbmRleE9mKG1ham9yLm5hbWUpID49IDA7XG5cdFx0fSk7XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRVbnN0YXJ0ZWRNYWpvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0W2dldE1ham9yc0ltbXV0YWJsZSwgZ2V0U3RhcnRlZE1ham9yc0ltbXV0YWJsZV0sXG5cdChtYWpvcnMsIHN0YXJ0ZWQpID0+IHtcblx0XHRjb25zdCB1ID0gc3RhcnRlZC50b0pTKCk7XG5cdFx0cmV0dXJuIG1ham9ycy50b0pTKCkuZmlsdGVyKG1ham9yID0+IHtcblx0XHRcdHJldHVybiB1LmluZGV4T2YobWFqb3IubmFtZSkgPCAwO1xuXHRcdH0pO1xuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91bmRMYWJlbCA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRQbGF5SW1tdXRhYmxlXSwgcGxheSA9PiB7XG5cdHBsYXkgPSBwbGF5LnRvSlMoKTtcblx0aWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnT1InKSB7XG5cdFx0cmV0dXJuIGAke3BsYXkuY3VycmVudFBoYXNlfSAke3BsYXkuY3VycmVudFJvdW5kfS4ke3BsYXkuY3VycmVudE9SfWA7XG5cdH0gZWxzZSBpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdTUicpIHtcblx0XHRyZXR1cm4gYCR7cGxheS5jdXJyZW50UGhhc2V9ICR7cGxheS5jdXJyZW50Um91bmR9YDtcblx0fVxuXG5cdHJldHVybiBgJHtwbGF5LmN1cnJlbnRQaGFzZX1gO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zZWxlY3RvcnMuanMiXSwic291cmNlUm9vdCI6IiJ9
