import React from 'react'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'
import Maps from './Map'
import '../components/css/yesresult.css'
// import Iframe from 'react-iframe'



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
        <Maps />
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