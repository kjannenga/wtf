import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../store'


const Restaurant = React.createClass({

getInitialState(){
  return {
      restaurant: []
    }
  },

componentWillMount() {

    store.subscribe(() => {

      const appState = store.getState()
      console.log(appState.restaurantReducer.info.businesses[0], 'from')
      this.setState({

        restaurant: appState.restaurantReducer.info.businesses[0]

      })
    })
  },

componentWillUnmount(){

    store.unsubscribe

  },


render(){
    return (
    	<div>
      	<h1> results </h1>
      	<div>google Map</div>
      	<div>
          <div>{this.state.restaurant.name + ' ' + this.state.restaurant.price}</div>
          <div>{'rating' + ' ' + this.state.restaurant.rating + '/5'}</div>
        </div>
    		<Link to='/yes'><button>Fuck Yes</button></Link>
    		<button>Fuck No</button>
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