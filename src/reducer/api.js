import { KEYWORD_API, RANDOM_API } from '../action/api';

const initialState = { image: '' };

const api = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_API:
      console.log(action);
      return {
        image: action.image
      };
    default:
      return state;
  }
};

export default api;
