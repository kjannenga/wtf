import {Link} from 'react-router-dom'
import React from 'react'
//import Newmember from './newmember'
import {connect} from 'react-redux'

 const Group = React.createClass({
   getInitialState: function(){
	    return {
       list: ''
     }
   },

  componentWillReceiveProps(props) {

  this.setState({
    list: [props.info.businesses]

    })
  },



deleteList: function (index){
  var index = this.state.list.splice(index,1)
  var leftSide = this.state.list.splice(0,index);
  var rightSide = this.state.list.splice(index + 1);
  var list = leftSide.concat(rightSide);


  this.setState({
      list: list
    })
},
  

   render (){
     console.log(this.state.list, 'the thing')
     return (
  
     
       
        
       <div>
         <ul>
          {this.props.info.businesses.map(function(value, i){
                  
            return <li>
              <div>{value.name}</div>
              <button onClick={() => this.deleteList(i)}>EWW</button>
            </li>
          })}
        </ul>
       </div>
       
    
      
	    
     );
   }
 })

 function mapStateToProps(state){
   return {...state.restaurantReducer}
 }

 export default connect(mapStateToProps)(Group)
