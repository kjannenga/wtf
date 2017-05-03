
const initialState = {
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
			return {...state}
		case 'GET_INFO':
			//console.log(action.info)
			return{...state}
		default:
			return state
	}
}