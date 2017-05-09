import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import CriteriaSelector from './Criteria'
import Results from './Results'
import Group from './Group'
import Yes from './yes'
import {Provider} from 'react-redux'
import store from '../store'

import CleanCriteria from './CleanCriteria'
import CleanResults from './CleanResults'
import CleanGroup from './CleanGroup'
import CleanYes from './CleanYes'
 


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
          <Route path='/Clean/criteria' component={CleanCriteria} />
          <Route path='/Clean/results' component={CleanResults} />
          <Route path='/Clean/group' component={CleanGroup} />  
          <Route path='/Clean/yes' component={CleanYes}  /> 
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
})
