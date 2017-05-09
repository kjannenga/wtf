import React from 'react'
import Group from './Group'


const Room = React.createClass({
	render() {
		return (
			<div>
				{this.props.match.params.roomId}
				<Group />

			</div>
		)
	}
})

export default Room