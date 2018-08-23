import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const CONSTANTS = {
	addTodo: 'todo/addTodo',
	addTodoAsync: 'todo/addTodoAsync',
	removeTodo: 'todo/removeTodo'
};

///-- ACTIONS --///

export const addTodo = ({ id, text }) => ({
	type: CONSTANTS.addTodo,
	payload: { id, text }
});
export const removeTodo = id => ({
	type: CONSTANTS.removeTodo,
	payload: { id }
});

const initialState = {};

const reducer = (state = fromJS(initialState), action) => {
	const { type, payload } = action;
	switch (type) {
		case CONSTANTS.addTodo:
		case CONSTANTS.addTodoAsync:
			return state.merge({
				[payload.id]: {
					text: payload.text
				}
			});
		case CONSTANTS.removeTodo:
			return state.delete(payload.id);
		default:
			return state;
	}
};

export default reducer;

///-- SELECTORS --///
const getTodosImmutable = state => state.get('todos', {});
const getTodoImmutable = (state, props) => state.getIn(['todos', props.id], {});

export const getTodoIds = createSelector([getTodosImmutable], todos =>
	todos.keySeq().toArray()
);
export const getTodo = createSelector([getTodoImmutable], todo =>
	todo.toObject()
);
