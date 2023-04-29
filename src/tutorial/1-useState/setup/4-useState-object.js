import React, { useState } from "react";
import { data } from "../../../data";
const UseStateObject = () => {
  const [people, setPeople] = React.useState(data);
  // const removeItem = (id) => {
  //   const newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople);
  // };
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const handleClick = () => {
    setPeople([]);
  };
  //using state with an object
  const [peson, setPerson] = useState({
    name: "Timothy",
    age: "24",
    message: "random message",
  });
  //another way using three seperate state
  const [name, setName] = useState("Daniel");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    setPerson({ ...peson, message: "hello world" });
  };
  const changedMessage = () => {
    setMessage("Nigeria is my cocuntry");
  };
  return (
    <>
      <div className="container">
        <h3>{peson.name}</h3>
        <h3>{peson.age}</h3>
        <h3>{peson.message}</h3>
        <section>
          <h3>{name}</h3>
          <h3>{age}</h3>
          <h3>{message}</h3>
          <button className="btn" onClick={changedMessage}>
            changedMessage
          </button>
        </section>
        <button className="btn" onClick={changeMessage}>
          changemessage
        </button>
      </div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={handleClick}>
        clear all
      </button>
    </>
  );
};

export default UseStateObject;
