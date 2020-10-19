import {
  requestContacts,
  fetchContactsSuccess,
  fetchContactsError,
} from './contactActions'
import axios from 'axios'

//TODO: Modify backend to take intoo account error results
/**
 * @summary Action dispatched when a request for contacts loading is dispatched.
 */
export const fetchContacts = () => {
    return (dispatch: any) => {
        dispatch(requestContacts())
    return axios
    .get('http://localhost:3000/contact')
    .then(res => {
      const {error} = res.data
      if (error) {
        throw error
      }
      const contacts = res.data
      dispatch(fetchContactsSuccess(contacts))
      return contacts;
    })
    .catch(error => {
      dispatch(fetchContactsError(error.message))
    })
  }
}

export default fetchContacts
