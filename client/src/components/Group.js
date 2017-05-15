import {Link} from 'react-router-dom'
import React from 'react'
//import Newmember from './newmember'
import {connect} from 'react-redux'
import {deleteList} from '../api/wtf.js'
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
    this.setState({
      list: this.state.list.filter((item, i) => {
        return index !== i
      })
    })
  },

  

   render (){
     //console.log(this.state.list, 'the thing')
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
   return {...state.restaurantReducer}
 }

 export default connect(mapStateToProps)(Group)
