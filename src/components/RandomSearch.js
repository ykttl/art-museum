import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomAPI } from '../action/api';

class RandomSearch extends Component {
  handleClick = () => {
    this.props.randomAPI();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>random search</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.api.image
});

const mapDispatchToProps = dispatch => ({
  randomAPI: keyword => dispatch(randomAPI(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomSearch);
