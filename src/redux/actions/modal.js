import * as actionType from '../CONSTANTS';

export const toogleModal = paylaod => {
  return {
    type: actionType.TOOGLE_MODAL,
    paylaod
  };
};
