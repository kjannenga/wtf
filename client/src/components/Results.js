import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRestaurant} from '../api/wtf'

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
  //console.log(this.state, 'a')
  //console.log(this.props, 'b')
    return (
    	<div>
      	<h1> results </h1>
      	<ul>
            {this.state.restaurant.map(function(value){
              return <li key={'id' + value.id}>
                       <div>
                         <iframe
                            width="600"
                            height="450"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiZLjRIWsbb_SPwIXRxPGWyW-ILTBIqEo&origin=The+Iron+Yard,Las+Vegas&destination=${value.coordinates.latitude + ',' + value.coordinates.longitude}`} allowFullScreen>
                         </iframe>
                       </div>
                       <div>{value.name + ' ' + value.price}</div>
                       <div>{value.rating + '/5'}</div>
                       <img className='restImage' src={value.image_url} alt='restaurant' />
                     </li>
             })}
          </ul>
    		<Link to='/yes'><button>Fuck Yes</button></Link>
    		<button type='submit' onClick={this.handleClick}>Fuck this</button>
      </div>
    )
		
	}
})

function mapStateToProps(state){
	return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Restaurant)
