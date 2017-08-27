import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from '../Components/AddToDo';

const mapStateToProps = (state) => {
	return {
		value: state.value
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEdit: (value) => {
			dispatch({
				type: 'ON_EDIT',
				value
			})
		},
		onAddTodo: (value) => {
			const id = new Date().getTime();
			fetch('http://localhost:3001/api/todo', {
				method: 'POST',
				body: JSON.stringify({
					text: value,
					key: id,
				}),
				headers: {
					'Content-Type': 'application/json',
				}
			}).then((res) => {
				dispatch({
					type: 'ADD',
					id,
					text: value
				});	
			});
		}
	}
};

const AddTodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddToDo);

export default AddTodoContainer;