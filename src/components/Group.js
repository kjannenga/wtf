import React from 'react'
import {Link} from 'react-router-dom'

export default React.createClass ({
  render() {
    return (
    	<div>
      	<h1> group </h1>
      	<div> group chat </div>
      	<Link to='/results'><div>last one links to results page</div></Link>
      </div>
    );
  }
})
