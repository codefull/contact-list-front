import * as actionTypes from '../actions/ActionTypes';

export default (state = [], action:any) => {
    switch (action.type) {
      
      case actionTypes.SAVE_CONTACT:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
      default:
            return state;
    }
  };