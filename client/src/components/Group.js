import {Link} from 'react-router-dom'
import React from 'react'
import {populateRestaurants, removeRestaurant} from '../api/chatAPI.js'
import {connect} from 'react-redux'
import './css/group.css'

//<Link to="/results">Results</Link>
 
 const Group = React.createClass({

  remove: function (key){

    removeRestaurant(key)

  },

    handleComplete: function (index){
    var newList = this.props.info.businesses;
    newList[index].complete = !newList[index].complete;
    this.setState({
      list: newList
    })
  },

   render (){
    console.log('this.props.list', this.props.list)
     return (
       <div>
         <ul>
          {this.props.list.map((value, i) => (  
          console.log(value, 'map'),    
            <li key={'rest-delete-' + i}>
              {this.props.list.length > 1 ?
                <div>
                  <div>{value.name}</div>
                  <button onClick={() => this.remove(value.key)}>EWW</button>
                </div>
                :
                <div>
                  <div className="groupName">{value.name}</div>
                       <div>
                         <iframe
                            width="1200"
                            height="375"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiZLjRIWsbb_SPwIXRxPGWyW-ILTBIqEo&origin=The+Iron+Yard,Las+Vegas&destination=${value.coordinates.latitude + ',' + value.coordinates.longitude}`} allowFullScreen>
                         </iframe>
                       </div>
                       <div className="groupInfo">
                        
                         <div>Rating<div>{value.rating + '/5'}</div></div>
                         
                         <div>Address<div>{value.location.address1}</div>
                       <div>{value.location.city + ', ' + value.location.state + ' ' + value.location.zip_code}</div></div>

                         <div>Image<div><img className='groupImage' src={value.image_url} alt='restaurant' /></div></div>
                        </div>
                </div>
              }
              
            </li>
          ))}
        </ul>
       </div>
     );
   }
 })

 function mapStateToProps(state){
   return {
    list: state.chatReducer.list
   }
 }

 export default connect(mapStateToProps)(Group)
