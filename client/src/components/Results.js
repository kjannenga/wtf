import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRestaurant} from '../api/wtf'
import logoo from '../assets/wtf.png'
import './css/results.css'

const id = 0

const Restaurant = React.createClass({

getInitialState(){
  return {
      restaurant: [],
      restId: '',
    }
  },


componentWillReceiveProps(props) {
  //console.log(props, 'a')
  this.setState({
    restaurant: [props.info.businesses[id]]
  })
  getRestaurant({
    restId: props.info.businesses[id].id
   })
  },

handleClick(e) {
    if(id < this.props.info.businesses.length - 1){
        id += 1
     } else {
        id = 0
    }
  },

      handleAlert(e) {
      e.preventDefault()
       alert("CONGRATS! You decided. Now go get some effing food.") 

},


render(){
    return (
      <div>
        <div>
          <img className="resultsLogo" src={logoo} alt="logo" />
        </div>

        <div className="resultsButton">
          <button onClick={this.handleAlert}>Sounds Good</button><br/>
          <button type='submit' onClick={this.handleClick}>Eww Gross</button>
        </div>

        <div>
        <ul  className="resultsList">
            {this.state.restaurant.map(function(value){
              return <li key={'id' + value.id}>
                       <div className="resultName">{value.name}</div>
                       <div>
                         <iframe

                            width="1000"

                            height="375"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiZLjRIWsbb_SPwIXRxPGWyW-ILTBIqEo&origin=The+Iron+Yard,Las+Vegas&destination=${value.coordinates.latitude + ',' + value.coordinates.longitude}`} allowFullScreen>
                         </iframe>
                       </div>
                       <div className="resultsInfo">
                        
                         <div><span className="resultheading">Rating</span><div>{value.rating + '/5'}</div></div>
                         
                         <div><span className="resultheading">Address</span><div>{value.location.address1}</div>
                       <div>{value.location.city + ', ' + value.location.state + ' ' + value.location.zip_code}</div></div>

                         <div><div><span className="resultheading">Image</span><div><img className='resultImage' src={value.image_url} alt='restaurant' /></div></div></div>
                        </div>
                     </li>
             })}
          </ul>
          </div>
         
      </div>
    )
    
  }
})

function mapStateToProps(state){
  return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Restaurant)
