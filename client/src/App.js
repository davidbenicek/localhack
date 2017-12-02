import React, { Component } from 'react';
import Header from './Header'
import BlockLeft from './BlockLeft'
import BlockRight from './BlockRight'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          image="background.jpg"
          title="Welcome to viZion"
        />
        <BlockLeft/>
        <BlockRight/>
        <Footer/>
      </div>
    );
  }
}

export default App;
