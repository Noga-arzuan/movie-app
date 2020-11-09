/*import React from React;

class Home extends React.Component{
constructor (props){
    super(props)  
    this.state=({value:"",data:[]})
    handleOnClick = async() => {
  
          const API_KEY = " 7ba170f1fa3f9013d4dbd05771244665";
          const fetchData = await axios.get( 'https://api.themoviedb.org/3/movie/popular?api_key=7ba170f1fa3f9013d4dbd05771244665&language=en-US&page=1');
    this.setState({ data: fetchData.data});
    console.log(fetchData.data);
    
    };

    render()
        return
        <button className="button" onClick={this.handleOnClick}>Get A list</button>
}};

export default Home;*/