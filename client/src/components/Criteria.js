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
				price: '1',
				groupName: ''
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

		handleGroup(e) {
			e.preventDefault()

	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 4; i++ ){
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    getRestaurants({
				term: this.state.term,
				location: this.state.location,
				price: this.state.price
			})

	    this.props.history.push("/Room/" + text)
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
    return (
    	<div className="bodDiv">
    		<div className="head">
    			<div className="logoContainer">
	      			<img className="criteriaLogo" src={logo} alt="logo" />
	      		</div>
	      	</div>
	      	<form onSubmit={this.handleSubmit} >
		      	<div className='mainContainer2'>
				    <div className='budgetHeader'>
				      	<p className='wordHilight'>how much you wanna fuckin spend? </p> 
				    </div>
				    <div className='budget'>
				      	<input type="radio" onClick={this.radioPrice} id='oneDollar' name='price' value='1' defaultChecked={true}/>
				      	<label htmlFor='oneDollar'>$ Cheap ass</label>
				      	
				      	<input type="radio" onClick={this.radioPrice} id='twoDollar' name='price' value='2'/>
				      	<label htmlFor='twoDollar'>$$ Ballin on a budget</label>
				      	<input type="radio" onClick={this.radioPrice} id="threeDollar" name='price' value='3'/>
				      	<label htmlFor='threeDollar'>$$$ Big spenda</label>
				      	<input type="radio" onClick={this.radioPrice} id='fourDollar' name='price' value='4'/>
				      	<label htmlFor='fourDollar'>$$$$ Money aint a thing</label>
				    </div>
			      	<div className="tfYouWant">Tell me whatcha want.....Whatcha really really want</div> 
			      	<div className="budgetTwo">
				      	<input onClick={this.radioChange} type='radio' name="type" id='random' value='restaurant' defaultChecked={true}/><label htmlFor='random'>Just fuck me up</label><br/>
				      	<input onClick={this.radioChange} type='radio' name="type" id='diet' value='healthy'/><label htmlFor='diet'>I'm on a fuckin diet</label><br/>
				      	<input onClick={this.radioChange} type='radio' name="type" id='taco'value='taco'/><label htmlFor='taco'>I need a fuckin taco</label><br/>
				      	<input onClick={this.radioChange} type='radio' name="type" id='vegetarian' value='vegetarian'/><label htmlFor='vegetarian'>Fuck meat you savages</label><br/>
				      	<input onClick={this.radioChange} type='radio' name="type" id='gluten' value='gluten free'/><label htmlFor='gluten'>Fuck gluten</label><br/>
			      	</div>
			      	<div className="zipDiv">
			      		<h3>Now tell us where TF you are</h3>
			      	</div>
			      	<div className="zipBox">
				      	<input onChange={this.handleChange} type='text' name='location' value={this.state.location} placeholder='Where TF are you?'/>

				      	<Link to='/results'>
					      	<div className="aLetsGo">
					      		<button className="aLeggo" onClick={this.handleSubmit}>GO</button> 
					      	</div>
				      	</Link>
				    </div>
			      	<div className="agroupOption">
		      			<input id="groupNameInput" onChange={this.handleChange} type="text" name="groupName" placeholder="Group Name" value={this.state.groupName} />

		      			<button id="createGroupButton" type="submit" onClick={this.handleGroup}>GO</button>
			      	</div>
			      	<div className="aFooter">
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