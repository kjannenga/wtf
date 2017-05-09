import React from 'react'
import {Link} from 'react-router-dom'
import './css/Home.css'
import logo from '../assets/logo.png'
import './CleanCriteria'


export default React.createClass ({

handleClick(e) {
  e.preventDefault()
  ;
   if (confirm("WARNING: This version contains content that is deemed inappropriate for parents, children, and 3/4 the population of Utah. Viewer discretion is advised.") )
   {window.location='./Criteria'
   }
    else {
      window.location='./CleanCriteria'
   }

},

 render() {
   return (
     <div>
         <div className="mainBody">
             <div className="logoHeader">
           <img className="logo" src={logo} alt="logo" />
           </div>
       </div>


       <div className="bottomGraphic">
         <div className="buttonDiv">
           <div className="dirtyDiv">
               <Link onClick={this.handleClick} id="dirty" to='/criteria'>dirty</Link>
           </div>
             <img className="warningImg" src="https://s-media-cache-ak0.pinimg.com/originals/62/8d/fc/628dfcb24f7806d30b159a50c10675e2.jpg" alt="explicit-content" height='450'/>
           <div className="cleanDiv">
             <Link id="clean" to='/CleanCriteria'>clean</Link>
           </div>
         </div>
       </div>
     </div>

   )
 }
})