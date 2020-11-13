import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDeatails";
import { Route, Switch,BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
   
   constructor (props){
      super(props)  
      this.state=({value:"",data:[]})
   }

   
  
      render(){
         return (
            <div>
       <Router>
       <NavBar/>
       <Switch>
         <Route exact path="/" component={Home}/>
          <Route path="/movie/:id/" component={MovieDetails}/>
       </Switch>
       </Router>
   
               </div>
         )
 
   }}
            
export default App;
