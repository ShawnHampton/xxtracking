webpackHotUpdate(0, {
	/***/ './src/client/modules/main/selectors.js':
		/*!**********************************************!*\
  !*** ./src/client/modules/main/selectors.js ***!
  \**********************************************/
		/*! exports provided: getGameStatus, getPlays */
		/*! exports used: getGameStatus */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return getGameStatus;
				}
			);
			/* unused harmony export getPlays */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(
				/*! reselect */ './node_modules/reselect/lib/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_reselect__
			);

			var getGameStatusImmutable = function getGameStatusImmutable(state) {
				return state.getIn(['main', 'status'], {});
			};
			var getPlaysImmutable = function getPlaysImmutable(state) {
				return state.getIn(['main', 'plays'], []);
			};

			var getGameStatus = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getGameStatusImmutable], function(status) {
				return status.toJS();
			});

			var getPlays = Object(
				__WEBPACK_IMPORTED_MODULE_0_reselect__['createSelector']
			)([getPlaysImmutable], function(status) {
				return status.toJS();
			});

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiZ2V0R2FtZVN0YXR1c0ltbXV0YWJsZSIsInN0YXRlIiwiZ2V0SW4iLCJnZXRQbGF5c0ltbXV0YWJsZSIsImdldEdhbWVTdGF0dXMiLCJjcmVhdGVTZWxlY3RvciIsInN0YXR1cyIsInRvSlMiLCJnZXRQbGF5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEseUJBQXlCLFNBQXpCQSxzQkFBeUI7QUFBQSxRQUFTQyxNQUFNQyxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUFaLEVBQWdDLEVBQWhDLENBQVQ7QUFBQSxDQUEvQjtBQUNBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CO0FBQUEsUUFBU0YsTUFBTUMsS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBWixFQUErQixFQUEvQixDQUFUO0FBQUEsQ0FBMUI7O0FBRU8sSUFBTUUsZ0JBQWdCLGdFQUFBQyxDQUFlLENBQUNMLHNCQUFELENBQWYsRUFBeUM7QUFBQSxRQUNyRU0sT0FBT0MsSUFBUCxFQURxRTtBQUFBLENBQXpDLENBQXRCOztBQUlBLElBQU1DLFdBQVcsZ0VBQUFILENBQWUsQ0FBQ0YsaUJBQUQsQ0FBZixFQUFvQztBQUFBLFFBQzNERyxPQUFPQyxJQUFQLEVBRDJEO0FBQUEsQ0FBcEMsQ0FBakIsQyIsImZpbGUiOiIwLjEzM2NhNjMwYWI3Yjk5YTg0NDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuY29uc3QgZ2V0R2FtZVN0YXR1c0ltbXV0YWJsZSA9IHN0YXRlID0+IHN0YXRlLmdldEluKFsnbWFpbicsICdzdGF0dXMnXSwge30pO1xuY29uc3QgZ2V0UGxheXNJbW11dGFibGUgPSBzdGF0ZSA9PiBzdGF0ZS5nZXRJbihbJ21haW4nLCAncGxheXMnXSwgW10pO1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRHYW1lU3RhdHVzSW1tdXRhYmxlXSwgc3RhdHVzID0+XG5cdHN0YXR1cy50b0pTKClcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF5cyA9IGNyZWF0ZVNlbGVjdG9yKFtnZXRQbGF5c0ltbXV0YWJsZV0sIHN0YXR1cyA9PlxuXHRzdGF0dXMudG9KUygpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vc2VsZWN0b3JzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
