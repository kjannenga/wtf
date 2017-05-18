import axios from 'axios'
import store from '../store'

export function getRestaurants(searchObj, cb) {
	axios.get(`/yelpstuff?term=${searchObj.term}&location=${searchObj.location}&price=${searchObj.price}`).then(function(response){
		store.dispatch({
			type: 'GET_RESTAURANTS',
			info: response.data
		})

		if (typeof cb === 'function') {
			cb(response.data)
		}
	})
}

export function getRestaurant(id) {
	axios.get(`/yelprest?bussinessId=${id.restId}`).then(function(response){
		store.dispatch({
			type: 'GET_RESTAURANT',
			restInfo: response.data
		})
	})
}

