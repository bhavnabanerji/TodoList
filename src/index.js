import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from  'redux'
import { Provider } from 'react-redux'
import todoApp from './Reducer/TodoApp'
import VisibleTodoList from './Container/VisibleTodoList'
import AddToDo from './Container/AddTodoContainer'
import Footer from './Components/Footer'

const TodoApp = () => (
	<div>
		<AddToDo />
		<VisibleTodoList />	
		<Footer />
	</div>
);


ReactDOM.render(
	<Provider store={createStore(todoApp)}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
);
