import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import styles from '../Styles/AddTodo.css'

function AddToDo(props) { 

	return (
		<div className={styles.addTodoContainer}>
			<input className={styles.todoInput} onChange={(e) => props.onEdit(e.target.value)} value={props.value} />
			<button className={styles.addTodo} onClick= {() => props.onAddTodo(props.value)}>
			Add todo
			</button>
		</div>
	);
};

export default AddToDo