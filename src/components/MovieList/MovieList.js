import React from 'react';
import {tmdbMovieDetails} from "../api/tmdbApi";
import {tmdbPopularMovies} from "../api/tmdbApi";
import Card from "../Card/Card"


class Movies extends React.Component{
    state={data:null}

   
        async componentDidMount() {
            // if(this.props.category === "popular"){
            //     const data = await tmdbPopularMovies();
            //     return this.setState({ data: data });

            // } else if (this.props.category === "top"){
            //     const data = await tmdbToprMovies();
            //     return this.setState({ data: data });

            // }
            switch (this.props.category) {
              case "popular":
                const data = await tmdbPopularMovies();
                return this.setState({ data: data });
                
            //   case "top":
            //     const data = await tmdbToprMovies();
            //         return this.setState({ data: data });
              default:
                break;
            }
          }
  
  render(){
      const displayCards = () => {
          return this.state.data.results.map((movie)=> {
             
              return <Card title={movie.title} rating={movie.vote_average} poster={movie.poster_path} id={movie.id}></Card>
              
          })
      }
    return <div>{this.state.data && displayCards()}</div>

        

        
    
  }
}
export default Movies;