import React from 'react'

import Title from './Title'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

import './App.css';

class App extends React.Component {

  addTask = (task) => {
	console.log(task);	
  }

  render() {

  	return (
    	<main className="App">
			<Title text="ToDO App" />
			<TaskForm onAddTask={this.addTask} />
			<TaskList />
			<p>You have <strong>4</strong> pending tasks</p>
    	</main>
  	);
  }
}

export default App;
