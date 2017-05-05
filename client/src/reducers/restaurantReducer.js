
const initialState = {
	info:{
		businesses:[],
		username: ''

	}
} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_RESTAURANT':
			//console.log(action.name)
			return {...state, info:action.info}
		default:
			return state
	}
}

// export default function (state=initialState, action) {
// 	switch (action.type) {
// 		case 'NEW_USER':
// 			return {...state, username: action.username}
// 		default:
// 			return state 
// 	}
// }