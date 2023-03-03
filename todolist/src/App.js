import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './TODO.css';

class App extends React.Component {
  
  constructor(props) {
  	super(props);
	this.state = {
		tasklist: []
	};
  }

  addTask = (task) => {

	this.state.tasklist.unshift(task);
	this.setState ({
		tasklist: this.state.tasklist
	});
  }

  deleteTask = (task) => {

	this.state.tasklist.splice(this.state.tasklist.indexOf(task), 1);
	this.setState ({
		tasklist: this.state.tasklist
	});
  }

  render() {

  	return (
    	<Box 
			sx={{
				display:'flex',
				flexWrap:'wrap',
				justifyContent:'center',
				alignContent:'center',
				height: '100%'
			}}
		>
			<Paper elevation={3}>
				<Title text="ToDO App" />
				<TaskForm onAddTask={this.addTask} />
				<TaskList list={this.state.tasklist} onDeleteTask={this.deleteTask}/>
				<p>You have <strong>{this.state.tasklist.length}</strong> pending tasks</p>
			</Paper>
    	</Box>
  	);
  }
}

export default App;
