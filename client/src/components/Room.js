import React, {Component} from 'react'
import Group from './Group'
import './css/Room.css'
import ChatApp from './ChatApp'
import {connect} from 'react-redux'
import Login from './Login'

class Room extends Component {
	render() {
		console.log(this.props, 'props')
		return (
			<div>
				<div className="roomID">
				Congratulations on having friends. Share this link with them:<p> <font color="red">http://10.68.0.132:3000/Room/
				{this.props.match.params.roomId}</font></p>
				</div>
				<div className="restaurantList">
				{this.props.username ? <div><Group /><ChatApp /></div> : <h1>Login <Login /></h1>}
				
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