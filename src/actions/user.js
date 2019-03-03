import axios from 'axios';
import {API_URL} from '../config'
import {
  SAVE_DATA
} from './types';


//LOGIN REDUCER
export const getData = (callback) => async dispatch => {
 try {
  let response = await axios.post(API_URL);
  let {data}=response;
  if(data.status ==="ok"){
    
    let payload =response.data
    dispatch({ type: SAVE_DATA, payload });
    console.log(payload);
  }
  callback(response);
  } catch (error) {
    throw error;
  }
};






    


  

  

  

