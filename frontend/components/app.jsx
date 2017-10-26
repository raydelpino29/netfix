import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from './landing/landing_container';

const App = () => (
  <div>
    <h1 className='temp-logo'>Netfix</h1>
    <Route exact path='/' component={LandingContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
