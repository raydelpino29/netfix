import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from './landing/landing_container';
import VideoPlayerContainer from './videos/video_player_container';
import CategoryShowContainer from './videos/category_show_container';
import HeaderContainer from './header/header_container';
import SearchPageContainer from './header/search_page_container';

const App = () => (
  <div>
    <Route exact path='/' component={ LandingContainer } />
    <Route path='/' component={ HeaderContainer } />
    <AuthRoute path='/login' component={ SessionFormContainer } />
    <AuthRoute path='/signup' component={ SessionFormContainer } />
    <ProtectedRoute exact path='/video/:videoId' component={ VideoPlayerContainer } />
    <ProtectedRoute exact path='/category/:categoryId' component={ CategoryShowContainer } />
    <ProtectedRoute exact path='/myList' component={ CategoryShowContainer } />
    <ProtectedRoute path='/search' component={ SearchPageContainer } />
    <ProtectedRoute path='/category/:categoryId/search' component={ SearchPageContainer } />
  </div>
);

export default App;
