import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callAPI } from '../action/api';

class KeywordSearch extends Component {
  state = { keyword: '' };
  handleSubmit = e => {
    e.preventDefault();
    this.props.callAPI(e.target.value);
  };
  handleInput = e => {
    this.setState({ keyword: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInput} />
        <button>Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  callAPI: keyword => dispatch(callAPI(keyword))
});

export default connect(
  null,
  mapDispatchToProps
)(KeywordSearch);

// export default KeywordSearch;
