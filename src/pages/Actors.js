import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
function Actors() {
  const[actors,setActors]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then((r)=>r.json())
    .then((data)=>setActors(data))
  },[])
  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
     
      <main>
      <h1>Actors Page</h1>
        {actors.map((actor)=>{
          return(
            <article>
              <h2>{actor.name}</h2>
              <ul>
                <li>{actor.movies}</li>
              </ul>
            </article>
          )
        })}
        {/* Actor info here! */}
      </main>
    </>
  );
};

export default Actors;
