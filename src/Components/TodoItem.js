import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from '../Styles/Item.css'

const TodoItem = ({
	text,
	completed,
	onClick
}) => {
	const classNames = classnames(styles.todoItem, {
		[styles.completed]: completed,
	});
	return (
		<li className={classNames} onClick={onClick}>
			{text}
		</li>
	);
};

export default TodoItem