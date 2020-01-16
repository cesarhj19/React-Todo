import React, { Component } from 'react';

class TodoForm extends Component {
	render() {
		return (
			<form>
				<input
					type='text'
					name='todo'
					value={this.props.todo}
					onChange={this.props.handleOnChange}
					placeholder='todo'
				/>
				<div className='btn-container'>
					<button onClick={this.props.handleAddTodo}>Add Todo</button>
					<button onClick={this.props.handleClearCompleted}>Clear Completed</button>
				</div>
			</form>
		);
	}
}

export default TodoForm;
