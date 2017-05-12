import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://10.68.0.132:3001')


export function addMessage(message) {
    console.log(message)
    socket.emit('addMessage', message)
}
export function login(username) {
    // socket.emit('login', username)
    store.dispatch({
        type: 'LOGIN',
        username
    })
}

// export function addUser(user) {
//     socket.emit('addUser', user)
// }

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

// socket.on('new user', function(user){
//     store.dispatch({
//         type: 'NEW_USER',
//         user
//     })
// })

// socket.on('login', function(username){
//     store.dispatch({
//         type: 'LOGIN',
//         username
//     })
// })

// socket.on('get user', function(user){
//     store.dispatch({
//         type: 'GET_USER',
//         user
//     })
// })