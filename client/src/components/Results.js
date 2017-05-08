import React from 'react'
//import {getRestaurants} from '../api/wtf'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
//import {getRestaurant} from '../api/wtf'



const Restaurant = React.createClass({


	render(){
    console.log(this.props.info.businesses, 'hello')
    return (
    	<div>
      	<h1> results </h1>
      	<div>google Map</div>
      	<div>
         <ul>
          {this.props.info.businesses.map(function(value){
            return <li key={value.id}>
                      <div>{value.name + ' ' + value.price}</div>
                      <img className='restImage' src={value.image_url} alt='#'></img>
                      <a href={value.url}>test</a>

                      <div>{value.rating + '/5'}</div>

                   </li>
          })}
        </ul> 
        </div>
    		<Link to='/yes'><button>Fuck Yes</button></Link>
    		<button>Fuck No</button>
      </div>
    )
		
	}
})

function mapStateToProps(state){
	//console.log(state.restaurantReducer)
	return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Restaurant)

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