import React, { Component } from 'react';
import employeePicture from './employeePicture.jpg';

class Sidebar extends Component {
    render() {
        return (
            <>
                <div class="media p-3">
                    <img src={employeePicture} class="headshot mr-3" alt="Sample HR Employee Picture" />
                    <div class="media-body align-self-center">
                        <h5 class="m-0">Hello Patricia!</h5>
                    </div>
                </div>
                <div id="sidebar" class="list-group list-group-flush" role="tablist">
                    <a 
                        href="#list-employee-information" 
                        id="list-employee-information-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="employee-information" 
                        class="list-group-item list-group-item-action list-group-item-light active">
                            <i class="fas fa-users mr-2"></i>
                            Employee Information
                    </a>
                    <a 
                        href="#list-department" 
                        id="list-department-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="department" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-sitemap mr-2"></i>
                            Department
                    </a>
                    <a 
                        href="#list-payroll" 
                        id="list-payroll-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="payroll" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-money-bill mr-2"></i>
                            Payroll
                    </a>
                    <a 
                        href="#list-leave-management" 
                        id="list-leave-management-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="leave-management" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-bed mr-2"></i>
                            Leave Management
                    </a>
                    <a 
                        href="#list-performance" 
                        id="list-performance-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="performance" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-chart-line mr-2"></i>
                            Performance
                    </a>
                    <a 
                        href="#list-recruitment" 
                        id="list-recruitment-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="recruitment" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-user-graduate mr-2"></i>
                            Recruitment
                    </a>
                    <a 
                        href="#list-equipment" 
                        id="list-equipment-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="equipment" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-desktop mr-2"></i>
                            Equipment
                    </a>
                    <a 
                        href="#list-separation" 
                        id="list-separation-list" 
                        data-toggle="list" 
                        role="tab" 
                        aria-controls="separation" 
                        class="list-group-item list-group-item-action list-group-item-light">
                            <i class="fas fa-briefcase mr-2"></i>
                            Separation
                    </a>
                </div>
                <button 
                    className="btn btn-success m-3" 
                    type="submit">
                        <i class="fas fa-plus-circle mr-2"></i>
                        Add New Employee
                </button>                
            </>
        );
    }
}

export default Sidebar;