import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import CriteriaSelector from './Criteria'
import Results from './Results'
import Group from './Group'
import yesresult from './yesresult'
import {Provider} from 'react-redux'
import store from '../store'


export default React.createClass ({
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route path='/criteria' component={CriteriaSelector} />
          <Route path='/results' component={Results} />
          <Route path='/group' component={Group} />     
          <Route path='/yesresult' component={yesresult} />    
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
})
