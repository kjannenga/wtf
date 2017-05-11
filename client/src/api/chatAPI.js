import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://localhost:3001')


export function addMessage(message) {
    console.log(message)
    socket.emit('addMessage', message)
}
export function login(username) {
    socket.emit('login', username)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

socket.on('new user', function(username){
    store.dispatch({
        type: 'NEW_USER',
        username
    })
})