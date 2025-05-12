import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

function SuperAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        name: name,
        username: username,
        email: email,
        password: password,
      });
  
      console.log("Admin registered:", response.data);
    } catch (error) {
      console.error("Error during admin registration:", error.response?.data || error.message);
    }
  };
  

  return (
    <>
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="mb-3">
            <input
              className="form-control-lg"
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-4">
            Login
          </button>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </main>
    </>
  );
}

export default SuperAdmin;
