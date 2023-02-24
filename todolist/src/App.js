import React from 'react'

import Title from './Title'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

import './App.css';

class App extends React.Component {
  
  constructor(props) {
  	super(props);
	this.state = {
		tasklist: ["Lista de la app", "otra tarea"]
	};
  }

  addTask = (task) => {

	if (task == "") {
		return;
	}

	this.state.tasklist.push(task);
	this.setState({
		tasklist: this.state.tasklist
	});
  }

  render() {

  	return (
    	<main className="App">
			<Title text="ToDO App" />
			<TaskForm onAddTask={this.addTask} />
			<TaskList list={this.state.tasklist} />
			<p>You have <strong>{this.state.tasklist.length}</strong> pending tasks</p>
    	</main>
  	);
  }
}

export default App;
