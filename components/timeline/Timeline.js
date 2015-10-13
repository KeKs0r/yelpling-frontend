import React, { Component, PropTypes } from 'react';
import { Card, Avatar } from 'material-ui';
import TimelineEvent from './TimelineEvent';



const styles = {
  line: {
    content: '',
    position: 'absolute',
    top: 0,
    left: '110px',
    height: '100%',
    width: '4px',
    background: '#d7e4ed'
  }
}
export default class Timeline extends Component {
  static propTypes = {
    events: PropTypes.object.isRequired,
  }
  render() {
      const { events } = this.props;
      const list = events.map(e => <TimelineEvent event={e}  key={e.get('id')} />).valueSeq();
    return (
        <Card style={{position:'relative', height:'100%', backgroundColor:'rgb(233, 240, 245)'}}>
          <div style={styles.line} />
          {list}
        </Card>
    );
  }
}
