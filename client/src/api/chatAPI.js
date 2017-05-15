import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.120:3001')
//const socket = io.connect('http://:3001')

export function addMessage(message) {
    console.log(message)
    socket.emit('addMessage', message)
}
export function deleteList(key){
    console.log(key)
    socket.emit('remove restaurant', key)
}
export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}
export function populateServer(businesses) {
    socket.emit('populateRestaurants', businesses)
}

socket.on('update restaurants', function(restaurants){
    store.dispatch({
        type:'UPDATE_RESTAURANTS',
        list: restaurants
    })
})

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

