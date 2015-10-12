import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';
const styles = {
  image: {
    position: 'absolute',
    top: 0,
    left: 25,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    boxShadow: '0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)'
  },
  arrow: {
    content: '',
    position: 'absolute',
    top: '16px',
    right: '100%',
    height: 0,
    width: 0,
    border: '7px solid transparent',
    borderRight: '7px solid #ffffff'
  },
  content: {
    position: 'relative',
    marginLeft: '90px',
    marginRight: '10px',
    background: '#ffffff',
    borderRadius: '0.25em',
    padding: '1em',
    boxShadow: '0 3px 0 #d7e4ed'
  }
}


export default class TimelineEvent extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
  }
  render() {
      const event = this.props.event.toJS();
    return (
          <div style={{position:'relative', top:20, height:70}} className="bounceInRight animated" >
            <div style={styles.image}>
              <Avatar src={event.player.image} />
            </div>
            <div style={styles.content} >
              <div style={styles.arrow} />
              Tor: / Score: {event.score}
            </div>
          </div>
    );
  }
}
