import React from 'react';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

class TaskItem extends React.Component {

	render() {
		return (
		
		<ListItem>
			<ListItemText primary={this.props.text}/>
			<button type="button" onClick={() => this.props.onDeleteTask(this.props.text)}>🗑️  </button>
		</ListItem>
		);
	}
}

export default TaskItem;
