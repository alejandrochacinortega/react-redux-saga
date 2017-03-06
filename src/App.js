import React, { Component } from 'react';
import './App.css';

import UsersList from './components/UsersList';
import AddPosts from './components/AddPosts';
import PostsList from './components/PostsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PostsList />
        <AddPosts/>
        <hr/>
        <UsersList />
        <hr/>
      </div>
    );
  }
}

export default App;
