import React, { Component } from 'react';
import { connect } from 'react-redux';

class Picture extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.api.image
});

export default connect(mapStateToProps)(Picture);
