import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const handSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email && age) {
  //     const person = {
  //       id: new Date().getTime().toString(),
  //       firstName,
  //       email,
  //       age,
  //     };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName("");
  //     setEmail("");
  //     setAge("");
  //   } else {
  //     console.log("empty values");
  //   }
  // };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              // onChange={(e) => setFirstName(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              // onChange={(e) => setAge(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{person.firstName}</h4>
              <p>{person.email}</p>
              <p>{person.age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
