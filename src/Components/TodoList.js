import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem'

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul className='todo-list'>
		{todos.map(todo => 
			<TodoItem key={todo.id} 
				{...todo}
				onClick = { () => onTodoClick(todo.id) }
			/>
		)}
	</ul>
);

export default TodoList;