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
			return [
				...state,
				todo(undefined, action);
			] 
		case 'TOGGLE':
			return state.map(s => {
				todo(s, action);
			});
		default:
			return state;
	}
};

const { createStore } = Redux;
const store = createStore(todoApp);
const { combineReducers } = Redux;
const { Component } = React;

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

let counter = 0;

class TodoApp extends Component {
	render() {
		return (
			<div>
				<button onClick=() => {
					store.dispatch({
						type: 'ADD',
						text: 'Test',
						id: counter++
					})
				}>
				Add todo
				</button>
				<ul>
					{this.props.todos.map(todo => {
						<li key={todo.id}>
							{todo.text}
						</li>
					})}
				</ul>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(
		<TodoApp todos = {store.getState().todos} />,
		document.getElementById('root');
	);
}

export default render;
store.subscribe(render);