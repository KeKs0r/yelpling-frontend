import React, {Component,PropTypes} from 'react';
import {FontIcon, FilterModal, FlatButton, IconButton, Dialog} from 'material-ui';
import {connect} from 'react-redux';
import { SHOW_ALL, setVisibilityFilter, clearVisibilityFilter } from '../actions/filter';
import { initForm, setFormValue, resetForm } from '../actions/form';

import FilterSelection from './FilterSelection';

const FormName = 'filter';


@connect(
  (state) => { return {
    form: state.form.get(FormName) || state.filter,
    filter: state.filter
  }},
   { initForm, setFormValue, resetForm, setVisibilityFilter, clearVisibilityFilter }
)
export default class FilterButton extends Component {
  static propTypes = {
    filter: PropTypes.oneOfType([
      PropTypes.oneOf(SHOW_ALL),
      PropTypes.object
    ]).isRequired,
    form: PropTypes.object.isRequired,
    initForm: PropTypes.func.isRequired,
    setFormValue: PropTypes.func.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
    clearVisibilityFilter: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleSubmit() {
    const {setVisibilityFilter, form} = this.props;
    setVisibilityFilter(form);
    this.setState({open: false});
  }

  handleClear() {
    const {clearVisibilityFilter} = this.props;
    clearVisibilityFilter();
    this.setState({open: false});
  }

  handleCancel() {
    const {resetForm} = this.props;
    resetForm(FormName);
    this.setState({open: false});
  }

  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            onTouchTap={this.handleCancel.bind(this)} />,
            <FlatButton
              label="Clear"
              secondary={true}
              onTouchTap={this.handleClear.bind(this)} />,
          <FlatButton
            label="Apply Filter"
            primary={true}
            disabled={false}
            onTouchTap={this.handleSubmit.bind(this)} />,
        ];

        const props = this.props;
    return (
    <IconButton
      tooltipPosition="bottom-left"
      tooltip="Specify filter criteria"
      onTouchTap={this.handleOpen.bind(this)}
      >
      <FontIcon className="material-icons">settings</FontIcon >
        <Dialog
          title="Select the filter criteria"
          actions={actions}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          open={this.state.open || false}
          onRequestClose={this.handleCancel.bind(this)}>
          <FilterSelection {...props}/>
        </Dialog>
    </IconButton>
  );
  }
}
