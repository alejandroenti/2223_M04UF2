import Title from './Title'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

import './App.css';

function App() {
  return (
    <main className="App">
		<Title text="ToDO App"/>
		<TaskForm />
		<TaskList />
		<p>You have <strong>4</strong> pending tasks</p>
    </main>
  );
}

export default App;
