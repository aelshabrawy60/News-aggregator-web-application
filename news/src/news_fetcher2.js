
import axios from 'axios';


const api_key = 'rNgVcLn5ql25YMm9Iv0z3J-BNtI6Qj4VzA3wPf26TbM'



export const fetchData = async (lang) => {
    
    var options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/latest_headlines?',
        params: {lang : lang, not_sources: 'wn.com', },
        headers: {
          'x-api-key': api_key
        }
    };

    try {
        const response = await axios.request(options); // Use Axios to fetch data
        console.log(response.data)
        return response.data;
        // Return the fetched data
    } catch (error) {
        // Check if the error has a response from the server
        if (error.response) {
            throw new Error(`Error: ${error.response.status} - ${error.response.data}`);
        }
        throw new Error(`Error: ${error.message}`);
    }
};
