import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from './landing/landing_container';
import VideoPlayerContainer from './videos/video_player_container';
import CategoryShowContainer from './videos/category_show_container';
import Header from './header/header';

const App = () => (
  <div>
    <Route path='/' component={Header} />
    <Route exact path='/' component={LandingContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <ProtectedRoute exact path='/video/:videoId' component={VideoPlayerContainer} />
    <ProtectedRoute exact path='/category/:categoryId' component={CategoryShowContainer} />
  </div>
);

export default App;
