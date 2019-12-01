import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <>
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
                <button className="btn btn-success m-3" type="submit">Add New Employee</button>                
            </>
        );
    }
}

export default Sidebar;