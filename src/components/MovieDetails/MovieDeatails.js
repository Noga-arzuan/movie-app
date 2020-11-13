 import React from "react";
  import {tmdbMovieDetails} from "../api/tmdbApi";
 import {ombdDeatailsMovies}  from "../api/omdbApi";
 import { tmdbMovieCasts} from "../api/tmdbApi";
 import { tmbdMovietrailer} from "../api/tmdbApi";

 class MovieDetails extends React.Component {
    state ={ movie: null };
 async componentDidMount(){
    
     //getting the id from the paramas thanks to react router
     const id=this.props.match.params.id;
     //storing in a variable the tmdb movie details which you need to pass the id to the apiy
     const tmbdDetails=await tmdbMovieDetails(id);
    
     const imdbId=tmbdDetails.imdb_id;
     const ombdDetails= await ombdDeatailsMovies(imdbId);
     console.log(ombdDetails)
     const cast=await  tmdbMovieCasts(id);
     const trailer=await  tmbdMovietrailer(id);
     


   const MovieObj={
    title:ombdDetails.Title,
    year:ombdDetails.Year,
    vote_average:tmbdDetails.vote_average,
    Poster:ombdDetails.Poster,
   };
   this.setState({movie:MovieObj});
  }

   render(){
   const displayMovie =()=>{
  debugger
       console.log( this.state.movie)
       
       return( <div>
            <h1>{this.state.title}</h1>
           <div>{this.state.year}</div>
            <div>{this.state.vote_average}</div>
       </div>

       );
   };

   return( <div>
{this.state.movie && displayMovie()}
      </div>
      );
   }
 }
    
 export default MovieDetails;