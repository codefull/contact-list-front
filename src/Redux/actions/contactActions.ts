import * as actionTypes from './ActionTypes';

export const editContact = (contact:any) => {
    return {
      type: actionTypes.EDIT_CONTACT,
      contact: contact
    }
  };

  export const saveContact = (contact:any) => {
    return {
      type: actionTypes.SAVE_CONTACT,
      contact: contact
    }
  };

  export const removeContact = (contact:any) => {
    return {
      type: actionTypes.REMOVE_CONTACT,
      contact: contact
    }
  };