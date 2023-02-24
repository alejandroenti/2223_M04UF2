import Title from './Title'
import TaskForm from './TaskForm'

import './App.css';

function App() {
  return (
    <main className="App">
		<Title text="ToDO App"/>
		<TaskForm />
		<ol>
			<li>Buy a new gaming laptop <button type="button">🗑️</button></li>
		</ol>
		<p>You have <strong>4</strong> pending tasks</p>
    </main>
  );
}

export default App;
