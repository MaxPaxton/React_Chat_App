import React, { Component } from 'react';
import Layout from './components/Layouts' ;
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Layout title="chatApp-Maxim Paxton and Patrick Murphy"
        extras="ids: 101064370 100000000" />
      </div>
    );
  }
}

export default App;
