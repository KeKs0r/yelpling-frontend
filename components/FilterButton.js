import React, {Component,PropTypes} from 'react';
import {FontIcon, FilterModal, FlatButton, IconButton, Dialog} from 'material-ui';
import {replaceState} from 'redux-router';
import {connect} from 'react-redux';


export default class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.handleClose.bind(this)} />,
          <FlatButton
            label="Submit"
            primary={true}
            disabled={true}
            onTouchTap={this.handleClose.bind(this)} />,
        ];

    return (
    <IconButton
      tooltipPosition="bottom-left"
      tooltip="Specify filter criteria"
      onTouchTap={this.handleOpen.bind(this)}
      >
      <FontIcon className="material-icons">settings</FontIcon >
        <Dialog
          title="Dialog With Scrollable Content"
          actions={actions}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}>
          <div style={{height: '1000px'}}>
            Really long content
          </div>
        </Dialog>
    </IconButton>
  );
  }
}
