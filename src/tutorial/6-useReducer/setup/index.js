import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }

  throw new Error("No matching error type");
};
const defaultState = {
  people: [],
  isModelOpen: "false",
  modalContent: "",
};
const Index = () => {
  const [name, SetName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "ADD_ITEM" });
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // SetName("");
    } else {
      // setShowModal(true);
      dispatch({ type: "RANDOM" });
    }
  };
  return (
    <>
      {state.isModelOpen && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              SetName(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
