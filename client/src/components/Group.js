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

  console.log(state)
   return {...state.restaurantReducer,
    list:state.chatReducer.list}
 

 }

 export default connect(mapStateToProps)(Group)
