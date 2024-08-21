import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [county, setCounty] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFNameChange(event) {
    setFName(event.target.value);
  }

  function handleLNameChange(event) {
    setLName(event.target.value);
  }

  function handleCountyChange(event) {
    setCounty(event.target.value);
  }

  function handleSubmit() {
    if (fName && lName && county) {
      setFullName(`${fName} ${lName}`);
    } else {
      alert("Please fill out all fields.");
    }
  }

  return (
    <div className="container">
      <h1>Welcome</h1>
      <input
        type="text"
        placeholder="First Name"
        value={fName}
        onChange={handleFNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lName}
        onChange={handleLNameChange}
      />
      <input
        type="text"
        placeholder="Your County"
        value={county}
        onChange={handleCountyChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {fullName && county ? (
        <h3>
          Welcome Back Mr. {fullName} from {county} county.
        </h3>
      ) : null}
    </div>
  );
}

export default App;
