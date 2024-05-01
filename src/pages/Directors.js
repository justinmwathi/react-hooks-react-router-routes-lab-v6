import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const[directors,setDirectors]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then((r)=>r.json())
    .then((data)=>setDirectors(data))
  },[])

  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      
      <main>
      <h1>Directors Page </h1>
        {directors.map((director)=>{
          return(
            <article>
            <h2>{director.name}</h2>
            <ul>
            <li>{director.movies}</li>
            </ul>
            </article>
          )
    
  })}
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;
