import React, { Component } from 'react';
import {Map, Marker, InfoWindow, google} from 'google-maps-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedPlace: {
        name: ''
      }
    }
  }
  
  onMarkerClick = (e) => {
    
  }

  onInfoWindowClose = (e) => {

  }
    

  render() {
    return (
      <Map google={window.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name="Rest." />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
         
      }

          </div>
        </InfoWindow>
      </Map>
    )
  }
}



export default App

