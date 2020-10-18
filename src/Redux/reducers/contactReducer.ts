import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  pending: false,
  contacts: [],
  error: ""
}

export function contactsReducer(state = initialState, action:any) {
  switch(action.type) {
      case actionTypes.REQUEST_CONTACTS: 
          return {
              ...state,
              pending: true
          }
      case actionTypes.FETCH_CONTACTS_SUCCESS:
          return {
              ...state,
              pending: false,
              contacts: action.contacts
          }
      case actionTypes.FETCH_CONTACTS_ERROR:
          return {
              ...state,
              pending: false,
              error: action.error
          }
      default: 
          return state;
  }
}

export const getContacts = (state:any) => state.contacts;
export const getContactsPending = (state:any) => state.pending;
export const getContactsError = (state:any) => state.error;