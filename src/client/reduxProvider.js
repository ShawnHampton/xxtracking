import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import allReducers from './allReducers';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

let middleware = [thunk, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
	const composeEnhancers = composeWithDevTools({
		/*Options*/
	});
	middleware = composeEnhancers(applyMiddleware(...middleware));
} else {
	middleware = applyMiddleware(...middleware);
}

export const store = createStore(allReducers, middleware);

sagaMiddleware.run(rootSaga);

const provider = children => {
	return <Provider store={store}>{children}</Provider>;
};

export default provider;
