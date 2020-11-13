import axios from 'axios';

const API_KEY ="a65630ae";
export const ombdDeatailsMovies= async(imdb_id)=>{
    const fetchData = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdb_id}`)
   return fetchData.data;

}


