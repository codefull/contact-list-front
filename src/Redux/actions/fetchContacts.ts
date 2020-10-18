import {
  requestContacts,
  fetchContactsSuccess,
  fetchContactsError,
} from './contactActions'

/**
 * @summary Action dispatched when a request for contacts loading is dispatched.
 */
export const fetchContacts = () => {
  return (dispatch: any) => {
    dispatch(requestContacts())
    return fetch(`localhost:3000/contact`)
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchContactsSuccess(res.contacts))
        return res.contacts
      })
      .catch(error => {
        dispatch(fetchContactsError(error.message))
      })
  }
}