import React from 'react'
import {getRestaurant} from '../api/wtf'
import {connect} from 'react-redux'


const Restaurant = React.createClass({
	componentWillMount() {
		getRestaurant()
	},
	render(){
		//console.log(this.props)
		/*return(
			<div className='leftContainer'>
				<div className='loginInfo'>
					<div className='name'>{this.props.name}</div>
					<div className='login'>{this.props.login}</div> 
					<div className='bio'>Add a bio</div>
				</div>
				<div className='location'>{this.props.location} </div>
			</div>
		
		)*/
	}
})

function mapStateToProps(state){
	//console.log(state.userReducer)
	return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Restaurant)


/*export default React.createClass ({
  render() {
    return (
    	<div>
      	<h1> results </h1>
      	<div>google Map</div>
      	<div>restraurant info</div>
    		<button>Fuck Yes</button>
    		<button>Fuck No</button>
      </div>
    );
  }
})*/ 