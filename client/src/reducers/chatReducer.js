const initialState = {
	messages: [],
	username: '',
	users: [],
	user: {},
	list:[]

}

export default function (state = initialState, action) {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {...state, messages: [...state.messages, action.message]}
		case 'NEW_USER':
			return {...state, username: action.user}
		case 'LOGIN':
			return {...state, username: action.username}
		case 'DELETE_LIST':
			console.log(action.list, 'reducerList')
			return {...state, list:[...state.list, action.list]}
		default:
			return state
	}
}