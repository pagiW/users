import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Edit from './containers/Edit';
import Form from './containers/Form';
import MainPage from './containers/MainPage';
import Move from './containers/Move';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/users' component={Move} />
          <Route exact path='/users/home' component={MainPage} />
          <Route exact path='/users/form' component={Form} />
          <Route exact path='/users/:email/edit' component={Edit} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
