
const initialState = {
	info:{
		businesses:[],
		username: ''

	}
} 

//users is coming in as object if want to stick with user and not individual pieces of info initialState needs to be 

//const initialState = {
//  user:{
				//login: ''
		//}
//} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_RESTAURANT':
			//console.log(action.name)
			return {...state, info:action.info}
		default:
			return state
	}
}

export default function (state=initialState, action) {
	switch (action.type) {
		case 'NEW_USER':
			return {...state, username: action.username}
		default:
			return state 
	}
}