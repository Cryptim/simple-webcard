import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    console.log("Hello Nigerians");
  };
  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input className="firstName" id="firstName" name="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input className="email" id="email" name="email" />
        </div>
        <button className="btn" type="submit">
          add Person
        </button>
      </form>
    </article>
  );
};

export default ControlledInputs;
