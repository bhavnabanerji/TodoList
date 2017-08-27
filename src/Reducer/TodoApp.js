import visibilityFilter from './VisibilityFilter';
import todos from './Todos';
import { combineReducers } from  'redux';

const TodoApp = combineReducers({
	todos,
	visibilityFilter
});

export default TodoApp