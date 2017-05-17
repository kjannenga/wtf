import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://192.168.0.29:3001')
//const socket = io.connect('http://192.168.0.8:3001')


//const socket = io.connect('http://:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}
export function removeRestaurant(key){
    socket.emit('removeRestaurant', key)
}
export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
    console.log('login function')
    socket.emit('join room')
}
export function populateRestaurants(businesses) {
    socket.emit('populateRestaurants', businesses)
}

socket.on('updateRestaurants', function(restaurants){
    store.dispatch({
        type:'UPDATE_RESTAURANTS',
        restaurants
    })
})

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

