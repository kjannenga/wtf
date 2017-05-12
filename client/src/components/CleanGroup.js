import {Link} from 'react-router-dom'
import React from 'react'
//import Newmember from './newmember'
import {connect} from 'react-redux'

const Group = React.createClass({
  getInitialState: function(){
    return {
      list: [],
      text: ''
    }
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
    return (
    <div>
      <div>
      <div>
        <ul>
          {this.props.info.businesses.map(function(value, i){
                  
            return<li>
              <div>{value.name}</div>
              <button onClick={() => this.deleteList(i)}>EWW!</button>

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
