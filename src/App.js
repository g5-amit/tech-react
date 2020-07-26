import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Functional  from './components/Functional'
import Welcome from './components/Welcome'
import JSXComponent from './components/JSXComponent'
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleB from './components/LifecycleB';
import LifecycleA from './components/LifecycleA';

class App extends Component {
  render(){
    return (
      <div className="App">
        <LifecycleA></LifecycleA>
        {/* <Form></Form> */}
        {/* <Stylesheet primary = {true}></Stylesheet> */}
        {/* <Inline></Inline>
        <h1 className = 'error'>Error</h1>
        <h1 className = {styles.success}> Success</h1>  */}
        {/* <NameList></NameList> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message> */}
        {/* <Functional />  */}
         {/* <Welcome /> */}
        {/* <Functional name="Sharukhh" heroName = "Romantic">
          <p>This is children prop, He is 45 years old now</p>
        </Functional>
        <Functional name="Sunny Deol" heroName = "Shaktiman">
          <button>Action</button>

        </Functional>
        <Functional name="Ajay" heroName = "Serious"/> */}

        {/* <Welcome name="Akshay" heroName = "Funny">
          <p>This is children prop, He is 45 years old now</p>
        </Welcome> */}


      </div>
    );
  }
}

export default App;
