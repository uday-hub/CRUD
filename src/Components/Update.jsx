import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Update = () => {
  const [Id, setId] = useState(0);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://62e62f1269bd03090f6cd281.mockapi.io/CRUD/${Id}`, {
        Name: Name,
        Email: Email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <div className="text-center h1">Update Your Details</div>
      <h2>UPDATE</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Full Name"
            required
            value={Name}
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
            value={Email}
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="d-flex justify-content-start gap-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Submit
          </button>
          <Link exact to="/read">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Update;
