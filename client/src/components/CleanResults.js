import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRestaurant} from '../api/wtf'


var id = 0

const Restaurant = React.createClass({

getInitialState(){
  return {
      restaurant: [],
      restId: '',
      id: 0
    }
  },

componentWillReceiveProps(props) {
  this.setState({
    restaurant: [props.info.businesses[id]]
  })
  getRestaurant({
      restId: props.info.businesses[id].id
   })
  },

handleClick(e) {
    if(this.state.id < this.props.info.businesses.length){
        id = id + 1
     } else {
        id = 0
    }
  },

  
render(){
  console.log(this.props.info.businesses[id], 'd')
  console.log(this.props.info.businesses.length, "l")
  console.log(this.props.info.businesses[id], 'b')
    return (
    	<div>
      	<h1> results </h1>
      	<ul>
            {this.state.restaurant.map(function(value){
              return <li key={'id' + value.id}>
                      <div>
                          <img src={`https://maps.googleapis.com/maps/api/staticmap?
                                    center=The+Iron+Yard,Las+Vegas,NV
                                    &zoom=12&size=400x400
                                    &markers=color:green%7Clabel:A%7CThe+Iron+Yard,Las+Vegas,NV
                                    &markers=color:red%7Clabel:B%7C${value.coordinates.latitude + ',' + value.coordinates.longitude}
                                    &key=AIzaSyDEoIRBJmdHwO2A9R-AvXycFEQvna2E3QU`}/>
                       </div>
                       <div>{value.name + ' ' + value.price}</div>
                       <div>{value.rating + '/5'}</div>
                       <img className='restImage' src={value.image_url} alt='restaurant image' />
                    
                     </li>
             })}
          </ul>
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
