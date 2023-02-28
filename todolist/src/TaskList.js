import React from 'react';
import TaskItem from './TaskItem'

class TaskList extends React.Component {

	constructor(props) {
	
		super(props);
		this.state = {
			items: this.props.list
		};
	
	}

	itemList = () => {
	
		let tasks = this.state.items.map(task => {
			return (
				<TaskItem text={task} onDeleteTask={this.props.onDeleteTask}/>
			);
		});

		return tasks;
	}

	render() {
		
		const tasks = this.itemList();

		return (
		
		<ol>
			{tasks}
		</ol>
		);
	}
}

export default TaskList;
