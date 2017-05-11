const initialState = {
	messages: [],
	username: ''
}

export default function (state = initialState, action) {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {...state, messages: [...state.messages, action.message]}
		case 'NEW_USER':
			return {...state, username: action.username}
		default:
			return state
	}
}