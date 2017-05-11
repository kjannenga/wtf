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
    var newList = this.props.info.businesses;
    newList[index].complete = !newList[index].complete;
    this.setState({
      list: newList
    });

  },
deleteList: function (index){
  var index = this.props.info.businesses.splice(index,1)

  var leftSide = this.props.info.businesses.splice(0,index);
  var rightSide = this.props.info.businesses.splice(index + 1);
  var list = leftSide.concat(rightSide);


  this.setState({
      list: list
    })
},


  render (){
    console.log
    return (
    <div>
    <div classname="new">
      <Newmember />
    </div>
      <div>
      <div>
        <ul>
          {this.props.info.businesses.map(function(value, i){
             var color = value.complete ? 'red' : 'blue';      
            return<li style={{color:color}}>
              <div>{value.name}</div>
              <button onClick={() => this.handleComplete(i)}>F this one</button>
              <button onClick={() => this.deleteList(i)}>Get Outta Here </button>

            </li>
          })}
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
