import React from 'react'
import {Link} from 'react-router-dom'

export default React.createClass ({
  render() {
    return (
    	<div>
      	<h1> home </h1>
      	<Link to='/criteria'><div>dirty</div></Link>
      	<Link to='/criteria'><div>clean</div></Link>
      </div>
    );
  }
}) 

