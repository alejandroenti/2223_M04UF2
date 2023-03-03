import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

class TaskItem extends React.Component {

	render() {
		return (
		
		<ListItem>
			<ListItemText primary={this.props.text}/>
			<Tooltip title="Delete Task" onClick={this.props.onDeleteTask}>
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
		</ListItem>
		);
	}
}

export default TaskItem;
