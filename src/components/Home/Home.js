import React from "react";
import MovieList from "../MovieList/MovieList";

const Home = () => {
  return (
    <div>
      <MovieList category="popular" stam={1}></MovieList>
      {/* <MovieList category="top"></MovieList> */}
      
    </div>
  );
};

export default Home;
