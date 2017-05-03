import React from 'react'
import {getRestaurant} from '../api/wtf'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const Restaurant = React.createClass({
	componentWillMount() {
		getRestaurant()
	},
	render(){
    return (
    	<div>
      	<h1> results </h1>
      	<div>google Map</div>
      	<div>restraurant info</div>
    		<Link to='/yesresult'><button>Fuck Yes</button></Link>
    		<button>Fuck No</button>
      </div>
    )
		
	}
})

function mapStateToProps(state){
	//console.log(state.userReducer)
	return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Restaurant)


/*export default React.createClass ({
  
  }
})*/ 