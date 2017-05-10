import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRestaurant} from '../api/wtf'
//import store from '../store'

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
  //console.log(props.info.businesses[this.state.id].id, 'will')
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
  console.log(id, 'd')
  console.log(this.props.info.businesses.length, "l")
    return (
    	<div>
      	<h1> results </h1>
      	<div>google Map</div>
      	<ul>
            {this.state.restaurant.map(function(value){
              return <li key={'id' + value.id}>
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

/*{this.state.businesses.map(function(value){
            return <li key={value.id}>
                      <div>{value.name + ' ' + value.price}</div>
                      <img className='restImage' src={value.image_url} alt='#'></img>

                      <div>{value.rating + '/5'}</div>

                   </li>
          })}*/

/*<div id="app">

    {
      this.state.etsyData.map((value, i) => {

        return (

          <div key={'id' + i} className="desc">
              
            <img src={value.Images[0].url_170x135} />
            
            <p>{value.title}</p> <p>{value.Shop.shop_name + ' $' + value.price }</p>
          
          </div>
/*export default React.createClass ({
  
  }
})*/ 