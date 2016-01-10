import React, {Component,PropTypes} from 'react';

let pinStyle =  {
  boxSizing:'border-box',
  background: 'white',
  boxShadow: '2px 2px 4px #333',
  border:'5px solid #346FF7',
  height: 20,
  width: 20,
  borderRadius: 10,
  WebkitAnimation: 'pulse 1s ease 1s 3',
  MozAnimation: 'pulse 1s ease 1s 3',
  animation: 'pulse 1s ease 1s 3',
}

export default class MyselfPin extends Component {
  render() {
    return (
          <div style={pinStyle} />
    )
  }
}
