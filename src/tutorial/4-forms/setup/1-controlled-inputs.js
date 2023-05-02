import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // const person = { firstName: firstName, email: email };
      const person = { id: new Date().getTime().toString(), firstName, email }; //using the ES6 shorthand
      console.log(person);
      setPeople(() => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]); //where i will be storing the info of people
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
      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className="item">
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
