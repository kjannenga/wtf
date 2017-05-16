import {Link} from 'react-router-dom'
import React from 'react'
import {populateRestaurants, removeRestaurant} from '../api/chatAPI.js'
import {connect} from 'react-redux'

 const Group = React.createClass({
  remove: function (key){
    console.log('key', key)

    removeRestaurant(key)
  },

   render (){
    console.log('this.props.list', this.props.list)
     return (
       <div>
         <ul>
          {this.props.list.map((value, i) => (      
            <li key={'rest-delete-' + i}>
              <div>{value.name}</div>
              <button onClick={() => this.remove(value.key)}>EWW</button>
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
