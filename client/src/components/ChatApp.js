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
            color: '',
            font: '',
            fontSize: ''
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
                        {this.props.messages.map((msg)=>(
                            <li style={styles.message}>
                                <div>
                                    <Avatar style={styles.avatar} size={30}>{msg.username.charAt(0).toUpperCase()}</Avatar>
                                </div>
                                <div style={styles.messageContainer}>
                                    <div style={styles.timestamp}><span style={styles.username}>{msg.username}</span> {msg.timestamp}</div>
                                    <div style={{color:msg.color, fontFamily: msg.font, fontSize:Number(msg.fontSize)}}>
                                        {msg.message}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div style={styles.formContainer}>
                
                <form onSubmit={this.handleSubmit}>
                    <input style={styles.input} onChange={this.handleChange} name="message" type="text" value={this.state.message} placeholder="message" autoComplete="off" />
                    <input onChange={this.handleChange} type="color" name="color" value={this.state.color} />
                        <select name="font" onChange={this.handleChange}>
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Helvetica">Helvetica</option>
                            <option value="Courier New">Courier New</option>
                        </select>
                        <select name="fontSize" onChange={this.handleChange}>
                            <option value="14">14</option>
                            <option value="18">18</option>
                            <option value="22">22</option>
                        </select>
                </form>

                <div>
                    <ul>
                        {this.props.messages.map((message, i) => (
                            <li key={'message' + i}>{message.username} {message.message} {message.time}</li>
                        ))}
                    </ul>
                </div>
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