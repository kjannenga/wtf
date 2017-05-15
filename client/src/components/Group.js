import {Link} from 'react-router-dom'
import React from 'react'
import {populateServer} from '../api/chatAPI.js'
import {connect} from 'react-redux'
import {deleteList} from '../api/chatAPI.js'


 const Group = React.createClass({
   getInitialState: function(){
      return {
       list: []
     }
   }, 

  componentWillReceiveProps(props) {
    this.setState({
      list: props.info.businesses
    })
  },

  deleteList: function (index){
    console.log('test', index, this.state.list)
    this.setState({
      list: this.state.list.filter((item, i) => {
        return index !== i
      })
    })
  },

  

   render (){
     return (
       <div>
         <ul>
          {this.props.info.businesses.map((value, i) => (      
            <li key={value.name+'key'}>
              <div>{value.name}</div>
              <button onClick={() => this.deleteList(i)}>EWW</button>
            </li>
          ))}
        </ul>
       </div>
     );
   }
 })

 function mapStateToProps(state){
<<<<<<< HEAD
  console.log(state)
   return {...state.restaurantReducer,
    list:state.chatReducer.list}
 
=======
   return {...state.restaurantReducer,
    list: state.chatReducer.list}
>>>>>>> f394b979a6322a931a8dff8b6a9a258fe72b83df
 }

 export default connect(mapStateToProps)(Group)
