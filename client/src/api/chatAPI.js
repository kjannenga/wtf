import io from 'socket.io-client'
import store from '../store'
// const socket = io.connect('http://192.168.0.29:3001')
const socket = io.connect('http://10.68.0.132:3001')
//const socket = io.connect('http://:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}
export function deleteList(key){
    console.log(key, 'remove')
    socket.emit('removeRestaurant', key)
}
export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}
export function populateRestaurants(businesses) {
    console.log('populateRestaurants', businesses)
    socket.emit('populateRestaurants', businesses)
}

socket.on('updateRestaurants', function(restaurants){
    console.log('UPDATE_RESTAURANTS', restaurants)
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

