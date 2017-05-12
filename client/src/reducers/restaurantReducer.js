
const initialState = {
	info:{
		businesses:[],
		// username: ''
	},
	restInfo:{
		business:[]
	},
	groups: [],
} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_RESTAURANTS':
			//console.log(action.info, 'restaurants')
			return {...state, info:action.info}
		case 'GET_RESTAURANT': 
			//console.log(action.restInfo, 'restaurant')
		 	return {...state, restInfo:action.restInfo}
		// // case 'NEW_USER':
		// 	return {...state, username: action.username}
		case 'NEW_GROUP':
			return {...state, groups: [...state.groups, action.groupInfo]}
		default:
			return state
	}
}




