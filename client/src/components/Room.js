import React, {Component} from 'react'
import Group from './Group'
import './css/Room.css'
import ChatApp from './ChatApp'
import {connect} from 'react-redux'
import Login from './Login'

class Room extends Component {
	render() {
		return (
			<div>
				<div className="roomID">
				Congratulations on having friends. Share this link with them: http://10.68.0.132:3000/Room/{this.props.match.params.roomId}
				</div>
				{this.props.username ? <div className="roomDiv"><div className="listRoom"><Group /></div><div className="chatRoom"><ChatApp /></div></div> : <h1 className="roomLogin">Login <Login /></h1>}
				<div className="restaurantList">
				</div>
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		username: appState.chatReducer.username
	}
}

export default connect(mapStateToProps)(Room)