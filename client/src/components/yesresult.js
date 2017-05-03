import React from 'react'
import logo from '../assets/logo.png'

//main is 75% of page on the right, side is 25% on the left//

export default React.createClass ({
  render() {
  	return(

  		<div>

  			<header className="main">
  				<div>
  					Name of Rest. Here
  				</div>
  			</header>

  			<body className="main">
  				<div>
  					pull in map here 33% height of screen
  				</div>

  				<div className="three-parts">
  					<div className="third-box">
  						<h3>Menu</h3>

  						<div>
  							menu populates here
  						</div>

  					</div>

  					<div className="third-box">
  						<h3>Directions</h3>

  						<div>
  							directions populate here
  						</div>

  					</div>

  					<div className="third-box">
  						<h3>Contact</h3>

  						<div>
  							contact populates here
  						</div>

  					</div>
  				</div>
  			</body>

  			<aside className="side">

  				<div className="logotop">
  					<img className="logo" src={logo} alt="logo" />
  				</div>

  				<div>
  					<button type="button">Hmmmmmmmm<br/> nevermind</button>
  				</div>

  				<div>
  					img here of rest.
  				</div>




  			</aside>








  		</div>









  )}})