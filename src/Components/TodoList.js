import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem'
import styles from '../Styles/TodoList.css'

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul className={styles.todoList}>
		{todos.map(todo => 
			<TodoItem key={todo.id} 
				{...todo}
				onClick = { () => onTodoClick(todo.id) }
			/>
		)}
	</ul>
);

export default TodoList;