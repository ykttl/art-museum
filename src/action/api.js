import axios from 'axios';
export const CALL_API = 'CALL_API';

export const callAPI = keyword => async dispatch => {
  console.log('koko');
  const res = await axios.get(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`
  );
  console.log(res);
  // dispatch({ type: CALL_API, data: res.data });
};
