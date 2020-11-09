import React from "react";
import axios from "axios";
// import Movies from "./components/Movies";


class App extends React.Component {
   constructor (props){
      super(props)  
      this.state=({value:"",data:[]})
   }
      handleOnClick = async() => {
    
            
            const fetchData = await axios.get( 'https://api.themoviedb.org/3/movie/popular?api_key=7ba170f1fa3f9013d4dbd05771244665&language=en-US&page=1');
      this.setState({ data: fetchData.data.results});
      console.log(fetchData.data.results);
      
      };
  
      render(){
        const renderMovie  = () => {
            return   this.state.data.map((movie) => {
              console.log(movie);
            return <div> <h1>"{movie.title}" </h1>
        
           </div>
            })};
         
        
          return <div>
          <button className="button" onClick={this.handleOnClick}>Get A list</button>
          {this.state.data && renderMovie()}  
      </div>
                }}
            
export default App;
