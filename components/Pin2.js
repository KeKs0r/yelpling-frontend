import React, {Component,PropTypes} from 'react';
import Icon from '../assets/map_icon_text_red.svg';
const iconPath = '/assets/map_icon_text_red.svg';


export default class HomeView extends Component {
  static propTypes = {
    number: PropTypes.string.isRequired,
    selected: PropTypes.bool
  }
  render() {
    const {selected, number} = this.props;
    const factor = (selected) ? 1.4 : 1;
    let pinStyle = {
      width: 30 * factor,
      height: 30 * factor,
      backgroundImage: `data(${Icon})`,
      // borderRadius: '50% 50% 50% 0',
      // background: '#00cae9',
      position: 'absolute',
      // transform: 'rotate(-45deg)',
      left: '50%',
      top: '50%',
      // margin: '-20px 0 0 -20px',
    }
    if(selected){
      const scale = 2;
      pinStyle.transform = `scale(${scale} , ${scale})`;
    }

    /*
    const pinContent = {
      // width: '18px',
      // height: '18px',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 16 * factor,
      fontWeight: 400 + (factor - 1 * 10000),
      marginTop: 6 * factor,
      marginLeft: 10 * factor,

      textAlign: 'center',
      // margin: '6px 0 0 10px',
      transform: 'rotate(+45deg)',
      // background: '#e6e6e6',
      position: 'absolute',
      // borderRadius: '50%'
    }
    */
    return (
        <div style={pinStyle}>
          {this.props.number}
        </div>
    );
  }
}
