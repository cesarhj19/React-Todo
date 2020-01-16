import React, { Component } from 'react';

class Todo extends Component {
	handleClick = () => {};

	render() {
		return (
			<div
				style={this.props.todo.completed ? { textDecoration: 'line-through' } : null}
				onClick={() => this.props.handleTodoCompleted(this.props.todo.id)}
			>
				{this.props.todo.task}
			</div>
		);
	}
}

export default Todo;
