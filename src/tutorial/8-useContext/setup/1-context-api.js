import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)
const personContext = React.createContext();
//now we have access to two componeents-Provider-consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <personContext.Provider value={{ removePerson, people }}>
      <>
        <h3>prop drilling</h3>
        <List />
      </>
    </personContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(personContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            // removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(personContext);
  console.log(data);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
