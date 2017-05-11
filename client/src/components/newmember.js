import React from 'react';

export default React.createClass({
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
    return (
      <div>
       
      <div>
        <ul>
            {this.state.list.map(function(list, i){
              var color = list.complete ? 'purple' : 'green';

            return <li key={i} style={{color:color}}>
            {list.text}
                    <button onClick={() => this.handleComplete(i)}>Click after making selection</button>
                    <button onClick={() => this.deleteList(i)}>Nah get outta the group</button>
                  </li>
          }.bind(this))}
        </ul>
      </div>
      </div>
    )
  }
})

