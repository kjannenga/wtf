import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://localhost:3001')


export function login(username) {
    socket.emit('login', username)
}

export function createGroup(groupInfo) {
	console.log(groupInfo)
	// socket.emit('newGroup', groupInfo)
}

socket.on('new user', function(username){
    store.dispatch({
        type: 'NEW_USER',
        username
    })
})

// socket.on('new group', function(groupInfo){
// 	store.dispatch({
// 		type: 'NEW_GROUP',
// 		groupInfo
// 	})
// })