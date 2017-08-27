const Todo = (state, action) => {
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

export default Todo;