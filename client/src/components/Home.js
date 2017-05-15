import React from 'react'
import {Link} from 'react-router-dom'
import './css/Home.css'
import logo from '../assets/wtf.png'
import warning from '../assets/warning.png'



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
    <div >

         <div >
         <ul className="cb-slideshow">
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
        </ul>
        </div>

        <div>
          <div className="logoHeader">
           <img className="logo" src={logo} alt="logo" />
          </div>

          




          <div className="buttonDiv">
          <div className="blurdiv">
          </div>
           <div className="dirtyDiv">
               <Link id="dirty" onClick={this.handleClick}  to='/criteria'>DIRTY</Link>
           </div>

            <img className="warningImg" src={warning} alt="explicit-content" height='450'/>
            <div className="blurdiv">
            </div>
           <div className="cleanDiv">
             <Link id="clean" to='/Clean/criteria'>CLEAN</Link>
           </div>

         </div>
       

        </div>
 
     </div>

   )
 }
})

