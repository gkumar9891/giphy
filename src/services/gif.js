import axios from 'axios';

class gif {
    trending(params) {
        return axios.get('/gifs/trending', {
            params: params
        })
        .then( response => {
            return response.data.data;
        })
    };
    
    search(params) {
        return axios.get('/gifs/search', {
            params: params
        })
        .then( response => {
            return response.data.data;
        })
    }
}

export default new gif();