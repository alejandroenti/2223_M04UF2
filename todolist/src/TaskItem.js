import React from 'react';

class TaskItem extends React.Component {

	render() {
		return (
		
		<li>{this.props.text} <button type="button" onClick={() => this.props.onDeleteTask(this.props.text)

		}>🗑️ </button></li>
		);
	}
}

export default TaskItem;
