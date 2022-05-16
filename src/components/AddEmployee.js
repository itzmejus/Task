import React from "react";
import { Link } from "react-router-dom";

function AddEmployee() {
  return (
    <div className="container">
      <div class="row g-3 align-items-center">
        <form>
          <fieldset >
            <legend>Disabled fieldset example</legend>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                First Name
              </label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Last Name
              </label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Joining Date
              </label>
            </div>
            <div class="col-auto">
              <input
                type="date"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Date of Birth
              </label>
            </div>
            <div class="col-auto">
              <input
                type="date"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Designation
              </label>
              <select class="form-select" id="specificSizeSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            {/* <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    First radio
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Second radio
                  </label>
                </div>
              </div>
            </fieldset> */}
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Mobile Number
              </label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                LandLine
              </label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Email Address
              </label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Present Address
              </label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Permenent Address
              </label>
              <div class="col-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label class="form-check-label" for="autoSizingCheck">
                    Same as Present Address ?
                  </label>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Status
              </label>
              <select class="form-select" id="specificSizeSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Profile Pic
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Resume
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </fieldset>
          <Link to='/designation'>
          <button type="submit" class="btn btn-outline-primary">
            Submit
          </button>
          </Link>

            <button type="submit" class="btn btn-outline-primary">
              Cancel
            </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
