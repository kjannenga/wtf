import React from 'react'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'

import '../components/css/yesresult.css'


 

//main is 75% of page on the right, side is 25% on the left//


const Yes = React.createClass({
 

 handleBack(){

   this.props.history.goBack()
 },
 render(){
  console.log(this.props,  'b')
   return (
     <div>

       <div className="logoContainer">
         <img className="yesLogo" src={logo} alt="logo" />
       </div>

       <div>
          {this.props.restInfo.name}
       </div>
       <hr className="hrstyle"/>
       <div>


       



       </div>

       <div className="three-parts">
         <div className="third-box">
           <h3>Menu</h3>

           <div>
          
           </div>

         </div>

         <div className="third-box">
           <h3>Directions</h3>

           <div>
                <img src="https://maps.googleapis.com/maps/api/staticmap?
                center=The+Iron+Yard,Las+Vegas,NV
                &zoom=14&size=400x400
                &markers=color:blue%7Clabel:A%7C{this.props.restInfo.latitude},{this.props.restInfo.longitude}
                &markers=color:red%7Clabel:B%7CStratosphere+Casino,Las+Vegas+NV
                &key=AIzaSyDEoIRBJmdHwO2A9R-AvXycFEQvna2E3QU" />
           </div>

         </div>

         <div className="third-box">
           <h3>Contact</h3>

           <div>
           </div>

         </div>
       </div>

     <div className="side">

       

       <div>
         <button type="button" onClick={this.handleBack}>Hmmmmmmmm nevermind</button>
       </div>

       <div>
         <ul>
            {this.props.restInfo.location.display_address.map(function(value){
              //console.log(value, 'test')
              return <li>
                       <div>{value}</div>
                     </li>
             })}
          </ul>
       </div>
       <div>
        <ul>
            {this.props.restInfo.photos.map(function(value){
              //console.log(value, 'test')
              return <li>
                       <img className='restImage' src={value}/>
                     </li>
             })}
          </ul>
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