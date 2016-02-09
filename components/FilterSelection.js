import React, {Component,PropTypes} from 'react';
import { Toggle } from 'material-ui';
import { Map, Set } from 'immutable';
import { SHOW_ALL } from '../actions/filter';


const Fields = [
  'categories.Bars', 'categories.Restaurants', 'categories.Shopping', 'categories.Hotels', 'categories.Coffee & Tea',
  'city.Las Vegas', 'city.Pittsburgh', 'city.Tempe', 'city.Matthews', 'city.Charlotte', 'city.Scottsdale', 'city.Champaign'
];
const FormName = 'filter';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export default class FilterSelection extends Component {
  static propTypes = {
    filter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    form: PropTypes.object.isRequired,
    initForm: PropTypes.func.isRequired,
    setFormValue: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { initForm, filter } = this.props;
    const initial = (typeof filter === 'string') ? new Map() : filter;
    initForm(FormName, initial);
  }

  renderArea(fields, key) {
      return (
        <div key={key}>
          <h3>{capitalizeFirstLetter(key)}</h3>
          <div>
            {fields.map(this.renderField.bind(this))}
          </div>
        </div>
      )
  }
  renderField(name){
    const { form, setFormValue } = this.props;
    const toggled = form.getIn && !!(form.getIn(name.split('.')));
    const handleToggle = (e, value) => {
      setFormValue(FormName, name, value);
    }
    return (
      <Toggle
        key={name}
        name={name}
        value={name}
        label={name.split('.')[1]}
        defaultToggled={toggled}
        onToggle={handleToggle}
        />
    );
  }
  render() {
    const groups = new Set(Fields).groupBy((f) => {
      return f.split('.')[0];
    });
    return (
      <div>
        {groups.map(this.renderArea.bind(this))}
      </div>
    );
  }
}
