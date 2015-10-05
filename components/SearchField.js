import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { replaceState } from 'redux-router';


@connect(
  (state) => ({
    query: state.router.location.query,
    path: state.router.location.pathname
  }),
  { replaceState }
)
export default class SearchField extends Component {
  static propTypes = {
    query: PropTypes.object,
    path: PropTypes.string.isRequired,
    replaceState: PropTypes.func.isRequired
  }
  render() {
    const { query } = this.props;
    return (
      <div>
        <input type="search" onChange={this.handleChange.bind(this)} value={query.s} />
      </div>
    );
  }
  handleChange(e) {
    let { replaceState, query, path} = this.props;
    const value = e.target.value;
    query.s = value;
    replaceState(null, path, query);
  }
}
