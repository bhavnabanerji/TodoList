const Value = (
	state = '',
	action
) => {
	switch (action.type) {
		case 'ON_EDIT':
			return action.value;
		default:
			return state;
	}
};

export default Value;