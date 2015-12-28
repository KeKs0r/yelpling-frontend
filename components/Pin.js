import React, {Component,PropTypes} from 'react';



export default class HomeView extends Component {
  static propTypes = {
    number: PropTypes.string.isRequired,
    highlight: PropTypes.bool
  }
  render() {
    const {highlight, number} = this.props;
    const factor = (highlight) ? 1.4 : 1;

    let pinStyle = {
      zIndex: -1,
      width: 30 * factor,
      height: 30 * factor,
      borderRadius: '50% 50% 50% 0',
      background: (highlight) ? 'rgb(255, 64, 129)' : '#00cae9',
      position: 'absolute',
      transform: 'rotate(-45deg)',
      left: '50%',
      top: '50%',
      marginTop: -35 * factor + 15,
      marginLeft: -16 * factor - 4,
      // margin: '-20px 0 0 -20px',
    }

    const pinContent = {
      // width: '18px',
      // height: '18px',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 16 * factor,
      marginTop: 6 * factor,
      marginLeft: 10 * factor,

      textAlign: 'center',
      // margin: '6px 0 0 10px',
      transform: 'rotate(+45deg)',
      // background: '#e6e6e6',
      position: 'absolute',
      // borderRadius: '50%'
    }
    return (
          <div style={pinStyle}>
            <div style={pinContent}>{this.props.number}</div>
          </div>
    );
  }
}
