
import axios from "axios"
const API_KEY ="7ba170f1fa3f9013d4dbd05771244665";
export const  tmdbPopularMovies = async () => {

  const fetchData = await axios.get( `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      return fetchData.data

};
export const  tmdbMovieDetails = async (movie_id) => {

  const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
console.log(movie_id,fetchData.data);
      return fetchData.data
   
};

 export const  tmdbMovieCasts = async (id) => {
   const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7ba170f1fa3f9013d4dbd05771244665`);
 console.log(fetchData.data)
 
      return fetchData.data
};

export const tmbdMovietrailer= async (movie_id) => {
  const fetchData= await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`);
 console.log(movie_id,fetchData)

 return fetchData.data
};


