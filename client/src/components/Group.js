import {Link} from 'react-router-dom'
import React from 'react'
import Newmember from './newmember'
import {connect} from 'react-redux'

 const Group = React.createClass({
   getInitialState: function(){
	    return {
       list: [],
       text: ''
     }
   },

   handleChange: function (e) {
     this.setState({
       text: e.target.value
     })
   },
   handleSubmit: function (e){
     e.preventDefault ()
     var id = Math.random();
     this.setState({
       list:[
       {
         id:id,
         text:this.state.text,
         complete: false,
       }, 
         ...this.state.list
       ],
       text: ''
     })
   },
   handleComplete: function (index){
     var newList = this.state.list;
     newList[index].complete = !newList[index].complete;
     this.setState({
       list: newList
     });

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
     console.log(this.props, 'group')
     return (
     <div>
     <div className="new">
     	<Newmember />
     </div>
       <div>
         <form onSubmit={this.handleSubmit}>
           <input type="text" onChange={this.handleChange} value={this.state.text} placeholder="Enter Restaraunt Names" />
         </form>
       <div>
         <ul>
           {this.props.info.businesses.map(function(value){
             return<li>
               <div>{value.name}</div>
             </li>
           })}
         </ul>
       </div>
       <div>
         <ul>
             {this.state.list.map(function(list, i){
               var color = list.complete ? 'red' : 'blue';

             return <li key={i} style={{color:color}}>
             {list.text}
                     <button onClick={() => this.handleComplete(i)}>Fuck this one</button>
                     <button onClick={() => this.deleteList(i)}>Get Outta Here </button>
                   </li>
           }.bind(this))}
         </ul>
       </div>
       </div>
    
      	<Link to='/results'><div>last one links to results page</div></Link>
	    </div>
     );
   }
 })

 function mapStateToProps(state){
   return {...state.restaurantReducer}
 }

 export default connect(mapStateToProps)(Group)
