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
  console.log(props, 'a')
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


render(){
    return (
      <div>
        <div>
          <img className="resultsLogo" src={logoo} alt="logo" />
        </div>
        <div >
        <ul  className="resultsList">
            {this.state.restaurant.map(function(value){
              return <li key={'id' + value.id}>
                       <div className="resultName">{value.name}</div>
                       <div>
                         <iframe
                            width="1200"
                            height="375"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiZLjRIWsbb_SPwIXRxPGWyW-ILTBIqEo&origin=The+Iron+Yard,Las+Vegas&destination=${value.coordinates.latitude + ',' + value.coordinates.longitude}`} allowFullScreen>
                         </iframe>
                       </div>
                       <div className="resultsInfo">
                        
                         <div>Rating<div>{value.rating + '/5'}</div></div>
                         
                         <div>Address<div>{value.location.address1}</div>
                       <div>{value.location.city + ', ' + value.location.state + ' ' + value.location.zip_code}</div></div>

                         <div>Image<div><img className='resultImage' src={value.image_url} alt='restaurant' /></div></div>
                        </div>
                     </li>
             })}
          </ul>
          </div>
        <Link to='/yes'><button>F Yes</button></Link>
        <button type='submit' onClick={this.handleClick}>F this</button>
      </div>
    )
    
  }
})

function mapStateToProps(state){
  return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Restaurant)
