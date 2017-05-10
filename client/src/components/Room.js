import React from 'react'
import Group from './Group'
import './css/Room.css'


const Room = React.createClass({
	render() {
		return (
			<div>
				<div className="roomID">
				Congratulations on having friends. Share this link with them: <font color="red">localhost:3000/Room/
				{this.props.match.params.roomId}</font>
				</div>
				<div className="restaurantList">
				<Group />
				</div>
			</div>
		)
	}
})

export default Room