const initialState = {
	messages: [],
	username: 'mike'
}

export default function (state = initialState, action) {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {...state, messages: [...state.messages, action.message]}
		default:
			return state
	}
}