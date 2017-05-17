import React, {Component} from 'react'
import { addMessage } from '../api/chatAPI'
import { connect } from 'react-redux'
import moment from 'moment'
import styles from './chatappstyles'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'

class Chat extends Component {
    constructor(){
        super()
        this.state = {
            message: '',
           
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
            time: moment().format('LTS'),
        })
        
        this.setState({
            message: ''
        })
    }

     componentWillUpdate() {
        var node = this.refs.messages
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = this.refs.messages
            node.scrollTop = node.scrollHeight
        }
    }

    render(){
        
        return (
            <div>

            <div style={styles.room}>
                <div style={styles.messagesContainer} ref="messages">
                    <ul style={styles.messages}>
                        {this.props.messages.map((msg, i)=>(
                            <li style={styles.message}>
                                <div>
                                    <Avatar style={styles.avatar} size={30}>{msg.username.charAt(0).toUpperCase()}</Avatar>
                                </div>
                                <div style={styles.messageContainer}>
                                    <div style={styles.time} key={'message' + i}><span style={styles.username}>{msg.username}</span> {msg.time}</div>
                                        {msg.message}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div style={styles.formContainer}>
                <form onSubmit={this.handleSubmit}>
                    <input style={styles.input} onChange={this.handleChange} name="message" type="text" value={this.state.message} placeholder="message" autoComplete="off" />
                </form>
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