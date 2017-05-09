import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import CriteriaSelector from './Criteria'
import Results from './Results'
import Group from './Group'
import Yes from './yes'
import {Provider} from 'react-redux'
import store from '../store'
// import cleanCriteria from '.Clean/Criteria'
// import cleanResults from '.Clean/Results'
// import cleanGroup from '.Clean/Group'
// import cleanYes from '.Clean/yes'


export default React.createClass ({
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route path='/criteria' component={CriteriaSelector} />
          <Route path='/results' component={Results} />
          <Route path='/group/:roomId' component={Group} />  
          <Route path='/yes' component={Yes}  />  
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
})
