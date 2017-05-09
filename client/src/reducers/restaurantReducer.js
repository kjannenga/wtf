
const initialState = {
	info:{
		businesses:[],
		username: ''
	},
	restInfo:{
		business:[]
	}
} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_RESTAURANTS':
			//console.log(action.info, 'restaurants')
			return {...state, info:action.info}
		case 'GET_RESTAURANT': 
			//console.log(action.restInfo, 'restaurant')
			return {...state, restInfo:action.restInfo}
		case 'NEW_USER':
			return {...state, username: action.username}
		default:
			return state
	}
}

/*export default function (state=initialState, action) {
	switch (action.type) {
		case 'NEW_USER':
			return {...state, username: action.username}
		default:
			return state 
	}
}*/


