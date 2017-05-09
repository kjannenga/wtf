import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'
import {getRestaurants, getRestaurant} from '../api/wtf'
import './css/criteria.css'


const Selections = React.createClass ({
		getInitialState(){
			return{
				term: '',
				location: '',
				price: '',
				bussinessId: ''
			}
		}, 

		handleClick(e) {
			this.setState({
				price: e.target.value
			})
		},

		radioChange(e){
			this.setState({
				term: e.target.value
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
			getRestaurant({
				bussinessId: this.state.bussinessId
			})

			//this.props.history.push('/results')

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
			      	<p className='wordHilight'>So, how much you wanna </p> <p className='wordHilight'> freakin' </p> <p> spend </p> 
			      </div>
			      <div className='budget'>
			      	<div className='buttonDiv'><button type="button" onClick={this.handleClick} id='oneDollar' value='1'>$</button><br />
			      	<label htmlFor='oneDollar'>Cheap AF</label>
			      	</div>
			      	<div className='buttonDiv'><button type="button" onClick={this.handleClick} id='twoDollar' value='2'>$$</button><br />
			      	<label htmlFor='twoDollar'>Ballin on a budget</label>
			      	</div>
			      	<div className='buttonDiv'><button type="button" onClick={this.handleClick} id="threeDollar" value='3'>$$$</button><br />
			      	<label htmlFor='threeDollar'>Big spenda</label>
			      	</div>
			      	<div className='buttonDiv'><button type="button" onClick={this.handleClick} id='fourDollar' value='4'>$$$$</button><br />
			      	<label htmlFor='fourDollar'>Money aint a thing</label>
			      	</div>
			      </div>
		      <div className="options"><h2>Tell us whatcha want.....Whatcha really really want</h2></div>
		      <div className="radios">
		      	<input onClick={this.radioChange} type='radio' name="type" id='random' value='restaurant'/><label htmlFor='random'>Just F me up</label>
		      	<input onClick={this.radioChange} type='radio' name="type" id='diet' value='healthy'/><label htmlFor='diet'>I'm on a freakin' diet</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='taco'value='taco'/><label htmlFor='taco'>I need a freakin' taco</label>
		      	<input onClick={this.radioChange} type='radio' name="type" id='vegetarian' value='vegetarian'/><label htmlFor='vegetarian'>F meat, you savages</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='gluten' value='gluten free'/><label htmlFor='gluten'>F gluten</label><br/>

		      </div>
		      <div className="radioOptions">
		      <h2>Tell us how you like it</h2>
		      	<input type='radio' name="where" id='deliver'/><label htmlFor='deliver'>Freakin' bring it to me</label><br/>
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
	    </form>
	   </div>
    )
  }
}) 

function mapStateToProps(state){
	return {...state.restaurantReducer}
}

export default connect(mapStateToProps)(Selections)