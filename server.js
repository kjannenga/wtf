const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/proxy', function(req, res){
	var url = req.body.url
	
	request(url, function(err, response, body){
		res.json(body)
	})
})

app.listen(3001, function(){
	console.log('Server listening on port 3001')
})