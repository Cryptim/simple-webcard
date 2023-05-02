import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello Nigerians");
  };
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <article>
      {/* //onSubmit={handleSubmit} */}
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input
            className="firstName"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          add Person
        </button>
      </form>
    </article>
  );
};

export default ControlledInputs;
