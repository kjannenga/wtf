import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export default React.createClass ({
  render() {
    return (
    	<div className="mainBody">
    		<div className="warningHeader">
	      	<img className="warningImg" src="https://s-media-cache-ak0.pinimg.com/originals/bf/0c/cd/bf0ccdce53d7ee3612a877f57f51ea84.jpg" alt="explicit-content" height='350'/>
	      	</div>
	      		<div className="warningContent">
	      	<h2>WARNING! This website may contain content that is deemed inappropriate by parents, children, and 3/4 of the population of the state of Utah. Please select your viewing preference below.</h2>
   				</div>
	      	<Link to='/criteria'><div className="dirty">dirty</div></Link>
	      	<Link to='/criteria'><div className="clean">clean</div></Link>
	      
      </div>
    );
  }
}) 

