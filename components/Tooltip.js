import React, {Component,PropTypes} from 'react';

const wrapperStyle = {
  width: 120,
  WebkitTransform: 'translateZ(0)',/* webkit flicker fix */
  WebkitFontSmoothing: 'antialiased' /* webkit text rendering fix */
}

const componentWrapper = {
  left: -100
}

const toolTipStyle = {
  background: '#1496bb',
  bottom: '100%',
  color:' #fff',
  display: 'block',
  left: -25,
  marginBottom: 15,
  opacity: 0,
  padding: 20,
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  WebkitTransform: 'translateY(10px)',
     MozTransform: 'translateY(10px)',
      msTransform: 'translateY(10px)',
       OTransform: 'translateY(10px)',
        transform: 'translateY(10px)',
  WebkitTransition: 'all .25s ease-out',
     MozTransition: 'all .25s ease-out',
      msTransition: 'all .25s ease-out',
       OTransition: 'all .25s ease-out',
        transition: 'all .25s ease-out',
  WebkitBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
     MozBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
      msBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
       OBoxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
          boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.28)',
}

const toolTipHover = {
  background: '#1496bb',
  bottom: '100%',
  color:' #fff',
  display: 'block',
  zIndex: 5,
  left: -25,
  marginBottom: 40,
  opacity: 0,
  padding: '10px 20px 10px 20px',
  position: 'absolute',
  width: '100%',
  opacity: 1,
  pointerEvents: 'auto',
  WebkitTransform: 'translateY(0px)',
     MozTransform: 'translateY(0px)',
      msTransform: 'translateY(0px)',
       OTransform: 'translateY(0px)',
          transform: 'translateY(0px)',
}


export default class ToolTip extends Component {
  static propTypes = {
    component: PropTypes.object.isRequired,
    showTooltip: PropTypes.bool,
  }
  render() {
    const {component, children, showTooltip} = this.props;
    const tooltip = (this.props.showTooltip) ? toolTipHover : toolTipStyle ;
    return (
      <div>
        <div style={componentWrapper}>
          {component}
        </div>
         <div style={wrapperStyle}>
           <div style={tooltip}>{children}</div>
         </div>
       </div>
    )
  }
}
