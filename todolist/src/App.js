import './App.css';

function App() {
  return (
    <main className="App">
		<h1>Todo App</h1>
		<form>
			<p><input type="text" name="todo-item" placeholder="Add your new todo"/></p>
			<button type="button">+</button>
		</form>
		<ol>
			<li>Buy a new gaming laptop <button type="button">🗑️</button></li>
		</ol>
		<p>You have <strong>4</strong> pending tasks</p>
    </main>
  );
}

export default App;
