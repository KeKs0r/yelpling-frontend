import React, { Component, PropTypes } from 'react';


class PlayerEvents extends Component {
  static propTypes = {
    events: PropTypes.array
  }
  render() {
    const events = this.props.events;
    if(!events || events.length === 0) {
      return null;
    }
    return (
      <ul>
        {events.map((e) => {
            return <li key={e.id}>{e.name}: {e.score}</li>
        })}
      </ul>
    );
  }
}

export default PlayerEvents;
