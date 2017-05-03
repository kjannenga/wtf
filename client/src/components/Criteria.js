import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import '../index.css'


export default React.createClass ({
  render() {
    return (
    	<div>
    		<div className="logoContainer">
	      	<img className="criteriaLogo" src={logo} alt="logo" />
	      </div>
	      <div className='mainContainer'>
		      <div className='budgetHeader'>
		      	<p className='wordHilight'>So... </p> <p> How much you wanna </p> <p className='wordHilight'> fuckin </p> <p> spend </p>
		      </div>
		      <div className='budget'>
		      	<button id='oneDollar'>$</button>
		      	<label htmlFor='oneDollar'>Cheap ass</label>
		      	<button id='twoDollar'>$$</button>
		      	<label htmlFor='twoDollar'>Ballin on a budget</label>
		      	<button id="threeDollar">$$$</button>
		      	<label htmlFor='threeDollar'>Big spenda</label>
		      	<button id='fourDollar'>$$$$</button>
		      	<label htmlFor='fourDollar'>Money aint a thing</label>
		      </div>
		      <div>Tell me whatcha want.....Whatcha really really want</div> 
		      <div>
		      	<input type='checkbox' id='random'/><label htmlFor='random'>Just fuck me up</label><br/>
		      	<input type='checkbox' id='diet'/><label htmlFor='diet'>I'm on a fuckin diet</label><br/>
		      	<input type='checkbox' id='taco'/><label htmlFor='taco'>I need a fuckin taco</label><br/>
		      	<input type='checkbox' id='vegetarian'/><label htmlFor='vegetarian'>Fuck meat you savages</label><br/>
		      	<input type='checkbox' id='gluten'/><label htmlFor='gluten'>Fuck gluten</label><br/>
		      </div>
		      <div>
		      	<input type='checkbox' id='deliver'/><label htmlFor='deliver'>Fuckin bring that shit to me</label><br/>
		      	<input type='checkbox' id='pickup'/><label htmlFor='pickup'>I'll fuckin get it</label><br/>
		      </div>
		      <Link to='/results'><button>Let's Go</button></Link>
		      <Link to='/group'><button>Group</button></Link>
    		</div>
    	</div>
    );
  }
}) 