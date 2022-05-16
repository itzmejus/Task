import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

function DesignationList() {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(data);
  useEffect(() => {
    setLoad(true)
    axios
      .get("http://training.pixbit.in/api/designations", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${'USeG73T0sSKxB2OVQB6deETYfxYd9MgT9No4TiqfoH1U8Qlv1EfFRC43gN5KzqwW6Buqw68tOqiZjFGo'}`
        }
      })
      .then((res) => {
        console.log('res', res);
        setData(res.data.data.data)
        setLoad(false)
      });
  }, []);

  const Deletehandler = (id) => {
    let res =
      data.filter((item, index) => {
        if (item.id != id) {
          return true
        }
        return false
      })
    setData(res)
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Designation List
          </a>
          <Link to="/addDes">
            <button type="submit" class="btn btn-primary">
              Add Designation
            </button>
          </Link>
          {/* {load &&
            <div style={{ backgroundColor: 'red', height: 30, width: 30 }} />
          } */}
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search To Filter"
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </form>
        </div>
      </nav>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Si .NO</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {data.filter((val) => {
            if (searchTerm === " ") {
              return val
            }
            else if (
              val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val
            }
          }).map((val, key) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.name}</td>
                  <td>
                    <button class="btn btn-primary" onClick={() => { Deletehandler(val.id) }}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          })
          }
        </table>
      </div>
      {/* <button>Get Data</button> */}
    </div>
  );
}

export default DesignationList;
