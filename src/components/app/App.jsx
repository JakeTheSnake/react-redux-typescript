import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
 }
  
  render() {
    return (
      <div>
        <h1>
          HEJ
        </h1>
        <ul>
          <li>Abc</li>
          <li>Def</li>
          <li>asdf</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
})(App);