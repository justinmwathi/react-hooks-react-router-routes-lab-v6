import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((r)=>r.json())
    .then((data)=>setMovies(data))
  },[])
const moviesList=movies.map(movie=>{
  return(
    <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
  )
})
  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Home Page</h1>
        {moviesList}
       
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
