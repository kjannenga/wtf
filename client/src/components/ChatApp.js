import React, {Component} from 'react'
import { addMessage } from '../api/chatAPI'
import { connect } from 'react-redux'
import moment from 'moment'

class Chat extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            username: this.props.username,
            message: this.state.message,
            time: moment().format('LTS')
        })
        
        this.setState({
            message: ''
        })
    }

    render(){
        console.log('messages', this.props.messages)
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="message" value={this.state.message} placeholder="message" autoComplete="off" />
                </form>

                <div>
                    <ul>
                        {this.props.messages.map((message, i) => (
                            <li key={'message' + i}>{message.username} {message.message} {message.time}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(appState){
    return {
        messages: appState.chatReducer.messages,
        username: appState.chatReducer.username
    }
}

export default connect(mapStateToProps)(Chat)