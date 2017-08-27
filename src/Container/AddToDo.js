import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

let counter = 0;

let AddToDo = ({ dispatch }) => { 
	let input;

	return (
		<div className='add-todo-container'>
			<input className="todo-input" ref={node => {
				input = node;
			}} />
			<button className='add-todo' onClick= {() => {
				dispatch({
					type: 'ADD',
					id: counter++,
					text: input.value
				});		
				input.value = '';
			}}>
			Add todo
			</button>
		</div>
	);
};

AddToDo = connect()(AddToDo);

export default AddToDo