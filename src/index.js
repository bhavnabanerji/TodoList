import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import render from './ToDo';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from  'redux';
import { combineReducers } from  'redux';
import { Provider, connect } from 'react-redux';
import classnames from 'classnames';

registerServiceWorker();

//const { Provider } = ReactRedux;

let counter = 0;

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
					id: action.id,
					text: action.text,
					completed: false
				}

		case 'TOGGLE':
			if (state.id !== action.id) {
				return state;
			} else {
				return {
					...state,
					completed: !state.completed
				}
			} 
	}
}

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY':
			return action.filter;
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			//return [
			//	...state,
			//	todo(undefined, action);
			//]
			return state.concat([todo(undefined, action)]); 
		case 'TOGGLE':
			return state.map(s => todo(s, action));
		default:
			return state;
	}
};

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

const store = createStore(todoApp);

const Link = ({
	active,
	children,
	onClick
}) => {
	if (active) {
		return <span> {children} </span>
	}
	return (
		<a href="#" onClick={ e=> {
			e.preventDefault();
			onClick();
		}}>
			{children}
		</a>
	);
}

const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	}
};

const mapDispatchToTodoListProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch({
				type: 'TOGGLE',
				id
			})
		}
	}
};
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

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	}
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch({
				type: 'SET_VISIBILITY',
				filter: ownProps.filter
			})
		}
	}
};

const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link);

const getVisibleTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			);
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			);
	}
};

const TodoItem = ({
	text,
	completed,
	onClick
}) => {
	const classNames = classnames('todo-item', {
		completed: completed,
	});
	return (
		<li className={classNames} onClick={onClick}>
			{text}
		</li>
	);
};



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


const Footer = () => (
	<div className='footer'>
		Filter:
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		{'   '}
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		{'   '}
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
	</div>
);

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

//store.subscribe(renderPage);

