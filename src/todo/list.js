import React from 'react';
import Todo from 'todo/todo';
import { connect } from 'react-redux';
import { getTodoIds, addTodo } from 'todo/module';
import { uniqueId } from 'lodash/fp';

export class List extends React.PureComponent {
	state = {
		text: ''
	};
	onAddTodo = () => {
		this.props.addTodo({ id: uniqueId(), text: this.state.text });
	};
	onTextChange = event => this.setState({ text: event.target.value });
	render() {
		const { todoIds } = this.props;
		return (
			<main>
				<h1>Todo List</h1>
				<section>{todoIds.map(id => <Todo key={id} id={id} />)}</section>
				<section>
					<input type="text" onChange={this.onTextChange} />
					<button className="button" onClick={this.onAddTodo}>
						Add Todo
					</button>
				</section>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	todoIds: getTodoIds(state)
});

export default connect(
	mapStateToProps,
	{
		addTodo
	}
)(List);
