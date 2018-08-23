import React from 'react';
import { connect } from 'react-redux';
import { getTodo, removeTodo } from 'todo/module';

export class Todo extends React.PureComponent {
	onRemove = () => this.props.removeTodo(this.props.id);
	render() {
		const { text } = this.props;
		return (
			<article>
				<span>{text}</span>
				<button onClick={this.onRemove}>Remove</button>
			</article>
		);
	}
}

const mapStateToProps = (state, props) => ({
	text: getTodo(state, props).text
});

export default connect(
	mapStateToProps,
	{
		removeTodo
	}
)(Todo);
