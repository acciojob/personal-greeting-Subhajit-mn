
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const handleChange = event =>{
    setName(event.target.value);
    //console.log("Hello ", event.target.value,"!");
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>
          Enter your name: <input name="name" onChange={handleChange} value={name} />
        </label>
        <h2>Hello {name}!</h2>
    </div>
  )
}

export default App
