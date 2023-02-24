import React from 'react';

class TaskForm extends React.Component {

	render() {
		return (
		
		<form>
			<p><input type="text" name="todo-item" placeholder="Add your new todo"/></p>
		  	<button type="button">+</button>
         </form>
		);
	}
}

export default TaskForm;
