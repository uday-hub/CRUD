import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrashFill, PencilFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  console.log(tabledark);
  const readData = () => {
    axios
      .get("https://62e62f1269bd03090f6cd281.mockapi.io/CRUD")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    readData();
  }, []);

  const DeleteOperation = (id) => {
    axios
      .delete(`https://62e62f1269bd03090f6cd281.mockapi.io/CRUD/${id}`)
      .then(() => {
        readData();
      });
  };

  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
  };

  return (
    <>
      <div className="text-center h1">Read Your Details</div>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else {
              setTableDark("table-dark");
            }
          }}
        />
        <label className="form-check-label">
          Toggle Light/Dark Mode for Table
        </label>
      </div>
      <div className="d-flex justify-content-between">
        <h2>READ</h2>
        <Link exact to="/">
          <div className="btn btn-secondary h1">Create</div>
        </Link>
      </div>

      <table
        className={`table table-info table-striped table-hover mt-4 ${tabledark}`}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.Name}</td>
                  <td>{eachData.Email}</td>
                  <td>
                    <Link to={"/update"}>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setLocalStorage(
                            eachData.id,
                            eachData.Name,
                            eachData.Email
                          )
                        }
                      >
                        <PencilFill /> Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteOperation(eachData.id)}
                    >
                      <TrashFill /> Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
