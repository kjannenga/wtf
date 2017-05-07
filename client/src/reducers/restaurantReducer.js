
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
		case 'NEW_USER':
			return {...state, username: action.username}
		default:
			return state
	}
}

<<<<<<< HEAD
/*export default function (state=initialState, action) {
	switch (action.type) {
		case 'NEW_USER':
			return {...state, username: action.username}
		default:
			return state 
	}
}*/
=======
// export default function (state=initialState, action) {
// 	switch (action.type) {
// 		case 'NEW_USER':
// 			return {...state, username: action.username}
// 		default:
// 			return state 
// 	}
// }
>>>>>>> e4a89b162aea45702349effc3eb9868af107fdb8
