import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);
  };
  return (
    <div className="App">
      <h2> My own data: {users.length} </h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name:{user.name} Email: {user.email}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
