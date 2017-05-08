import React from 'react'
import logo from '../assets/logo.png'
import Maps from './Map'
import '../components/css/yesresult.css'
  

 
export default React.createClass ({

 handleBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  render() {
    return (
      
      <div>
        <div className="logoContainer">
          <img className="yesLogo" src={logo} alt="logo" />
        </div>

      <div>

        <header >
          <div>
            Name of Rest. Here
          </div>
          <hr className="hrstyle"/>
        </header>

        <body>
          <div>
            <Maps/>
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

        <div className="side">

          <div className="logotop">
            <img className="logo" src={logo} alt="logo" />
          </div>

          <div>
            <button type="button" onClick={this.handleBack}>Hmmmmmmmm nevermind</button>
          </div>

          <div>
            img here of rest.
          </div>




        </div>








      </div>
      </div>

  )}})

