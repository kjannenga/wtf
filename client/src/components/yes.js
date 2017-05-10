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
             <img href="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=500x400&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            &markers=color:red%7Clabel:C%7C40.718217,-73.998284
            &key=AIzaSyDpQijowzYSU_U4f44DfX-2qwp1VjEDencnp"/>
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