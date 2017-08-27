import React from 'react'
import ReactDOM from 'react-dom'
import FilterLink from '../Container/FilterLink'

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

export default Footer