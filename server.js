const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("wtfshouldieat", "ea9f89e6-2eb3-4c7e-a6f8-7050295d7ab5");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/proxy', function(req, res){
	var url = req.body.url
	
	request(url, function(err, response, body){
		res.json(body)
	})
})


app.get('/yelpstuff', function(req, res){
	//console.log(res, 'server')
	rapid.call('YelpAPI', 'getBusinesses', { 
	'accessToken': 'SL6alfUTxepXGG38qBlJoVlmTKkhG4H2g07wQ8myZTngUdlIoOdqkaJ1eu2CzbN5KvaqDpgjO9tQfmwJqSQNqJcHCvktf_qryrHb9g5Q9pPWP16BsNc_-L2vPQIIWXYx',
	'term': req.query.term,
	'location': req.query.location,
	'latitude': '',
	'longitude': '',
	'radius': '8046',
	'categories': '',
	'locale': '',
	'limit': '',
	'offset': '',
	'sortBy': '',
	'price': req.query.price,
	'openNow': 'true',
	'openAt': '',
	'attributes': ''
 
	}).on('success', (payload)=>{
		 res.json(payload)
	}).on('error', (payload)=>{
		 res.json({
		 	error:true
		 })
	});
})

app.listen(3001, function(){
	console.log('Server listening on port 3001')
})



