import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Header } from './src/components/common';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyDvN8rN_JceUt58zb3XL9dR9oPfnQmrtQ4",
      authDomain: "latmanager-28af6.firebaseapp.com",
      databaseURL: "https://latmanager-28af6.firebaseio.com",
      projectId: "latmanager-28af6",
      storageBucket: "latmanager-28af6.appspot.com",
      messagingSenderId: "1093547371576",
      appId: "1:1093547371576:web:f996c5e2bd4aa3282e0acd",
      measurementId: "G-SNX3X6SCL8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Please Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
