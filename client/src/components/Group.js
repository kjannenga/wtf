import {Link} from 'react-router-dom'
import React from 'react'
import {populateRestaurants, removeRestaurant} from '../api/chatAPI.js'
import {connect} from 'react-redux'

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
            <li key={'rest-delete-' + i}>
              <div>{value.name}</div>
              {this.props.list.length > 1 ?
                <button onClick={() => this.remove(value.key)}>EWW</button> :
                <Link to="/results">Results</Link>
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
