import React, { Component } from 'react';
import './App.css';

import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
  render() {
    return (
      <div className="container">
        <UsersList />
        <AddUser/>
      </div>
    );
  }
}

export default App;
