import axios from 'axios';

//Implementation of AXIOS encapsulated in a single file.
export const get = (url) => {
    return axios.get(url);
}