import React, {Component} from 'react'
import { login } from './api/messaging.js'

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
        login(this.state.username)
        this.setState({
            username: ''
        })

        this.props.history.push('/Group')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="Username..." autoComplete="off" />
                </form>
            </div>
        )
    }
}

export default Login
