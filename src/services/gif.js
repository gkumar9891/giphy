import axios from 'axios';

class gif {
    constructor() {
        this.params =   {
            api_key: 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY'
        }
    }

    async trending() {
        await axios.get('/gifs/trending', {
          params: this.params
        });
    }
}

export default new gif();