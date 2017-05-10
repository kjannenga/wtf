const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("wtfshouldieat", "ea9f89e6-2eb3-4c7e-a6f8-7050295d7ab5");
const app = require('express')()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


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
	})
}),

io.on('connection', function(socket){
    socket.on('addMessage', function(message){
        io.emit('newMessage', message)
    })

    socket.on('login', function(username){
        io.emit('new user', username)
    })

    socket.on('newGroup', function(groupInfo){
    	io.emit('new group', groupInfo)
    })
})


app.get('/yelprest', function(req, res){
	//console.log(res, 'server')
	rapid.call('YelpAPI', 'getSingleBusiness', { 
		'accessToken': 'SL6alfUTxepXGG38qBlJoVlmTKkhG4H2g07wQ8myZTngUdlIoOdqkaJ1eu2CzbN5KvaqDpgjO9tQfmwJqSQNqJcHCvktf_qryrHb9g5Q9pPWP16BsNc_-L2vPQIIWXYx',
		'bussinessId': req.query.bussinessId
	 
		}).on('success', (payload)=>{
			 res.json(payload)
		}).on('error', (payload)=>{
		res.json({
		 	error:true
		})		 
	})
})

server.listen(3001, function(){
	console.log('Server listening on port 3001')
})



