import React from 'react';

class TaskForm extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			task: ""
		};
	}

	render() {
		return (
		<form>
			<p><input type="text" value={this.state.task} placeholder="Add your new task" onChange={event => {
				this.setState({
					task: event.target.value
				});
			}}/></p>
		  	<button type="button" onClick={() => {
				this.props.onAddTask(this.state.task);
				this.setState({
					task: ""
				});
			}}>+</button>
         </form>
		);
	}
}

export default TaskForm;
