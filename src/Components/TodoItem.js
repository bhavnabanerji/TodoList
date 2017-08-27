import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

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

export default TodoItem