import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'


import './css/criteria.css'

import {getRestaurants} from '../api/wtf'


const Selections = React.createClass ({
		getInitialState(){
			return{
				term: 'restaurant',
				location: 'Las Vegas',
				price: '1'
			}
		}, 

		radioPrice(e) {
			this.setState({
				price: e.target.value
			})
		},

		radioChange(e){
			this.setState({
				term: e.target.value
			})
		},

		radioDelivery(e){
			this.setState({
				term: this.state.term + ' ' + e.target.value
			})
		},

		handleChange(e){
			this.setState({[e.target.name]: e.target.value})
		},

		handleSubmit() {
			getRestaurants({
				term: this.state.term,
				location: this.state.location,
				price: this.state.price
			})
		},

	
  render() {
  	//console.log(this.state.price, this.state.term, this.state.location, 'hello')

    return (
    	<div>
    		<div className="logoContainer">
	      	<img className="criteriaLogo" src={logo} alt="logo" />
	      </div>
	      <form onSubmit={this.handleSubmit} >
		      <div className='mainContainer'>
			      <div className='budgetHeader'>
			      	<p className='wordHilight'>So, how much you wanna </p> <p className='wordHilight'> freakin' </p> <p> spend? </p> 
			      </div>
			      <div className='budget'>

		      <div className="radios">

			      	<input type="radio" onClick={this.radioPrice} id='oneDollar' name='price' value='1' defaultChecked={true}/>$<br/>
			      	<label htmlFor='oneDollar'>Cheap AF</label><br/>
			      	<input type="radio" onClick={this.radioPrice} id='twoDollar' name='price' value='2'/>$$<br/>
			      	<label htmlFor='twoDollar'>Ballin on a budget</label><br/>
			      	<input type="radio" onClick={this.radioPrice} id="threeDollar" name='price' value='3'/>$$$<br/>
			      	<label htmlFor='threeDollar'>Big spenda</label><br/>
			      	<input type="radio" onClick={this.radioPrice} id='fourDollar' name='price' value='4'/>$$$$<br/>
			      	<label htmlFor='fourDollar'>Money aint a thing</label><br/>
			      </div>
		      <div>Tell me whatcha want.....Whatcha really really want</div> 
		      <div>
		      	<input onClick={this.radioChange} type='radio' name="type" id='random' value='restaurant' defaultChecked={true}/><label htmlFor='random'>Just F me up</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='diet' value='healthy'/><label htmlFor='diet'>I'm on a freakin' diet</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='taco'value='taco'/><label htmlFor='taco'>I need a freakin' taco</label>
		      	<input onClick={this.radioChange} type='radio' name="type" id='vegetarian' value='vegetarian'/><label htmlFor='vegetarian'>F meat, you savages</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='gluten' value='gluten free'/><label htmlFor='gluten'>F gluten</label><br/>

		      </div>
		      <div>
		      	<input type='radio' name="where" id='pickup' defaultChecked={true}/><label htmlFor='pickup'>I'll freakin' get it</label><br/>
		      	<input onClick={this.radioDelivery} type='radio' name="where" id='deliver' value='delivery'/><label htmlFor='deliver'>Freakin' bring that shit to me</label><br/>

		      </div>
		      <div className="zipDiv">
		      <h3>Now tell us where TF you are</h3>
			      	<input className="zipBox" onChange={this.handleChange} type='text' name='location' value={this.state.location} placeholder='Where TF are you?' />
			      	</div>

		      <Link to='/results'>
		      	<div 
		      		onClick={this.handleSubmit}>
		      		Let's Go
		      	</div>
		      </Link>

		      <Link to='/group'>
		      	<div 
		      		onClick={this.handleSubmit}>
		      		Group
		      	</div>
		      </Link>

		    </div>
		    </div>
	    </form>
	   </div>
    )
  }
}) 

function mapStateToProps(state){
	return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Selections)