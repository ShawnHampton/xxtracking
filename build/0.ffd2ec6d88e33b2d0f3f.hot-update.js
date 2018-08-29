webpackHotUpdate(0, {
	/***/ './src/client/modules/main/reducer.jsx':
		/*!*********************************************!*\
  !*** ./src/client/modules/main/reducer.jsx ***!
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);

			/* harmony default export */ __webpack_exports__['a'] = function() {
				var state =
					arguments.length > 0 && arguments[0] !== undefined
						? arguments[0]
						: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])({
								status: {
									state: 'new'
								},
								plays: []
						  });
				var action = arguments[1];

				var s = state;
				switch (action.type) {
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */].PLAY_LIST:
						s = state.set(
							'plays',
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.CHOOSE_GAME:
						s = state.setIn(['status', 'state'], 'ready');
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.START_GAME:
						s = state.setIn(['status', 'state'], 'started');
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */].STOP_GAME:
						s = state.setIn(['status', 'state'], 'finished');
						return s;
					default:
				}

				return state;
			};

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJzdGF0ZSIsImZyb21KUyIsInN0YXR1cyIsInBsYXlzIiwiYWN0aW9uIiwicyIsInR5cGUiLCJNQUlOIiwiUExBWV9MSVNUIiwic2V0IiwicGF5bG9hZCIsIkNIT09TRV9HQU1FIiwic2V0SW4iLCJTVEFSVF9HQU1FIiwiU1RPUF9HQU1FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEseURBQWUsWUFLSDtBQUFBLEtBTGFBLEtBS2IsdUVBTHFCLHlEQUFBQyxDQUFPO0FBQ3ZDQyxVQUFRO0FBQ1BGLFVBQU87QUFEQSxHQUQrQjtBQUl2Q0csU0FBTztBQUpnQyxFQUFQLENBS3JCO0FBQUEsS0FBUkMsTUFBUTs7QUFDWCxLQUFJQyxJQUFJTCxLQUFSO0FBQ0EsU0FBUUksT0FBT0UsSUFBZjtBQUNDLE9BQUssc0RBQUFDLENBQUtDLFNBQVY7QUFDQ0gsT0FBSUwsTUFBTVMsR0FBTixDQUFVLE9BQVYsRUFBbUIseURBQUFSLENBQU9HLE9BQU9NLE9BQWQsQ0FBbkIsQ0FBSjtBQUNBLFVBQU9MLENBQVA7QUFDRCxPQUFLLHNEQUFBRSxDQUFLSSxXQUFWO0FBQ0NOLE9BQUlMLE1BQU1ZLEtBQU4sQ0FBWSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVosRUFBaUMsT0FBakMsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRCxPQUFLLHNEQUFBRSxDQUFLTSxVQUFWO0FBQ0NSLE9BQUlMLE1BQU1ZLEtBQU4sQ0FBWSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVosRUFBaUMsU0FBakMsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRCxPQUFLLHNEQUFBRSxDQUFLTyxTQUFWO0FBQ0NULE9BQUlMLE1BQU1ZLEtBQU4sQ0FBWSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVosRUFBaUMsVUFBakMsQ0FBSjtBQUNBLFVBQU9QLENBQVA7QUFDRDtBQWJEOztBQWdCQSxRQUFPTCxLQUFQO0FBQ0EsQyIsImZpbGUiOiIwLmZmZDJlYzZkODhlMzNiMmQwZjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb21KU30gZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtNQUlOfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZyb21KUyh7XG5cdHN0YXR1czoge1xuXHRcdHN0YXRlOiBcIm5ld1wiLFxuXHR9LFxuXHRwbGF5czogW11cbn0pLCBhY3Rpb24pIHtcblx0bGV0IHMgPSBzdGF0ZTtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgTUFJTi5QTEFZX0xJU1Q6XG5cdFx0XHRzID0gc3RhdGUuc2V0KCdwbGF5cycsIGZyb21KUyhhY3Rpb24ucGF5bG9hZCkpO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0Y2FzZSBNQUlOLkNIT09TRV9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwicmVhZHlcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RBUlRfR0FNRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3N0YXR1cycsICdzdGF0ZSddLCBcInN0YXJ0ZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RPUF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwiZmluaXNoZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRkZWZhdWx0OlxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=
