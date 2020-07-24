import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Functional  from './components/Functional'
import Welcome from './components/Welcome'
import JSXComponent from './components/JSXComponent'
import Message from './components/Message';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Message></Message>
        {/* <Functional /> 
        <Welcome /> */}
        {/* <Functional name="Sharukhh" heroName = "Romantic">
          <p>This is children prop, He is 45 years old now</p>
        </Functional>
        <Functional name="Sunny Deol" heroName = "Shaktiman">
          <button>Action</button>

        </Functional>
        <Functional name="Ajay" heroName = "Serious"/>

        <Welcome name="Akshay" heroName = "Funny">
          <p>This is children prop, He is 45 years old now</p>
        </Welcome> */}


      </div>
    );
  }
}

export default App;
