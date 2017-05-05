import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import logo from '../assets/logo.png'


export default React.createClass ({
  render() {
    return (
    	<div className="mainBody">
    		<div className="logoHeader">
        <img className="logo" src={logo} alt="logo" />
	      	</div>
          <div className="buttonDiv">
          
          <div className="linkButtons">
            <div id="dirty">
  	      	  <Link id="dirty" to='/criteria'>dirty</Link>
            </div>
          </div>
            
          <img className="warningImg" src="https://s-media-cache-ak0.pinimg.com/originals/62/8d/fc/628dfcb24f7806d30b159a50c10675e2.jpg" alt="explicit-content" height='450'/>
          
          <div className="linkButtons">
            <div id="clean">
  	      	  <Link to='/criteria'>clean</Link>
            </div>
          </div>
          
	       </div>
         <div className="bottomContainer">
           <div className="warningContent">
             <h2 className="expContent">WARNING! This website may contain content that is deemed inappropriate by parents, children, and 3/4 of the population of the state of Utah. Please select your viewing preference below.</h2>
            </div>
          </div>
      </div>
    );
  }
}) 

