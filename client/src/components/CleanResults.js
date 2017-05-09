import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRestaurant} from '../api/wtf'
import store from '../store'

var id = 1

const Restaurant = React.createClass({

getInitialState(){
  return {
      restaurant: [],
      restId: '',
      id: 1
    }
  },

componentWillMount() {

    store.subscribe(() => {

      
      const appState = store.getState()
      //console.log(appState.restaurantReducer.info.businesses[this.state.id].id, 'b')
      this.setState({

        restaurant: [appState.restaurantReducer.info.businesses[this.state.id]/*appState.restaurantReducer.info.businesses[id]*/],
      })
      getRestaurant({
        restId: appState.restaurantReducer.info.businesses[this.state.id].id
      })
    })
  },

componentWillUnmount(){

    store.unsubscribe

  },

handleClick(e) {
    this.setState({
      id: id += 1,
    })
  },


render(){
  //console.log(this.state.id)
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