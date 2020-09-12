import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router'
// import RouterComponent from './src/Router';
// import {View, Text} from 'react-native';

class App extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyAeNwWBgKpALk3MY4xlGbr6yEsdqhhxg7Q',
      authDomain: 'manager-7cec1.firebaseapp.com',
      databaseURL: 'https://manager-7cec1.firebaseio.com',
      projectId: 'manager-7cec1',
      storageBucket: 'manager-7cec1.appspot.com',
      messagingSenderId: '314701942641',
      appId: '1:314701942641:web:089cb0a3bd1fbca12730d0',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk))); //second arg koe bhi initial_state ke lie jo ke pass ho

    return (
      <Provider store={store}>
     <Router/>
     
     {/* <LoginForm /> */}
      </Provider>
    );
  }
}
export default App;
