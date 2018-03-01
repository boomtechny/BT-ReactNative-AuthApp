import React, {Component} from 'react'; 
import {View} from 'react-native'; 
import * as firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
componentWillMount(){
  
 var app = firebase.initializeApp({
  });
}

  render(){
    return(
      <View>
        <Header headerText = "Authentication"/>
        <LoginForm/>
        
        </View>
    );
  }
}

export default App;