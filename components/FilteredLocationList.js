import React, { Component, PropTypes } from 'react';
import Location from './Location'
import { connect } from 'react-redux';

@connect(
  (state) => { return {
    locations: state.locations,
  }}//,
  // { replaceState, pushState }
)
export default class FilteredLocationList extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired
  }
  render() {
    const {locations} = this.props;
    const locationsOut = locations.map((loc) => {
      const l = loc.toJS();
      return (<Location
        name={l.name}
        categories={l.categories}
        fullImage={l.image}
        description={l.description}
        optDescription={l.optDescription}
        score={l.score}
        />)
    })
  return <div>{locationsOut}</div>;
  }
}
