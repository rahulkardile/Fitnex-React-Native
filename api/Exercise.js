import axios from 'axios'
import { rapidApiKey } from '../constants'

const baseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';

const apiCall = async (url) => {
    try {
        
        const options = {
            method: 'GET',
            url,
            params: {limit: '25'},
            headers: {
              'X-RapidAPI-Key': rapidApiKey,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };

          const response = await axios.request(options);
         return response.data
    } catch (error) {
        console.log(error);
    }
}

export const BodyPartData = async (bodypart) => {
    let data = await apiCall(baseURL + bodypart)
    return data;
}