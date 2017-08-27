import React from 'react'
import ReactDOM from 'react-dom'
import FilterLink from '../Container/FilterLink'
import styles from '../Styles/Footer.css'

const Footer = () => (
	<div className={styles.footer}>
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

export default Footer