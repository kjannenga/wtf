import React from 'react'
import {Link} from 'react-router-dom'


export default React.createClass ({
  render() {
    return (
    	<div>
	      <h1> criteria </h1>
	      <Link to='/results'><button>Let's Go</button></Link>
	      <Link to='/group'><button>Group</button></Link>
    	</div>
    );
  }
}) 