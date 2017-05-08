import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Restaurant = React.createClass({


render(){
  console.log(this.props.info.businesses, 'a')
  console.log(this.props.info.businesses[0], 'b')
    return (
    	<div>
      	<h1> results </h1>
      	<div>google Map</div>
      	<div>
         <ul>
          {this.props.info.businesses.map(function(value){
            console.log(value.name, 'c')
            return <li key={value.id}>
                      <div>{value.name + ' ' + value.price}</div>
                      <img className='restImage' src={value.image_url} alt='#'></img>

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