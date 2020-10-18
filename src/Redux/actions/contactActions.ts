import * as actionTypes from './ActionTypes'

/**
 * @summary Action dispatched when a request for contacts loading is initiated.
 */
export const requestContacts = () => {
  return {
    type: actionTypes.REQUEST_CONTACTS,
  }
}

export const fetchContactsSuccess = (contacts: any) => {
  return {
    type: actionTypes.FETCH_CONTACTS_SUCCESS,
    contacts,
  }
}

export const fetchContactsError = (error:string) => {
  return {
    type: actionTypes.FETCH_CONTACTS_ERROR,
     error
}
}

export const editContact = (contact: any) => {
  return {
    type: actionTypes.EDIT_CONTACT,
    contact: contact,
  }
}

export const saveContact = (contact: any) => {
  return {
    type: actionTypes.SAVE_CONTACT,
    contact: contact,
  }
}

export const removeContact = (contact: any) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    contact: contact,
  }
}
