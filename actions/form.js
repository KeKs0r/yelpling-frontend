export const SET_FORM_VALUE = 'SET_FORM_VALUE';
export const ADD_FORM_VALUE = 'ADD_FORM_VALUE';
export const RESET_FORM = 'RESET_FORM';
export const INIT_FORM = 'INIT_FORM';

export function setFormValue(form, name, value) {
  return { type: SET_FORM_VALUE, form:form, field:name, value:value }
}

export function addFormValue(form, name, value) {
  return { type: ADD_FORM_VALUE, form:form, field:name, value:value }
}

export function initForm(form,value) {
  return { type: INIT_FORM, form:form, value:value }
}

export function resetForm(form){
  return { type: RESET_FORM, form:form }
}
