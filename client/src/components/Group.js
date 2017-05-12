import {Link} from 'react-router-dom'
import React from 'react'
//import Newmember from './newmember'
import {connect} from 'react-redux'

 const Group = React.createClass({
   getInitialState: function(){
      console.log('businesses', this.props.info.businesses)
	    return {
       list: this.props.info.businesses
     }
   },

  // componentWillReceiveProps(props) {

  // this.setState({
  //   list: [props.info.businesses]

  //   })
  // },

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
   return {...state.restaurantReducer}
 }

 export default connect(mapStateToProps)(Group)
