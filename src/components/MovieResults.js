const MovieResults = ({title, poster, director, year, plot}) => {
  return (
    <div> 
     <img src={poster} height="500" width="500" alt="Poster"/>
     <h2>{title}</h2>
     <h3>{director}</h3>
     <h3>{year}</h3>
     <p>{plot}</p>
    </div>
  )
}

export default MovieResults;