
import { useEffect, useState } from "react";

export default function Rota2() {
 const [joke, setJoke] = useState("");

 useEffect(() => {
   fetch("https://api.chucknorris.io/jokes/random")
     .then((response) => response.json())
     .then((data) => setJoke(data.value));
 }, []);

 return (
   <div className="App">
     <h1>Chuck Norris Jokes</h1>
     <p>{joke}</p>
   </div>
 );
}
