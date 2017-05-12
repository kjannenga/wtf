import React, {Component} from 'react'
import { addUser, login } from '../api/chatAPI.js'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // addUser(this.state)
        login(this.state.username)
        this.setState({
            username: ''
        })

     this.props.history.push('/ChatApp')

 }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="userID" onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="WTF is your name?" autoComplete="off" />
                </form>
            </div>
        )
    }
}

export default Login
