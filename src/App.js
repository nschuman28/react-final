import './App.css';
import MovieResults from "./components/MovieResults";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState("")
  const [clicked, setClicked] =useState(false)
  const [loading, setLoading] = useState(false);
  const [movie,setMovie] = useState({title: "", year: "", director:"", plot:"", image:""});
  const clickHandler=()=>{
    setLoading(true)
    setClicked(false)
    const API_KEY = "d6315a0e"
    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(userInput)}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setMovie( {
          title: json['Title'],
          image: json['Poster'],
          director: json['Director'],
          year: json['Year'],
          plot: json['Plot']
        }
        )
        setClicked(true);
      })
  }
  return (
    <div className="movie-card">
    <h2>Movie Data Viewer</h2>
    <p className="text-muted small">
      Clicking "Get Movie" will display movie information. 
    </p>
    <div className="d-flex gap-2 mb-3">
      <input type="text" onChange={(e)=>setUserInput(e.target.value)}className="form-control" placeholder="e.g. Star Wars" value={userInput} style={{maxWidth:"220px"}} />
      <button className="btn btn-primary" onClick={()=>clickHandler()}>Get movie</button>
    </div>
    {loading&&<h3>Loading...</h3>}
    {clicked&&((movie.title&&<MovieResults title={movie.title} year={movie.year} director={movie.director} plot={movie.plot} poster={movie.image}/>)||(<h3>Error, movie not found.</h3>))}
    <div><span className="zbox"></span><span className="zbox"></span><span className="zbox"></span></div>
  </div>
)
}

export default App;
