import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'
import logo from '../assets/logo.png'


export default React.createClass ({

handleClick(e) {
   e.preventDefault()
   alert("WARNING: This version contains content that is deemed inappropriate for parents, children, and 3/4 the population of Utah. Viewer discretion is advised.");
    window.location = './Criteria'
},

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
            
          <img className="warningImg" src="http://i.imgur.com/29Bnqcb.png" alt="explicit-content" height='450'/>
          
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

          <div className="bottomGraphic">
            <div className="buttonDiv">
              <div className="dirtyDiv">
    	      	  <Link onClick={this.handleClick} id="dirty" to='/criteria'>dirty</Link>
                </div>
                <img className="warningImg" src="https://s-media-cache-ak0.pinimg.com/originals/62/8d/fc/628dfcb24f7806d30b159a50c10675e2.jpg" alt="explicit-content" height='450'/>
                  <div className="cleanDiv">
                <Link id="clean" to='/criteria'>clean</Link>
                 </div>
                 </div>
               </div> 
             

    );
  }
}) 

