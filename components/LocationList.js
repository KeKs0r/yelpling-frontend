import React, { Component, PropTypes } from 'react';
import Location from './Location'

export default class LocationList extends Component {
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
        selected={l.selected}
        />)
    })
  return <div>{locationsOut}</div>;
  }
}
