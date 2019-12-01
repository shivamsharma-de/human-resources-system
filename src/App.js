import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeInformation from './employeeInformation.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">HR Management System: SNARS</a>
        <form className="form-inline my-2 my-lg-0">
          <span className="navbar-text mr-3">Employee Search:</span>
          <input className="form-control mr-sm-2" type="search" placeholder="Enter Employee ID" aria-label="Search" />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Submit</button>
        </form>
      </nav>

      <div className="row">
        <div className="col-2 pr-0 border-right">
          <div id="sidebar" class="list-group list-group-flush" role="tablist">
            <a href="#" id="list-employee-information-list" data-toggle="list" href="#list-employee-information" role="tab" aria-controls="employee-information" class="list-group-item list-group-item-action list-group-item-light active">Employee Information</a>
            <a href="#" id="list-department-list" data-toggle="list" href="#list-department" role="tab" aria-controls="department" class="list-group-item list-group-item-action list-group-item-light">Department</a>
            <a href="#" id="list-payroll-list" data-toggle="list" href="#list-payroll" role="tab" aria-controls="payroll" class="list-group-item list-group-item-action list-group-item-light">Payroll</a>
            <a href="#" id="list-leave-management-list" data-toggle="list" href="#list-leave-management" role="tab" aria-controls="leave-management" class="list-group-item list-group-item-action list-group-item-light">Leave Management</a>
            <a href="#" id="list-performance-list" data-toggle="list" href="#list-performance" role="tab" aria-controls="performance" class="list-group-item list-group-item-action list-group-item-light">Performance</a>
            <a href="#" id="list-recruitment-list" data-toggle="list" href="#list-recruitment" role="tab" aria-controls="recruitment" class="list-group-item list-group-item-action list-group-item-light">Recruitment</a>
            <a href="#" id="list-equipment-list" data-toggle="list" href="#list-equipment" role="tab" aria-controls="equipment" class="list-group-item list-group-item-action list-group-item-light">Equipment</a>
            <a href="#" id="list-separation-list" data-toggle="list" href="#list-separation" role="tab" aria-controls="separation" class="list-group-item list-group-item-action list-group-item-light">Separation</a>
          </div>
          <button className="btn btn-secondary m-3" type="submit">Add New Employee</button>
        </div>
        
        <div className="col-10 p-4">

          <div class="tab-content" id="nav-tabContent">

            <div class="tab-pane fade show active" id="list-employee-information" role="tabpanel" aria-labelledby="list-employee-information">
              <EmployeeInformation />
            </div>

            <div class="tab-pane fade" id="list-department" role="tabpanel" aria-labelledby="list-department">
              <p>test</p>
            </div>
            <div class="tab-pane fade" id="list-payroll" role="tabpanel" aria-labelledby="list-payroll">
              <p>test</p>
            </div>
            <div class="tab-pane fade" id="list-leave-management" role="tabpanel" aria-labelledby="list-leave-management">
              <p>test</p>
            </div>
            <div class="tab-pane fade" id="list-performance" role="tabpanel" aria-labelledby="list-performance">
              <p>test</p>
            </div>
            <div class="tab-pane fade" id="list-recruitment" role="tabpanel" aria-labelledby="list-recruitment">
              <p>test</p>
            </div>
            <div class="tab-pane fade" id="list-equipment" role="tabpanel" aria-labelledby="list-equipment">
              <p>test</p>
            </div>
            <div class="tab-pane fade" id="list-separation" role="tabpanel" aria-labelledby="list-separation">
              <p>test</p>
            </div>




            

          </div>






        </div>
      </div>
    </div>
  );
}

export default App;
