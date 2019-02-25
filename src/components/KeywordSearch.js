import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keywordAPI } from '../action/api';

class KeywordSearch extends Component {
  state = { keyword: '' };
  handleSubmit = e => {
    e.preventDefault();
    this.props.keywordAPI(e.target.value);
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

const mapDispatchToProps = dispatch => ({
  keywordAPI: keyword => dispatch(keywordAPI(keyword))
});

export default connect(
  null,
  mapDispatchToProps
)(KeywordSearch);

// export default KeywordSearch;
