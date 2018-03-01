import React, {Component} from 'react'; 
import {View} from 'react-native'; 
import * as firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';
import  { FB_APIKEY, FB_AUTHDOMAIN, FB_DATABASEURL, FB_PROJECTID, FB_STORAGEBUCKET, FB_MESSAGINGSENDERID} from '../config/constants.js';

class App extends Component{


  state = {loggedIn :false }; 

componentWillMount(){
  
 var app = firebase.initializeApp({
    apiKey: FB_APIKEY,
    authDomain: FB_AUTHDOMAIN,
    databaseURL: FB_DATABASEURL,
    projectId: FB_PROJECTID,
    storageBucket: FB_STORAGEBUCKET,
    messagingSenderId: FB_MESSAGINGSENDERID
  });


firebase.auth().onAuthStateChanged((user)=>{
if(user){
  this.setState({loggedIn:true}); 
  }
  else{
    this.setState({loggedIn:false}); 
  }
}); 
}
renderContent(){
  if(this.state.loggedIn){
    return(
      <Button>
        Log Out 
        </Button>
    );
  }
  return <LoginForm/>
}

  render(){
    return(
      <View>
        <Header headerText = "Authentication"/>
        {this.renderContent()}
        
        </View>
    );
  }
}

export default App;