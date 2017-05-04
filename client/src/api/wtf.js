import axios from 'axios'
import store from '../store'


/*var config = {
	headers:{'access_token': 'SL6alfUTxepXGG38qBlJoVlmTKkhG4H2g07wQ8myZTngUdlIoOdqkaJ1eu2CzbN5KvaqDpgjO9tQfmwJqSQNqJcHCvktf_qryrHb9g5Q9pPWP16BsNc_-L2vPQIIWXYx',
		'expires_in':15502897,
		'token_type':"Bearer"
} 
};*/
/*import rapidapi-connect from 'rapidapi-connect'

const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("wtfshouldieat", "ea9f89e6-2eb3-4c7e-a6f8-7050295d7ab5");

rapid.call('YelpAPI', 'getBusinesses', { 
	'accessToken': 'SL6alfUTxepXGG38qBlJoVlmTKkhG4H2g07wQ8myZTngUdlIoOdqkaJ1eu2CzbN5KvaqDpgjO9tQfmwJqSQNqJcHCvktf_qryrHb9g5Q9pPWP16BsNc_-L2vPQIIWXYx',
	'term': 'Restaurant',
	'location': '89015',
	'latitude': '',
	'longitude': '',
	'radius': '',
	'categories': '',
	'locale': '',
	'limit': '',
	'offset': '',
	'sortBy': '',
	'price': '',
	'openNow': '',
	'openAt': '',
	'attributes': ''
 
}).on('success', (payload)=>{
	 console.log('hello') 
}).on('error', (payload)=>{
	 console.log('hello')
});
*/
export function getRestaurant(searchObj) {
	// axios.post('/proxy', {url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyA_XPfoP35uptAsEODM_OORm85p4u83x2k'}).then(function(body){
	// 	console.log(body)
	// })
	axios.get(`/yelpstuff?term=${searchObj.term}&location=${searchObj.location}`).then(function(response){
		console.log(response.data)
		store.dispatch({
			type: 'GET_RESTAURANT',
			info: response.data
		})
	})
}




// export function getRest() {
// 	axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyA_XPfoP35uptAsEODM_OORm85p4u83x2k').then(user=>{
// 		console.log(user, 'jquery')
// 		store.dispatch({
// 		})
// 	})
// }