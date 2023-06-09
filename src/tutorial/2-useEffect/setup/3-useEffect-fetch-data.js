import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // const [server, setServer] = useState([]);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []); //add dependency array run once the component renders
  return (
    <>
      <h3>Github Users Fetch Data</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>
                  {login}
                  <a> {html_url}</a>
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
