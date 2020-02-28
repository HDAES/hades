const defaultState = {
	count: 100,
}

// 纯函数
export default (state = defaultState, action) => {
	// console.info(action.type, state)
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				count: state.count+1
			}
		case 'MINUS':
			return {
				...state,
				count: state.count-1
			}
		default:
			return state
	}

}