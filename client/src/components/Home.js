import React from 'react'
import {Link} from 'react-router-dom'
import './css/Home.css'
import logo from '../assets/logo.png'



export default React.createClass ({

handleClick(e) {
  console.log("test")
  e.preventDefault()
   if (confirm("WARNING: This version contains content that is deemed inappropriate for parents, children, and 3/4 the population of Utah. Viewer discretion is advised.") )
   {window.location='./Criteria'
   }
    else {
      window.location='./Clean/criteria'
   }

},


 render() {
   return (
    <div>

         <div>
         <ul className="cb-slideshow">
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
        </ul>
        </div>
     
         <div className="mainBody">
             <div className="logoHeader">
           <img className="logo" src={logo} alt="logo" />
           </div>
       </div>


       <div className="bottomGraphic">
         <div className="buttonDiv">

           <div>


               <Link className="dirtyDiv" onClick={this.handleClick} id="dirty" to='/criteria'>dirty</Link>
           </div>
             <img className="warningImg" src="https://s-media-cache-ak0.pinimg.com/originals/62/8d/fc/628dfcb24f7806d30b159a50c10675e2.jpg" alt="explicit-content" height='450'/>
           <div className="cleanDiv">
             <Link id="clean" to='/Clean/criteria'>clean</Link>
           </div>
         </div>
       </div>
 
     </div>

   )
 }
})

