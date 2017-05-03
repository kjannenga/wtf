import React from 'react'
import {Link} from 'react-router-dom'



export default React.createClass ({
  render() {
    return (
    	<div>
	      <h1> WTF </h1>
	      <div>So...How much you wanna fuckin spend</div>
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
    );
  }
}) 