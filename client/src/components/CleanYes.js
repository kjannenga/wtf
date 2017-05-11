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
  //console.log(this.props,  'a')
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
             <div>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?
                center=The+Iron+Yard,Las+Vegas,NV
                &zoom=12&size=400x400
                &markers=color:green%7Clabel:A%7CThe+Iron+Yard,Las+Vegas,NV
                &markers=color:red%7Clabel:B%7C${this.props.restInfo.coordinates.latitude + ',' + this.props.restInfo.coordinates.longitude}
                &key=AIzaSyDEoIRBJmdHwO2A9R-AvXycFEQvna2E3QU`} alt='map'/>
           </div>
           </div>

         </div>

         <div className="third-box">
           <h3>Contact</h3>

           <div>
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
                       <img className='restImage' src={value} alt='restaurant'/>
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