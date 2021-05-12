
import React, { Component } from 'react';
import './css/styles.css';
import Layout from './Components/Layout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout />
    );
  }
}
