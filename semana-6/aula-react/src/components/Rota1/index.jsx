import { useState } from "react";
import reactLogo from "../../assets/react.svg";

export default function Rota1() {
 const [count, setCount] = useState(0);

 return (
   <>
     <img src={reactLogo} className="logo react" alt="React logo" />
     <h1>Vite + React</h1>
     <button onClick={() => setCount((count) => count + 1)}>
       Contador: {count}
     </button>
   </>
 );
}
