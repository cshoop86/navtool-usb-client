import axios from 'axios';

const ROOT_URL = "https://tranquil-mesa-29755.herokuapp.com/navtoolsws/make";

export const FETCH_MAKE = 'FETCH_MAKE';

export function fetchMake(mfg_id){
  const url = ROOT_URL + "?mfg_id=" + mfg_id;
  const request = axios.get(url);

  console.log('URL', url);

  return (dispatch) => {
    request.then( ({data}) =>{
      console.log(data);
      dispatch( { type: FETCH_MAKE, payload: data } )
    });
  };
}