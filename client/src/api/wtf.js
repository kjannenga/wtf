import axios from 'axios'
import store from '../store'


export function getRestaurants(searchObj) {
	axios.get(`/yelpstuff?term=${searchObj.term}&location=${searchObj.location}&price=${searchObj.price}`).then(function(response){
		console.log(response.data, searchObj, 'api')
		store.dispatch({
			type: 'GET_RESTAURANT',
			info: response.data
		})
	})
}

export function getRestaurant(searchObj) {
	axios.get(`/yelprest?bussinessId=kits-kitchen-henderson`).then(function(response){
		//console.log(response.data, searchObj, 'a')
		store.dispatch({
			type: 'GET_RESTAURANT',
			info: response.data
		})
	})
}

	// axios.post('/proxy', {url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyA_XPfoP35uptAsEODM_OORm85p4u83x2k'}).then(function(body){
	// 	console.log(body)
	// })