// import React from 'react'
// import logo from '../assets/logo.png'
// import {connect} from 'react-redux'
// import '../components/css/yesresult.css'

// const Yes = React.createClass({
 

//  handleBack(){
//    this.props.history.push('/criteria')
//  },

//  render(){
//    return (
//      <div >

//        <div className="logoContainer">
//          <img className="yesLogo" src={logo} alt="logo" />
//        </div>

//        <div>
//           {this.props.restInfo.name}
//        </div>
//        <hr className="hrstyle"/>
//        <div>

//        </div>

//        <div className="three-parts">
//          <div className="third-box">
//            <h3>Menu</h3>

//            <div>
          
//            </div>

//          </div>

//          <div className="third-box">
//            <h3>Directions</h3>

//            <div>
//             <iframe
//               width="600"
//               height="450"
//               frameBorder="0"
//               src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiZLjRIWsbb_SPwIXRxPGWyW-ILTBIqEo&origin=The+Iron+Yard,Las+Vegas&destination=${this.props.restInfo.coordinates.latitude + ',' + this.props.restInfo.coordinates.longitude}`} allowFullScreen>
//             </iframe>
//            </div>



//          </div>

//          <div className="third-box">
//            <h3>Contact</h3>

//            <div>
//            </div>

//          </div>
//        </div>

//      <div className="side">

       

//        <div>
//          <button type="button" onClick={this.handleBack}>Hmmmmmmmm nevermind</button>
//        </div>

//        <div>
//          <ul>
//             {this.props.restInfo.location.display_address.map(function(value){
//               return <li>
//                        <div>{value}</div>
//                      </li>
//              })}
//           </ul>
//        </div>
//        <div>
//         <ul>
//             {this.props.restInfo.photos.map(function(value){
//               return <li>
//                        <img className='restImage' src={value} alt='restaurant'/>
//                      </li>
//              })}
//           </ul>
//        </div>

//      </div>
//    </div>
//    )
   
//  }
// })

// function mapStateToProps(state){
//  return {...state.restaurantReducer}
// }

// export default connect(mapStateToProps)(Yes)