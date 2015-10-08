import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { replaceState } from 'redux-router';
import { TextField } from 'material-ui';
import blacklist from 'blacklist';
import { LINEUP } from '../texts';

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
  getPositionText(){
      const key = 'POSITION_'+this.props.query.position;
      return (LINEUP[key]) ? LINEUP[key] : 'Spieler'
  }
  render() {
    const { query } = this.props;
    let propTypes = Object.keys(SearchField.propTypes);
    const curated = blacklist(this.props, ...propTypes);
    const text = 'Suche ' + this.getPositionText();
    return (
      <TextField type="search" onChange={this.handleChange.bind(this)} value={query.s} floatingLabelText={text} {...curated} />
    );
  }
  handleChange(e) {
    let { replaceState, query, path} = this.props;
    const value = e.target.value;
    query.s = value;
    replaceState(null, path, query);
  }
}
