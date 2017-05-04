
const initialState = {
	info:{
		businesses:[]

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