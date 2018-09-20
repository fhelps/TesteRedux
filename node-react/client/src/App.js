import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { clickButton, remove } from './actions';

import './App.css';

class App extends Component {

  state = {
    inputValue: ''
  }

  inputChange = event => {
    const { clickButton } = this.props;
    this.setState({
      inputValue: event.target.value
    });
    clickButton(event.target.value);
  }

  render() {
    const { remove, newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input  onChange={this.inputChange} type='text'  value={inputValue}/>
        <button onClick={() => remove('')}>
          Limpar
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>  bindActionCreators({ clickButton, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);