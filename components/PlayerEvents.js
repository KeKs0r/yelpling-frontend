import React, { Component, PropTypes } from 'react';


class PlayerEvents extends Component {
  static propTypes = {
    events: PropTypes.object.isRequired
  }
  render() {
    const events = this.props.events.toJS();
    if(events.length === 0) {
      return null;
    }
    return (
      <ul>
        {events.map((e) => {
            return <li>{e.name}: {e.score}</li>
        })}
      </ul>
    );
  }
}

export default PlayerEvents;
