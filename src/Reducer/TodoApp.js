import visibilityFilter from './VisibilityFilter';
import todos from './Todos';
import value from './Value';
import { combineReducers } from  'redux';

const TodoApp = combineReducers({
	todos,
	visibilityFilter,
	value
});

export default TodoApp