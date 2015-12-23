import { Map, Set } from 'immutable';
import { SET_FORM_VALUE, RESET_FORM, INIT_FORM } from '../actions/form';


export default function visibilityFilter(state = new Map(), action, moreState) {
  switch (action.type) {
    case SET_FORM_VALUE:
      let path  = [action.form].concat(action.field.split('.'));
      if(typeof action.value === 'boolean'){
        const add = action.value;
        const value = path.pop();
        const output = state.updateIn(path, (values) => {
          const existing = (values) ? new Set(values.toJS()): new Set();
          if(add) {
            return existing.add(value);
          }
          return existing.remove(value);
        });
        return output;
      }
      return state.setIn(path, action.value);
    // case ADD_FORM_VALUE:
    //   const path  = [action.form].concat(action.field.split('.'));
    //   return state.updateIn(path, (value) => {
    //     new Set(value.toJS()).add(action.value);
    //   });
    case RESET_FORM:
      return state.deleteIn([action.form]);
    case INIT_FORM:
      return state.setIn([action.form], action.value);
    default:
      return state
  }
}
