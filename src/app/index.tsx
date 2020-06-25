import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';
import { NavBar } from 'app/components/NavBar';
import { Footer } from 'app/components/Footer';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
/* -------------------------------------------------------------------------- */

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - React Boilerplate" defaultTitle="React Boilerplate">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  );
}
