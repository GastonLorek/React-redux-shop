import * as actionType from './actionTypes';

export const toogleModal = paylaod => {
  return {
    type: actionType.TOOGLE_MODAL,
    paylaod
  };
};
