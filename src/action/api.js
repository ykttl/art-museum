import axios from 'axios';
export const KEYWORD_API = 'KEYWORD_API';
export const RANDOM_API = 'RANDOM_API';

export const keywordAPI = keyword => async dispatch => {
  const res = await axios.get(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`
  );

  console.log(res);
  // dispatch({ type: KEYWORD_API, data: res.data });
};

export const randomAPI = () => async dispatch => {
  const randomNum = 1 + Math.floor(Math.random() * 471581);
  console.log(randomNum);
  const res = await axios.get(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNum}`
  );
  console.log(res);
  dispatch({ type: RANDOM_API, image: res.data.primaryImageSmall });
};
