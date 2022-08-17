import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (name === "" || email === "") {
      alert(" All input should be filled ^U^ ");
    } else {
      axios
        .post("https://62e62f1269bd03090f6cd281.mockapi.io/CRUD", {
          Name: name,
          Email: email,
        })
        .then(() => {
          navigate("/read");
        });
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="text-center h1">Enter Your Details</div>
      <div className="d-flex justify-content-between">
        <h2>CREATE</h2>
        <Link to="/read">
          <div className="btn btn-primary h1">Show Data</div>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Full Name"
            required
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="form-text">Please Enter your Full Name.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Email Address"
            required
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
