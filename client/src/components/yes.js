import React from 'react'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'
import Maps from './Map'
import '../components/css/yesresult.css'

//main is 75% of page on the right, side is 25% on the left//


const Yes = React.createClass({
 

 handleBack(){
   this.props.history.goBack()
 },
 render(){
   return (
     <div>
       <div className="logoContainer">
         <img className="yesLogo" src={logo} alt="logo" />
       </div>

       <div>
          Name of Rest. Here
       </div>
       <hr className="hrstyle"/>
       <div>
        <Maps />
       </div>

       <div className="three-parts">
         <div className="third-box">
           <h3>Menu</h3>

           <div>
             menu populates here
           </div>

         </div>

         <div className="third-box">
           <h3>Directions</h3>

           <div>
             directions populate here
           </div>

         </div>

         <div className="third-box">
           <h3>Contact</h3>

           <div>
             contact populates here
           </div>

         </div>
       </div>

     <div className="side">

       <div className="logotop">
         <img className="logo" src={logo} alt="logo" />
       </div>

       <div>
         <button type="button" onClick={this.handleBack}>Hmmmmmmmm nevermind</button>
       </div>

       <div>
         img here of rest.
       </div>

     </div>
   </div>
   )
   
 }
})

function mapStateToProps(state){
 return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Yes)