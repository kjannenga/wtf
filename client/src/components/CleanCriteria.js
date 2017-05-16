import React from 'react'
import {Link} from 'react-router-dom'
import logoo from '../assets/wtf.png'
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
    	<div>

    		<div>
	      	<img className="criteriaLogo" src={logoo} alt="logo" />
	      </div>

	      <form onSubmit={this.handleSubmit} >

		      <div className="criteriaForm">

			      <div className="budgetHeader">
			      	So... how much you wanna spend  
			      </div>

			      <div className='radiobox'>
			      	<div className='budget'>
				      	<label htmlFor='oneDollar'><span className="blue">$</span><br/>Cheap Cheap</label>
				      	<input type="radio" onClick={this.radioPrice} id='oneDollar' name='price' value='1' defaultChecked={true}/>
				    </div>
				    <div className='budget'>
				      	<label htmlFor='twoDollar'><span className="blue">$$</span><br/>Ballin' on a budget</label>
				      	<input type="radio" onClick={this.radioPrice} id='twoDollar' name='price' value='2'/>
				    </div>
				    <div className='budget'>
				      	<label htmlFor='threeDollar'><span className="blue">$$$</span><br/>Big spenda</label>
				      	<input type="radio" onClick={this.radioPrice} id="threeDollar" name='price' value='3'/>
				    </div>
				    <div className='budget'>
				      	<label htmlFor='fourDollar'><span className="blue">$$$$</span><br/>Money ain't a thing</label>
				      	<input type="radio" onClick={this.radioPrice} id='fourDollar' name='price' value='4'/>
				    </div>
			      	
			      </div>

			      
			      <div className='typeHeader'>Tell me whatcha want.....Whatcha really really want</div> 
			      <div className="criteriaSelectors">
			      <div>
			      	<input onClick={this.radioChange} type='radio' name="type" id='random' value='restaurant' defaultChecked={true}/><label htmlFor='random'>Surprise me</label><br/>
			      	<input onClick={this.radioChange} type='radio' name="type" id='diet' value='healthy'/><label htmlFor='diet'>I'm on a diet</label><br/>
			      	<input onClick={this.radioChange} type='radio' name="type" id='taco'value='taco'/><label htmlFor='taco'>I just need a TACO</label><br/>
			      	<input onClick={this.radioChange} type='radio' name="type" id='vegetarian' value='vegetarian'/><label htmlFor='vegetarian'>Rabbit Food <small>(vegeterian)</small></label><br/>
			      	<input onClick={this.radioChange} type='radio' name="type" id='gluten' value='gluten free'/><label htmlFor='gluten'>Excuse me, I'm GLUTEN FREE!</label><br/>
			      </div>
		      

			      <div>
			      	<input type='radio' name="where" id='pickup' defaultChecked={true}/><label htmlFor='pickup'>I'll go get it</label><br/>
			      	<input onClick={this.radioDelivery} type='radio' name="where" id='deliver' value='delivery'/><label htmlFor='deliver'>Bring it to me!!</label><br/>
			      </div>

		      </div>
		      <div className="zipDiv">
			      <div className="locHeader">Now, tell us where you're at</div>
				      	<input className="zipBox" onChange={this.handleChange} type='text' name='location' value={this.state.location} placeholder='Where TF are you?' />
			  </div>

			  <div className="goButtons">
		      <Link to='/Clean/results'>
		      	<button onClick={this.handleSubmit} id="letsgo">Let's Go</button>
		      </Link>

		      	<div>
	      			<input id="groupNameInput" onChange={this.handleChange} type="text" name="groupName" placeholder="Group Name" value={this.state.groupName} />
	      			<button id="createGroupButton" type="submit" onClick={this.handleGroup}>Create Group</button>  		
		      	</div>
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