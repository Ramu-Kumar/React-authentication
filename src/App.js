import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.usersData) {
      routes = (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      )
    }
    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  usersData: state.currentUser
})

export default withRouter(connect(mapStateToProps)(App));
