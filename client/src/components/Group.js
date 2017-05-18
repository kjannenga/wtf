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
     return (
       <div>
         <ul className='groupList'>
          {this.props.list.map((value, i) => (      
            <li key={'rest-delete-' + i}>
              {this.props.list.length > 1 ?
                <div>
                  <div className='groupListName'><button className="groupButton" onClick={() => this.remove(value.key)}>EWW</button> {value.name}</div>
                    
                </div>
                :
                <div className='groupAlign'>
                  <div className="groupName">{value.name}</div>
                       <div>
                         <iframe

                            width="1000"
                            height="375"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiZLjRIWsbb_SPwIXRxPGWyW-ILTBIqEo&origin=The+Iron+Yard,Las+Vegas&destination=${value.coordinates.latitude + ',' + value.coordinates.longitude}`} allowFullScreen>
                         </iframe>
                       </div>
                       <div className="groupInfo">
                        
                         <div><span className="groupheading">Rating</span><div>{value.rating + '/5'}</div></div>
                         
                         <div><span className="groupheading">Address</span><div>{value.location.address1}</div>
                       <div>{value.location.city + ', ' + value.location.state + ' ' + value.location.zip_code}</div></div>

                         <div><div><span className="groupheading">Image</span><div><img className='resultImage' src={value.image_url} alt='restaurant' /></div></div></div>
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
