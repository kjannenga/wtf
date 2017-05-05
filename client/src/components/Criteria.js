import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {connect} from 'react-redux'
import {getRestaurant} from '../api/wtf'
import '../index.css'


const Selections = React.createClass ({
		getInitialState(){
			return{
				term: '',
				location: '',
				price: ''
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
			console.log('click')
			//e.preventDefault()
			console.log(this.state, 'criteria')
			getRestaurant({
				term: this.state.term,
				location: this.state.location,
				price: this.state.price
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
		      	<input onChange={this.handleChange} type='text' name='location' value={this.state.location} placeholder='zipcode' />
			      <div className='budgetHeader'>
			      	<p className='wordHilight'>So... </p> <p> How much you wanna </p> <p className='wordHilight'> fuckin </p> <p> spend </p>
			      </div>
			      <div className='budget'>
			      	<button type="button" onClick={this.handleClick} id='oneDollar' value='1'>$</button>
			      	<label htmlFor='oneDollar'>Cheap ass</label>
			      	<button type="button" onClick={this.handleClick} id='twoDollar' value='2'>$$</button>
			      	<label htmlFor='twoDollar'>Ballin on a budget</label>
			      	<button type="button" onClick={this.handleClick} id="threeDollar" value='3'>$$$</button>
			      	<label htmlFor='threeDollar'>Big spenda</label>
			      	<button type="button" onClick={this.handleClick} id='fourDollar' value='4'>$$$$</button>
			      	<label htmlFor='fourDollar'>Money aint a thing</label>
			      </div>
		      <div>Tell me whatcha want.....Whatcha really really want</div> 
		      <div>
		      	<input onClick={this.radioChange} type='radio' name="type" id='random' value='restaurant'/><label htmlFor='random'>Just fuck me up</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='diet' value='healthy'/><label htmlFor='diet'>I'm on a fuckin diet</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='taco'value='taco'/><label htmlFor='taco'>I need a fuckin taco</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='vegetarian' value='vegetarian'/><label htmlFor='vegetarian'>Fuck meat you savages</label><br/>
		      	<input onClick={this.radioChange} type='radio' name="type" id='gluten' value='gluten free'/><label htmlFor='gluten'>Fuck gluten</label><br/>
		      </div>
		      <div>
		      	<input type='radio' name="where" id='deliver'/><label htmlFor='deliver'>Fuckin bring that shit to me</label><br/>
		      	<input type='radio' name="where" id='pickup'/><label htmlFor='pickup'>I'll fuckin get it</label><br/>
		      </div>

		      <Link to='/results/'>
		      	<div 
		      		onClick={this.handleSubmit}>
		      		Let's Go
		      	</div>
		      </Link>

		      <Link to='/group/'>
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