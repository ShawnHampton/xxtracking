webpackHotUpdate(0, {
	/***/ './src/client/modules/serverApi/utils.js':
		/*!***********************************************!*\
  !*** ./src/client/modules/serverApi/utils.js ***!
  \***********************************************/
		/*! exports provided: buildRoute, createNewPlay, listPlays, loadSavedPlay, authenticateToServer */
		/*! exports used: createNewPlay, listPlays */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export buildRoute */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return createNewPlay;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return listPlays;
				}
			);
			/* unused harmony export loadSavedPlay */
			/* unused harmony export authenticateToServer */
			/**
			 * TODO: Need to figure out the right way to configure this
			 *
			 * @returns {string} The root route
			 */
			var getRootRoute = function getRootRoute() {
				return '/api';
			};

			/**
			 * TODO: Need to figure out the right way to configure this
			 *
			 * @param {string} route The rest of the path
			 * @returns {string} The root route
			 */
			var buildRoute = function buildRoute(route) {
				return getRootRoute() + '/' + route;
			};

			/**
			 * Helper method to make GET calls.
			 *
			 * @param {string} route The rest of the path
			 * @returns {Promise<any>} Promise to be run
			 */
			var fetchData = function fetchData(route) {
				var root = getRootRoute();

				return fetch(root + '/' + route, {
					method: 'GET',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(function(response) {
					return response.json();
				});
			};

			/**
			 * Helper method to make POST calls
			 *
			 * @param {string} route The rest of the route
			 * @param {object} body The body of the call
			 * @returns {Promise<any>} Promise to be run
			 */
			var postData = function postData(route, body) {
				var root = getRootRoute();

				return fetch(root + '/' + route, {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				}).then(function(response) {
					return response.json();
				});
			};

			var createNewPlay = function createNewPlay(newPlay) {
				return new Promise(function(resolve) {
					var data = postData('plays', newPlay);
					resolve(data);
				});
			};

			var listPlays = function listPlays() {
				return new Promise(function(resolve) {
					var data = fetchData('plays');
					resolve(data);
				});
			};

			var loadSavedPlay = function loadSavedPlay(playId) {
				return new Promise(function(resolve) {
					var data = fetchData('plays/:' + playId);
					resolve(data);
				});
			};

			/**
			 * Causes a login attempt to the server
			 *
			 * @param {string} username the username
			 * @param {string} password the password
			 * @returns {Promise<any>} Promise to be run
			 */
			var authenticateToServer = function authenticateToServer(
				username,
				password
			) {
				var root = getRootRoute();

				return fetch(root + '/auth/login', {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				}).then(function(response) {
					if (response.ok) {
						return response.json().then(function(json) {
							console.log('json', json);
							return Promise.resolve({
								body: json,
								status: response.status,
								statusText: response.statusText
							});
						});
					}

					return Promise.reject({
						status: response.status,
						statusText: response.statusText
					});
				});
			};

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvc2VydmVyQXBpL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldFJvb3RSb3V0ZSIsImJ1aWxkUm91dGUiLCJyb3V0ZSIsImZldGNoRGF0YSIsInJvb3QiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlTmV3UGxheSIsIm5ld1BsYXkiLCJQcm9taXNlIiwiZGF0YSIsInJlc29sdmUiLCJsaXN0UGxheXMiLCJsb2FkU2F2ZWRQbGF5IiwicGxheUlkIiwiYXV0aGVudGljYXRlVG9TZXJ2ZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib2siLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTs7Ozs7QUFLQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUMxQixRQUFPLE1BQVA7QUFDQSxDQUZEOztBQUlBOzs7Ozs7QUFNTyxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsUUFBUztBQUNsQyxRQUFVRCxjQUFWLFNBQTRCRSxLQUE1QjtBQUNBLENBRk07O0FBSVA7Ozs7OztBQU1BLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDRCxLQUFELEVBQVc7QUFDNUIsS0FBSUUsT0FBT0osY0FBWDs7QUFFQSxRQUFPSyxNQUFTRCxJQUFULFNBQWlCRixLQUFqQixFQUEwQjtBQUNoQ0ksVUFBUSxLQUR3QjtBQUVoQ0MsZUFBYSxhQUZtQjtBQUdoQ0MsV0FBUztBQUNSLG1CQUFnQjtBQURSO0FBSHVCLEVBQTFCLEVBTUpDLElBTkksQ0FNQyxvQkFBWTtBQUNuQixTQUFPQyxTQUFTQyxJQUFULEVBQVA7QUFDQSxFQVJNLENBQVA7QUFTQSxDQVpEOztBQWNBOzs7Ozs7O0FBT0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNWLEtBQUQsRUFBUVcsSUFBUixFQUFpQjtBQUNqQyxLQUFNVCxPQUFPSixjQUFiOztBQUVBLFFBQU9LLE1BQVNELElBQVQsU0FBaUJGLEtBQWpCLEVBQTBCO0FBQ2hDSSxVQUFRLE1BRHdCO0FBRWhDQyxlQUFhLGFBRm1CO0FBR2hDQyxXQUFTO0FBQ1IsbUJBQWdCO0FBRFIsR0FIdUI7QUFNaENLLFFBQU1DLEtBQUtDLFNBQUwsQ0FBZUYsSUFBZjtBQU4wQixFQUExQixFQU9KSixJQVBJLENBT0Msb0JBQVk7QUFDbkIsU0FBT0MsU0FBU0MsSUFBVCxFQUFQO0FBQ0EsRUFUTSxDQUFQO0FBVUEsQ0FiRDs7QUFlTyxJQUFNSyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLE9BQUQsRUFBYTtBQUN6QyxRQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUM3QixNQUFNQyxPQUFPUCxTQUFTLE9BQVQsRUFBa0JLLE9BQWxCLENBQWI7QUFDQUcsVUFBUUQsSUFBUjtBQUNBLEVBSE0sQ0FBUDtBQUlBLENBTE07O0FBT0EsSUFBTUUsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDOUIsUUFBTyxJQUFJSCxPQUFKLENBQVksbUJBQVc7QUFDN0IsTUFBTUMsT0FBT2hCLFVBQVUsT0FBVixDQUFiO0FBQ0FpQixVQUFRRCxJQUFSO0FBQ0EsRUFITSxDQUFQO0FBSUEsQ0FMTTs7QUFPQSxJQUFNRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLE1BQUQsRUFBWTtBQUN4QyxRQUFPLElBQUlMLE9BQUosQ0FBWSxtQkFBVztBQUM3QixNQUFNQyxPQUFPaEIsc0JBQW9Cb0IsTUFBcEIsQ0FBYjtBQUNBSCxVQUFRRCxJQUFSO0FBQ0EsRUFITSxDQUFQO0FBSUEsQ0FMTTs7QUFPUDs7Ozs7OztBQU9PLElBQU1LLHVCQUF1QixTQUF2QkEsb0JBQXVCLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUMzRCxLQUFNdEIsT0FBT0osY0FBYjs7QUFFQSxRQUFPSyxNQUFTRCxJQUFULGtCQUE0QjtBQUNsQ0UsVUFBUSxNQUQwQjtBQUVsQ0MsZUFBYSxhQUZxQjtBQUdsQ0MsV0FBUztBQUNSLG1CQUFnQjtBQURSLEdBSHlCO0FBTWxDSyxRQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDcEJVLHFCQURvQjtBQUVwQkM7QUFGb0IsR0FBZjtBQU40QixFQUE1QixFQVVKakIsSUFWSSxDQVVDLG9CQUFZO0FBQ25CLE1BQUlDLFNBQVNpQixFQUFiLEVBQWlCO0FBQ2hCLFVBQU9qQixTQUFTQyxJQUFULEdBQWdCRixJQUFoQixDQUFxQixnQkFBUTtBQUNuQ21CLFlBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CbEIsSUFBcEI7QUFDQSxXQUFPTyxRQUFRRSxPQUFSLENBQWdCO0FBQ3RCUCxXQUFNRixJQURnQjtBQUV0Qm1CLGFBQVFwQixTQUFTb0IsTUFGSztBQUd0QkMsaUJBQVlyQixTQUFTcUI7QUFIQyxLQUFoQixDQUFQO0FBS0EsSUFQTSxDQUFQO0FBUUE7O0FBRUQsU0FBT2IsUUFBUWMsTUFBUixDQUFlO0FBQ3JCRixXQUFRcEIsU0FBU29CLE1BREk7QUFFckJDLGVBQVlyQixTQUFTcUI7QUFGQSxHQUFmLENBQVA7QUFJQSxFQTFCTSxDQUFQO0FBMkJBLENBOUJNLEMiLCJmaWxlIjoiMC5mZWZjNDI0OTMyOGVjZGE1ZThlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUT0RPOiBOZWVkIHRvIGZpZ3VyZSBvdXQgdGhlIHJpZ2h0IHdheSB0byBjb25maWd1cmUgdGhpc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByb290IHJvdXRlXG4gKi9cbmNvbnN0IGdldFJvb3RSb3V0ZSA9ICgpID0+IHtcblx0cmV0dXJuICcvYXBpJztcbn07XG5cbi8qKlxuICogVE9ETzogTmVlZCB0byBmaWd1cmUgb3V0IHRoZSByaWdodCB3YXkgdG8gY29uZmlndXJlIHRoaXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHBhdGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByb290IHJvdXRlXG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZFJvdXRlID0gcm91dGUgPT4ge1xuXHRyZXR1cm4gYCR7Z2V0Um9vdFJvdXRlKCl9LyR7cm91dGV9YDtcbn07XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBtYWtlIEdFVCBjYWxscy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHBhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgdG8gYmUgcnVuXG4gKi9cbmNvbnN0IGZldGNoRGF0YSA9IChyb3V0ZSkgPT4ge1xuXHRsZXQgcm9vdCA9IGdldFJvb3RSb3V0ZSgpO1xuXG5cdHJldHVybiBmZXRjaChgJHtyb290fS8ke3JvdXRlfWAsIHtcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9XG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIHRvIG1ha2UgUE9TVCBjYWxsc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBUaGUgcmVzdCBvZiB0aGUgcm91dGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBib2R5IFRoZSBib2R5IG9mIHRoZSBjYWxsXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5jb25zdCBwb3N0RGF0YSA9IChyb3V0ZSwgYm9keSkgPT4ge1xuXHRjb25zdCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9LyR7cm91dGV9YCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1BsYXkgPSAobmV3UGxheSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IHBvc3REYXRhKCdwbGF5cycsIG5ld1BsYXkpO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RQbGF5cyA9ICgpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBmZXRjaERhdGEoJ3BsYXlzJyk7XG5cdFx0cmVzb2x2ZShkYXRhKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNhdmVkUGxheSA9IChwbGF5SWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBmZXRjaERhdGEoYHBsYXlzLzoke3BsYXlJZH1gKTtcblx0XHRyZXNvbHZlKGRhdGEpO1xuXHR9KTtcbn07XG5cbi8qKlxuICogQ2F1c2VzIGEgbG9naW4gYXR0ZW1wdCB0byB0aGUgc2VydmVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIHRoZSB1c2VybmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIHRoZSBwYXNzd29yZFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSB0byBiZSBydW5cbiAqL1xuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZVRvU2VydmVyID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuXHRjb25zdCByb290ID0gZ2V0Um9vdFJvdXRlKCk7XG5cblx0cmV0dXJuIGZldGNoKGAke3Jvb3R9L2F1dGgvbG9naW5gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRwYXNzd29yZFxuXHRcdH0pXG5cdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGpzb24gPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnanNvbicsIGpzb24pO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcblx0XHRcdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuXHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9zZXJ2ZXJBcGkvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9
