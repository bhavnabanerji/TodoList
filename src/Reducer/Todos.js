import todo from './Todo';

const Todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			return state.concat([todo(undefined, action)]); 
		case 'TOGGLE':
			return state.map(s => todo(s, action));
		default:
			return state;
	}
};

export default Todos;