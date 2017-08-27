import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

function AddToDo(props) { 

	return (
		<div className='add-todo-container'>
			<input className="todo-input" onChange={(e) => props.onEdit(e.target.value)} value={props.value} />
			<button className='add-todo' onClick= {() => props.onAddTodo(props.value)}>
			Add todo
			</button>
		</div>
	);
};

export default AddToDo