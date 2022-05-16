import React from "react";
import { Link } from "react-router-dom";

function AddDesignation() {
  return (
    <div className="container sm-lg-md">
      <form>
        <legend>Add Designation</legend>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Designation Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <Link to="/home">

            <button type="submit" class="btn btn-outline-primary">
              Submit
            </button>
          </Link>
          <Link to="/home">

            <button type="submit" class="btn btn-outline-primary">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddDesignation;
