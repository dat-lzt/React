import React, { Component } from 'react';
import { Proider, Provider } from 'react-redux'
import './App.css';
import Posts from './components/Posts'
import PostFrom from './components/PostFrom';
import {store} from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostFrom />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
